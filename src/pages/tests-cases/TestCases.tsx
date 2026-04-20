/*
 * Tecnológico de Monterrey — Campus Chihuahua
 * Desarrollo e Implantación de Sistemas de Software
 * TC3005B GPO500 - 2026
 * Autozone QA Automation
 */

import { Button } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
import { useState } from 'react'
import { TitleHeader } from '@/components/layout/TitleHeader/TitleHeader'
import type { TestCaseItem } from './TestCasesList'
import { TestCasesList } from './TestCasesList'
import { TestCaseView } from './TestCaseView'

export function TestCases() {
  const myTestCases: TestCaseItem[] = [
    {
      id: 'TC-0042',
      name: 'Validate Payment on Checkout',
      type: 'Regression',
      priority: 'High',
      status: 'Pass',
      feature: 'Checkout Flow',
      description: 'Verify that a user can complete payment using a valid credit card.',
      preconditions: 'User has items in cart',
      postconditions: 'Order is created successfully',
      inputs: 'Valid card number, expiration date, CVV',
      steps: 'Go to checkout, enter valid payment details, confirm payment, submit order',
      testCount: 1,
    },
    {
      id: 'TC-0043',
      name: 'Checkout with Guest User',
      type: 'Regression',
      priority: 'High',
      status: 'Pass',
      feature: 'Feature2',
      description: 'Description2',
      preconditions: 'Preconditions2',
      postconditions: 'Postconditions2',
      inputs: 'Inputs2',
      steps: 'Steps2',
      testCount: 2,
    },
    {
      id: 'TC-0044',
      name: 'Apply Discount Code',
      type: 'On Demand',
      priority: 'Medium',
      status: 'Fail',
      feature: 'Feature3',
      description: 'Description3',
      preconditions: 'Preconditions3',
      postconditions: 'Postconditions3',
      inputs: 'Inputs3',
      steps: 'Steps3',
      testCount: 3,
    },
    {
      id: 'TC-0045',
      name: 'Empty Cart Redirect',
      type: 'Regression',
      priority: 'Low',
      status: 'Pass',
      feature: 'Feature4',
      description: 'Description4',
      preconditions: 'Preconditions4',
      postconditions: 'Postconditions4',
      inputs: 'Inputs4',
      steps: 'Steps4',
      testCount: 4,
    },
    {
      id: 'TC-0046',
      name: 'Address Validation on Checkout',
      type: 'Regression',
      priority: 'High',
      status: 'Pass',
      feature: 'Feature5',
      description: 'Description5',
      preconditions: 'Preconditions5',
      postconditions: 'Postconditions5',
      inputs: 'Inputs5',
      steps: 'Steps5',
      testCount: 5,
    },
    {
      id: 'TC-0047',
      name: 'Payment Failure Handling',
      type: 'Regression',
      priority: 'Critical',
      status: 'Fail',
      feature: 'Feature6',
      description: 'Description6',
      preconditions: 'Preconditions6',
      postconditions: 'Postconditions6',
      inputs: 'Inputs6',
      steps: 'Steps6',
      testCount: 6,
    },
    {
      id: 'TC-0048',
      name: 'Order Summary Accuracy',
      type: 'On Demand',
      priority: 'Medium',
      status: 'Pass',
      feature: 'Feature7',
      description: 'Description7',
      preconditions: 'Preconditions7',
      postconditions: 'Postconditions7',
      inputs: 'Inputs7',
      steps: 'Steps7',
      testCount: 7,
    },
    {
      id: 'TC-0049',
      name: 'Tax Calculation Verification',
      type: 'Regression',
      priority: 'Medium',
      status: 'Pending',
      feature: 'Feature8',
      description: 'Description8',
      preconditions: 'Preconditions8',
      postconditions: 'Postconditions8',
      inputs: 'Inputs8',
      steps: 'Steps8',
      testCount: 8,
    },
  ]

  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selectedTest = myTestCases.find(tc => tc.id === selectedId)

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
            onClick={() => {}}
          >
            New Test Case
          </Button>
        }
      />

      <TestCaseView testCase={selectedTest} />
      <TestCasesList
        data={myTestCases}
        onViewClick={(id: string) => setSelectedId(id)}
        onEditClick={() => {}}
      />
    </div>
  )
}
