import {type SchemaTypeDefinition} from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {guideType} from './guideType'
import {vendorProfileType} from './vendorProfileType'
import {useCaseType} from './useCaseType'
import {pricingType} from './pricingType'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    guideType,
    vendorProfileType,
    useCaseType,
    pricingType,
  ],
}
