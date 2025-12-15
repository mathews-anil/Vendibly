"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const AccordionContext = React.createContext<{
  value?: string;
  onValueChange?: (value: string) => void;
}>({});

const Accordion = ({
  className,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type,
  collapsible,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  type: "single" | "multiple";
  collapsible?: boolean;
}) => {
  const [value, setValue] = React.useState<string>("");

  const handleValueChange = (newValue: string) => {
    setValue(newValue === value && collapsible ? "" : newValue);
  };

  return (
    <AccordionContext.Provider
      value={{ value, onValueChange: handleValueChange }}
    >
      <div className={className} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ className, value, children, ...props }, ref) => {
  const context = React.useContext(AccordionContext);
  const isOpen = context.value === value;

  return (
    <div
      ref={ref}
      data-state={isOpen ? "open" : "closed"}
      className={cn("border-b", className)}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // @ts-expect-error: Cloning child with extra props
          return React.cloneElement(child, { isOpen, value });
        }
        return child;
      })}
    </div>
  );
});
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    isOpen?: boolean;
    value?: string;
  }
>(({ className, children, isOpen, value, ...props }, ref) => {
  const context = React.useContext(AccordionContext);

  return (
    <h3 className="flex">
      <button
        ref={ref}
        type="button"
        onClick={() => value && context.onValueChange?.(value)}
        data-state={isOpen ? "open" : "closed"}
        className={cn(
          "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      </button>
    </h3>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { isOpen?: boolean }
>(({ className, children, isOpen, ...props }, ref) => {
  if (!isOpen) return null;

  return (
    <div
      ref={ref}
      data-state={isOpen ? "open" : "closed"}
      className={cn(
        "overflow-hidden text-sm transition-all animate-accordion-down",
        className
      )}
      {...props}
    >
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </div>
  );
});
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
