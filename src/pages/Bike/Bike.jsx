import Cover from "../../Shared/Cover/Cover";
import bikeImg from '../../assets/category/cruiser.jpg'
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useBikes from "../../hooks/useBikes";
import BikeCategory from "./BikeCategory";
import cruisersImg from '../../assets/category/cruiser.jpg'
import sportsImg from '../../assets/category/sports.jpg'
import scootersImg from '../../assets/category/scooter.jpg'
import touringImg from '../../assets/category/touring.jpg'

const Bike = () => {
  const [bike] = useBikes();
  
  const cruisers = bike.filter(item => item.category === 'cruisers')
  const sports = bike.filter(item => item.category === 'sports')
  const scooters = bike.filter(item => item.category === 'scooters')
  const touring = bike.filter(item => item.category === 'touring')
  const offered = bike.filter(item => item.category === 'offered')
  return (
    <div>
      <Cover img={bikeImg} title={"Our Bike"}/>
      {/* main cover */}
      <SectionTitle subHeading="Don't Miss" heading="Today's Offer"/>
      {/* offered bikes */}
      <BikeCategory items={offered}/>
      {/* cruiser bikes */}
      <BikeCategory items={cruisers} title={"Cruisers"} img={cruisersImg}/>
      {/* sports bikes */}
      <BikeCategory items={sports} title={"Sports"} img={sportsImg}/>
      {/* scooters bikes */}
      <BikeCategory items={scooters} title={"scooters"} img={scootersImg}/>
      {/* sports bikes */}
      <BikeCategory items={touring} title={"touring"} img={touringImg}/>
    </div>
  );
};

export default Bike;