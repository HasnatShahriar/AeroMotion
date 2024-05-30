
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from '../../../assets/category/cruiser.jpg'
import img2 from '../../../assets/category/scooter.jpg'
import img3 from '../../../assets/category/sports.jpg'
import img4 from '../../../assets/category/touring.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
  return (
    <div>
      <div>
        <SectionTitle
        heading={'Explore Our Bike Category'}
        subHeading={"Let's Search"}
        />
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-10"
      >
        <SwiperSlide>
          <img className='h-96 w-80' src={img1} alt="" />
          <h2 className='text-3xl font-semibold text-center -mt-16 text-white'>Cruisers</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-96 w-80' src={img2} alt="" />
          <h2 className='text-3xl font-semibold text-center -mt-16 text-white'>Scooter</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-96 w-80' src={img3} alt="" />
          <h2 className='text-3xl font-semibold text-center -mt-16 text-white'>Sports</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-96 w-80' src={img4} alt="" />
          <h2 className='text-3xl font-semibold text-center -mt-16 text-white'>Touring</h2>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Category;