import { SearchIcon } from "lucide-react";
import Link from "next/link";
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import ClientSearch from "./clientPage";

const SearchPage = async () => {
  return (
    <div className="flex flex-col">
        <div className="relative flex items-center justify-between py-1 px-1">
          <Link href="/" className="flex p-3">
            <ArrowLeftIcon className="w-6 h-6 text-gray-900" />
          </Link>
          <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold">통합검색</h1>
         </div>

      <div className="px-4">
        <form className="relative flex border rounded-md overflow-hidden">
          <input
            type="text"
            name="course-search"
            id="course-search"
            // className="flex-1 p-2 rounded-md"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="클래스명, 수영장, 커뮤니티 글을 검색해보세요"
          />
          <button
            type="submit"
            className="flex-none flex items-center justify-center bg-gray-100 w-10 h-10"
          >
            <SearchIcon className="w-5 h-5" />
          </button>
        </form>
      </div>
      <div>
       <ClientSearch></ClientSearch>
      </div>
    </div>
  );
};

export default SearchPage;
