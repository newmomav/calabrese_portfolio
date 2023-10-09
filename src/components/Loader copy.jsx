import { TypeAnimation } from 'react-type-animation';

const Loader = () => {
  return (
    <>
      <div
        id="loader"
        style={{ background: '#000e0b' }}
        className=" fixed top-0 left-0 h-screen w-screen z-50 flex items-center justify-center fade-out"
      >
        <h1 style={{ fontFamily: 'calabrese' }}>
          <TypeAnimation
            sequence={['1233', 500, '123546788', 1000, '123456789', 2000]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '10em', paddingLeft: '10px', color: '#fdf2f8' }}
          />
        </h1>
      </div>
    </>
  );
};

export default Loader;
