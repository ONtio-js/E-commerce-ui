import Logo from "../Logo";
import {BiSolidEnvelope} from 'react-icons/bi';
export default function () {
    return <>
        <div className="bg-black text-white">
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <h1 className="flex items-center gap-1 uppercase font-semibold text-4xl">jumia <Logo color={'text-orange-400'} /></h1>
                </div>
                <div>
                    <h1 className="uppercase text-lg font-semibold">new to jumia?</h1>
                    <p>Subscribe to our newsletter to get updates on our latest offers</p>
                    <div>
                        <div className="flex items-center gap-2 border ">
                            <BiSolidEnvelope />
                            <input type="email" name="" id="" />
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
            <div>

            </div>
        </div>
    </>
}