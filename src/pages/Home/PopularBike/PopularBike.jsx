
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useBikes from "../../../hooks/useBikes";
import BikeCard from "../../../Shared/BikeCard/BikeCard";




const PopularBike = () => {
  const [data] = useBikes();
  const popularBike = data.filter(item => item.category === 'popular');
  return (
    <div>
      <section>
        <SectionTitle
          heading={'Explore Our Popular Bike'}
          subHeading={"Let's Search"}
        />
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          popularBike.map(item => <BikeCard key={item._id} item={item} />)
        }
      </div>

    </div>
  );
};

export default PopularBike;