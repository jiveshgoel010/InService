import { useForm } from 'react-hook-form';

const Form = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

    return (
        <div className="max-w-md lg:max-w-sm max-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-center text-xl sm:text-2xl lg:text-2xl font-semibold mb-6 text-gray-800">
                Fill the details of Query!
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="w-full sm:w-1/2">
                        <label className="block text-sm lg:text-base font-medium text-gray-700">
                            First Name
                        </label>
                        <input
                            {...register("firstName", { required: true })}
                            type="text"
                            className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:to-blue-300"
                            placeholder="First Name"
                        />
                        {errors.firstName && (
                            <span className="text-red-500 text-xs lg:text-sm">This field is required</span>
                        )}
                    </div>
                    <div className="w-full sm:w-1/2">
                        <label className="block text-sm lg:text-base font-medium text-gray-700">
                            Last Name
                        </label>
                        <input
                            {...register("lastName", { required: true })}
                            type="text"
                            className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:to-blue-300"
                            placeholder="Last Name"
                        />
                        {errors.lastName && (
                            <span className="text-red-500 text-xs lg:text-sm">This field is required</span>
                        )}
                    </div>
                </div>

                <div className="mt-4">
                    <label className="block text-sm lg:text-base font-medium text-gray-700">
                        Company Name
                    </label>
                    <input
                        {...register("companyName")}
                        type="text"
                        className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:to-blue-300"
                        placeholder="Company Name (optional)"
                    />
                </div>

                <div className="mt-4">
                    <label className="block text-sm lg:text-base font-medium text-gray-700">
                        Phone Number
                    </label>
                    <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l border border-r-0 border-gray-300 bg-gray-100 text-gray-600">
                            +91
                        </span>
                        <input
                            {...register("phone", { required: true, pattern: /^[0-9]{10}$/ })}
                            type="tel"
                            className="w-full p-2 border border-gray-300 rounded-r focus:outline-none focus:ring-2 focus:to-blue-300"
                            placeholder="Phone Number"
                        />
                    </div>
                    {errors.phone && errors.phone.type === "required" && (
                        <span className="text-red-500 text-xs lg:text-sm">This field is required</span>
                    )}
                    {errors.phone && errors.phone.type === "pattern" && (
                        <span className="text-red-500 text-xs lg:text-sm">Invalid phone number</span>
                    )}
                </div>

                <div className="mt-4">
                    <label className="block text-sm lg:text-base font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                        type="email"
                        className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:to-blue-300"
                        placeholder="Email"
                    />
                    {errors.email && errors.email.type === "required" && (
                        <span className="text-red-500 text-xs lg:text-sm">This field is required</span>
                    )}
                    {errors.email && errors.email.type === "pattern" && (
                        <span className="text-red-500 text-xs lg:text-sm">Invalid email address</span>
                    )}
                </div>

                <div className="mt-4">
                    <label className="block text-sm lg:text-base font-medium text-gray-700">
                        Describe Your Problem
                    </label>
                    <textarea
                        {...register("problemDetails")}
                        className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:to-blue-300"
                        rows="2"
                        placeholder="Please describe your problem..."
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="mt-6 w-full bg-mediumBlue  text-white py-2 rounded font-semibold text-sm sm:text-base lg:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Send a message
                </button>
            </form>
        </div>
    );
};

export default Form;
