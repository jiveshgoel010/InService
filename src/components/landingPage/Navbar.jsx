
function Navbar() {
    return (
        <nav className=" m-4 mt-8 mb-8 flex justify-between items-center w-4/5 mx-auto bg-White border-b border-gray-300">
            <h2 className="w-1/5">LOGO</h2>
            <ul className="flex w-3/6 justify-around">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
            <div className="flex justify-end flex-grow">
                <button className="mr-2">Sign Up</button>
                <button>Sign In</button>
            </div>
            
        </nav>
    )
}

export default Navbar
