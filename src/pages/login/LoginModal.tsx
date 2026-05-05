/*
 * Tecnológico de Monterrey — Campus Chihuahua
 * Desarrollo e Implantación de Sistemas de Software
 * TC3005B GPO500 - 2026
 * Autozone QA Automation
 */
import './LoginModal.css'
import { Button, Group, Modal, Stack, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useDisclosure } from '@mantine/hooks' // <-- Agregado
import { useEffect } from 'react'
import type { FormValues } from '@/utils/schemas/login.schema'
import { loginschema } from '@/utils/schemas/login.schema'

export function LoginModal() {
  const [opened, { open, close }] = useDisclosure(false)
  useEffect(() => {
    open()
  }, [open])
  const form = useForm<FormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validate: values => {
      const result = loginschema.safeParse(values)

      if (result.success) return {}

      const formErrors: Record<string, string> = {}
      result.error.issues.forEach(issue => {
        const path = issue.path.join('.')
        if (!formErrors[path]) {
          formErrors[path] = issue.message
        }
      })
      return formErrors
    },
    validateInputOnChange: true,
  })

  const handleSubmit = () => {
    close()
  }
  const inputStyles = {
    input: {
      backgroundColor: '#FAF9F7',
      borderColor: '#EDEBE5',
      borderRadius: '8px',
      color: '#B2B2B8',
    },
    label: { color: '#8C8C94', fontWeight: 500, fontSize: '12px' },
    required: { color: '#8C8C94' },
  }

  return (
    <Modal
      opened={opened}
      onClose={close}
      title="Login into QA-zone"
      yOffset={175}
      xOffset={150}
      //size="40%"
      radius={16}
      padding="xl"
      overlayProps={{ backgroundOpacity: 0, blur: 0 }}
      styles={{
        header: { display: 'flex', justifyContent: 'center' },
        title: { fontWeight: 700, fontSize: 26, color: '#1A1A1F', textAlign: 'center' },
      }}
      withCloseButton={false}
      data-testid="login-modal-object"
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="md">
          <TextInput
            label="Email"
            withAsterisk
            styles={inputStyles}
            placeholder="e.g. user@example.com"
            {...form.getInputProps('email')}
            error={form.errors.email}
            data-testid="login-email-input"
          />

          <TextInput
            label="Password"
            withAsterisk
            type="password"
            styles={inputStyles}
            placeholder="Your password"
            {...form.getInputProps('password')}
            error={form.errors.password}
            data-testid="login-password-input"
          />

          <Group justify="center" mt="xl">
            <Button
              type="submit"
              bg="#F26621"
              color="#FFFFFF"
              radius="md"
              size="md"
              data-testid="login-submit-button"
            >
              Log-in
            </Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  )
}
