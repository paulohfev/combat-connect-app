'use client'

import React from 'react'

import Container from '@/components/layout/Container'

import styles from './styles'

type Props = {
  children: React.ReactNode
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <Container maxWidth={false} sx={styles.container}>
      {children}
    </Container>
  )
}

export default MainLayout
