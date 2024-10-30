
import { Outlet } from 'react-router-dom';
import Navbar from '../components/landingPage/Navbar';
import Footer from '../components/landingPage/Footer';

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default MainLayout;