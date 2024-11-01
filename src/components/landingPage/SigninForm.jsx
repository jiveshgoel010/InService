/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function SigninForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isGoogleSignin, setIsGoogleSignin] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    // Handle submit data here
  };

  const handleGoogleSignin = () => {
    setIsGoogleSignin(true);
    onSubmit(); // Run the onSubmit logic if needed
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 shadow-lg rounded-lg bg-white">
      <p className="text-4xl text-center font-semibold mb-4">Sign In</p>

      {/* Email Field */}
      <div className="mb-4">
        <label className="block text-lightBlack font-semibold mb-2">Email</label>
        <input
          {...register("email", { required: "Email is required" })}
          type="email"
          className="border rounded-lg py-1 w-full"
          placeholder="Email"
        />
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
      </div>

      {/* Password Field */}
      <div className="mb-4">
        <label className="block text-lightBlack font-semibold mb-2">Password</label>
        <input
          {...register("password", { required: "Password is required" })}
          type="password"
          className="border rounded-lg py-1 w-full"
          placeholder="Password"
        />
        {errors.password && <span className="text-red-500">{errors.password.message}</span>}
      </div>

      {/* Sign In Button */}
      <div className="w-full mt-4">
        <button type="submit" className="bg-mediumBlue text-white px-4 py-2 rounded-lg w-full">
          Sign In
        </button>
      </div>

      {/* Google Sign In Button */}
      <div className="w-full mt-4">
        <button
          type="button"
          onClick={handleGoogleSignin}
          className="bg-red-500 text-white px-4 py-2 rounded-lg w-full"
        >
          Sign In with Google
        </button>
      </div>
    </form>
  );
}
