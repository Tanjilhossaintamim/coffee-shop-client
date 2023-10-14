import PropTypes from "prop-types";
const Heading = ({subtitle,title}) => {
  return (
    <div className="text-center">
      <span className="text-xl text-color-black2">{subtitle}</span>
      <h1 className="text-[55px] text-color-cofee">{title}</h1>
    </div>
  );
};
Heading.propTypes={
    subtitle:PropTypes.string,
    title:PropTypes.string,
}

export default Heading;
