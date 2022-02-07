import React, { useState } from 'react';
import { useParams } from 'react-router';
import ResponeseCard from '../components/ResponeseCard';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Success() {
  const { repo } = useParams();
  console.log(template);

  return (
    <ResponeseCard
      status="success"
      title="The template successfully created !"
      icon={<CheckCircleIcon sx={{ fontSize: 38 }} />}
      description={`The template named ${repo} has been successfully created in your github repo`}
    />
  );
}
