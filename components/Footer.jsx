import { assets } from "@/assets/assets"
import Image from "next/image"

const Footer = ({isDarkMode}) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <h1 className="text-3xl font-outfit font-bold tracking-tight ">
          Ife<span className="text-pink-600">Chukwu.</span>
        </h1>
        <div className="flex w-max items-center gap-2 mx-auto ">
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="logo" className="w-6" />
          peterifechukwuudechukwu@gmail.com

        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© {new Date().getFullYear()} IfeChukwu UdeChukwu. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li className=" hover:underline hover:text-green-900 dark:hover:text-green-400"><a href="https://github.com/Ifechukwu-udechukwu" target="_blank" rel="noopener noreferrer">Github</a></li>
          <li className=" hover:underline hover:text-green-900 dark:hover:text-green-400"><a href="https://www.linkedin.com/in/ifechukwu-udechukwu-10101a375" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li className=" hover:underline hover:text-green-900 dark:hover:text-green-400"><a href="https://wa.me/2348060311892" target="_blank" rel="noopener noreferrer">Whatsapp</a></li>


        </ul>
      </div>

    </div>
  )
}

export default Footer