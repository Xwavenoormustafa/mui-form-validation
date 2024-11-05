// src/FormComponent.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const FormComponent = () => {
  const [formValues, setFormValues] = useState({ name: '', email: '', age: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formValues.name) tempErrors.name = "Name is required";
    if (!formValues.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formValues.age) {
      tempErrors.age = "Age is required";
    } else if (isNaN(formValues.age)) {
      tempErrors.age = "Age must be a number";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully!", formValues);
      alert("Form submitted successfully!");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: '#f5f5f5'
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Registration Form
      </Typography>

      <TextField
        label="Name"
        name="name"
        value={formValues.name}
        onChange={handleChange}
        error={Boolean(errors.name)}
        helperText={errors.name}
        required
      />

      <TextField
        label="Email"
        name="email"
        value={formValues.email}
        onChange={handleChange}
        error={Boolean(errors.email)}
        helperText={errors.email}
        required
      />

      <TextField
        label="Age"
        name="age"
        value={formValues.age}
        onChange={handleChange}
        error={Boolean(errors.age)}
        helperText={errors.age}
        required
      />

      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </Box>
  );
};

export default FormComponent;
