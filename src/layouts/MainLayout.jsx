/* eslint-disable no-unused-vars */
import { Outlet } from 'react-router-dom';
import Navbar from '../components/main/Navbar';
import Footer from '../components/main/Footer';
import Home from '@/pages/main/Home';
import { BackgroundBeams } from '@/components/ui/background-beams';

const MainLayout = () => {
    return (
        <>
            <div>
                <BackgroundBeams className="-z-10" />
                <Navbar />
                <main >
                    <Outlet />
                </main>
                {/* <Footer /> */}

            </div>
        </>
    );
}

export default MainLayout;