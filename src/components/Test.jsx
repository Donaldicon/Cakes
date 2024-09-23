import React from 'react';

const Test = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            {/* Navbar */}
            <nav className=" w-full bg-white shadow-md p-4">
                <ul className="flex justify-center space-x-4">
                    <li className="cursor-pointer" onClick={() => scrollToSection('home')}>Home</li>
                    <li className="cursor-pointer" onClick={() => scrollToSection('about')}>About</li>
                    <li className="cursor-pointer" onClick={() => scrollToSection('gallery')}>Gallery</li>
                    <li className="cursor-pointer" onClick={() => scrollToSection('contact')}>Contact</li>
                </ul>
            </nav>

            {/* Sections */}
            <section id="home" className="min-h-screen bg-gray-200 flex justify-center items-center">
                <h1 className="text-5xl">Home Section</h1>
            </section>

            <section id="about" className="min-h-screen bg-gray-300 flex justify-center items-center">
                <h1 className="text-5xl">About Section</h1>
            </section>

            <section id="gallery" className="min-h-screen bg-gray-400 flex justify-center items-center">
                <h1 className="text-5xl">Gallery Section</h1>
            </section>

            <section id="contact" className="min-h-screen bg-gray-500 flex justify-center items-center">
                <h1 className="text-5xl">Contact Section</h1>
            </section>
        </div>
    );
};

export default Test;
