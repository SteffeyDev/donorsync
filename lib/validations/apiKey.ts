import * as z from 'zod'

export const apiKeySchema = z.object({
  apiKey: z.string(),
})
