import { assets } from "@/assets/assets"
import Image from "next/image"
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 px-4 sm:px-0">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image src={assets.profile_img} alt="img" className="rounded-full w-24 h-24 sm:w-32 sm:h-32 object-cover" />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-lg sm:text-xl md:text-2xl mb-3 font-ovo">Hi! I'm Ifechukwu Peter Udechukwu         <Image src={assets.hand_icon} alt="icon" className="w-5 sm:w-6" />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-2xl sm:text-3xl md:text-6xl lg:text-[66px] font-ovo leading-tight">Fullstack web developer.</motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-ovo text-sm sm:text-base px-4">I am a fullstack developer from Enugu, Nigeria with 2 years of experience.</motion.p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-4 w-full">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact" className="w-full sm:w-auto px-6 sm:px-10 py-3 border border-white rounded-full bg-black text-white flex items-center justify-center gap-2 dark:bg-transparent text-sm sm:text-base">contact me         <Image src={assets.right_arrow_white} alt="img" className="w-4" />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/sample-resume.pdf" download className="w-full sm:w-auto px-6 sm:px-10 py-3 border rounded-full border-gray-500 flex items-center justify-center gap-2 dark:text-black bg-white/80 text-sm sm:text-base">my resume         <Image src={assets.download_icon} alt="img" className="w-4" />
        </motion.a>
      </div>
    </div>
  )
}

export default Header