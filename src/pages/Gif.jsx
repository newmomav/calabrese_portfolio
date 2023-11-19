const Gif = ({ infoVisible }) => {
  return (
    <div className="relative w-full h-full -z-20">
      <video
        className="h-full w-full object-cover z-0"
        autoPlay
        loop
        muted
        src="/landing-page.mp4"
        type="video/mp4"
        alt="table full of ceramic table ware"
      />
      {infoVisible && (
        <img
          className="absolute top-[15%] right-[10%] w-[40vh] object-cover z-50 blend-multiply"
          src="/annacalabrese.jpeg"
          alt="Portait of artist Calabrese"
        />
      )}
    </div>
  );
};

export default Gif;
