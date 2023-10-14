import Heading from "../Heading/Heading";
import coffeimg1 from "../../assets/cups/Rectangle 9.png";
import coffeimg2 from "../../assets/cups/Rectangle 10.png";
import coffeimg3 from "../../assets/cups/Rectangle 11.png";
import coffeimg4 from "../../assets/cups/Rectangle 12.png";
import coffeimg5 from "../../assets/cups/Rectangle 13.png";
import coffeimg6 from "../../assets/cups/Rectangle 14.png";
import coffeimg7 from "../../assets/cups/Rectangle 15.png";
import coffeimg8 from "../../assets/cups/Rectangle 16.png";
import CoffeeImage from "./CoffeeImage";

const CoffeeImages = () => {
  return (
    <div className="my-20">
      <Heading subtitle={"Follow Us Now"} title={"Follow on Instagram"} />
      <div className="max-w-[1360px] mt-5 mx-auto ">
        <div className="grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          <CoffeeImage img={coffeimg1} />
          <CoffeeImage img={coffeimg2} />
          <CoffeeImage img={coffeimg3} />
          <CoffeeImage img={coffeimg4} />
          <CoffeeImage img={coffeimg5} />
          <CoffeeImage img={coffeimg6} />
          <CoffeeImage img={coffeimg7} />
          <CoffeeImage img={coffeimg8} />
        </div>
      </div>
    </div>
  );
};

export default CoffeeImages;
