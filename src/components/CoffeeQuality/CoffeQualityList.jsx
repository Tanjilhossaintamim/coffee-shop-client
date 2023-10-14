import CoffeeQuality from "./CoffeeQuality";
import Qimage1 from "../../assets/icon/1.png";
import Qimage2 from "../../assets/icon/2.png";
import Qimage3 from "../../assets/icon/3.png";
import Qimage4 from "../../assets/icon/4.png";

const CoffeQualityList = () => {
  return (
    <div className="bg-color-gray px-4 lg:px-0">
      <div className="max-w-[1400px]  lg:h-[300px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-content-center gap-5">
        <CoffeeQuality
          image={Qimage1}
          title={"Awesome Aroma"}
          description={
            "You will definitely be a fan of the design & aroma of your coffee"
          }
        />
        <CoffeeQuality
          image={Qimage2}
          title={"High Quality"}
          description={
            "We served the coffee to you maintaining the best quality"
          }
        />
        <CoffeeQuality
          image={Qimage3}
          title={"Pure Grades"}
          description={
            "The coffee is made of the green coffee beans which you will love"
          }
        />
        <CoffeeQuality
          image={Qimage4}
          title={"Proper Roasting"}
          description={
            "Your coffee is brewed by first roasting the green coffee beans"
          }
        />
      </div>
    </div>
  );
};

export default CoffeQualityList;
