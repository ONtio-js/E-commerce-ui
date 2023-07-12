import img from '../../assets/index';
import FeaturedCatCard from './FeaturedCatCard';
export default function(){
    return (
        <div className="bg-white grid grid-cols-6 gap-3 p-3 rounded-md">
            < FeaturedCatCard image={img.anniversary}  title={'anniversay deals'}/>
            < FeaturedCatCard image={img.treasure}  title={'treasure hunt @ 99% off'}/>
            < FeaturedCatCard image={img.nivea}  title={'nivea official'}/>
            < FeaturedCatCard image={img.brandday}  title={'brand days'}/>
            < FeaturedCatCard image={img.phone}  title={'phones & tablet'}/>
            < FeaturedCatCard image={img.television}  title={'televisions'}/>
            < FeaturedCatCard image={img.freezer}  title={'refrigerators'}/>
            < FeaturedCatCard image={img.airpod}  title={'mobile accessory'}/>
            < FeaturedCatCard image={img.generator}  title={'generator'}/>
            < FeaturedCatCard image={img.shoe}  title={'mens\'s sneakers'}/>
            < FeaturedCatCard image={img.watch}  title={'watches'}/>
            < FeaturedCatCard image={img.phone}  title={'best price'}/>
        </div>
    )
}