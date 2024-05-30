
const BikeCard = ({item}) => {
  const {name,image,description,price,category} = item;
  return (
    <div className="overflow-hidden shadow-lg border border-green-600 rounded-xl">
    <div className="relative">
      <img data-aos="zoom-in" data-aos-duration="1000" src={image} alt="food image" className="w-full h-60 object-cover" />
      <span className="absolute top-2 right-2 px-2 py-1 bg-gray-800 text-white rounded-md">{category}</span>
    </div>
    <div data-aos="zoom-in" data-aos-duration="1000" className="p-4">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-700 mb-2"><span className="font-semibold">Price:</span> <span className="text-green-600">${price}</span></p>
      <p className="text-gray-700 mb-2"><span className="font-semibold">Quantity:</span> <span className="text-green-600">{description}</span></p>
    </div>
  </div>
  );
};

export default BikeCard;