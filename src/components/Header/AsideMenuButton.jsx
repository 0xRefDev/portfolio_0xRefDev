const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px]"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"
    ></path>
  </svg>
);

export function AsideMenuButton() {
  const handleShowAside = () => {
    const AsideMenu = document.getElementById("aside-menu");

    AsideMenu.classList.toggle("open");
  };

  return (
    <button
      onClick={() => handleShowAside()}
      className="md:hidden flex gap-1 w-fit items-center h-fit py-1 text-md sm:text-lg sm:px-2 sm:py-[.37rem] px-1 border-2 border-[#0F1A38]/60 rounded-full text-[#0F1A38]/90 cursor-pointer font-semibold"
    >
      Menú <MenuIcon />
    </button>
  );
}
