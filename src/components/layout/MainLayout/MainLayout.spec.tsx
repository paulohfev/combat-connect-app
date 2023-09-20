import React from 'react'

import { renderWithTheme } from '@/utils/jest.utils'

import MainLayout from '.'

describe('MainLayout', () => {
  it('should match the snapshot', () => {
    const mainLayout = renderWithTheme(
      <MainLayout>
        <div>Test</div>
      </MainLayout>
    )
    expect(mainLayout).toMatchSnapshot()
  })
})
