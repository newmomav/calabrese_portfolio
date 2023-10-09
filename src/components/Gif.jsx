const Gif = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div
        style={{
          width: '80vh',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          display: 'flex',
          justifyContent: 'center',
          // backgroundImage: 'var(--background_image)',
        }}
      >
        <img src="/Kralle-gif.gif" alt="Gif von einer Kralle aus Keramik" />
      </div>
    </div>
  );
};

export default Gif;
