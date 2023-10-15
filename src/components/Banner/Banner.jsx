import BannerImg from "../../assets/images/banner.png";
const Banner = () => {
  return (
    <div
      style={{
        background: `url(${BannerImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-[1500px] h-[800px] flex justify-between items-center px-4 lg:px-0">
        <div className="hidden lg:block"></div>
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl text-white">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="text-base text-white">
            It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get
            the nostalgia back!! Your companion of every moment!!!
          </p>
          <p className="text-base text-white">
            Enjoy the beautiful moments and make them memorable.
          </p>
          <button className="w-32 h-12 bg-color-chocklet text-2xl text-color-black">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
