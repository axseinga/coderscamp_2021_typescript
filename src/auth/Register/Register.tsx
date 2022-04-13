import React from 'react';
import { useForm } from 'react-hook-form';
import { useRegisterQuery } from './api/useRegisterQuery';

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    postData(data);
  });

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <>
      {error && error.response.data}
      <form onSubmit={onSubmit}>
        <label>Username</label>
        <input
          {...register('username', {
            required: 'Username is a required',
            minLength: {
              value: 4,
              message: 'Min length is 4',
            },
          })}
        />
        {errors.username && <p>{errors.username.message}</p>}

        <label>Name</label>
        <input
          {...register('name', {
            required: 'Name is a required',
            minLength: {
              value: 4,
              message: 'Min length is 4',
            },
          })}
        />
        {errors.name && <p>{errors.name.message}</p>}

        <label>Surname</label>
        <input
          {...register('surname', {
            required: 'Surname is a required',
            minLength: {
              value: 4,
              message: 'Min length is 4',
            },
          })}
        />
        {errors.surname && <p>{errors.surname.message}</p>}

        <label>Email</label>
        <input
          {...register('email', {
            required: 'Email is a required',
            minLength: {
              value: 4,
              message: 'Min length is 4',
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label>password</label>
        <input
          {...register('password', {
            required: 'Password is a required',
            minLength: {
              value: 4,
              message: 'Min length is 4',
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <label>repeat password</label>
        <input
          {...register('repeat_password', {
            required: 'Password is a required',
            minLength: {
              value: 4,
              message: 'Min length is 4',
            },
          })}
        />
        {errors.repeat_password && <p>{errors.repeat_password.message}</p>}

        <button type="submit">Submit</button>
      </form>
    </>
  );
};
