import Home from './page'
import '@testing-library/jest-dom'
import { renderWithTheme } from '@/utils/jest.utils'
 
describe('Home', () => {
  it('renders a heading', () => {
    const component = renderWithTheme(<Home />)
    expect(component).toMatchSnapshot()
  })
})