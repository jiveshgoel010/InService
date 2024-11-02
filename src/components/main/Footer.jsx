/* eslint-disable no-unused-vars */
import { Pickaxe } from 'lucide-react'
import SocialMediaLinks from './SocialMediaLinks'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '../ui/breadcrumb'
import { MoveRight } from 'lucide-react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-lightBlack text-white flex flex-col relative h-[750px]">
                {/* Content */}
                <div className="grid grid-cols-2  h-[550px]">
                    <div className="flex flex-col justify-center items-center">
                        <div className="w-full h-full flex justify-center items-center">
                            <h1 className='flex gap-2 text-4xl font-bold'><Pickaxe size={48} />Inservice</h1>
                        </div>
                        <div className="flex gap-4 w-full h-full justify-evenly items-start z-10 py-5">
                            <div className='flex flex-col'>
                                <h2 className="text-lg font-semibold mb-2">Resources</h2>
                                <ul className='text-sm space-y-1'>
                                    <li>Why Inservice?</li>
                                    <li>Customer Stories</li>
                                    <li>Blog</li>
                                    <li>Guides</li>
                                    <li>Webinars</li>
                                    <li>Glossary</li>
                                </ul>
                            </div>
                            <div className='flex flex-col'>
                                <h2 className="text-lg font-semibold mb-2">Company</h2>
                                <ul className='text-sm space-y-1'>
                                    <li>About us</li>
                                    <li>Careers</li>
                                    <li>Leadership</li>
                                    <li>Partners</li>
                                    <li>Press</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10 justify-start mt-16 items-center z-10">
                        <div className="flex flex-col items-center gap-2 justify-center">
                            <h1 className='text-2xl font-semibold'>Subscribe to our Newsletter</h1>
                            <div className="flex">
                                <input type="email" className='rounded-l-full py-2 px-4 h-[50px]' placeholder='Email...' />
                                <div className='flex justify-center items-center border-2 size-[50px] rounded-r-full'>
                                    <button className=''><MoveRight /></button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h1 className='text-2xl font-semibold'>Follow Us</h1>
                            <div className="">
                                <SocialMediaLinks />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 flex gap-10 px-10 py-6">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem className="text-white">
                                <BreadcrumbLink href="/">&copy; Inservice Pvt. Ltd.</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="text-gray-500">
                                |
                            </BreadcrumbSeparator>
                            <BreadcrumbItem className="text-white">
                                <BreadcrumbLink href="/components">Support</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="text-gray-500">
                                |
                            </BreadcrumbSeparator>
                            <BreadcrumbItem className="text-white">
                                <BreadcrumbLink href="/components">Privacy Policy</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="text-gray-500">
                                |
                            </BreadcrumbSeparator>
                            <BreadcrumbItem className="text-white">
                                <BreadcrumbLink href="/components">Terms of Use</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="text-gray-500">
                                |
                            </BreadcrumbSeparator>
                            <BreadcrumbItem className="text-white">
                                <BreadcrumbLink href="/components">Cookie Policy</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                {/* Bottom Image */}
                <div className="absolute bottom-0 w-full">
                    <img src="/footerFinalFinal.png" alt="" className="w-full object-cover" />
                </div>
            </footer>
        </div>

    )
}

export default Footer