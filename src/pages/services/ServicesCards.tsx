/*
 * Tecnológico de Monterrey — Campus Chihuahua
 * Desarrollo e Implantación de Sistemas de Software
 * TC3005B GPO500 - 2026
 * Autozone QA Automation
 */
import { Box, Card, Stack, Text } from '@mantine/core'
import { IconCode, IconDatabase, IconDeviceDesktop, IconServer } from '@tabler/icons-react'
import { useGetServices } from '@/hooks/useGetServices'
<<<<<<< HEAD
import type { ServiceVO } from '@/models/ServiceVO'
=======
import type { Service } from '@/types/service.types'
>>>>>>> 4e6a76f9a84e8466339b7e845cba8db2db76c122

interface ServiceCardProps {
  id: number
  nombre: string
<<<<<<< HEAD
  descripcion?: string | null
=======
>>>>>>> 4e6a76f9a84e8466339b7e845cba8db2db76c122
}

const getServiceIcon = (nombre: string) => {
  switch (nombre.toLowerCase()) {
    case 'backend':
      return <IconCode size={18} />
    case 'frontend':
      return <IconDeviceDesktop size={18} />
    case 'bd':
      return <IconDatabase size={18} />
    default:
      return <IconServer size={18} />
  }
}

<<<<<<< HEAD
export function ServiceCard({ id, nombre }: ServiceCardProps) {
=======
export function ServiceCard({ idService, nombre }: ServiceCardProps) {
>>>>>>> 4e6a76f9a84e8466339b7e845cba8db2db76c122
  const handleCardClick = () => {
    window.location.href = `/services/${id}`
  }

  return (
    <Card
      shadow="sm"
      radius="md"
      p="lg"
      withBorder
      onClick={handleCardClick}
      style={{
        borderTop: '4px solid orange',
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
        height: '100%',
        minHeight: '140px',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-2px)'
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = ''
      }}
    >
      <Stack align="center" justify="center" h="100%" gap="xs">
        <Box
          style={{
            backgroundColor: '#f1f3f5',
            borderRadius: '50%',
            padding: 10,
          }}
        >
          {getServiceIcon(nombre)}
        </Box>

        <Text fw={600} ta="center">
          {nombre}
        </Text>
      </Stack>
    </Card>
  )
}

interface ServicesListProps {
  searchQuery?: string
}

export function ServicesList({ searchQuery = '' }: ServicesListProps) {
  const { services, loading, error } = useGetServices()

  if (loading) return <Text>Cargando servicios...</Text>
  if (error) return <Text c="red">Error: {error}</Text>

<<<<<<< HEAD
  const mappedServices: ServiceCardProps[] = services.map((s: ServiceVO) => ({
    id: s.id,
    nombre: s.name,
    descripcion: s.description,
  }))

  const filteredServices = mappedServices.filter(service => {
=======
  const filteredServices = services.filter((service: Service) => {
>>>>>>> 4e6a76f9a84e8466339b7e845cba8db2db76c122
    const query = searchQuery.toLowerCase()
    return (
      service.name.toLowerCase().includes(query) ||
      (service.description?.toLowerCase().includes(query) ?? false)
    )
  })

  if (filteredServices.length === 0) {
    return (
      <Card withBorder p="xl" radius="md" style={{ gridColumn: '1 / -1' }}>
        <Text ta="center" c="dimmed">
          No services found matching your criteria.
        </Text>
      </Card>
    )
  }

  return (
    <>
<<<<<<< HEAD
      {filteredServices.map(service => (
        <ServiceCard key={service.id} {...service} />
=======
      {filteredServices.map((service: Service) => (
        <ServiceCard key={service.id} idService={service.id} nombre={service.name} />
>>>>>>> 4e6a76f9a84e8466339b7e845cba8db2db76c122
      ))}
    </>
  )
}
