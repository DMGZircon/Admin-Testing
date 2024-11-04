import { useState } from "react";
import { About } from "../components/About";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { RiseLoader } from "react-spinners";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export const Homepage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate(); // Initialize navigate

    const handleAdminLogin = () => {
        navigate('/admin'); // Navigate to the admin page
    };

    return (
        <>
            {isLoading &&
                <>
                    <div className="z-[55] h-lvh w-lvw fixed top-[-20px] flex justify-center items-center">
                        <RiseLoader color="#f5f5f5" size={24} margin={5} />
                    </div>
                    <div className="h-lvh w-lvw fixed bg-neutral-500 top-0 z-50 bg-opacity-70"></div>
                </>}

            <Header />
            <Hero setIsLoading={setIsLoading} />
            <About />

            {/* Admin Login Button */}
            <div className="flex justify-center my-4">
                <button onClick={handleAdminLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
                    Admin Login
                </button>
            </div>

            <Footer />
        </>
    );
}
