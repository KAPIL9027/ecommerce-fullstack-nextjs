import { SearchModalProps, SearchType } from "@/types";
import Search from "./Search";

const SearchModal = ({
  setIsOpen,
  isOpen,
  LogoImg,
  popularSearches,
  setShow,
}: SearchModalProps) => {
  const handleCancel = () => {
    setIsOpen(false);
    setTimeout(() => setShow(false), 300);
  };
  return (
    <div
      className={`transform transition-all duration-300 ${
        isOpen ? "translate-x-0 opacity-100" : "opacity-0 translate-x-full"
      } z-100 w-full h-full large:h-[80vh] xl:h-[40vh] absolute left-0 top-0 px-6 py-4 large:py-0 bg-white flex flex-col gap-8 large:gap-0 text-black`}
    >
      <div className="flex justify-between items-center large:mb-0">
        <span
          className={`hidden large:block w-[77px] h-[77px] transform transition-all duration-900 ${
            isOpen ? "translate-x-0 opacity-100" : "opacity-0 translate-x-20"
          }`}
        >
          {LogoImg}
        </span>
        <div
          className={`w-[80%] large:w-[60%] h-9 transform transition-all duration-500 ${
            isOpen ? "translate-x-0 opacity-100" : "opacity-0 translate-x-100"
          }`}
        >
          <Search type={SearchType.MODAL} />
        </div>
        <span
          className={`font-bold cursor-pointer hover:text-gray-500 mr-2 transform transition-all duration-900 ${
            isOpen ? "translate-x-0 opacity-100" : "opacity-0 translate-x-20"
          }`}
          onClick={handleCancel}
        >
          Cancel
        </span>
      </div>
      <div className="flex justify-center items-center">
        <div
          className={`flex flex-col gap-4 w-full large:w-[57%] transform transition-all duration-900 ${
            isOpen ? "translate-x-0 opacity-100" : "opacity-0 translate-x-20"
          }`}
        >
          <p className="text-sm text-[#707072]">Popular Search Terms</p>
          <ul className="flex gap-2 flex-wrap w-[80%]">
            {popularSearches.map((popularSearch: string) => {
              return (
                <li
                  className="font-bold px-3 py-2 rounded-4xl bg-gray-100 hover:bg-gray-200 cursor-pointer"
                  key={popularSearch}
                >
                  {popularSearch}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
