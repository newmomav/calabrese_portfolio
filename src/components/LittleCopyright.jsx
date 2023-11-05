const LittleCopyright = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="h-full w-full flex flex-col justify-between p-2 pt-10">
      <p className="text-[0.6rem] horizontal-text self-center ">
        &copy; Anna Calabrese. All rights reserved.
        {/* Webshop coming soon! ❤ */}
      </p>
      <div className="text-[0.6rem] horizontal-text self-center ">
        <p className="opacity-[0.4] text-xs text-center">
          Version {currentYear} <br />
        </p>
        <p className="opacity-[0.4] text-xs text-center">Designed by</p>
        <a
          href="#website"
          className="opacity-[0.4] text-xs text-center block cursor-pointer see-me"
        >
          Lili
        </a>
      </div>
    </div>
  );
};

export default LittleCopyright;
