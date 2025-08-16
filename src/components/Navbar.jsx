import logo from "../assets/logo.jpg";
const Navbar = () => {
  return (
    <header className="flex px-5 py-3 gap-3 border-b-2 border-gray-200">
      <div className="w-16 h-16">
        <img src={logo} className="w-full h-full" />
      </div>
      <h1 className="text-indigo-800 text-4xl font-bold">ReVisit</h1>
    </header>
  );
};

export default Navbar;
