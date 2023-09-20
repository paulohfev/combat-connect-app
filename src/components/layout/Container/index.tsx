import React from 'react'

import { ContainerProps, Container as MuiContainer } from '@mui/material'

type Props = {
  children: React.ReactNode
  maxWidth?: ContainerProps['maxWidth']
  sx?: ContainerProps['sx']
}

const Container: React.FC<Props> = ({ children, maxWidth, sx }) => {
  return (
    <MuiContainer maxWidth={maxWidth} sx={sx}>
      {children}
    </MuiContainer>
  )
}

export default Container
