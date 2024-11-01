import Form from "../../components/landingPage/Form";
import { Button } from "@/components/ui/button";

function Contact() {
    const benefits = [
        "Best Design",
        "Independent",
        "Competent",
        "Results Driven",
        "Problem Solving",
        "Transparent",
    ];

    return (
        <div className="w-full min-h-screen flex flex-col items-center ">
            <div className="w-11/12 lg:w-4/5 mb-20 flex flex-col mx-auto relative ">
                {/* Intro Section */}
                <div className="bg-lightBlack text-white rounded-t-md lg:h-[30vh] flex items-end p-5">
                    <p className="text-lg sm:text-xl md:text-2xl  w-2/4 font-bold">
                        All services brought to you in one place you are looking for!
                    </p>
                </div>

                {/* Information Section */}
                <div className="bg-lightBlue/50 rounded-b-md flex flex-col justify-center gap-8 p-5 sm:h-auto lg:h-[65vh]">
                    <p className="sm:text-lg text-xl font-semibold text-lightBlack/90 lg:w-2/5">
                        Ready to elevate your online presence? Drop us a message below, and write the query that you have for us!
                    </p>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold hover:underline w-full lg:w-2/4">
                        Let&apos;s chat: +44 20 8144 9888
                    </p>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold w-full lg:w-2/4">
                        Your benefits:
                    </p>

                    {/* Benefits List */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 ml-5 list-disc text-lightBlack/90 w-full lg:w-1/3">
                        {benefits.map((benefit, index) => (
                            <li key={index} className="hover:font-semibold">{benefit}</li>
                        ))}
                    </ul>
                </div>

                {/* Form Section */}
                <div className="relative  mx-auto lg:absolute lg:right-5 lg:top-5 mt-10 lg:mt-0 ">
                    <Form />
                </div>
            </div>

            {/* Call-to-Action Section */}
            <div className="w-11/12 lg:w-1/2 flex flex-col gap-10 bg-lightBlack rounded-md p-10 mb-20 items-center">
                <p className="text-white text-3xl sm:text-4xl md:text-5xl text-center font-semibold">
                    Let&apos;s Grow <span className="text-lightBlue">&</span> Solve Together
                </p>
                <Button className="bg-mediumBlue w-full sm:w-2/5 hover:bg-white hover:text-black">
                    Get Started
                </Button>
            </div>
        </div>
    );
}

export default Contact;
