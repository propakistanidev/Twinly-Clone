// import Logo1 from '../assets/Logo1.png'
// import Logo2 from '../assets/Logo2.png'
// import { margins } from '../Constants/constants'
// import { Link } from 'react-router-dom'

// export default function NavBar() {
//     return (
//         <div>
//             <div className="bg-primary w-full relative">
//                 <div className={`flex flex-col md:flex-row items-center justify-between py-4 ${margins} md:mt-4 lg:mt-8`}>
//                     {/* Logo Section */}
//                     <div className="flex flex-row gap-1 justify-start items-center">
//                         <img src={Logo1} alt="Logo1" className='w-6 h-7 sm:w-7 sm:h-8 md:w-8 md:h-9' />
//                         <img src={Logo2} alt="Logo2" className='w-16 h-5 sm:w-18 sm:h-6 md:w-20 md:h-7' />
//                     </div>

//                     {/* Navigation - Hidden on mobile, visible on larger screens */}
//                     <nav className='hidden md:flex justify-center items-center w-full font-medium text-white'>
//                         <ul className="flex flex-row space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12">
//                             <li className="cursor-pointer hover:text-accent transition-colors">Home</li>
//                             <li className="cursor-pointer hover:text-accent transition-colors">Features</li>
//                             <li className="cursor-pointer hover:text-accent transition-colors">Blog</li>
//                             <li className="cursor-pointer hover:text-accent transition-colors">Partners</li>
//                         </ul>
//                     </nav>

//                     {/* Mobile Menu Button */}
//                     <button className="md:hidden text-white p-2">
//                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                         </svg>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }
import Logo1 from '../assets/Logo1.png'
import Logo2 from '../assets/Logo2.png'
import { margins } from '../Constants/constants'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            <div className="bg-primary w-full relative">
                <div className='w-1/2 flex items-center justify-between py-4 md:mt-4 md:ml-30 lg:mt-8'>
                    {/* Logo Section */}
                    <div className="flex flex-row gap-1 items-center">
                        <img src={Logo1} alt="Logo1" className='w-6 h-7 sm:w-7 sm:h-8 md:w-8 md:h-9' />
                        <img src={Logo2} alt="Logo2" className='w-16 h-5 sm:w-18 sm:h-6 md:w-20 md:h-7' />
                    </div>

                    {/* Navigation - Hidden on mobile, centered on md and above */}
                    <nav className='w-1/2 hidden md:flex absolute md:ml-30 left-1/2 transform -translate-x-1/2 font-medium text-white md:mr-8'>
                        <ul className="flex flex-row space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12">
                            <li className="cursor-pointer hover:text-accent transition-colors">Home</li>
                            <li className="cursor-pointer hover:text-accent transition-colors">Features</li>
                            <li className="cursor-pointer hover:text-accent transition-colors">Blog</li>
                            <li className="cursor-pointer hover:text-accent transition-colors">Partners</li>
                        </ul>
                    </nav>

                    {/* Mobile Hamburger Button */}
                    <button className="md:hidden text-white p-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}