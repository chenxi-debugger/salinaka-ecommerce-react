import React from 'react';
import { useNavigate } from 'react-router-dom';

const EditForm = () => {
  const navigate = useNavigate();

  const handleSave = () => {
    // some save logic...
    navigate('/dashboard');
  };

  return (
    <button onClick={handleSave}>Save</button>
  );
};

export default EditForm;
