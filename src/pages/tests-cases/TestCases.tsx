/*
 * Tecnológico de Monterrey — Campus Chihuahua
 * Desarrollo e Implantación de Sistemas de Software
 * TC3005B GPO500 - 2026
 * Autozone QA Automation
 */

import { Badge, Box, Button, Modal, Stack, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconPlus } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import { TitleHeader } from '@/components/layout/TitleHeader/TitleHeader'
import type { TestCaseItem } from './TestCasesList'
import { TestCasesList } from './TestCasesList'

export function TestCases() {
  const [myTestCases, setMyTestCases] = useState<TestCaseItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/test-cases')
      .then(res => res.json())
      .then((data: TestCaseItem[]) => {
        setMyTestCases(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching test cases:', err)
        setLoading(false)
      })
  }, [])

  const [opened, { open, close }] = useDisclosure(false)

  const [selectedTestCase, setSelectedTestCase] = useState<TestCaseItem | null>(null)

  const handleViewClick = (testCase: TestCaseItem) => {
    setSelectedTestCase(testCase)
    open()
  }

  const handleClose = () => {
    setSelectedTestCase(null)
    close()
  }

  return (
    <div>
      <Modal.Root opened={opened} onClose={handleClose}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title fw={700} mb="lg" c="#1A1A1F">
              {selectedTestCase?.title}
            </Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
            <Stack gap={0}>
              <Text size="md" c="#8C8C94">
                ID
              </Text>
              <Text size="sm" c="#F26621" mb="xs">
                {selectedTestCase?.id}
              </Text>
              <Text size="md" c="#8C8C94">
                FEATURE RELACIONADO
              </Text>
              <Text size="sm" c="#1A1A1F" mb="xs">
                {selectedTestCase?.relatedFeature}
              </Text>
              <Text size="md" c="#8C8C94">
                DESCRIPCIÓN
              </Text>
              <Text size="sm" c="#1A1A1F" mb="xs">
                {selectedTestCase?.description}
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
                {selectedTestCase?.type}
              </Badge>
              <Text size="md" c="#8C8C94">
                PRECONDICIONES
              </Text>
              <Text size="sm" c="#1A1A1F" mb="xs">
                {selectedTestCase?.preconditions}
              </Text>
              <Text size="md" c="#8C8C94">
                POSTCONDICIONES
              </Text>
              <Text size="sm" c="#1A1A1F" mb="xs">
                {selectedTestCase?.postconditions}
              </Text>
              <Text size="md" c="#8C8C94">
                ENTRADAS
              </Text>
              <Text size="sm" c="#1A1A1F" mb="xs">
                {selectedTestCase?.inputs}
              </Text>
              <Text size="md" c="#8C8C94">
                PASOS
              </Text>
              <Text size="sm" c="#1A1A1F">
                {selectedTestCase?.steps}
              </Text>
              <Box h={50} />
              <Button ml="auto" variant="filled" color="#F26621" w={125} onClick={handleClose}>
                Volver
              </Button>
            </Stack>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>

      <TitleHeader
        title="Checkout Flow — Test Cases"
        metaDetails={[`${myTestCases.length} test cases`]}
        breadcrumbs={[
          { title: 'Releases', href: '/releases' },
          { title: 'Q2 2026 Regression', href: '#' },
          { title: 'Order Management', href: '#' },
          { title: 'Features', href: '#' },
          { title: 'Checkout Flow', href: '#' },
          { title: 'Test Cases', href: '#' },
        ]}
        actionComponent={
          <Button
            leftSection={<IconPlus size={16} stroke={2.5} />}
            color="orange.6"
            radius="md"
            size="md"
            fw={600}
            onClick={() => {}}
          >
            New Test Case
          </Button>
        }
      />

      {loading ? (
        <Text ta="center" mt="xl">
          Loading...
        </Text>
      ) : myTestCases.length === 0 ? (
        <Text ta="center" c="#8C8C94" mt="xl" size="xl">
          No test cases available
        </Text>
      ) : (
        <TestCasesList data={myTestCases} onViewClick={handleViewClick} onEditClick={() => {}} />
      )}
    </div>
  )
}
