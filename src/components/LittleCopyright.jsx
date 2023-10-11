const LittleCopyright = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="h-full w-full flex flex-col justify-between">
      <p className="text-xs horizontal-text pt-4 self-center ">
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
