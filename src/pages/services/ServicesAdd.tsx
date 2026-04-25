/*
 * Tecnológico de Monterrey — Campus Chihuahua
 * Desarrollo e Implantación de Sistemas de Software
 * TC3005B GPO500 - 2026
 * Autozone QA Automation
 */
import { ActionIcon, Card, Stack, Text } from '@mantine/core'
import { IconSquareRoundedPlus } from '@tabler/icons-react'

interface BaseCardProps {
  children: React.ReactNode
  onClick?: () => void
}

export function BaseCard({ children, onClick }: BaseCardProps) {
  return (
    <Card
      shadow="sm"
      radius="md"
      p="lg"
      withBorder
      onClick={onClick}
      style={{
        borderTop: '4px solid orange',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'transform 0.2s, box-shadow 0.2s',
        height: '100%',
        minHeight: '160px',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-2px)'
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = ''
      }}
      data-testid="add-service-card"
    >
      <Stack align="center" justify="center" h="100%" gap="xs">
        <ActionIcon
          data-testid="add-service-card-icon"
          variant="light"
          size="xl"
          radius="xl"
          color="orange"
        >
          <IconSquareRoundedPlus style={{ width: '70%', height: '70%' }} />
        </ActionIcon>

        <Text data-testid="add-service-card-title" fw={600}>
          {children}
        </Text>

        <Text data-testid="add-service-card-description" size="xs" c="dimmed" ta="center">
          Create a new service
        </Text>
      </Stack>
    </Card>
  )
}
