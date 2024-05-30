import { useState } from "react";
import Cover from "../../../Shared/Cover/Cover";
import coverImg from "../../../assets/banner/banner (4).jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useBikes from "../../../hooks/useBikes";
import OrderTab from "../OrderTab/OrderTab";


const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const [bike] = useBikes();
  const cruisers = bike.filter(item => item.category === 'cruisers')
  const sports = bike.filter(item => item.category === 'sports')
  const scooters = bike.filter(item => item.category === 'scooters')
  const touring = bike.filter(item => item.category === 'touring')
  const offered = bike.filter(item => item.category === 'offered')
  return (
    <div>
      <Cover img={coverImg} title={"Order Bike"} />
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Cruiser</Tab>
          <Tab>Sport</Tab>
          <Tab>Scooter</Tab>
          <Tab>Touring</Tab>
          <Tab>Offered</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={cruisers} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={sports} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={scooters}/>
        </TabPanel>
        <TabPanel>
          <OrderTab items={touring}/>
        </TabPanel>
        <TabPanel>
          <OrderTab items={offered}/>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;