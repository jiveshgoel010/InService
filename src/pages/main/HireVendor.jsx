/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Lightbulb, Timer, Tag, Calendar } from 'lucide-react';

function HireVendor() {
    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();
    const [paymentType, setPaymentType] = useState('hourly');
    const defaultHourlyRate = 50;

    const onSubmit = (data) => {

        console.log(data);
        reset();
    };

    const validateMinWords = (value) => {
        const words = value.trim().split(/\s+/);
        return words.length >= 10 || '* Contract description must be at least 10 words';
    };

    const selectedPaymentType = watch('paymentType', 'hourly');
    const termsAccepted = watch('terms', false);

    return (
        <div className="my-10 px-4 sm:px-6 lg:px-8">
            <div className=" w-full sm:w-[92%] mx-auto border border-gray-300 bg-white rounded-xl">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7 p-5">
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-medium">
                        Send an offer
                    </p>
                    <p className="p-2 bg-gray-100 rounded-lg flex gap-3 text-sm md:text-base">
                        <Lightbulb />
                        <span>Did you know? You can send up to 10 offers a day.</span>
                    </p>

                    <p className="text-lg sm:text-xl md:text-2xl font-medium">
                        Work Details
                    </p>
                    <p className="text-base sm:text-lg md:text-xl font-medium">
                        Sending To: <span className="text-mediumBlue text-base sm:text-lg pl-3">Jivi Goel | Design Architect</span>
                    </p>

                    <div className="flex flex-col gap-2">
                        <p className="text-base sm:text-lg font-medium">Contract Title</p>
                        <input
                            type="text"
                            placeholder="Enter the contract title"
                            className="w-full md:w-3/5 p-2 border border-gray-300 rounded-lg"
                            {...register('contractTitle', { required: '* Contract title is required' })}
                        />
                        {errors.contractTitle && <p className="text-red-500 text-xs">{errors.contractTitle.message}</p>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-base sm:text-lg font-medium">Contract Description</p>
                        <textarea
                            placeholder="Enter the description"
                            className="w-full md:w-3/5 p-2 border border-gray-300 rounded-lg"
                            {...register('contractDescription', {
                                required: '* Contract description is required',
                                validate: validateMinWords
                            })}
                        />
                        {errors.contractDescription && <p className="text-red-500 text-xs">{errors.contractDescription.message}</p>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-base sm:text-lg font-medium">Payment Type</p>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    value="hourly"
                                    onClick={() => setPaymentType('hourly')}
                                    {...register('paymentType')}
                                    defaultChecked
                                />
                                Pay by Hour
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    value="fixed"
                                    onClick={() => setPaymentType('fixed')}
                                    {...register('paymentType')}
                                />
                                Pay a fixed price
                            </label>
                        </div>
                    </div>

                    {selectedPaymentType === 'hourly' && (
                        <div className="flex flex-col gap-2">
                            <p className="text-base sm:text-lg font-medium flex gap-3">Hourly Rate (in Rs.) <Timer /></p>
                            <input
                                type="number"
                                placeholder="Enter the hourly rate"
                                className="w-full md:w-1/5 p-2 border border-gray-300 rounded-lg"
                                defaultValue={defaultHourlyRate}
                                {...register('hourlyRate', { required: '* Hourly rate is required' })}
                            />
                            {errors.hourlyRate && <p className="text-red-500 text-xs">{errors.hourlyRate.message}</p>}
                        </div>
                    )}

                    {selectedPaymentType === 'fixed' && (
                        <div className="flex flex-col gap-2">
                            <p className="text-base sm:text-lg font-medium flex gap-3">Fixed Price (in Rs.) <Tag /></p>
                            <input
                                type="number"
                                placeholder="Enter the fixed price"
                                className="w-full md:w-1/5 p-2 border border-gray-300 rounded-lg"
                                {...register('fixedPrice', { required: '* Fixed price is required' })}
                            />
                            {errors.fixedPrice && <p className="text-red-500 text-xs">{errors.fixedPrice.message}</p>}
                        </div>
                    )}

                    <div className="flex flex-col gap-2">
                        <p className="text-base sm:text-lg font-medium flex gap-3">Start Date <Calendar /></p>
                        <input
                            type="date"
                            className="w-full md:w-1/5 p-2 border border-gray-300 rounded-lg"
                            {...register('startDate', { required: '* Start date is required' })}
                        />
                        {errors.startDate && <p className="text-red-500 text-xs">{errors.startDate.message}</p>}
                    </div>

                    <div className="flex items-center gap-2 text-sm md:text-base">
                        <input
                            type="checkbox"
                            {...register('terms', { required: '* You must accept the terms and conditions' })}
                        />
                        <span>Yes, I understand and agree to the <span className="text-mediumBlue underline">InService Terms of Service</span>, including the <span className="text-mediumBlue underline">User Agreement and Privacy Policy</span></span>
                    </div>
                    {errors.terms && <p className="text-red-500 text-xs">{errors.terms.message}</p>}

                    <button
                        type="submit"
                        className={`w-full md:w-1/5 mt-4 px-4 py-2 rounded-lg ${termsAccepted ? 'bg-mediumBlue text-white ' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                        disabled={!termsAccepted}
                    >
                        Send Offer
                    </button>
                </form>
            </div>
        </div>
    );
}

export default HireVendor;
