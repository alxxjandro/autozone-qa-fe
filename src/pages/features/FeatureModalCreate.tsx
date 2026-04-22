/*
 * Tecnológico de Monterrey — Campus Chihuahua
 * Desarrollo e Implantación de Sistemas de Software
 * TC3005B GPO500 - 2026
 * Autozone QA Automation
 */

import { Button, Group, Select, Stack, Textarea, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { notifications } from '@mantine/notifications'
import { useCallback, useEffect, useState } from 'react'
import { z } from 'zod'
import { ModalTemplate } from '@/components/ui/ModalTemplate/ModalTemplate'
import { useCreateFeature } from '@/hooks/useCreateFeature'

export const schema = z.object({
  name: z.string().min(1, 'El nombre es obligatorio'),
  description: z.string().nullable().or(z.literal('')),
  idServices: z.string().min(1, 'Selecciona un servicio'),
})

const labelStyles = {
  label: {
    fontSize: '13px',
    fontWeight: 600,
    color: '#8C8C94',
  },
}

interface ServiceResponse {
  id: number | string
  serviceName?: string
  name?: string
}

type FormValues = z.infer<typeof schema>

export function FeatureModalCreate() {
  const { createFeature, loading } = useCreateFeature()
  const [services, setServices] = useState<{ value: string; label: string }[]>([])

  const API_URL = import.meta.env.VITE_API_URL_LOCAL
  const endpointService = `${API_URL}/v1/services`

  const fetchServices = useCallback(async () => {
    try {
      const response = await fetch(endpointService)
      const data = (await response.json()) as ServiceResponse[]

      if (Array.isArray(data)) {
        const formatted = data.map(item => ({
          value: item.id.toString(),
          label: item.serviceName || item.name || 'Unknown Service',
        }))
        setServices(formatted)
      }
    } catch (error) {
      console.error('Error cargando servicios:', error)
    }
  }, [endpointService])

  useEffect(() => {
    void fetchServices()
  }, [fetchServices])

  const form = useForm<FormValues>({
    initialValues: {
      name: '',
      description: '',
      idServices: '',
    },
    validate: {
      name: value => (value.trim().length < 1 ? 'El nombre es obligatorio' : null),
      idServices: value => (!value ? 'Selecciona un servicio' : null),
    },
  })

  const handleSubmit = async (values: FormValues) => {
    const payload = {
      featureName: values.name,
      featureDescription: values.description || '',
      idService: parseInt(values.idServices),
    }

    const result = await createFeature(payload)

    if (result) {
      notifications.show({
        title: '¡Éxito!',
        message: 'Feature creado correctamente',
        color: 'teal',
      })
      form.reset()
    }
  }

  return (
    <div>
      <ModalTemplate textButton="+ New Feature" title="New Feature">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack gap="md">
            <TextInput
              label="FEATURE NAME"
              placeholder="e.g. Refund Processing"
              withAsterisk
              {...form.getInputProps('name')}
              styles={{ label: labelStyles.label }}
            />

            <Select
              label="SERVICE NAME"
              placeholder="Select a service..."
              data={services}
              withAsterisk
              {...form.getInputProps('idServices')}
              styles={{ label: labelStyles.label }}
              nothingFoundMessage="No services found"
              searchable
            />

            <Textarea
              label="DESCRIPTION"
              placeholder="Describe the feature scope and purpose..."
              minRows={3}
              {...form.getInputProps('description')}
              styles={{ label: labelStyles.label }}
            />

            <Group justify="flex-end" mt="xl">
              <Button
                variant="outline"
                color="gray"
                radius="md"
                onClick={() => form.reset()}
                disabled={loading}
              >
                Cancel
              </Button>
              <Button type="submit" bg="#f46624" radius="md" loading={loading}>
                Create Feature
              </Button>
            </Group>
          </Stack>
        </form>
      </ModalTemplate>
    </div>
  )
}
