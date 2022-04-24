import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useRegisterQuery } from './api/useRegisterQuery';
import {
  TextField,
  Button,
  Box,
  Grid,
  Typography,
  Link,
  Alert,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

type FormData = {
  username: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  repeat_password: string;
};

export const Register = () => {
  const registerUser = useRegisterQuery();

  const { control, handleSubmit, getValues } = useForm<FormData>({
    defaultValues: {
      username: '',
      name: '',
      surname: '',
      email: '',
      password: '',
      repeat_password: '',
    },
  });

  const onSubmit = handleSubmit((data: FormData) => {
    registerUser.mutateAsync(data);
  });

  if (registerUser.isLoading) {
    return <div>loading...</div>;
  }

  return (
    <Box
      sx={{
        my: '5%',
        mx: 'auto',
        flexGrow: 1,
        align: 'center',
      }}
    >
      <Grid
        container
        spacing={3}
        direction="column"
        justifyContent="space-around"
        alignItems="center"
        width="100%"
      >
        <Grid item xs={12}>
          <Typography variant="h6" align="center" color="textSecondary">
            Create Account
          </Typography>
        </Grid>

        {registerUser.error && (
          <Alert severity="error">{registerUser.error.response.data}</Alert>
        )}

        <form onSubmit={onSubmit}>
          <Grid item xs={12}>
            <Controller
              control={control}
              name="username"
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Username"
                  error={!!error}
                  helperText={error ? error.message : null}
                  margin="dense"
                />
              )}
              rules={{
                required: 'Username is required',
                minLength: {
                  value: 4,
                  message: 'Username must have at least 4 characters',
                },
                maxLength: {
                  value: 10,
                  message: 'Max length is 10',
                },
              }}
            />
          </Grid>

          <Grid item md={12}>
            <Controller
              control={control}
              name="name"
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Name"
                  error={!!error}
                  helperText={error ? error.message : null}
                  margin="dense"
                />
              )}
              rules={{
                required: 'Name is required',
                minLength: {
                  value: 4,
                  message: 'Name must have at least 4 characters',
                },
                maxLength: {
                  value: 10,
                  message: 'Max length is 10',
                },
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              control={control}
              name="surname"
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Surname"
                  error={!!error}
                  helperText={error ? error.message : null}
                  margin="dense"
                />
              )}
              rules={{
                required: 'Surname is required',
                minLength: {
                  value: 4,
                  message: 'Surname must have at least 4 characters',
                },
                maxLength: {
                  value: 10,
                  message: 'Max length is 10',
                },
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              control={control}
              name="email"
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Email"
                  error={!!error}
                  helperText={error ? error.message : null}
                  margin="dense"
                />
              )}
              rules={{
                required: 'Email is required',
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              control={control}
              name="password"
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Password"
                  error={!!error}
                  helperText={error ? error.message : null}
                  margin="dense"
                />
              )}
              rules={{
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must have at least 8 characters',
                },
              }}
            />
          </Grid>

          <Grid item xs={12} mb="5%">
            <Controller
              control={control}
              name="repeat_password"
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Repeat password"
                  error={!!error}
                  helperText={error ? error.message : null}
                  margin="dense"
                />
              )}
              rules={{
                required: 'Password is required',
                validate: {
                  matchesPreviousPassword: (value) => {
                    const { password } = getValues();
                    return password === value || 'Passwords should match!';
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Register Account
            </Button>
          </Grid>
        </form>
        <Typography
          variant="inherit"
          color="textSecondary"
          align="center"
          my="2%"
        >
          Already have an account?{' '}
          <Link component={RouterLink} to="/login" underline="none">
            Sign in
          </Link>
        </Typography>
      </Grid>
    </Box>
  );
};
