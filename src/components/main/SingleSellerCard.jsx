/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Star } from 'lucide-react'

const SingleSellerCard = (
    { sellerImg = "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600",
        sellerName = "Seller name",
        sellerDescription = "Seller Description",
        sellerTags = ["Tag 1", "Tag 2", "Tag 3"]
    }) => {
        return (
            <div className="border border-black m-2 grid justify-center rounded-md sm:grid-cols-2 md:w-1/3 md:grid-cols-1 lg:grid-cols-2 lg:w-1/2">
                <div className="flex">
                    <img src={sellerImg}
                        alt=""
                        className='object-cover self-center rounded-t-md lg:h-full lg:w-full lg:rounded-l-md' />
                </div>
                <div className="p-2 flex flex-col gap-2">
                    <h2 className='text-sm font-medium'>{sellerName}</h2>
                    <p className='text-xs flex-wrap'>{sellerDescription}</p>
                    <div className="flex">
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                    </div>
                    <div className="flex flex-wrap gap-2 text-[12px] sm:mt-4 lg:mt-4">
                        {sellerTags.map((tag) => (
                            <span key={tag} className='bg-gray-300 p-1 rounded-md'>{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        )
}

export default SingleSellerCard