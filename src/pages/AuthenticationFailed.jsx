import React from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import ResponeseCard from '../components/ResponeseCard';

function AuthenticationFailed() {
  return (
    <ResponeseCard status="failed" title="Bad credentials" icon={<CancelIcon sx={{ fontSize: 82 }} />} description="" />
  );
}

export default AuthenticationFailed;
