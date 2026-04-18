/*
 * Tecnológico de Monterrey — Campus Chihuahua
 * Desarrollo e Implantación de Sistemas de Software
 * TC3005B GPO500 - 2026
 * Autozone QA Automation
 */

import { Button } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
import { TitleHeader } from '@/components/layout/TitleHeader/TitleHeader'
import type { TestCaseItem } from './TestCasesList'
import { TestCasesList } from './TestCasesList'

export function TestCases() {
  const myTestCases: TestCaseItem[] = [
    {
      id: 'TC-0042',
      name: 'Validate Payment on Checkout',
      type: 'Regression',
      priority: 'High',
      status: 'Pass',
      testCount: 1,
    },
    {
      id: 'TC-0043',
      name: 'Checkout with Guest User',
      type: 'Regression',
      priority: 'High',
      status: 'Pass',
      testCount: 2,
    },
    {
      id: 'TC-0044',
      name: 'Apply Discount Code',
      type: 'On Demand',
      priority: 'Medium',
      status: 'Fail',
      testCount: 3,
    },
    {
      id: 'TC-0045',
      name: 'Empty Cart Redirect',
      type: 'Regression',
      priority: 'Low',
      status: 'Pass',
      testCount: 4,
    },
    {
      id: 'TC-0046',
      name: 'Address Validation on Checkout',
      type: 'Regression',
      priority: 'High',
      status: 'Pass',
      testCount: 5,
    },
    {
      id: 'TC-0047',
      name: 'Payment Failure Handling',
      type: 'Regression',
      priority: 'Critical',
      status: 'Fail',
      testCount: 6,
    },
    {
      id: 'TC-0048',
      name: 'Order Summary Accuracy',
      type: 'On Demand',
      priority: 'Medium',
      status: 'Pass',
      testCount: 7,
    },
    {
      id: 'TC-0049',
      name: 'Tax Calculation Verification',
      type: 'Regression',
      priority: 'Medium',
      status: 'Pending',
      testCount: 8,
    },
  ]

  return (
    <div>
      <TitleHeader
        title="Checkout Flow — Test Cases"
        metaDetails={['12 test cases', 'Regression + On Demand']}
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
            onClick={() => { }}
          >
            New Test Case
          </Button>
        }
      />

      <TestCasesList data={myTestCases} onViewClick={() => { }} onEditClick={() => { }} />
    </div>
  )
}
