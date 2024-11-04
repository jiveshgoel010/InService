import SignupForm from "@/components/landingPage/SignupForm"
import { Pickaxe } from "lucide-react"
// 

function Signup() {
  return (
    // <div className="w-full min-h-screen flex justify-center">
    //     <div className="w-[45%] flex justify-center items-center">
    //         <img src="/Signup.gif" alt="nature" className="mx-auto rounded-lg shadow-lg" />

    //     </div>
    //     <div className="w-[55%] my-auto">
    //         <SignupForm />

    //     </div>

    // </div>

    <div className="w-full h-screen grid grid-cols-3">
      <div className="col-span-1 w-full h-screen flex flex-col justify-evenly bg-lightBlack p-10 overflow-y-hidden">
        <div>
          <h1 className='flex gap-2 text-2xl md:text-4xl font-bold text-white'>
            <Pickaxe className='h-[32px] w-[32px] md:h-[48px] md:w-[48px] text-white' />Inservice
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-white text-4xl font-bold flex flex-wrap">Start Your Journey With Us !</h1>
          <p className="text-gray-300">Discover the country&apos;s best community of freelancers and business owners.</p>
        </div>
        <div className="text-white">Cards</div>
      </div>
      <div className="col-span-2 w-full h-screen flex justify-center items-center overflow-auto">
        <SignupForm />
      </div>
    </div>
  )
}

export default Signup
