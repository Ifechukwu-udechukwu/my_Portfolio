import { assets, workData } from "@/assets/assets"
import Image from "next/image"
import { motion } from "motion/react"


const Work = ({ isDarkMode }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="work" className="w-full px-4 sm:px-6 md:px-8 lg:px-[12%] py-10 scroll-mt-20">
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center mb-2 text-base sm:text-lg font-ovo">My portfolio</motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center text-3xl sm:text-4xl md:text-5xl font-ovo">My latest work</motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-center max-w-2xl mx-auto mt-5 mb-8 sm:mb-12 font-ovo text-sm sm:text-base px-4">
                Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in fullstack development.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-8 sm:my-10 gap-4 sm:gap-5 dark:text-black">
                {workData.map((project, index) => (
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        key={index}
                        className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
                        style={{ backgroundImage: `url(${project.bgImage})` }}>
                        <div className="bg-white w-11/12 sm:w-10/12 rounded-md absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 py-2 sm:py-3 px-3 sm:px-5 flex items-center justify-between duration-500 group-hover:bottom-5 sm:group-hover:bottom-7">
                            <div className="flex-1 min-w-0">
                                <h2 className="font-semibold text-sm sm:text-base truncate">{project.title}</h2>
                                <p className="text-xs sm:text-sm text-gray-700 line-clamp-2">{project.description}</p>
                            </div>
                            <div className="border rounded-full border-black w-7 sm:w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition ml-2">
                                <a href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <Image src={assets.send_icon} alt="icon" className="w-3 sm:w-5" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            {/* <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            href="" className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover">Show more
                <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt="icon" className="w-4"/>
            </motion.a> */}
        </motion.div>
    )
}

export default Work