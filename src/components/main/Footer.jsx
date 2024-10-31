import { FaTelegram, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { Button } from '../ui/button';

const Footer = () => {
    const solutions = ["Web Design", "App Design", "Branding", "Web Development", "App Development", "Digital Marketing"];
    const company = ["Our Works", "About InService", "Our Blogs", "Contact Us", "Book a consultation", "Get a quote"];

    return (
        <footer className="w-full bg-White">
            <div className="bg-black text-White p-4 flex justify-center">
                <div className="w-full lg:w-4/5 flex flex-col lg:flex-row gap-10 mt-10 mb-10">
                    <div className="lg:w-1/2 flex flex-col gap-10">
                        <div>
                            <p className="text-2xl lg:text-3xl font-bold">Solutions</p>
                            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-300">
                                {solutions.map((solution, index) => (
                                    <li key={index} className="hover:text-lightBlue">{solution}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="text-2xl lg:text-3xl font-bold">Company</p>
                            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-300">
                                {company.map((comp, index) => (
                                    <li key={index} className="hover:text-lightBlue">{comp}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="lg:w-1/2 flex flex-col lg:items-start gap-6">
                        <img src="/logo.svg" alt="logo" className="aspect-ratio"/>
                        
                        <Button className="mt-4 mx-auto text-White bg-mediumBlue w-2/3 lg:w-1/3 hover:text-lightBlack hover:bg-White">Get Started</Button>
                    </div>
                </div>
            </div>

            <div className="bg-White text-black p-4 mt-4 flex justify-center">
                <div className="w-full lg:w-4/5">
                    <div className="bg-White text-gray-800 py-8">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
                                <div className="flex flex-col items-center md:items-start">
                                    <div className="border-l-2 border-gray-300 pl-4">
                                        <p>5 Brayford Square</p>
                                        <p>London, E1 0SG</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center md:items-start">
                                    <div className="border-l-2 border-gray-300 pl-4">
                                        <p>T: +44 20 8144 9888</p>
                                        <p>E: mail@inservice.com</p>
                                    </div>
                                </div>
                                <div className="flex space-x-6">
                                    <a href="#" className="flex flex-col items-center text-gray-600 hover:text-gray-900">
                                        <FaTelegram size={30} />
                                        <p className="mt-1 text-center">Telegram</p>
                                    </a>
                                    <a href="#" className="flex flex-col items-center text-gray-600 hover:text-gray-900">
                                        <FaWhatsapp size={30} />
                                        <p className="mt-1 text-center">WhatsApp</p>
                                    </a>
                                    <a href="#" className="flex flex-col items-center text-gray-600 hover:text-gray-900">
                                        <FaInstagram size={30} />
                                        <p className="mt-1 text-center">Instagram</p>
                                    </a>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-around mt-8 text-sm text-gray-600 border-t border-gray-200 pt-4">
                                <p>&copy; 2024 Inservice LTD</p>
                                <a href="#" className="hover:text-gray-900">Terms & Conditions</a>
                                <a href="#" className="hover:text-gray-900">Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
