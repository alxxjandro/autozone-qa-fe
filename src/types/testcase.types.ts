/*
 * Tecnológico de Monterrey — Campus Chihuahua
 * Desarrollo e Implantación de Sistemas de Software
 * TC3005B GPO500 - 2026
 * Autozone QA Automation
 */

import { z } from 'zod'

export const testCaseSchema = z.object({
  id: z.number(),
  title: z.string(),
  relatedFeature: z.number(),
  description: z.string(),
  type: z.string(),
  preconditions: z.string(),
  postconditions: z.string(),
  inputs: z.string(),
  steps: z.string(),
})

export type TestCase = z.infer<typeof testCaseSchema>

export const testCasesSchema = z.array(testCaseSchema)

export const createTestCaseSchema = testCaseSchema.omit({ id: true })
export type CreateTestCaseRequest = z.infer<typeof createTestCaseSchema>
