import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../src/app/page'

test('Page', () => {
  render(<Home />)
  expect(screen.getByTestId('btn-deploy-now')).toBeDefined()
})