/* eslint-disable no-unused-vars */
import SingleSellerCard from '@/components/main/SingleSellerCard'
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
            
            <SingleSellerCard/>
            <SingleSellerCard
                sellerName={"Simple IT Solutions"} 
                sellerDescription={"seller descriptiom. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sint unde, vel cumque tempore dolorem et "}
                sellerTags={["App", "Development", "Engineering"]}/>
        </>
    )
}

export default SingleCategory