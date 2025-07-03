import Hours from '../assets/Card124Hours.png'
export default function WhatIsTwinly() {
    return (
        <div>
            <h1>What is Twinly</h1>
            <div className="flex gap-8 m-20">

                {/* Column 1: Card 1 & 4 */}
                <div className="flex flex-col gap-8">
                    <div className="w-[362px] h-[295px] bg-[#E8E8E8] rounded-xl ml-40 shadow-2xl flex flex-col p-6">
                        <h1 className='text-[24px] font-medium tracking-wide'>Your Always-On Virtual <br />Assistant</h1>
                        <p className='text-[16px] font-extralight leading-7 tracking-wide'>Twinly.ai serves as your 24/7 virtual assistant, actively converting leads and ensuring no opportunity is missed.</p>
                        <div className='flex justify-end items-center mt-4'>
                            <img src={Hours} alt="" className='w-20 h-20' />
                        </div>
                    </div>
                    <div className="w-[493px] h-[295px] bg-[#E8E8E8] rounded-xl ml-40 shadow-2xl">Card 4</div>
                </div>

                {/* Column 2: Card 2 & 5 */}
                <div className="flex flex-col gap-8">
                    <div className="w-[456px] h-[295px] bg-[#E8E8E8] rounded-xl -ml-34 shadow-2xl flex flex-col p-6">
                        <div>
                            <h1 className='text-[24px] font-medium tracking-wide'>Organized Lead Management Hub</h1>
                            <p className='text-[16px] font-extralight leading-7 tracking-wide'>Twinly.ai provides an intuitive dashboard for streamlined lead management, keeping your leads organized and insights at your fingertips</p>
                        </div>
                        <div className='flex justify-center items-center mt-2 p-2'>
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
                    <div className="w-[325px] h-[295px] bg-[#E8E8E8] rounded-xl shadow-2xl">Card 5</div>
                </div>

                {/* Column 3: Card 3 (Tall) */}
                <div className="w-[456px] h-[623px] bg-[#E8E8E8] rounded-xl shadow-2xl">Card 3</div>

            </div>
        </div >
    )
}