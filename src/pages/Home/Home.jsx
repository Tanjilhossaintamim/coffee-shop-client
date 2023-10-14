import Banner from "../../components/Banner/Banner";
import CoffeeList from "../../components/Coffee/CoffeeList";
import CoffeeImages from "../../components/CoffeeImages/CoffeeImages";
import CoffeQualityList from "../../components/CoffeeQuality/CoffeQualityList";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <CoffeQualityList />
      <CoffeeList />
      <CoffeeImages />
    </div>
  );
};

export default Home;
