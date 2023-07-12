import Logo from "../../components/Logo";
import { BiSolidEnvelope } from 'react-icons/bi';
import img from "../../assets/index";
import {BsFacebook,BsTwitter,BsYoutube} from 'react-icons/bs';
import {BiLogoMastercard,BiLogoVisa,BiLogoPaypal} from 'react-icons/bi';
import {TiSocialInstagram} from 'react-icons/ti';
import {FaAmazonPay,FaPaypal,FaGooglePay} from 'react-icons/fa';
export default function () {
    return <>
        <div className="bg-black/95 text-white  ">
            <div className="grid grid-cols-[1fr,2fr,1.5fr] px-4 py-10 w-full">
                <div>
                    <h1 className="flex items-center gap-1 uppercase font-semibold text-4xl">jumia <Logo color={'text-orange-400'} /></h1>
                </div>
                <div>
                    <h1 className="uppercase text-lg font-semibold">new to jumia?</h1>
                    <p className="text-[13px]">Subscribe to our newsletter to get updates on our latest offers</p>
                    <div className="flex items-center gap-2 mt-4">
                        <div className="flex items-center gap-2 border-2 bg-white text-gray-700 p-2 rounded-md ">
                            <span className="text-2xl"><BiSolidEnvelope /></span>
                            <input type="email" 
                            placeholder="Enter your email address"
                            className=" bg-transparent text-gray-700 outline-none"/>
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="uppercase text-sm border p-2 rounded-md bg-transparent ">
                                male
                            </button>
                            <button className="uppercase text-sm border p-2 rounded-md bg-transparent ">
                                female
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col ">
                    <div className="flex items-center gap-4">
                    <button className="bg-orange-400 p-1 rounded-md">
                               <span className="text-3xl"> <Logo /></span>
                            </button>
                        <div className="flex flex-col">
                            <h1 className="uppercase  font-semibold text-sm">download jumia free app</h1>
                            <h4 className="text-sm">get access to exclusive offers!</h4>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 mt-5 w-full">
                        <div className=" w-1/2">
                            <img  src={img.googleplay} alt="" className="w-full cursor-pointer" />
                        </div>
                        <div className="w-1/2">
                            <img src={img.applestore} alt="" className="w-full cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-400/50  px-4">
               <div className="py-8 grid grid-cols-4 gap-4">
               <div className="">
                    <h1 className="uppercase font-semibold">need help?</h1>
                    <ul className="capitalize text-[12px] mt-4">
                        <li><a href="#">help center</a></li>
                        <li><a href="#">contact us</a></li>
                        <li><a href="#">how to shop on jumia</a></li>
                        <li><a href="#">delivery options and timelines</a></li>
                        <li><a href="#">how to return a product on jumia</a></li>
                        <li><a href="#">corporate and bulk purchase</a></li>
                        <li><a href="#">report a product</a></li>
                        <li><a href="#">ship your package anywhere in nigeria</a></li>
                        <li><a href="#">dispute resolution policy</a></li>
                        <li>returns and refunds policy</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-semibold uppercase">about jumia</h1>
                    <ul className="capitalize text-[12px] mt-4">
                        <li><a href="#">about us</a></li>
                        <li><a href="#">jumia careers</a></li>
                        <li><a href="#">jumia express</a></li>
                        <li><a href="#">terns and conditions</a></li>
                        <li><a href="#">privacy notice</a></li>
                        <li><a href="#">jumia store credit terms and condition</a></li>
                        <li><a href="#">jumia payment information guidelines</a></li>
                        <li><a href="#">cookie notice</a></li>
                        <li><a href="#">jumia global</a></li>
                        <li>official stores</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-semibold uppercase ]">make money with jumia</h1>
                    <ul className="capitalize text-[12px] mt-4">
                        <li><a href="#">sell on jumia</a></li>
                        <li><a href="#">become a sales consultant</a></li>
                        <li><a href="#">become a logistics service provider</a></li>
                        <li><a href="#">join jumia DA academy</a></li>
                        <li><a href="#">join the jumia KOL program</a></li>
                    </ul>
                </div>
                <div>
                   <h1 className="font-semibold uppercase">jumia international</h1> 
                   <ul className="capitalize text-[12px] mt-4">
                        <li><a href="#">algeria</a></li>
                        <li><a href="#">egypt</a></li>
                        <li><a href="#">ghana</a></li>
                        <li><a href="#">ivory coast</a></li>
                        <li><a href="#">kenya</a></li>
                    </ul>
                </div>
               </div>

               <div className="flex  gap-10 pb-20">
                <div className="flex flex-col gap-4">
                    <h1 className="uppercase font-semibold">join on us</h1>
                    <div className="flex items-center justify-between gap-4">
                        <span className="text-2xl hover:text-orange-400 cursor-pointer"><BsFacebook /></span>
                        <span className="text-2xl hover:text-orange-400 cursor-pointer"><BsYoutube /></span>
                        <span className="text-2xl hover:text-orange-400 cursor-pointer"><TiSocialInstagram /></span>
                        <span className="text-2xl hover:text-orange-400 cursor-pointer"><BsTwitter /></span>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="uppercase font-semibold">payment methods & delivery partners</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-3xl hover:text-orange-400 cursor-pointer"><BiLogoMastercard /></span>
                        <span className="text-3xl hover:text-orange-400 cursor-pointer"><BiLogoVisa /></span>
                        <span className="text-3xl hover:text-orange-400 cursor-pointer"><FaAmazonPay /></span>
                        <span className="text-3xl hover:text-orange-400 cursor-pointer"><FaGooglePay /></span>
                        <span className="text-3xl hover:text-orange-400 cursor-pointer"><FaPaypal /></span>
                    </div>
                </div>
               </div>
            </div>
        </div>
    </>
}