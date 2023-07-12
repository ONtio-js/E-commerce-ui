import Logo from './components/Logo';
import { RiSecurePaymentLine, RiCaravanLine } from 'react-icons/ri';
import { GiFoodChain, GiPartyPopper } from 'react-icons/gi';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineUser } from 'react-icons/ai';
import { PiCaretDownBold } from 'react-icons/pi';
import { TfiHelpAlt } from 'react-icons/tfi';
import {BsCart3} from 'react-icons/bs';
import img from './assets/index';
import AdandMenuPage from './pages/Homepage/AdandMenuPage';
import FeaturedCategory from './pages/Homepage/FeaturedCategory';
import Footer from './pages/Homepage/Footer';
export default function App() {
  return (
    <div className="bg-gray-50 w-screen">
      <div className="w-full px-40 bg-jumiaColor text-white">
      <img src={img.banner} alt="" srcset="" className='w-full' />
      </div>
      <div className="grid grid-cols-[1fr,5fr] gap-10 px-40 py-2">
        <div className="text-orange-400 capitalize font-medium">
          <h1 className='flex items-center gap-1 text-base'>{< Logo color={'text-orange-400'} />} sell on jumia</h1>
        </div>
        <div className='flex items-center justify-center'>
          <ul className='flex items-center justify-around gap-4 text-gray-400'>
            <li className='flex items-center gap-1 text-xl font-semibold capitalize text-black'>{< Logo color={'text-orange-400'} />}Jumia<span></span></li>
            <li className='flex items-center text-xl font-medium capitalize hover:text-blue-400 cursor-pointer transition-all duration-300'><span className='text-2xl '>{< RiSecurePaymentLine />}</span>pay</li>
            <li className='flex items-center text-xl font-medium capitalize cursor-pointer hover:text-orange-400 transition-all duration-300'><span className='text-2xl '>{<GiFoodChain />}</span>food</li>
            <li className='flex items-center text-xl font-medium capitalize cursor-pointer hover:text-orange-400 transition-all duration-300'><span className='text-2xl '>{<GiPartyPopper />}</span>party</li>
            <li className='flex items-center text-xl font-medium capitalize cursor-pointer hover:text-orange-400 transition-all duration-300'><span className='text-2xl '>{<RiCaravanLine />}</span>logistics</li>
          </ul>
        </div>
      </div>
      <div className='bg-white shadow-md py-4 px-40 flex items-center gap-x-4 w-full'>
        {/* <h1><FaBars /></h1> */}
        <h1 className='text-2xl font-semibold uppercase flex items-center gap-1'>Jumia {<Logo  color={'text-orange-400'}/>}</h1>
        <div className='flex items-center   w-[80%] gap-1 '>
          <div className='flex gap-4 items-center w-[80%]'>
            <div className='flex items-center text-lg gap-2 w-[95%] border border-gray-400 px-2 py-[8px] rounded-md text-gray-400'>
              {<FiSearch />}
              <input type="text" placeholder='search products, brands and categories' className='text-base w-full outline-none '  />
            </div>
            <button className='bg-orange-400 shadow-md py-[10px] px-4 uppercase text-white rounded-lg'>
              search
            </button>
          </div>
          <div className='flex items-center gap-2 w-[20%] justify-center  px-5 py-2 rounded-md text-lg hover:text-orange-400 transition-all duration-300 cursor-pointer w-'>
            {< AiOutlineUser />}
            <h1>Account</h1>
            <span><PiCaretDownBold /></span>
          </div>
        </div>
       <div className='flex items-center  justify-between gap-4'>
       <div className='flex items-center gap-2 text-lg cursor-pointer hover:text-orange-400 transition-all duration-300'>
          <TfiHelpAlt />
          <h1 className=''>Help</h1>
          <span className=''><PiCaretDownBold /></span>
        </div>
        <div className='flex items-center gap-2 text-lg cursor-pointer hover:text-orange-400 duration-300 transition-all '>
         <span className='text-xl'> < BsCart3/></span>
          cart
        </div>
       </div>
      </div>
      <div className='bg-orange-400  lg:px-40'>
        <AdandMenuPage />
        < FeaturedCategory />
        <Footer />
      </div>
    </div>
  )
}