/*
 * Tecnológico de Monterrey — Campus Chihuahua
 * Desarrollo e Implantación de Sistemas de Software
 * TC3005B GPO500 - 2026
 * Autozone QA Automation
 */

import { Button, Group, Select, Stack, Textarea, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { notifications } from '@mantine/notifications'
import { zodResolver } from 'mantine-form-zod-resolver'
import { useEffect, useState } from 'react'
import { z } from 'zod'
import { ModalTemplate } from '@/components/ui/ModalTemplate/ModalTemplate'

const schema = z.object({
  name: z.string().min(1, 'El nombre es obligatorio'),
  description: z.string().optional(),
  idServices: z.string().min(1, 'Selecciona un servicio'),
})

const labelStyles = {
  label: {
    fontSize: '13px',
    fontWeight: 600,
    color: '#8C8C94',
  },
}

type FormValues = z.infer<typeof schema>

export function FeatureModalCreate() {
  const [services, setServices] = useState<{ value: string; label: string }[]>([])

  const fetchServices = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/services')
      const data = await response.json()

      if (Array.isArray(data)) {
        const formatted = data.map((item: any) => ({
          value: item.id.toString(),
          label: item.serviceName || item.name,
        }))
        setServices(formatted)
      }
    } catch (error) {
      console.error('Error cargando servicios:', error)
      setServices([])
    }
  }

  useEffect(() => {
    fetchServices()
  }, [])

  const form = useForm<FormValues>({
    initialValues: {
      name: '',
      description: '',
      idServices: '',
    },
    validate: zodResolver(schema),
  })

  const handleSubmit = async (values: FormValues) => {
    try {
      const payload = {
        featureName: values.name,
        featureDescription: values.description,
        idService: parseInt(values.idServices),
      }

      const response = await fetch('http://localhost:8080/api/v1/features', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        notifications.show({
          title: '¡Éxito!',
          message: 'Feature creado correctamente',
          color: 'teal',
        })
        form.reset()
      } else {
        const errorData = await response.json().catch(() => ({}))
        console.error('Error del backend:', errorData)
        notifications.show({
          title: 'Error 400',
          message: 'Revisa que los datos coincidan con el DTO de Java',
          color: 'red',
        })
      }
    } catch (error) {
      console.error('Error de conexión:', error)
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
            />

            <Textarea
              label="DESCRIPTION"
              placeholder="Describe the feature scope and purpose..."
              minRows={3}
              {...form.getInputProps('description')}
              styles={{ label: labelStyles.label }}
            />

            <Group justify="flex-end" mt="xl">
              <Button variant="outline" color="gray" radius="md" onClick={() => form.reset()}>
                Cancel
              </Button>
              <Button type="submit" bg="#f46624" radius="md">
                Create Feature
              </Button>
            </Group>
          </Stack>
        </form>
      </ModalTemplate>
    </div>
  )
}
