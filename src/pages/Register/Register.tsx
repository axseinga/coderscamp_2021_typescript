import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useRegisterQuery } from './api/useRegisterQuery';
import { TextField, Button, Box, Grid, Typography } from '@mui/material';

type FormData = {
  username: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  repeat_password: string;
};

export const Register = () => {
  const { mutate: postData, error, isLoading } = useRegisterQuery();

  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {},
  });

  const onSubmit = handleSubmit((data) => {
    postData(data);
  });

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <Box
      sx={{
        border: '1px solid grey',
        width: 500,
        mx: 'auto',
        my: 10,
      }}
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
            Sign up
          </Typography>
        </Grid>

        <Typography variant="inherit" color="textSecondary">
          {error && error.response.data}
        </Typography>

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
                  message: 'Min length is 4',
                },
              }}
            />
          </Grid>

          <Grid item xs={12}>
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
                  message: 'Min length is 4',
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
                  message: 'Min length is 4',
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
                  value: 4,
                  message: 'Min length is 4',
                },
              }}
            />
          </Grid>

          <Grid item xs={12}>
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
                minLength: {
                  value: 4,
                  message: 'Min length is 4',
                },
              }}
            />
          </Grid>

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Grid>
    </Box>
  );
};
