import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useLoginQuery } from './api/useLoginQuery';
import { TextField, Button, Box, Grid, Typography, Alert } from '@mui/material';
import { Link } from 'react-router-dom';

type LoginData = {
  email: string;
  password: string;
};

export const Login = () => {
  const loginUser = useLoginQuery();
  console.log(loginUser.error);

  const { handleSubmit, control } = useForm<LoginData>({
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = handleSubmit((formData) => {
    loginUser.mutateAsync(formData);
  });

  if (loginUser.isLoading) {
    return <div>loading...</div>;
  }

  return (
    <Box
      sx={{ border: '1px solid grey', width: 500, mx: 'auto', my: 10, p: 5 }}
    >
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item xs={12}>
          <Typography variant="h6" align="center">
            Log in
          </Typography>
        </Grid>

        <Typography variant="inherit" color="textSecondary"></Typography>
        {loginUser.error && (
          <Alert severity="error">{loginUser.error.response.data}</Alert>
        )}

        <form onSubmit={onSubmit}>
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
              rules={{ required: 'Email address is required' }}
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
              rules={{ required: 'Password is required' }}
            />
          </Grid>

          <Button type="submit" variant="contained" color="primary">
            Log in
          </Button>
        </form>
        <Typography variant="inherit" color="textSecondary">
          Don not have an account yet?{' '}
          <Link to="/register">Create Account</Link>
        </Typography>
      </Grid>
    </Box>
  );
};
