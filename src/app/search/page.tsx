import { SearchIcon } from "lucide-react";

const SearchPage = async () => {
  return (
    <div className="flex flex-col">
      <div className="p-4">
        <h1 className="text-xl font-bold">어떤 강습을 찾고 있나요?</h1>
      </div>

      <div className="px-4">
        <form className="relative flex border rounded-md overflow-hidden">
          <input
            type="text"
            name="course-search"
            id="course-search"
            className="flex-1 p-2 rounded-md"
            placeholder="강습을 검색해보세요"
          />
          <button
            type="submit"
            className="flex-none flex items-center justify-center bg-red-100 w-10 h-10"
          >
            <SearchIcon className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchPage;
