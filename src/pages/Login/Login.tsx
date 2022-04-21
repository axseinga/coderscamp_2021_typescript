import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useLoginQuery } from './api/useLoginQuery';
import {
  TextField,
  Button,
  Box,
  Grid,
  Typography,
  Alert,
  Link,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

type LoginData = {
  email: string;
  password: string;
};

export const Login = () => {
  const loginUser = useLoginQuery();

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
    <Box sx={{ mx: 'auto', my: 10, p: 5 }}>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item xs={12}>
          <Typography variant="h6" align="center" color="textSecondary">
            Log in
          </Typography>
        </Grid>

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
          <Grid item xs={12} mb="2%">
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
        <Typography variant="inherit" color="textSecondary" my="2%">
          Don not have an account yet?{' '}
          <Link component={RouterLink} to="/register" underline="none">
            Create Account
          </Link>
        </Typography>
      </Grid>
    </Box>
  );
};
