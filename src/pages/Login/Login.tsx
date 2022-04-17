import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoginQuery } from './api/useLoginQuery';

type LoginData = {
  email: string;
  password: string;
};

export const Login = () => {
  const { mutate: postData, error, isLoading } = useLoginQuery();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();

  const onSubmit = handleSubmit((formData) => {
    postData(formData);
  });

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <>
      {error && error.response.data}
      <form onSubmit={onSubmit}>
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
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
