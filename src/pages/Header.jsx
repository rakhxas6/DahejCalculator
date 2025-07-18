import logo from "../assets/images/logoFinal.png";

const Header = () => {
  return (
    <header className="w-full py-4 sm:py-6 px-4 bg-slate-100 shadow text-center">
      <img
        src={logo}
        alt="Dahej Calculator Logo"
        className="mx-auto w-40 sm:w-56 md:w-64 lg:w-72 object-contain"
      />
    </header>
  );
};

export default Header;
