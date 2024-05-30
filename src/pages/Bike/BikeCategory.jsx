import { Link } from "react-router-dom";
import BikeCard from "../../Shared/BikeCard/BikeCard";
import Cover from "../../Shared/Cover/Cover";


const BikeCategory = ({ items, title, img }) => {
  return (
    <div>
      {title && <Cover img={img} title={title} />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
         items.map(item => <BikeCard key={item._id} item={item} />)
        }
      </div>
      <Link to={`/order/${title}`}> <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button></Link>
    </div>
  );
};

export default BikeCategory;