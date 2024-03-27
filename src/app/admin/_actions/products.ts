'use server'

import { z } from 'zod'

const fileSchema = z.instanceof(File, { message: 'Required' })
const imageSchema = fileSchema.refine(
  (file) => file.size === 0 || file.type.startsWith('image/')
)

z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  priceInCents: z.coerce.number().int().min(1),
  file: fileSchema.refine((file) => file.size > 0, 'Required'),
  image: imageSchema.refine((file) => file.size > 0, 'Required'),
})

export async function addProduct(formData: FormData) {
  console.log(formData)
}
