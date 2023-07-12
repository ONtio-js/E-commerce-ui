import {CiApple,CiCircleMore} from 'react-icons/ci';
import {MdOutlineHealthAndSafety,MdSportsVolleyball} from 'react-icons/md';
import {GoHome} from 'react-icons/go';
import {PiCookingPotLight,PiTelevisionSimpleThin,PiBabyLight} from 'react-icons/pi';
import {GiSmartphone,GiClothes} from 'react-icons/gi';
import {HiOutlineComputerDesktop} from 'react-icons/hi2';
import {IoGameControllerOutline} from 'react-icons/io5';
import img from '../../assets/index';
export default function(){
    return (
        <div className="grid grid-cols-[1fr,4fr,1fr] gap-2 py-4 ">
            <div className="bg-white shadow-md p-2 rounded-md">
                <ul className='capitalize text-sm'>
                    <li className='flex items-center gap-1 cursor-pointer hover:text-orange-400 py-2'><span><CiApple/></span> supermarket</li>
                    <li className='flex items-center gap-1 cursor-pointer hover:text-orange-400 py-2'><span><MdOutlineHealthAndSafety/></span> health & beauty</li>
                    <li className='flex items-center gap-1 cursor-pointer hover:text-orange-400 py-2'><span><GoHome/></span> Home & office</li>
                    <li className='flex items-center gap-1 cursor-pointer hover:text-orange-400 py-2'><span><PiCookingPotLight/></span> appliances</li>
                    <li className='flex items-center gap-1 cursor-pointer hover:text-orange-400 py-2'><span><GiSmartphone/></span>phones & tablets</li>
                    <li className='flex items-center gap-1 cursor-pointer hover:text-orange-400 py-2'><span><HiOutlineComputerDesktop/></span>computing</li>
                    <li className='flex items-center gap-1 cursor-pointer hover:text-orange-400 py-2'><span><PiTelevisionSimpleThin/></span>Electronics</li>
                    <li className='flex items-center gap-1 cursor-pointer hover:text-orange-400 py-2'><span><GiClothes/></span>fashion</li>
                    <li className='flex items-center gap-1 cursor-pointer hover:text-orange-400 py-2'><span><PiBabyLight/></span>baby products</li>
                    <li className='flex items-center gap-1 cursor-pointer hover:text-orange-400 py-2'><span><IoGameControllerOutline/></span>gaming</li>
                    <li className='flex items-center gap-1 cursor-pointer hover:text-orange-400 py-2'><span><MdSportsVolleyball/></span>sporting goods</li>
                    <li className='flex items-center gap-1 cursor-pointer hover:text-orange-400 py-2'><span><CiCircleMore/></span>other categories</li>
                </ul>
                
            </div>
            <div className="bg-orange-400 shadow-md rounded-md">
                <div>
                    <img src={img.flashSale} alt="" className='w-full h-full rounded-md' />
                </div>
                <div>
                    {/* implement conditional rendering */}
                </div>
            </div>
            <div className="flex flex-col gap-4 h-full">
                <div className='rounded-md h-1/2 shadow-md bg-red-400'>
                    <img className='rounded-md w-full h-full' src={img.flex} alt="" srcset="" />
                </div>
                <div className='rounded-md h-1/2 shadow-md bg-orange-400 w-full'>
                    <img className=' rounded-md w-full h-full' src={img.jforce} alt="" />
                </div>
            </div>
        </div>
    )
}