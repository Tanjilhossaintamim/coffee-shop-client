import footerLogo from "../../assets/logo1 1.png";
import FooterForm from "../FooterForm/FooterForm";
import FooterLink from "../FooterLink/FooterLink";
const Footer = () => {
  return (
    <div className="py-10 bg-gray-100 px-4 lg:px-0">
      <div className="max-w-[1360px] mx-auto">
        <img src={footerLogo} alt="" className="w-[75px] h-[90px]" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 place-content-center mt-5">
          <FooterLink />
          <FooterForm />
        </div>
      </div>
    </div>
  );
};

export default Footer;
