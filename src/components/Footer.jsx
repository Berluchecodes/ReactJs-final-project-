import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import { Link } from 'react-router-dom'
import { BiCameraMovie } from 'react-icons/bi'

const Footer = () => {
  return (
    <Box mt='80px' bgcolor="#ff3f4">
      <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
      <Link to='/' >
    <div className='flex items-center font-bold cursor-pointer '>
    <span className='text-2xl mr-1 text-blue-400'>
        <BiCameraMovie/>
    </span>
    <h1 className='text-blue-400 text-2xl '>BPINFOFLIXS</h1>
    </div>
    </Link>
        <Typography variant='h5' pb='40px' mt='20px'>Information fast and easy. Just click and search! </Typography>
      </Stack>
    </Box>
  )
}

export default Footer