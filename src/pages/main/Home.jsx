import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


function Home() {
    return (
        <>
            <section className="min-h-screen w-4/5 mx-auto flex flex-row gap-10 items-center">
                <div className="w-3/5 flex flex-col gap-10">
                    <p className="text-7xl font-semibold text-lightBlack">
                        We create platform for a
                        <span className="text-lightBlue"> service-centric</span> future
                    </p>
                    <p className="text-2xl text-Gray pl-10 pr-10">
                        ~ We are a platform designed to access different services.
                        We are in the business to design smarter solutions and experiences
                        so our partners and their users can thrive.
                    </p>
                    <div className="flex gap-20 justify-center w-full">


                        <Link to="#" className="flex w-1/2 justify-center">
                            <Button className="bg-mediumBlue w-3/4">Get Started</Button>
                        </Link>
                        <Link to="#" className="w-1/2 flex justify-center">
                            <Button className="bg-mediumBlue w-3/4">Contact us</Button>
                        </Link>
                    </div>

                </div>
                <div className="w-2/5 flex justify-center">
                    <img src="/hero_front.gif" alt="hero" className="rounded-xl shadow-xl" />

                </div>
            </section>
            
        </>

    )
}

export default Home
