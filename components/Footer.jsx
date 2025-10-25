import { assets } from "@/assets/assets"
import Image from "next/image"

const Footer = ({isDarkMode}) => {
  return (
    <div className="mt-16 sm:mt-20">
      <div className="text-center px-4">
        <h1 className="text-2xl sm:text-3xl font-outfit font-bold tracking-tight ">
          Ife<span className="text-pink-600">Chukwu.</span>
        </h1>
        <div className="flex flex-col sm:flex-row items-center gap-2 mx-auto mt-2 px-4">
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="logo" className="w-5 sm:w-6" />
          <span className="text-sm sm:text-base break-all">peterifechukwuudechukwu@gmail.com</span>
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-4 sm:mx-[10%] mt-8 sm:mt-12 py-4 sm:py-6">
        <p className="text-sm sm:text-base">© {new Date().getFullYear()} IfeChukwu UdeChukwu. All rights reserved.</p>
        <ul className="flex items-center gap-6 sm:gap-10 justify-center mt-4 sm:mt-0">
          <li className=" hover:underline hover:text-green-900 dark:hover:text-green-400"><a href="https://github.com/Ifechukwu-udechukwu" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base">Github</a></li>
          <li className=" hover:underline hover:text-green-900 dark:hover:text-green-400"><a href="https://www.linkedin.com/in/ifechukwu-udechukwu-10101a375" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base">LinkedIn</a></li>
          <li className=" hover:underline hover:text-green-900 dark:hover:text-green-400"><a href="https://wa.me/2348060311892" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base">Whatsapp</a></li>
        </ul>
      </div>

    </div>
  )
}

export default Footer