const Loader = ({ onSkip }) => {
  return (
    <>
      <div
        style={{ background: '#031502' }}
        className=" fixed top-0 left-0 h-screen w-screen z-50 flex items-center justify-center fade-out"
      >
        <h1 className="loaderLogo">
          1<span className="a">2</span>
          <span className="l">3</span>
          <span className="a2">4</span>
          <span className="b">5</span>
          <span className="r">6</span>
          <span className="e">7</span>
          <span className="s">8</span>
          <span className="e2">9</span>
        </h1>

        <button
          onClick={onSkip}
          className="absolute bottom-4 right-4
            px-3 py-1
            text-xs
            text-white
            border border-white/30
            rounded-md
            transition duration-300
            hover:bg-white/10
            focus:outline-none
            focus:ring-2
            focus:ring-white/20"
        >
          Skip Intro
        </button>
      </div>
    </>
  );
};

export default Loader;
