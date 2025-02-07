const LittleCopyright = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="h-full w-full flex flex-col justify-between p-2 lg:pt-12 xl:pt-32">
      <p className="text-[0.6rem] horizontal-text self-end">
        &copy; anna calabrese. all rights reserved. version {currentYear}
      </p>
    </div>
  );
};

export default LittleCopyright;
