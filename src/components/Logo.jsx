import {MdStars} from 'react-icons/md'
export default function Logo({color}){
    return (
        <span className={color}>
            {<MdStars />}
        </span>
    )
}