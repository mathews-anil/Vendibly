
import re
import json
import uuid

SOURCE_FILE = 'views/guides/data.tsx'
OUTPUT_FILE = 'sanity/data/guides_import.json'

def parse_portable_text(html_content):
    blocks = []
    
    # Simple regex-based parser for the specific structure in data.tsx
    # It assumes the structure is relatively flat as seen in the file.
    
    # Remove fragments
    html_content = html_content.strip()
    if html_content.startswith('<>') and html_content.endswith('</>'):
        html_content = html_content[2:-3].strip()
        
    # Split by top-level tags we care about
    # We look for <p>, <ul>, <ol>, <h3>
    
    # Regex to find tags and their content
    # This is a bit naive but should work for the provided file
    tag_pattern = re.compile(r'<(p|ul|ol|h3)[^>]*>(.*?)</\1>', re.DOTALL)
    
    matches = tag_pattern.finditer(html_content)
    
    for match in matches:
        tag = match.group(1)
        content = match.group(2).strip()
        
        if tag == 'p':
            blocks.append({
                "_type": "block",
                "style": "normal",
                "children": parse_children(content),
                "markDefs": []
            })
        
        elif tag == 'h3':
            blocks.append({
                "_type": "block",
                "style": "h3",
                "children": parse_children(content),
                "markDefs": []
            })
            
        elif tag == 'ul':
            list_items = re.findall(r'<li>(.*?)</li>', content, re.DOTALL)
            for item in list_items:
                # remove sub-lists if any (basic handling)
                item_clean = item.strip()
                blocks.append({
                    "_type": "block",
                    "style": "normal",
                    "listItem": "bullet",
                    "level": 1,
                    "children": parse_children(item_clean),
                    "markDefs": []
                })
                
        elif tag == 'ol':
            list_items = re.findall(r'<li>(.*?)</li>', content, re.DOTALL)
            for item in list_items:
                item_clean = item.strip()
                blocks.append({
                    "_type": "block",
                    "style": "normal",
                    "listItem": "number",
                    "level": 1,
                    "children": parse_children(item_clean),
                    "markDefs": []
                })

    return blocks

def parse_children(text):
    # Handle basic formatting: <strong>
    children = []
    
    # Split by strong tag
    parts = re.split(r'(<strong>.*?</strong>)', text)
    
    for part in parts:
        if not part:
            continue
            
        if part.startswith('<strong>') and part.endswith('</strong>'):
            child_text = part[8:-9]
            children.append({
                "_type": "span",
                "marks": ["strong"],
                "text": child_text
            })
        else:
            # Handle newlines and extra spaces
            clean_text = ' '.join(part.split())
            if clean_text:
                children.append({
                    "_type": "span",
                    "marks": [],
                    "text": clean_text
                })
                
    if not children:
         children.append({
                "_type": "span",
                "marks": [],
                "text": ""
            })
            
    return children

def extract_guides():
    with open(SOURCE_FILE, 'r') as f:
        content = f.read()

    guides = []
    
    # Find all guide objects
    # We look for the key in GUIDES object, which looks like "slug": { ... }
    # but strictly speaking we can search for `slug: "..."` and capture the block around it.
    
    # Strategy: Split the content by `slug: "` which seems robust enough for 4 items
    # and then parse locally.
    
    # Actually, simpler: Regex for the whole guide object structure is hard.
    # Let's find the `GUIDES` object and then parse its children.
    
    guides_obj_match = re.search(r'export const GUIDES: Record<string, Guide> = {(.*?)};$', content, re.DOTALL)
    if not guides_obj_match:
        print("Could not find GUIDES object")
        return

    guides_body = guides_obj_match.group(1)
    
    # Split by top level keys, e.g., "key": {
    # It's a bit tricky with nested braces.
    # Assuming text indentations help or simple structure.
    
    # Let's extract based on known keys since we know them from the file view? 
    # Or just iterate over `  "slug-name": {`
    
    guide_pattern = re.compile(r'"[\w-]+":\s*{(.*?)\n\s\s},', re.DOTALL)
    # The file has keys like "find-subscriptions..."
    # Warning: The regex might fail if braces are not balanced or if the end comma is missing on the last item.
    
    # Alternative: iterate through known slugs if extraction is hard.
    # But let's try to match `slug: "(.*?)"` and associate data.
    
    slug_matches = list(re.finditer(r'slug:\s*"(.*?)"', content))
    
    for i, match in enumerate(slug_matches):
        current_slug = match.group(1)
        start_index = match.start()
        
        # Find the end of this guide object. 
        # It ends before the NEXT list item starts, or end of file.
        if i < len(slug_matches) - 1:
            end_index = slug_matches[i+1].start()
        else:
            end_index = len(content)
            
        guide_block = content[start_index:end_index]
        
        # Extract fields
        title = re.search(r'title:\s*"(.*?)"', guide_block).group(1)
        seoTitle = re.search(r'seoTitle:\s*"(.*?)"', guide_block).group(1)
        seoDescription = re.search(r'seoDescription:\s*"(.*?)"', guide_block).group(1)
        lead = re.search(r'lead:\s*"(.*?)"', guide_block).group(1)
        
        # Sections
        sections = []
        # Find sections array
        sections_match = re.search(r'sections:\s*\[(.*?)\]', guide_block, re.DOTALL)
        if sections_match:
            sections_content = sections_match.group(1)
            
            # Split sections by `{` and `}`
            # This is brittle if content has curlies.
            # But the content is in `content: (<> ... </>)` so we can target that.
            
            # Find all `title: "..."` and `content: (<> ... </>)` pairs
            sec_iter = re.finditer(r'title:\s*"(.*?)",\s*content:\s*\((.*?)\),', sections_content, re.DOTALL)
            
            for sm in sec_iter:
                sec_title = sm.group(1)
                sec_html = sm.group(2)
                
                portable_text = parse_portable_text(sec_html)
                
                sections.append({
                    "_type": "section",
                    "_key": str(uuid.uuid4()),
                    "title": sec_title,
                    "content": portable_text
                })
        
        doc = {
            "_type": "guide",
            "_id": f"guide-{current_slug}", 
            "title": title,
            "slug": {"_type": "slug", "current": current_slug},
            "seoTitle": seoTitle,
            "seoDescription": seoDescription,
            "lead": lead,
            "sections": sections
        }
        
        guides.append(doc)

    # Write output
    with open(OUTPUT_FILE, 'w') as f:
        # Array format
        json.dump(guides, f, indent=2)
        
    print(f"Extracted {len(guides)} guides to {OUTPUT_FILE}")

if __name__ == "__main__":
    extract_guides()
