import React, { useState } from 'react';
import ResponeseCard from '../components/ResponeseCard';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Success() {
  // const [open, setOpen] = useState(true);

  return (
    <ResponeseCard
      status="success"
      title="The template successfully created !"
      icon={<CheckCircleIcon sx={{ fontSize: 38 }} />}
      description="  The template named cors has been successfully created in your github repo"
    />
    // </Modal>
  );
}
