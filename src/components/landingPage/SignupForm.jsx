/* eslint-disable no-unused-vars */
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from 'react-router-dom';

// Zod validation schema
const validationSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters long"),
  userName: z.string().min(3, "Username must be at least 3 characters long"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(3, "Password must be at least 3 characters long"),
  address: z.string().min(1, "Address is required"),
  phone: z.string().min(10).max(10, "Phone number must be 10 digits long"),
  serviceName: z.string().min(3, "Service name must be at least 3 characters long"),
  category: z.string().min(3, "Category must be at least 3 characters long"),
  serviceDescription: z.string().min(3, "Service description must be at least 3 characters long"),
});


const SignupForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({ resolver: zodResolver(validationSchema) });
  const [type, setType] = useState("Client");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const userType = watch("userType");

  const onSubmit = (data) => {
    console.log(data);
    if (!data.userType) {
      alert("Please select a user type before signing up.");
    } else {
      // Handle submit data here
    }
  };

  return (
    // <div className=''>
    <form onSubmit={handleSubmit(onSubmit)}
      className='w-[80%] min-h-full flex flex-col gap-3 items-center justify-center'>
      {/* <h1 className="text-xl font-bold">Signup form</h1> */}
      <div className="flex rounded-md border border-gray-300 mb-4">
        <div
          className={`font-semibold text-black px-8 py-1 rounded-md ${type === "Client" ? "bg-lightBlack text-white" : "text-black"} cursor-pointer`}
          onClick={() => setType("Client")}>
          Client
        </div>
        <div
          className={`font-semibold text-black px-8 py-1 rounded-md ${type === "Seller" ? "bg-lightBlack text-white" : "text-black"} cursor-pointer`}
          onClick={() => setType("Seller")}>
          Seller
        </div>
      </div>
      <div className="flex flex-col gap-4 w-[75%]">

        <div className={`${type === "Seller" ? "flex flex-col gap-4" : "flex flex-col gap-4"}`}>

          <div className="flex justify-between">
            <div className="flex flex-col gap-1 w-[300px]">
              <input type="text" name="fullName" placeholder='Full Name'
                className='border border-gray-400 rounded-md px-2' {...register('fullName')} />
              {errors.fullName && <span className="text-xs text-red-500">{errors.fullName.message}</span>}
            </div>

            <div className="flex flex-col gap-1 w-[300px]">
              <input type="email" name="email" placeholder='Email address'
                className='border border-gray-400 rounded-md px-2' {...register('email')} />
              {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col gap-1 w-[300px]">
              <input type="password" name="password" placeholder='Password'
                className='border border-gray-400 rounded-md px-2' {...register('password')} />
              {errors.password && <span className="text-xs text-red-500">{errors.password.message}</span>}
            </div>

            <div className="flex flex-col gap-1 w-[300px]">
              <input type="password" name="confirmPassword" placeholder='Confirm Password'
                className='border border-gray-400 rounded-md px-2' {...register('confirmPassword')} />
              {errors.password && <span className="text-xs text-red-500">{errors.password.message}</span>}
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-1 w-[300px]">
            <input name="address" placeholder='Address' className={`border border-gray-400 rounded-md px-2 ${type === "Seller" ? "" : "hidden"}`} />
            {type === "Seller" && errors.address && <span className="text-xs text-red-500">{errors.address.message}</span>}
          </div>

          <div className="flex flex-col gap-1 w-[300px]">
            <input type="text" name="phone" placeholder='Phone number' {...register('phone')}
              className={`border border-gray-400 rounded-md px-2 ${type === "Seller" ? "" : "hidden"}`} />
            {type === "Seller" && errors.phone && <span className="text-xs text-red-500">{errors.phone.message}</span>}
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-1 w-[300px]">
            <input type="text" name="serviceName" placeholder='Service Name' {...register('serviceName')}
              className={`border border-gray-400 rounded-md px-2 ${type === "Seller" ? "" : "hidden"}`} />
            {type === "Seller" && errors.serviceName && <span className="text-xs text-red-500">{errors.serviceName.message}</span>}
          </div>
          <div className="flex flex-col gap-1 w-[300px]">
            <input type="text" name="phone" placeholder='Category' {...register('category')}
              className={`border border-gray-400 rounded-md px-2 ${type === "Seller" ? "" : "hidden"}`} />
            {type === "Seller" && errors.category && <span className="text-xs text-red-500">{errors.category.message}</span>}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <textarea type="text" name="phone" placeholder='Service Description' {...register('serviceDescription')}
            className={`border border-gray-400 rounded-md px-2 ${type === "Seller" ? "" : "hidden"}`} />
          {type === "Seller" && errors.serviceDescription && <span className="text-xs text-red-500">{errors.serviceDescription.message}</span>}
        </div>

      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={termsAccepted}
          onChange={(e) => setTermsAccepted(e.target.checked)}
          className="mr-2"
        />
        <label className="text-lightBlack font-semibold">
          I accept the <Link href="#" className="text-mediumBlue underline">Terms and Conditions</Link>
        </label>
      </div>
      <button
        type="submit"
        className={`bg-lightBlack text-white py-2 rounded-lg w-[300px] ${!termsAccepted
          ? 'opacity-60 cursor-not-allowed'
          : ''
          }`}
        disabled={!termsAccepted}>
        Sign Up
      </button>
      

      <div className={`font-semibold`}>
        <span>Already a member? </span>
        <Link to="/signin" className='text-mediumBlue underline'>Login now</Link>
      </div>
    </form>
    // </div>
  );
}

export default SignupForm;