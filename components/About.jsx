import { assets, infoList, toolsData } from "@/assets/assets"
import Image from "next/image"
import { motion } from "motion/react"


const About = ({ isDarkMode }) => {
    return (
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                id="about"
                className="w-full px-4 sm:px-6 md:px-8 lg:px-[12%] py-10 scroll-mt-20">
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center mb-2 text-base sm:text-lg font-ovo">Introduction</motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-3xl sm:text-4xl md:text-5xl font-ovo">About me</motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex w-full flex-col lg:flex-row items-center gap-10 sm:gap-16 lg:gap-20 my-10 sm:my-16 lg:my-20">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="w-48 sm:w-64 md:w-80 rounded-3xl max-w-none">
                    <Image src={assets.user_image} alt="user" className="w-full rounded-3xl" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex-1">
                    <p className="mb-6 sm:mb-8 lg:mb-10 max-w-2xl font-ovo text-sm sm:text-base leading-relaxed">I am an experienced Fullstack Developer with over 2 years of professional expertise in the field.
                        Throughout my career, I have had the privilege of collaborating with prestigious developers,
                        contributing to the success of projects.
                    </p>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-2xl">
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <motion.li
                                whileHover={{ scale: 1.05 }}
                                className="border-[0.5px] border-gray-400 rounded-xl p-4 sm:p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50" key={index}>
                                <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-6 sm:w-7 mt-2 sm:mt-3" />
                                <h3 className="my-3 sm:my-4 font-semibold text-gray-700 dark:text-white text-sm sm:text-base">{title}</h3>
                                <p className="text-gray-600 text-xs sm:text-sm dark:text-white/80 leading-relaxed">{description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>

                    <motion.h4
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.3, delay: 0.5 }}
                        className="my-4 sm:my-6 text-gray-700 font-ovo dark:text-white/80 text-base sm:text-lg">Tools I use</motion.h4>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.5 }}
                        className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-5">
                        {toolsData.map((tool, index) => (
                            <motion.li
                                whileHover={{ scale: 1.1 }}
                                className="flex items-center justify-center w-10 sm:w-12 md:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                                key={index}>
                                <Image src={tool} alt="Tool" className="w-4 sm:w-5 md:w-7" />
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About