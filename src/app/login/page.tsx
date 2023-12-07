'use client'

import React from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'

import MainLayout from '@/components/layout/MainLayout'
import { Box, Button } from '@mui/material'

type LoginFields = {
  username: string
  password: string
}

const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFields>()

  const onSubmit: SubmitHandler<LoginFields> = (data) => console.log(data)

  return (
    <MainLayout>
      <Box>Login Page</Box>
      <Box component='form' onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='username' {...register('username', { required: true })} />
        {errors.username && <span>A username is required</span>}

        <input placeholder='password' {...register('password', { required: true })} type='password' />
        {errors.password && <span>A password is required</span>}

        <Button variant='contained' type='submit'>Sign in</Button>
      </Box>
    </MainLayout>
  )
}

export default LoginPage
