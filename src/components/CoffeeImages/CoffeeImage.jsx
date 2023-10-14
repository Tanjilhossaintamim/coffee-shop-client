import PropTypes from "prop-types";
const CoffeeImage = ({ img }) => {
  return (
    <div className="lg:w-[312px] h-[350] mx-auto">
      <img src={img} alt="" className="lg:w-[312px] h-[350] object-cover" />
    </div>
  );
};

CoffeeImage.propTypes = {
  img: PropTypes.string,
};

export default CoffeeImage;
