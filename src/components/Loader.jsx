import React from 'react';
import { Stack } from '@mui/material';
import { MagnifyingGlass } from 'react-loader-spinner';

const Loader = () => (
  <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
    <MagnifyingGlass color="#add8e6" glassColor = '#c0efff' />
  </Stack>
);

export default Loader;