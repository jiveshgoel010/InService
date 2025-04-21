/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function SigninForm() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [isGoogleSignin, setIsGoogleSignin] = useState(false);

  const userType = watch("userType");

  const { login,setUser } = useAuth();

  
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { ...filteredData } = data;

    console.log(filteredData);

    try {
      const url =
        userType === "Client"
          ? "https://inservice-backend.vercel.app/api/v1/clients/login"
          : "https://inservice-backend.vercel.app/api/v1/vendors/login";

      const loginReturn = await axios
        .post(url, { filteredData })
        .then((res) => {
          console.log(res.status); // Log the status code
          return res.data;
        })
        .catch((err) => {
          console.log(err.response?.data || err);
          return err.response?.data || err;
        });



      if (loginReturn.statusCode === 201) {
        login(userType);
        
        
        navigate('/home');

        console.log("login successful");

      }


    } catch (error) {
      console.error("Error during registration:", error);
      alert("Registration failed. Please try again.");
    }



  };

  const handleGoogleSignin = () => {
    setIsGoogleSignin(true);
    onSubmit(); // Run the onSubmit logic if needed
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 shadow-lg rounded-lg bg-white">
      <p className="text-4xl text-center font-semibold mb-4">Sign In</p>

      {/* user type */}
      <div className="flex  justify-center rounded-md border border-gray-300 mb-4">
        <label className="flex items-center gap-2 p-2 text-lg font-semibold">
          <input
            type="radio"
            value="Client"
            {...register("userType")}
            defaultChecked
            className='h-[20px] w-[20px]'
          />
          Client
        </label>
        <label className="flex items-center gap-2 p-2 text-lg font-semibold">
          <input
            type="radio"
            value="Seller"
            {...register("userType")}
            className='h-[20px] w-[20px]'
          />
          Seller
        </label>
      </div>

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
