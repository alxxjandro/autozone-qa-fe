/*
 * Tecnológico de Monterrey — Campus Chihuahua
 * Desarrollo e Implantación de Sistemas de Software
 * TC3005B GPO500 - 2026
 * Autozone QA Automation
 */

import { Badge, Box, Button, Paper, Stack, Text } from '@mantine/core'

export type PriorityLevel = 'Low' | 'Medium' | 'High' | 'Critical'
export type StatusLevel = 'Pass' | 'Fail' | 'Pending'
export type Type = 'Regression' | 'On Demand'

export interface TestCaseItem {
  id: string
  name: string
  type: Type
  priority: PriorityLevel
  status: StatusLevel
  feature: string
  description: string
  preconditions: string
  postconditions: string
  inputs: string
  steps: string
  testCount: number
}

type Props = {
  testCase: TestCaseItem | undefined
}

export function TestCaseView({ testCase }: Props) {
  if (!testCase) {
    return <Text>No test case selected</Text>
  }

  return (
    <Paper w={500} mx="auto" shadow="xs" radius="lg" p="xl">
      <Stack gap={0}>
        <Text size="md" fw={700} mb="lg" c="#1A1A1F">
          {testCase.name}
        </Text>
        <Text size="md" c="#8C8C94">
          ID
        </Text>
        <Text size="sm" c="#F26621" mb="xs">
          {testCase.id}
        </Text>
        <Text size="md" c="#8C8C94">
          FEATURE RELACIONADO
        </Text>
        <Text size="sm" c="#1A1A1F" mb="xs">
          {testCase.feature}
        </Text>
        <Text size="md" c="#8C8C94">
          DESCRIPCIÓN
        </Text>
        <Text size="sm" c="#1A1A1F" mb="xs">
          {testCase.description}
        </Text>
        <Text size="md" c="#8C8C94">
          TIPO
        </Text>
        <Badge
          color="#F26621"
          size="xl"
          radius="md"
          fz="sm"
          style={{ textTransform: 'capitalize' }}
          mb="xs"
        >
          {testCase.type}
        </Badge>
        <Text size="md" c="#8C8C94">
          PRECONDICIONES
        </Text>
        <Text size="sm" c="#1A1A1F" mb="xs">
          {testCase.preconditions}
        </Text>
        <Text size="md" c="#8C8C94">
          POSTCONDICIONES
        </Text>
        <Text size="sm" c="#1A1A1F" mb="xs">
          {testCase.postconditions}
        </Text>
        <Text size="md" c="#8C8C94">
          ENTRADAS
        </Text>
        <Text size="sm" c="#1A1A1F" mb="xs">
          {testCase.inputs}
        </Text>
        <Text size="md" c="#8C8C94">
          PASOS
        </Text>
        <Text size="sm" c="#1A1A1F">
          {testCase.steps}
        </Text>
        <Box h={50} />
        <Button ml="auto" variant="filled" color="#F26621" w={125}>
          Volver
        </Button>
      </Stack>
    </Paper>
  )
}
