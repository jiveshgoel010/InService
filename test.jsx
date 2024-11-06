import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from 'react-router-dom';
import axios from 'axios';

const baseSchema = z.object({
  userType: z.string(),
  fullName: z.string().min(3, "Full name must be at least 3 characters long"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(3, "Password must be at least 3 characters long"),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
});

const clientSchema = baseSchema
  .refine((data) => data.userType === 'Client', {
    message: "Invalid user type",
    path: ["userType"],
  })

const sellerSchema = baseSchema
  .extend({
    address: z.string().min(1, "Address is required"),
    phone: z
      .string()
      .length(10, "Phone number must be 10 digits long")
      .regex(/^\d+$/, "Phone number must contain only digits"),
    serviceName: z
      .string()
      .min(3, "Service name must be at least 3 characters long"),
    category: z
      .string()
      .min(3, "Category must be at least 3 characters long"),
    serviceDescription: z
      .string()
      .min(3, "Service description must be at least 3 characters long"),
  })
  .refine((data) => data.userType === 'Seller', {
    message: "Invalid user type",
    path: ["userType"],
  })

const validationSchema = z.union([clientSchema, sellerSchema]);

const SignupForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      userType: "Client",
      termsAccepted: false,
    },
  });

  const userType = watch("userType");

  const onSubmit = async (data) => {
    
    console.log("Form data:", data);
    try {
			const url = "http://localhost:8000/api/v1/clients/register";

			axios.post(url, data )
				.then((res) => console.log(res))
				.catch((err) => console.log(err));

			// if (!response.ok) {
			//   throw new Error("Failed to register.");
			// }

			// const result = await response.json();
			// console.log("Registration successful:", result);
			// Optional: Redirect or show success message

		} catch (error) {
			console.error("Error during registration:", error);
			alert("Registration failed. Please try again.");
		}
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-[80%] min-h-full flex flex-col gap-3 items-center justify-center'
    >
      {/* User Type Selection */}
      <div className="flex rounded-md border border-gray-300 mb-4">
        <label className="flex items-center gap-2 p-2">
          <input
            type="radio"
            value="Client"
            {...register("userType")}
            defaultChecked
          />
          Client
        </label>
        <label className="flex items-center gap-2 p-2">
          <input
            type="radio"
            value="Seller"
            {...register("userType")}
          />
          Seller
        </label>
      </div>

      {/* Common Fields */}
      <div className="flex flex-col gap-4 w-full max-w-md">
        {/* Full Name */}
        <div className="flex flex-col gap-1">
          <input
            type="text"
            placeholder='Full Name'
            className='border border-gray-400 rounded-md px-2 py-1'
            {...register('fullName')}
          />
          {errors.fullName && (
            <span className="text-xs text-red-500">
              {errors.fullName.message}
            </span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <input
            type="email"
            placeholder='Email address'
            className='border border-gray-400 rounded-md px-2 py-1'
            {...register('email')}
          />
          {errors.email && (
            <span className="text-xs text-red-500">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <input
            type="password"
            placeholder='Password'
            className='border border-gray-400 rounded-md px-2 py-1'
            {...register('password')}
          />
          {errors.password && (
            <span className="text-xs text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col gap-1">
          {/* <input
            type="password"
            placeholder='Confirm Password'
            className='border border-gray-400 rounded-md px-2 py-1'
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && (
            <span className="text-xs text-red-500">
              {errors.confirmPassword.message}
            </span>
          )} */}
        </div>

        {/* Seller-specific Fields */}
        {userType === "Seller" && (
          <>
            {/* Address */}
            <div className="flex flex-col gap-1">
              <input
                placeholder='Address'
                className='border border-gray-400 rounded-md px-2 py-1'
                {...register('address')}
              />
              {errors.address && (
                <span className="text-xs text-red-500">
                  {errors.address.message}
                </span>
              )}
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1">
              <input
                type="text"
                placeholder='Phone number'
                className='border border-gray-400 rounded-md px-2 py-1'
                {...register('phone')}
              />
              {errors.phone && (
                <span className="text-xs text-red-500">
                  {errors.phone.message}
                </span>
              )}
            </div>

            {/* Service Name */}
            <div className="flex flex-col gap-1">
              <input
                type="text"
                placeholder='Service Name'
                className='border border-gray-400 rounded-md px-2 py-1'
                {...register('serviceName')}
              />
              {errors.serviceName && (
                <span className="text-xs text-red-500">
                  {errors.serviceName.message}
                </span>
              )}
            </div>

            {/* Category */}
            <div className="flex flex-col gap-1">
              <input
                type="text"
                placeholder='Category'
                className='border border-gray-400 rounded-md px-2 py-1'
                {...register('category')}
              />
              {errors.category && (
                <span className="text-xs text-red-500">
                  {errors.category.message}
                </span>
              )}
            </div>

            {/* Service Description */}
            <div className="flex flex-col gap-1">
              <textarea
                placeholder='Service Description'
                className='border border-gray-400 rounded-md px-2 py-1'
                {...register('serviceDescription')}
              />
              {errors.serviceDescription && (
                <span className="text-xs text-red-500">
                  {errors.serviceDescription.message}
                </span>
              )}
            </div>
          </>
        )}
      </div>

      {/* Terms and Conditions */}
      <div className="flex items-center mt-4">
        <input
          type="checkbox"
          {...register('termsAccepted')}
          className="mr-2"
        />
        <label className="text-lightBlack font-semibold">
          I accept the{" "}
          <Link to="#" className="text-mediumBlue underline">
            Terms and Conditions
          </Link>
        </label>
      </div>
      {errors.termsAccepted && (
        <span className="text-xs text-red-500">
          {errors.termsAccepted.message}
        </span>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className={`bg-lightBlack text-white py-2 rounded-lg w-full max-w-md mt-4 ${
          !watch('termsAccepted') ? 'opacity-60 cursor-not-allowed' : ''
        }`}
        disabled={!watch('termsAccepted')}
      >
        Sign Up
      </button>

      {/* Sign In Link */}
      <div className={`font-semibold mt-2`}>
        <span>Already a member? </span>
        <Link to="/signin" className="text-lightBlack">
          Sign in
        </Link>
      </div>
    </form>
  );
};

export default SignupForm;