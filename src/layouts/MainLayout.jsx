/* eslint-disable no-unused-vars */
import { Outlet } from 'react-router-dom';
import Navbar from '../components/main/Navbar';
import Footer from '../components/main/Footer';
import Home from '@/pages/main/Home';

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default MainLayout;