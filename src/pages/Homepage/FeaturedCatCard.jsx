
export default function({image,title}){
    return (
        <div className='hover:shadow-md hover:rounded-md hover:scale-105'>
                <div>
                <img className='shadow-md rounded-md' src={image} alt="" srcset="" />
                </div>
                <h1 className='text-center capitalize p-2 '>{title}</h1>
            </div>
    )
}