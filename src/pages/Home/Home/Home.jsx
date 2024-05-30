import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularBike from "../PopularBike/PopularBike";



const Home = () => {
  return (
    <div>
      <Banner/>
      <Category/>
      <PopularBike/>
      <Featured/>
    </div>
  );
};

export default Home;