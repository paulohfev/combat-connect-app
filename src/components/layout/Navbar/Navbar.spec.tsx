import React from 'react'

import { renderWithTheme } from '@/utils/jest.utils'
import { waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import Navbar from './index'

describe('Navbar', () => {
  it('should match the snapshot', () => {
    const navbar = renderWithTheme(<Navbar />)
    expect(navbar).toMatchSnapshot()
  })

  it('should redirect the user to the home page when the logo is clicked', () => {
    const navbar = renderWithTheme(<Navbar />)
    const logo = navbar.getByRole('link')

    act(() => {
      logo.click()
    })

    waitFor(() => {
      expect(window.location.pathname).toBe('/')
    })
  })
})
