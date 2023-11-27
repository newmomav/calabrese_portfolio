const LittleCopyright = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="h-full w-full flex flex-col justify-between p-2 lg:pt-12 xl:pt-32">
      <p className="text-[0.6rem] horizontal-text self-end">
        &copy; anna calabrese. all rights reserved.
        {/* Webshop coming soon! ❤ */}
      </p>

      <div className="text-[0.6rem]">
        <p className="opacity-[0.4] text-xs text-right">
          version {currentYear} <br />
        </p>
        <p className="opacity-[0.4] text-xs text-right">designed by</p>
        <a
          href="mailto:lili@avar.online"
          className="opacity-[0.4] text-xs text-right block cursor-pointer see-me"
        >
          Lili
        </a>
      </div>
    </div>
  );
};

export default LittleCopyright;
