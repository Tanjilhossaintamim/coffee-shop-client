import PropTypes from "prop-types";
const CoffeeQuality = ({ image, title, description }) => {
  return (
    <div className="w-[300px] flex flex-col gap-2">
      <img src={image} alt="" className="w-[70px] h-[70px]" />
      <h1 className="text-4xl text-color-cofee">{title}</h1>
      <p className="text-base text-color-black2">{description}</p>
    </div>
  );
};
CoffeeQuality.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default CoffeeQuality;
