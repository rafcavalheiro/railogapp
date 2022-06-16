/* eslint-disable */

import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={24}>
      <Button variant="outlined" color="error" size="large" startIcon={<DeleteIcon />}>
        Cancelar
      </Button>
      <Button variant="contained" color="success" size="large" endIcon={<SendIcon />}>
        Confirmar
      </Button>
    </Stack>
  );
}
