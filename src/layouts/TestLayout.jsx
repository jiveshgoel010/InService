/* eslint-disable no-unused-vars */
import { Outlet } from 'react-router-dom';
import Footer from '../components/main/Footer';
import Home from '@/pages/main/Home';
import { Pickaxe } from 'lucide-react';
import { Gem } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/main/Navbar';

const TestLayout = () => {
    return (
        <>
            <Navbar/>
          
            <main>
                <Outlet />
            </main>

            {/* <Footer /> */}
        </>
    );
}

export default TestLayout;