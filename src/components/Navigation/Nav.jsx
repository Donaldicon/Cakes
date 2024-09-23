import { useState } from "react";
import NavLinks from "./NavLinks";
import { AlignRight, X } from "lucide-react";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

  return (
    <>
        <nav className="w-1/3 flex justify-end">
            <div className="hidden w-full md:flex justify-between">
                <NavLinks />
            </div>
            <div className="md:hidden absolute right-0 top-7 pr-5">
                <button onClick={toggleNavbar}> {isOpen ? <X /> : <AlignRight />} </button>
            </div>
        </nav>
        { isOpen && (
            <div className="flex flex-col items-center basis-full">
                <NavLinks />
            </div>
        )}
    </>
  );
};

export default Nav;
