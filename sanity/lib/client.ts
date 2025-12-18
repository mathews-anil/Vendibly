import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

// Client without CDN for fetching fresh data (use when consistency matters)
export const clientWithoutCdn = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})
