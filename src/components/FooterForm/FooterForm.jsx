const FooterForm = () => {
  return (
    <div>
      <h1 className="text-4xl text-color-cofee">Connect with Us</h1>
      <form className="flex flex-col gap-5 mt-3">
        <input type="text" placeholder="Name" className="h-12 px-3 rounded" />
        <input type="email" placeholder="Email" className="h-12 px-3 rounded" />
        <textarea
          name="message"
          placeholder="Message"
          id=""
          cols="30"
          rows="10"
          className="resize-none px-3 rounded h-[130px]"
        ></textarea>
        <input className="w-36 h-12 rounded-[30px] text-2xl border border-color-cofee text-color-cofee hover:bg-color-cofee hover:text-white cursor-pointer transition-colors duration-300" type="submit" value="Send Message" />
      </form>
    </div>
  );
};

export default FooterForm;
