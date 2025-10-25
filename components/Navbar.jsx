import { assets } from "@/assets/assets"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const Navbar = ({ isDarkMode, setIsDarkMode }) => {

    const [isScroll, setIsScroll] = useState(false)

    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = "translateX(0)"
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = "translateX(100%)"
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    }, [])

    return (
        <>
            <div className="fixed top-0 right-0 -z-10 translate-y-[-80%] dark:hidden">
                <Image src={assets.header_bg_color} alt="icon" className="w-full" />
            </div>
            <nav className={`w-full fixed px-4 sm:px-5 lg:px-8 xl:px-[8%] py-3 sm:py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
                <a href="#top" className="text-2xl sm:text-3xl font-outfit font-bold tracking-tight ">
                    Ife<span className="text-pink-600">Chukwu.</span>
                </a>

                <ul className={`hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 rounded-full px-8 lg:px-12 py-3 ${isScroll ? "" : "bg-white/100 dark:bg-white/50 shadow-sm"} `}>
                    <li><a className="font-ovo text-sm lg:text-base" href="#top">Home</a></li>
                    <li><a className="font-ovo text-sm lg:text-base" href="#about">About me</a></li>
                    <li><a className="font-ovo text-sm lg:text-base" href="#services">Services</a></li>
                    <li><a className="font-ovo text-sm lg:text-base" href="#work">My Work</a></li>
                    <li><a className="font-ovo text-sm lg:text-base" href="#contact">Contact me</a></li>
                </ul>

                <div className="flex items-center gap-2 sm:gap-4">
                    <button onClick={() => setIsDarkMode(prev => !prev)}>
                        <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="icon" className="w-5 sm:w-6" />
                    </button>
                    <a href="#contact" className="hidden lg:flex items-center gap-2 xl:gap-3 px-6 xl:px-10 py-2 xl:py-2.5 border border-gray-500 rounded-full ml-2 xl:ml-4 font-ovo dark:border-white/50 text-sm xl:text-base">Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="icon" className="w-3" /></a>
                    <button className="block md:hidden ml-2 sm:ml-3" onClick={openMenu}>
                        <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="icon" className="w-5 sm:w-6" />
                    </button>
                </div>

                {/* mobile menu */}
                <ul
                    ref={sideMenuRef}
                    className="flex md:hidden flex-col gap-4 py-20 px-6 sm:px-10 fixed top-0 right-0 bottom-0 w-3/4 max-w-xs z-50 h-screen bg-rose-50 transition-transform duration-500 translate-x-full dark:bg-darkHover dark:text-white shadow-lg"
                >


                    <div className="absolute right-4 sm:right-6 top-6" onClick={closeMenu}>
                        <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="icon" className="w-5 cursor-pointer" />
                    </div>
                    <li><a className="font-ovo text-base sm:text-lg" onClick={closeMenu} href="#top">Home</a></li>
                    <li><a className="font-ovo text-base sm:text-lg" onClick={closeMenu} href="#about">About me</a></li>
                    <li><a className="font-ovo text-base sm:text-lg" onClick={closeMenu} href="#services">Services</a></li>
                    <li><a className="font-ovo text-base sm:text-lg" onClick={closeMenu} href="#work">My Work</a></li>
                    <li><a className="font-ovo text-base sm:text-lg" onClick={closeMenu} href="#contact">Contact me</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar