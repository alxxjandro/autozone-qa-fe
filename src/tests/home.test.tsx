/*
 * Tecnológico de Monterrey — Campus Chihuahua
 * Desarrollo e Implantación de Sistemas de Software
 * TC3005B GPO500 - 2026
 * Autozone QA Automation
 */

import { render, waitFor } from '@testing-library/react'
import { Home } from '@/pages/home/Home'

describe('Home', () => {
  it('renders without crashing', async () => {
    render(<Home />)

    await waitFor(() => {
      expect(document.body).toBeInTheDocument()
    })
  })
})
