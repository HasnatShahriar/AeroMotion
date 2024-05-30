import BikeCategoryCard from "../../../components/BikeCategoryCard/BikeCategoryCard";


const OrderTab = ({items}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {
        items.map((item, index) => <BikeCategoryCard key={index} item={item} />)
      }
    </div>
  );
};

export default OrderTab;