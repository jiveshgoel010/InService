import SigninForm from "@/components/landingPage/SigninForm"

function Signin() {
  return (
    <div className="w-full min-h-screen flex justify-center">
        <div className="w-[45%] flex justify-center items-center">
            <img src="/Signin.gif" alt="nature" className="mx-auto rounded-lg shadow-lg" />

        </div>
        <div className="w-[55%] my-auto">
            <SigninForm />
            
        </div>
      
    </div>
  )
}

export default Signin