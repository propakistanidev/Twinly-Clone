import Logo1 from '../assets/Logo1.png'
import Logo2 from '../assets/Logo2.png'
import { margins } from '../Constants/constants'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            <div className="bg-[#0F5265">
                <div className={`flex flex-row gap-1 ${margins} justify-start items-center`}>
                    <img src={Logo1} alt="Logo1" className='w-[31.98px] h-[34.3px]' />
                    <img src={Logo2} alt="Logo2" className='w-[76.21px] h-[25.44px] ' />
                </div>
                <nav className='flex justify-center items-center -mt-[32px] font-medium text-white'>
                    <ul className=' flex flex-row gap-20'>
                        <li>Home</li>
                        <li>Features</li>
                        <li>Blog</li>
                        <li>Partners</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}