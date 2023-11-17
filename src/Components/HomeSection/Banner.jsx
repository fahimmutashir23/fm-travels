import { Carousel } from "react-responsive-carousel";
import banner1 from "../../assets/image/travel-1.jpg"
import banner2 from "../../assets/image/travel-2.jpg"
import banner3 from "../../assets/image/travel-3.jpg"
import banner4 from "../../assets/image/travel-4.jpg"
import banner5 from "../../assets/image/travel-5.jpg"
import banner6 from "../../assets/image/travel-6.jpg"

const Banner = () => {
  return (
    <div>
      <Carousel thumbWidth={60}>
        <div className="h-[640px] overflow-hidden">
          <img src={banner1} className=""/>
        </div>
        <div className="h-[640px] overflow-hidden">
          <img src={banner2} />
        </div>
        <div className="h-[640px] overflow-hidden">
          <img src={banner3} />
        </div>
        <div className="h-[640px] overflow-hidden">
          <img src={banner4} />
        </div>
        <div className="h-[640px] overflow-hidden">
          <img src={banner5} />
        </div>
        <div className="h-[640px] overflow-hidden">
          <img src={banner6} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
