import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the landing page with the intro heading and both live projects', () => {
  render(<App />)
  expect(screen.getByRole('heading', { level: 2, name: /Hi, I'm Dimitar Vidolov/i })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /Vkushty/i })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /Moneyflow/i })).toBeInTheDocument()
})
