import React from 'react'

import { renderWithTheme } from '@/utils/jest.utils'

import Container from '.'

describe('Container', () => {
  it('should match the snapshot', () => {
    const mainLayout = renderWithTheme(
      <Container>
        <div>Test</div>
      </Container>
    )
    expect(mainLayout).toMatchSnapshot()
  })
})
