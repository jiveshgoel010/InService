import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function SignupForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [isGoogleSignup, setIsGoogleSignup] = useState(false);
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

  const handleGoogleSignup = () => {
    if (userType === "client") {
      setIsGoogleSignup(true);
      onSubmit(); // Run the onSubmit logic
    } else {
      alert("Google signup is only available for clients.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto p-4 shadow-lg rounded-lg bg-white">
      <p className="text-4xl text-center font-semibold mb-4">Sign Up</p>

      {/* User Type Selection */}
      <div className="mb-4">
        <label className="block text-lightBlack font-semibold mb-2">Sign up as:</label>
        <select
          {...register("userType", { required: "Please select a user type" })}
          className="border rounded-lg py-1 w-full"
        >
          <option value="">Select User Type</option>
          <option value="client">Client</option>
          <option value="vendor">Vendor</option>
        </select>
        {errors.userType && <span className="text-red-500">{errors.userType.message}</span>}
      </div>

      {/* Common Fields */}
      <div className={`${userType === "client" || !userType ? 'block' : 'flex gap-10'}`}>
        <div className={`mb-4 ${userType === "client" || !userType ? 'w-full' : 'w-1/2'}`}>
          <label className="block text-lightBlack font-semibold mb-2">Full Name</label>
          <input
            {...register("fullName", { required: "Full name is required" })}
            className="border rounded-lg py-1 w-full"
            placeholder="Full Name"
          />
          {errors.fullName && <span className="text-red-500">{errors.fullName.message}</span>}
        </div>

        <div className={`mb-4 ${userType === "client" || !userType ? 'w-full' : 'w-1/2'}`}>
          <label className="block text-lightBlack font-semibold mb-2">Username</label>
          <input
            {...register("userName", { required: "Username is required" })}
            className="border rounded-lg py-1 w-full"
            placeholder="Username"
          />
          {errors.userName && <span className="text-red-500">{errors.userName.message}</span>}
        </div>
      </div>

      <div className={`${userType === "client" || !userType ? 'block' : 'flex gap-10'}`}>
        <div className={`mb-4 ${userType === "client" || !userType ? 'w-full' : 'w-1/2'}`}>
          <label className="block text-lightBlack font-semibold mb-2">Email</label>
          <input
            {...register("email", { required: "Email is required" })}
            type="email"
            className="border rounded-lg py-1 w-full"
            placeholder="Email"
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </div>

        {!isGoogleSignup && (
          <div className={`mb-4 ${userType === "client" || !userType ? 'w-full' : 'w-1/2'}`}>
            <label className="block text-lightBlack font-semibold mb-2">Password</label>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              className="border rounded-lg py-1 w-full"
              placeholder="Password"
            />
            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
          </div>
        )}
      </div>

      {/* Vendor-Only Fields */}
      {userType === "vendor" && (
        <div>
          <div className="flex gap-10">
            <div className="mb-4 w-1/2">
              <label className="block text-lightBlack font-semibold mb-2">Address</label>
              <input
                {...register("address", { required: "Address is required for vendors" })}
                className="border rounded-lg py-1 w-full"
                placeholder="Address"
              />
              {errors.address && <span className="text-red-500">{errors.address.message}</span>}
            </div>
            <div className="mb-4 w-1/2">
              <label className="block text-lightBlack font-semibold mb-2">Phone Number</label>
              <input
                {...register("phone", { required: "Phone number is required for vendors" })}
                className="border rounded-lg py-1 w-full"
                placeholder="Phone Number"
              />
              {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
            </div>
          </div>

          <div className="flex gap-10">
            <div className="mb-4 w-1/2">
              <label className="block text-lightBlack font-semibold mb-2">Service Name</label>
              <input
                {...register("serviceName", { required: "Service name is required for vendors" })}
                className="border rounded-lg py-1 w-full"
                placeholder="Service Name"
              />
              {errors.serviceName && <span className="text-red-500">{errors.serviceName.message}</span>}
            </div>

            <div className="mb-4 w-1/2">
              <label className="block text-lightBlack font-semibold mb-2">Category of Service</label>
              <select
                {...register("category", { required: "Category is required for vendors" })}
                className="border rounded-lg py-1 w-full"
              >
                <option value="">Select a Category</option>
                {/* Add your service categories here */}
              </select>
              {errors.category && <span className="text-red-500">{errors.category.message}</span>}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-lightBlack font-semibold mb-2">Service Description</label>
            <textarea
              {...register("serviceDescription", { required: "Service description is required for vendors" })}
              className="border rounded-lg py-1 w-full"
              placeholder="Describe your service"
            />
            {errors.serviceDescription && <span className="text-red-500">{errors.serviceDescription.message}</span>}
          </div>
        </div>
      )}

      {/* Terms and Conditions Checkbox */}
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          checked={termsAccepted}
          onChange={(e) => setTermsAccepted(e.target.checked)}
          className="mr-2"
        />
        <label className="text-lightBlack font-semibold">
          I accept the <a href="#" className="text-lightBlue underline">Terms and Conditions</a>
        </label>
      </div>

      {/* Signup Buttons */}
      <div className="w-full mt-4">
        <button
          type="submit"
          className={`bg-mediumBlue text-white px-4 py-2 rounded-lg w-full ${!termsAccepted
            ? 'opacity-50 cursor-not-allowed'
            : ''
          }`}
          disabled={!termsAccepted}
        >
          Sign Up
        </button>
      </div>

      {/* Google Signup Button */}
      {userType === "client" || !userType ? (
        <div className="w-full mt-4">
          <button
            type="button"
            onClick={handleGoogleSignup}
            className={`bg-red-500 text-white px-4 py-2 rounded-lg w-full ${!termsAccepted
              ? 'opacity-50 cursor-not-allowed'
              : ''
            }`}
            disabled={!termsAccepted}
          >
            Sign Up with Google
          </button>
        </div>
      ) : null}
    </form>
  );
}
