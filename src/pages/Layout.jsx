import Logo from '../components/Logo';
import DarkMode from '../components/DarkMode';
import Gif from '../components/Gif';
import Navbar from '../components/Navbar';
import LittleCopyright from '../components/LittleCopyright';

const gridItems = [
  {
    content: <Logo />,
    classes: 'border border-red-300 col-span-10 row-span-1 flex justify-center',
  },
  {
    content: <DarkMode />,
    classes:
      'border border-red-300 col-span-2 row-span-1 pl-2 flex justify-start items-end',
  },
  {
    content: <LittleCopyright />,
    classes:
      'border border-red-300 hidden row-span-4 md:block md:col-span-1 lg:col-span-1 ',
  },
  {
    content: '', // Empty content for now; could be <Info /> based on certain conditions.
    classes:
      'border border-red-300 hidden row-span-4 md:block md:col-span-3 lg:col-span-3',
  },
  {
    content: <Gif />,
    classes:
      'border border-red-300 row-span-4 col-span-10 md:col-span-6 lg:col-span-6',
  },
  {
    content: <Navbar />,
    classes:
      'border border-red-300 row-span-4 col-span-2 md:col-span-2 lg:col-span-2 flex flex-col justify-end',
  },
];

const Layout = () => {
  return (
    <>
      <div className=" grid grid-cols-12 grid-rows-5 h-screen w-screen border-collapse">
        {gridItems.map((item, index) => (
          <div key={index} className={item.classes}>
            {item.content}
          </div>
        ))}
      </div>
    </>
  );
};

export default Layout;
