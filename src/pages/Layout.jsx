import Logo from '../components/Logo';
import DarkMode from '../components/DarkMode';
import Gif from '../components/Gif';
import Navbar from '../components/Navbar';
import LittleCopyright from '../components/LittleCopyright';

const Layout = () => {
  return (
    <>
      <div className=" grid grid-cols-12 grid-rows-5 h-screen w-screen">
        {/* First row */}
        <div
          className="border border-red-300
        col-span-10 row-span-1 flex justify-center"
        >
          <Logo />
        </div>
        <div className=" border border-red-300 col-span-2 row-span-1 pt-4 pl-2 md:pt-8 lg:pt-8 text-left">
          <DarkMode />
        </div>

        {/* Second Row for larger screens (hidden for small screens) */}
        <div className="border border-red-300 hidden row-span-4 md:block md:col-span-1 lg:col-span-1  bg-lightgreen">
          <LittleCopyright />
        </div>
        <div className="border border-red-300 hidden row-span-4 md:block md:col-span-3 lg:col-span-3  bg-lightyellow">
          {/* {showInfo && <Info />} */}
        </div>

        <div className="border border-red-300 row-span-4 col-span-10 md:col-span-6 lg:col-span-6 ">
          <Gif />
        </div>
        <div className="border border-red-300 row-span-4 col-span-2 md:col-span-2 lg:col-span-2 flex flex-col justify-end">
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default Layout;
