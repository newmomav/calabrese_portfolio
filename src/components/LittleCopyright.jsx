const LittleCopyright = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="h-full w-full flex flex-col justify-between">
      <p className="border border-red-300 horizontal-text  ">
        &copy; {currentYear} Anna Calabrese. All rights reserved.
      </p>
      <small className="opacity-[0.2] text-center">
        Designed <br />
        by Lili
      </small>
    </div>
  );
};

export default LittleCopyright;
