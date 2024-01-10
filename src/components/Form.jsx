import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// Material UI Imports
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().required(),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required(),
  });

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    toast.success("Form Submitted Successfully");
    reset();
  };

  return (
    <>
      {/* Tostify for alerts */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Container
        maxWidth="sm"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        {/* form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            style={{
              backgroundColor: "#f0f0f0",
              padding: "30px",
              borderRadius: "8px",
            }}
          >
            <Typography variant="h3" component="h1">
              Form
            </Typography>
            <Typography variant="subtitle1" component="h2">
              React-Hook-Form and YUP
            </Typography>
            <Box
              component="div"
              sx={{
                "& > :not(style)": { width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                type="text"
                label="Full Name"
                variant="outlined"
                fullWidth
                margin="normal"
                {...register("fullName")}
              />
              <TextField
                type="email"
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                {...register("email")}
              />
              <TextField
                type="number"
                label="Age"
                variant="outlined"
                fullWidth
                margin="normal"
                {...register("age")}
              />
              <TextField
                type="password"
                label="Password"
                variant="outlined"
                fullWidth
                margin="normal"
                {...register("password")}
              />
              <TextField
                type="password"
                label="Confirm Password"
                variant="outlined"
                fullWidth
                margin="normal"
                {...register("confirmPassword")}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ marginTop: "20px" }}
              >
                Submit
              </Button>
            </Box>
          </div>
        </form>
      </Container>
    </>
  );
};

export default Form;
