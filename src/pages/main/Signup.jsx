/* eslint-disable no-unused-vars */
import SignupForm from "@/components/landingPage/SignupForm"
// 

function Signup() {
  return (
    <div className="w-full min-h-screen flex justify-center">
        <div className="w-[45%] flex justify-center items-center">
            <img src="/Signup.gif" alt="nature" className="mx-auto rounded-lg shadow-lg" />

        </div>
        <div className="w-[55%] my-auto">
            <SignupForm />
            
        </div>
      
    </div>
  )
}

export default Signup
