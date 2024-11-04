/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'

const cardsData = [
    { imageUrl: '/cleaning.jpeg', title: 'Cleaning' },
    { imageUrl: '/barber.jpeg', title: 'Barber' },
    { imageUrl: '/carwash.jpeg', title: 'Car Washing' },
    { imageUrl: '/catering.jpeg', title: 'Catering' },
    { imageUrl: '/photography.jpeg', title: 'Photography' },
    // { imageUrl: '/trainer.jpeg', title: 'Trainer' },
];

function BentoGrid() {
    return (
        <div className='rounded-2xl border'>
            {/* <section className=""> */}
            <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
                    <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
                        <Link to="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                            <img src="/cleaning.jpeg"
                                alt=""
                                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent z-10"></div>
                            <h3 className="z-10 text-2xl font-medium text-white absolute bottom-0 left-0 p-4 xs:text-xl md:text-2xl">Cleaning</h3>
                        </Link>
                    </div>
                    <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
                        <Link to="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                            <img src="/barber.jpeg"
                                alt=""
                                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent z-10"></div>
                            <h3 className="z-10 text-2xl font-medium text-white absolute bottom-0 left-0 p-4 xs:text-xl md:text-2xl">Barber</h3>
                        </Link>
                        <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                            <Link to="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                <img src="/carwash.jpeg"
                                    alt=""
                                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent z-10"></div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute bottom-0 left-0 p-4 xs:text-xl md:text-2xl">Car Washing</h3>
                            </Link>
                            <Link to="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                <img src="/catering.jpeg"
                                    alt=""
                                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent z-10"></div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute bottom-0 left-0 p-4 xs:text-xl md:text-2xl">Catering</h3>
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
                        <Link to="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                            <img src="/photography.jpeg"
                                alt=""
                                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent z-10"></div>
                            <h3 className="z-10 text-2xl font-medium text-white absolute bottom-0 left-0 p-4 xs:text-xl md:text-2xl">Photography</h3>
                        </Link>
                    </div>
                </div>
            </div>
            {/* </section> */}

        </div>
    )
}

export default BentoGrid
