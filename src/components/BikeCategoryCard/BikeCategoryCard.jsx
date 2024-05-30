import { Link } from "react-router-dom";


const BikeCategoryCard = ({ item }) => {
  const { name, image, description, price, category, _id } = item;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="h-48 w-full" src={image} alt='' />
      </figure>
      <p className="bg-slate-800 text-white p-2 absolute right-0 mt-4 mr-4">$ {price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>

        <p>{category}</p>
        <p>{description}</p>
        <div className=" my-4">
          <div className="space-y-2 space-x-8">
            <Link to={`/crafts/${_id}`}>
              <button className="btn w-full px-8 py-3 font-semibold border rounded dark:border-gray-800 dark:text-gray-800 bg-orange-400 text-white ">Add to Cart</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeCategoryCard;