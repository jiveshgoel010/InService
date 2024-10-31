/* eslint-disable no-unused-vars */
import { Star } from 'lucide-react'
import { Pickaxe, Gem } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

// Tailwind CSS breakpoints
// sm	640px	
// md	768px	
// lg	1024px	
// xl	1280px	
// 2xl	1536px

const SingleCategory = () => {
    return (
        <>
            {/* Main */}
            <h1 className='text-2xl font-semibold text-center underline mb-4'>App Development</h1>

            <section className='flex flex-1 gap-4'>
                <div className="border border-black w-1/2 rounded-2xl grid grid-cols-2 gap-4">
                    {/* Image */}
                    <div className="">
                        <img src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt=""
                            className='object-cover w-full h-full rounded-l-2xl' />
                    </div>
                    {/* Info */}
                    <div className="flex flex-col gap-4 p-2">
                        <h2 className='text-lg font-semibold'>Seller name</h2>
                        <p className='text-sm'>seller descriptiom. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sint unde, vel cumque tempore dolorem et </p>
                        <div className="flex">
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                        </div>
                        <div className="flex flex-wrap gap-2 text-xs">
                            <span className='bg-gray-300 p-1 rounded-md'>App</span>
                            <span className='bg-gray-300 p-1 rounded-md'>Development</span>
                            <span className='bg-gray-300 p-1 rounded-md'>Engineering</span>
                        </div>
                    </div>
                </div>

            </section>



        </>
    )
}

export default SingleCategory