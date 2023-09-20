'use client'

import React from 'react'

import Link from 'next/link'

import { SportsMma } from '@mui/icons-material'
import { AppBar, Typography } from '@mui/material'

import { APP_ROUTES } from '@/routes/app.routes'

import Container from '@/components/layout/Container'

import styles from './styles'

const Navbar: React.FC = () => {
  return (
    <AppBar position='fixed' sx={styles.appBar}>
      <Container sx={styles.container}>
        <Link href={APP_ROUTES.home} role='link' style={styles.link}>
          <SportsMma />
          <Typography variant='logo' sx={styles.logoText}>
            CombatConnect
          </Typography>
        </Link>
      </Container>
    </AppBar>
  )
}

export default Navbar
