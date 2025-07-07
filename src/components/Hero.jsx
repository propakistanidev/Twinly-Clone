// import { margins } from '../Constants/constants'
// import { Link } from 'react-router-dom'
// import handIcon from '../assets/HeroSectionVectorHandIcon.png'
// import MobilePic from '../assets/HeroSectionMobileImage.png'
// export default function Hero() {
//     return (
//         <div className="flex flex-row ">
//             <div className={`flex flex-col gap-2 md:gap-5 tracking-wide ${margins} flex-[1]`}>
//                 <h1 className="capitalize text-[32px] ml-8 text-white lg:mt-6">Your AI-Powered Legal Assistant</h1>
//                 <h2 className="capitalize text-[24px] ml-8 text-white font-extralight lg:mt-6">Unlock Seamless Client Engagement</h2>
//                 <p className="text-[18px] text-white leading-7.5 font-extralight ml-8 lg:mt-6">Welcome to Twinly.ai, where innovation meets legal <br /> excellence. Supercharge your online presence and client<br /> interactions with our cutting-edge AI bot designed exclusively<br /> for legal professionals.</p>
//                 {/* Flex Col Div */}
//                 <div className='flex flex-col gap-4 ml-8'>
//                     {/* Image Div */}
//                     <div className='flex flex-row gap-4 mt-4'>
//                         <img src={handIcon} alt="Hand Icon" className='w-[65px] h-[107px] -mt-1' />
//                         <div className='flex flex-col'><h2 className='text-[24px] text-white capitalize mb-1 '>Sales Cycle Trained</h2>
//                             <p className='text-[16px] text-white font-extralight leading-7.5 mt-2'>Never miss a potential client, and convert leads into loyal clientele with a<br /> seamlessly guided sales journey.</p></div>
//                     </div>

//                     <div>
//                         <button className='px-6 py-2 rounded-xl shadow-4xl bg-gradient-to-b from-[#F5D794] to-[#FFFFFF]/90 text-[#4D4D4D] font-medium text-md'>Try Scheduling</button>
//                     </div>
//                 </div>
//             </div>

//             <div className='flex flex-row  bg-[#E8E8E8] w-[500px] h-[600px] gap-8 -mt-7 rounded-4xl items-center justify-center mr-50'>
//                 <img src={MobilePic} className='drop-shadow-8xl w-[356px] h-[563.97px] -ml-8' />

//                 {/* Buttons Section */}
//                 <div className='flex flex-col justify-between items-center w-1/3 h-full'>
//                     <button className='bg-[#0F5265] rounded-2xl  text-white px-6 py-3 mr-6 mt-[20px] '>Book Demo</button>
//                     <div className='flex flex-col gap-4 whitespace-nowrap mb-10 mr-20'>
//                         <p className='flex text-sm font-bold text-[#4D4D4D] items-center justify-center-safe mr-8'>Explore the Latest Features</p>
//                         <button className='rounded-full bg-white shadow-2xl text-[#0F5265] px-6 py-3 capitalize mr-6'>🚀 elevate your practice</button>
//                         <button className='rounded-full bg-white shadow-2xl text-[#0F5265] px-6 py-3 capitalize mr-6'>🌐 Integration Made Easy</button>
//                         <button className='rounded-full bg-white shadow-2xl text-[#0F5265] px-6 py-3 capitalize mr-6'>🔒 secure and compliant</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
import { margins } from '../Constants/constants'
import { Link } from 'react-router-dom'
import handIcon from '../assets/HeroSectionVectorHandIcon.png'
import MobilePic from '../assets/HeroSectionMobileImage.png'

export default function Hero() {
    return (
        <div className="flex flex-col md:flex-row">
            {/* Left Side: Text Content */}
            <div className={`flex flex-col gap-2 md:gap-5 tracking-wide w-full flex-[1]`}>
                <h1 className="capitalize text-[28px] md:text-[32px] ml-4 text-white mt-4 md:mt-6 md:ml-30">
                    Your AI-Powered Legal Assistant
                </h1>
                <h2 className="capitalize text-[20px] md:text-[24px] ml-4 text-white font-extralight md:ml-30">
                    Unlock Seamless Client Engagement
                </h2>
                <p className="text-[16px] md:text-[18px] text-white leading-7.5 font-extralight ml-4 md:ml-30">
                    Welcome to Twinly.ai, where innovation meets legal <br className="hidden md:block" />
                    excellence. Supercharge your online presence and client<br className="hidden md:block" />
                    interactions with our cutting-edge AI bot designed exclusively<br className="hidden md:block" />
                    for legal professionals.
                </p>

                {/* Inner Flex Col Div */}
                <div className='flex flex-col gap-4 ml-4 md:ml-30 lg:ml-30'>
                    {/* Image + Text Row */}
                    <div className='flex flex-row gap-4 mt-4'>
                        <img src={handIcon} alt="Hand Icon" className='w-[65px] h-[107px] -mt-1' />
                        <div className='flex flex-col'>
                            <h2 className='text-[20px] md:text-[24px] text-white capitalize mb-1'>
                                Sales Cycle Trained
                            </h2>
                            <p className='text-[14px] md:text-[16px] text-white font-extralight leading-7.5 mt-2'>
                                Never miss a potential client, and convert leads into loyal clientele with a<br className="hidden md:block" />
                                seamlessly guided sales journey.
                            </p>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div>
                        <button className='px-6 py-2 rounded-xl shadow-4xl bg-gradient-to-b from-[#F5D794] to-[#FFFFFF]/90 text-[#4D4D4D] font-medium text-md'>
                            Try Scheduling
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Side: Image and Buttons */}
            <div className='flex flex-col md:flex-row bg-[#E8E8E8] w-full md:w-[550px] h-auto md:h-[600px] gap-8 md:-mt-16 xl:mr-14 mt-8 rounded-4xl items-center justify-center monitor:mr-50 px-4 py-6'>
                <img
                    src={MobilePic}
                    className='drop-shadow-8xl w-full md:w-[356px] h-auto md:h-[563.97px] md:-ml-8'
                    alt="Mobile Illustration"
                />

                {/* Buttons Section */}
                <div className='flex flex-col justify-between items-center w-full md:w-1/3 h-full mt-6 md:mt-0'>
                    <button className='bg-[#0F5265] rounded-2xl text-white px-6 py-3 mb-4 md:mr-6'>
                        Book Demo
                    </button>
                    <div className='flex flex-col gap-4 whitespace-nowrap mb-4 md:mb-10 md:mr-20'>
                        <p className='flex text-sm font-bold text-[#4D4D4D] items-center justify-center'>
                            Explore the Latest Features
                        </p>
                        <button className='rounded-full bg-white shadow-2xl text-[#0F5265] px-6 py-3 capitalize'>
                            🚀 elevate your practice
                        </button>
                        <button className='rounded-full bg-white shadow-2xl text-[#0F5265] px-6 py-3 capitalize'>
                            🌐 Integration Made Easy
                        </button>
                        <button className='rounded-full bg-white shadow-2xl text-[#0F5265] px-6 py-3 capitalize'>
                            🔒 secure and compliant
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}