import Hours from '../assets/Card124Hours.png'
import CardImage from '../assets/CardImage.png'
import { Icon } from '@iconify/react'
import LineChart from '../components/LineGraph.jsx'
import { CardHeading, CardPara } from '../Constants/constants.js'

export default function WhatIsTwinly() {
    return (
        <div className='mt-20'>
            <h1 className=' flex text-[48px] justify-center items-center font-light tracking-wider leading-snug text-3xl text-white'>What is Twinly</h1>
            <div className="flex gap-8 justify-center -ml-60 mt-10">

                {/* Column 1: Card 1 & 4 */}
                <div className="flex flex-col gap-8">
                    <div className="w-[362px] h-[295px] bg-[#E8E8E8] rounded-xl ml-40 shadow-2xl flex flex-col p-6">
                        <h1 className={CardHeading}>Your Always-On Virtual <br />Assistant</h1>
                        <p className={CardPara}>Twinly.ai serves as your 24/7 virtual assistant, actively converting leads and ensuring no opportunity is missed.</p>
                        <div className='flex justify-end items-center mt-4'>
                            <img src={Hours} alt="" className='w-20 h-20' />
                        </div>
                    </div>
                    <div className="w-[493px] h-[295px] bg-[#E8E8E8] rounded-xl ml-40 shadow-2xl"> <LineChart /> </div>
                </div>

                {/* Column 2: Card 2 & 5 */}
                <div className="flex flex-col gap-8">
                    <div className="w-[456px] h-[295px] bg-[#E8E8E8] rounded-xl -ml-34 shadow-2xl flex flex-col p-6">
                        <div>
                            <h1 className={CardHeading}>Organized Lead Management Hub</h1>
                            <p className={CardPara}>Twinly.ai provides an intuitive dashboard for streamlined lead management, keeping your leads organized and insights at your fingertips</p>
                        </div>
                        <div className='flex justify-center items-center mt-2 p-2 '>
                            <div className='bg-white w-[280px] h-[120px] rounded-2xl flex flex-col p-2'><h1 className='font-medium tracking-wide flex justify-start p-2'>Bot Name</h1>
                                <ul className='flex flex-row gap-6 text-xs justify-center -ml-4 mb-2 '>

                                    <li className='text-[#0F5265] font-bold'>Service Leads</li>
                                    <li className='text-[#0F5265] font-extralight'>Paid Leads</li>
                                    <li className='text-[#0F5265] font-extralight'>Others</li>
                                </ul>
                                <hr className='ml-2 w-[250px] h-[2px] bg-gradient-to-r from-[#0F5265] to-gray-500/20 border-0 rounded' />
                                <div className='space-x-2 mt-2 ml-2'>
                                    <button className='border-1 border-[#0F5265] bg-[#0F5265] text-white font-light rounded-xl px-4'>Q1</button>
                                    <button className=' font-light border-1 border-[#0F5265] text-[#0F5265] rounded-xl px-4'>Q2</button>
                                    <button className='font-light border-1 border-[#0F5265] text-[#0F5265] rounded-xl px-4'>Q3</button>
                                    <button className='font-light border-1 border-[#0F5265] text-[#0F5265] rounded-xl px-4'>Q4</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[325px] h-[295px] bg-[#E8E8E8] rounded-xl shadow-2xl p-6">
                        <div>
                            <h2 className={`${CardHeading} capitalize`}>ai in your control</h2>
                            <p className={`${CardPara} mt-4`}>Disable Ai anytime to personally <br /> engage, providing a seamless blend <br />of automation and customization</p>
                        </div>
                        <div className='gap-2 flex justify-center items-center mt-8'>
                            <button className='bg-[#0F5265] text-white font-light rounded-lg px-4 py-2 text-xs whitespace-nowrap'>Disable AI</button>
                            <button className='flex gap-2 items-center bg-[#0F5265] text-white font-light rounded-lg px-4 py-2 text-xs whitespace-nowrap'><span><Icon icon='ri:eye-line' /></span>Preview AI Chatbot</button>
                        </div>
                    </div>
                </div>

                {/* Column 3: Card 3 (Tall) */}
                <div className="w-[456px] h-[623px] bg-[#E8E8E8] rounded-xl shadow-2xl flex flex-col p-6">
                    <h1 className={CardHeading}>Flexible & Personalized Engagement</h1>
                    <p className={CardPara}>Take control with Twinly.ai – disable AI anytime to engage personally, striking the perfect balance between automation and customization.</p>
                    <div className="flex flex-col justify-between bg-[#0F5265] w-[300px] h-[375px] rounded-2xl p-4 self-center mt-12">

                        {/* Top Section */}
                        <div className="flex flex-col items-center">

                            {/* Image with online indicator */}
                            <div className="relative w-[100px] h-[100px] mb-2 mt-6">
                                <img
                                    src={CardImage}
                                    alt="Profile"
                                    className="w-full h-full object-cover rounded-full"
                                />
                                {/* Online dot */}
                                <span className="absolute top-2 right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full" />
                            </div>

                            {/* Name & Role */}
                            <h1 className="text-white font-medium tracking-widest leading-tight text-center">
                                Cameron Williamson
                            </h1>
                            <p className="text-white font-extralight tracking-wide text-sm text-center">
                                Criminal Lawyer
                            </p>
                        </div>

                        {/* Icons pinned to bottom */}
                        <div className="flex justify-center gap-4 text-white text-2xl mb-8">
                            <Icon icon="line-md:calendar" />
                            <Icon icon="line-md:email-filled" />
                            <Icon icon="fluent:video-person-call-16-filled" />
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}