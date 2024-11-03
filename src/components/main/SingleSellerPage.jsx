/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'


import CategoryGrid from './CategoryGrid'
import TopRatedClientCard from './TopRatedClientCard'
import TopRatedClientCarousel from './TopRatedClientCarousel'
import BecomeSeller from './BecomeSeller'
import CompetitorChecking from './CompetitorChecking'
import Banner from './Banner'



const SingleSellerPage = () => {
    return (
        <div>
            {/* single seller page */}
            <Banner />

            {/* Carousel */}
            
            <div className='mt-[30px] flex justify-center'>
                <CategoryGrid />
            </div>
            {/* <div className='mt-[30px] flex justify-center'>
                <TopRatedClientCard name="Jivi Goel" location="Monaco" servicename="Full Stack Developer :- Creating Solution for your problems" rate="300.0/hr" star="4.99" projects="9" description="I am a skilled full stack developer with expertise in both front-end and back-end technologies. I excel in building robust web applications from concept to deployment."/>
            </div> */}
            <div className='w-full'>
                {/* <TopRatedClientCarousel/> */}
            </div>
            <div className='w-full'>
                <BecomeSeller/>
            </div>
            <div className='w-full'>
               <CompetitorChecking/>
            </div>

        </div>
    )
}

export default SingleSellerPage