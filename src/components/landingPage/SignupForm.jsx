/* eslint-disable no-unused-vars */
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Base schema for common fields
const baseSchema = z.object({
  userType: z.enum(["Client", "Seller"]),
  fullName: z.string().min(3, "Full name must be at least 3 characters long"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(3, "Password must be at least 3 characters long"),
  confirmPassword: z.string(),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
});

// Client schema extending baseSchema
const clientSchema = baseSchema.extend({
  userType: z.literal("Client"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

const sellerSchema = baseSchema.extend({
  userType: z.literal("Seller"),
  address: z.string().min(1, "Address is required"),
  phone: z.string()
    .length(10, "Phone number must be 10 digits long")
    .regex(/^\d+$/, "Phone number must contain only digits"),
  serviceName: z.string().min(3, "Service name must be at least 3 characters long"),
  category: z.enum(["cleaning", "barber", "catering", "photography", "plumbing"], {
    errorMap: () => ({ message: "Please select a valid category" }),
  }),
  serviceDescription: z.string().min(3, "Service description must be at least 3 characters long"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

const validationSchema = z.union([clientSchema, sellerSchema]);

const SignupForm = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      userType: "Client",
      termsAccepted: false,
    },
  });

  const userType = watch("userType");

  const onSubmit = async (data) => {

    const { confirmPassword, ...filteredData } = data;

    console.log(filteredData);
    try {
      const url =
        data.userType === "Client"
          ? "http://localhost:8000/api/v1/clients/signup"
          : "http://localhost:8000/api/v1/vendors/signup";

         

          const sign = await axios
          .post(url, { filteredData })
          .then((res) => {
            console.log(res.data.addressstatusCode); // Log the status code
            return res.data;
          })
          .catch((err) => {
            console.log(err.response?.data || err);
            return err.response?.data || err;
          });

          

      if (sign.statusCode === 201) {
        
        navigate('/login');

        console.log("Registration successful");

      }


    } catch (error) {
      console.error("Error during registration:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}
        className='w-[70%] min-h-[800px] border-4 border-black rounded-lg flex flex-col gap-3 items-center justify-center'>

        <div className="flex rounded-md border border-gray-300 mb-4">
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

        <div className="flex flex-col gap-4 w-[75%]">

          <div className="flex justify-between">
            {/* Full Name */}
            <div className="flex flex-col gap-1">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-400 rounded-md px-2 py-1 w-[300px]"
                {...register("fullName")}
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
                placeholder="Email address"
                className="border border-gray-400 rounded-md px-2 py-1 w-[300px]"
                {...register("email")}
              />
              {errors.email && (
                <span className="text-xs text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>

          {/* Password and Confirm Password */}
          <div className="flex justify-between">
            {/* Password */}
            <div className="flex flex-col gap-1">
              <input
                type="password"
                placeholder="Password"
                className="border border-gray-400 rounded-md px-2 py-1 w-[300px]"
                {...register("password")}
              />
              {errors.password && (
                <span className="text-xs text-red-500">
                  {errors.password.message}
                </span>
              )}
            </div>
            {/* Confirm Password */}
            <div className="flex flex-col gap-1">
              <input
                type="password"
                placeholder="Confirm Password"
                className="border border-gray-400 rounded-md px-2 py-1 w-[300px]"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <span className="text-xs text-red-500">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>
          </div>

          {/* Seller-Specific Fields */}
          {userType === "Seller" && (
            <>
              <div className="flex justify-between">
                <div className="flex flex-col gap-1">
                  <input
                    placeholder="Address"
                    className="border border-gray-400 rounded-md px-2 py-1 w-[300px]"
                    {...register("address")}
                  />
                  {errors.address && (
                    <span className="text-xs text-red-500">
                      {errors.address.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="border border-gray-400 rounded-md px-2 py-1 w-[300px]"
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <span className="text-xs text-red-500">
                      {errors.phone.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex justify-between">
                <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    placeholder="Service Name"
                    className="border border-gray-400 rounded-md px-2 py-1 w-[300px]"
                    {...register("serviceName")}
                  />
                  {errors.serviceName && (
                    <span className="text-xs text-red-500">
                      {errors.serviceName.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  {/* <input
                    type="text"
                    placeholder="Category"
                    className="border border-gray-400 rounded-md px-2 py-1 w-[300px]"
                    {...register("category")}
                  />
                  {errors.category && (
                    <span className="text-xs text-red-500">
                      {errors.category.message}
                    </span>
                  )} */}
                  <select
                    className="border border-gray-400 rounded-md px-2 py-1 w-[300px]"
                    {...register("category")}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Category
                    </option>
                    <option value="cleaning">Cleaning</option>
                    <option value="barber">Barber</option>
                    <option value="catering">Catering</option>
                    <option value="photography">Photography</option>
                    <option value="plumbing">Plumbing</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <textarea
                  placeholder="Service Description"
                  className="border border-gray-400 rounded-md px-2 py-1"
                  {...register("serviceDescription")}
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
            className="mr-2 h-[20px] w-[20px]"
          />
          <label className="text-lightBlack font-semibold">
            I accept the{" "}
            <Link to="#" className="text-mediumBlue underline">
              Terms and Conditions
            </Link>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`bg-lightBlack text-white py-2 rounded-lg w-full max-w-md mt-4 ${!watch('termsAccepted') ? 'opacity-60 cursor-not-allowed' : ''
            }`}
          disabled={!watch('termsAccepted')}
        >
          Sign Up
        </button>

        {/* Sign In Link */}
        <div className={`font-semibold mt-2`}>
          <span>Already a member? </span>
          <Link to="/signin" className="text-mediumBlue underline">
            Sign in
          </Link>
        </div>

      </form>
    </>
  )
}

export default SignupForm;