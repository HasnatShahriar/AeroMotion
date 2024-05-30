import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../assets/banner/banner (1).jpg'
import img2 from '../../../assets/banner/banner (2).jpg'
import img4 from '../../../assets/banner/banner (4).jpg'


const Banner = () => {
  return (
    <div>
      <Carousel autoPlay={true}
        interval={2500}
        infiniteLoop={true}
        showThumbs={true}
        showStatus={true}>
        <div className="h-[500px]" >
          <img src={img1} />
        </div>
        <div className="h-[500px]">
          <img src={img2} />
        </div>
        <div className="h-[500px]">
          <img src={img4} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;