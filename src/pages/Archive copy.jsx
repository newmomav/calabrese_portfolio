import { useState } from 'react';
import LazyLoad from 'react-lazyload';
import { NavLink } from 'react-router-dom';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import { sliderData } from '../components/sliderData.js';

const Archive = ({ archiveVisible }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [current, setCurrent] = useState(0);
  console.log(current);
  const length = sliderData.length;

  const nextSlide = () => {
    console.log('Current index:', current, 'Total length:', length);
    const newIndex = current === length - 1 ? 0 : current + 1;
    console.log('New Index:', newIndex);
    setSelectedImage(sliderData[newIndex].src);
    setCurrent(newIndex);
  };

  const prevSlide = () => {
    console.log('Current index:', current, 'Total length:', length);
    const newIndex = current === 0 ? length - 1 : current - 1;
    console.log('New Index:', newIndex);
    setSelectedImage(sliderData[newIndex].src);
    setCurrent(newIndex);
  };

  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null;
  }

  const handleImageClick = (imageSrc, index) => {
    setSelectedImage(imageSrc);
    setCurrent(index);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="pl-12 pr-12 text-justify md:p-0 md:pl-0 md:pr-0 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      {archiveVisible && (
        <>
          <NavLink
            to="/"
            className="fixed md:static text-4xl text-[#329404] font-schnorkelei  focus:font-paranoia md:hover:font-paranoia"
          >
            x
          </NavLink>
        </>
      )}
      {sliderData.map((image, index) => (
        <LazyLoad key={index} offset={100} once>
          <div
            className="h-full overflow-hidden cursor-pointer"
            onClick={() => handleImageClick(image.src)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        </LazyLoad>
      ))}

      {selectedImage && (
        <div
          className="fixed inset-0 bg-[#011e09] bg-opacity-75 flex justify-center items-center z-50"
          //  onClick={handleCloseModal}
        >
          <IoIosArrowRoundBack
            className="absolute top-1/2 left-3.5 md:text-4xl text-6xl z-50 text-[#329404] cursor-pointer"
            onClick={prevSlide}
          />
          <IoIosArrowRoundForward
            className="absolute top-1/2 right-3.5 md:text-4xl text-6xl z-50 text-[#329404] cursor-pointer"
            onClick={nextSlide}
          />
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-full relative"
          />
          {/* <button
            onClick={handleCloseModal}
            className="absolute top-20 right-8 md:top-5 md:right-5 text-4xl text-[#329404] font-schnorkelei  focus:font-paranoia md:hover:font-paranoia"
          >
            x
          </button> */}
        </div>
      )}
    </div>
  );
};

export default Archive;
