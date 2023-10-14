import hlogo from "../../assets/hlogo.png";
const Header = () => {
  return (
    <section className={`bg-header-img`}>
      <div className="max-w-[1500px] h-auto lg:h-[120px] mx-auto flex  justify-center items-center">
        <div className="py-3 flex justify-center items-center">
          <img src={hlogo} alt="" className="w-[75px] h-[90px]" />
          <span className="text-3xl md:text-4xl lg:text-5xl text-white">
            Espresso Emporium
          </span>
        </div>
      </div>
    </section>
  );
};

export default Header;
