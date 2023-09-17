import { renderWithTheme } from '@/utils/jest.utils'
import '@testing-library/jest-dom'

import Home from './page'

describe('Home', () => {
  it('renders a heading', () => {
    const component = renderWithTheme(<Home />)
    expect(component).toMatchSnapshot()
  })
})
