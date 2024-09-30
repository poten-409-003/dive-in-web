import { dummySwimmingPools } from "@/data/dummy";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PoolsPage = async () => {
  const pools = dummySwimmingPools;
  return (
    <div className="flex flex-col">
      <div className="p-4">
        <h1 className="font-bold text-xl">Dive-In</h1>
      </div>

      <section className="flex flex-col px-4">
        <Link
          href="/search"
          className="relative flex p-2 border border-gray-300 rounded-md overflow-hidden"
        >
          <span className="text-sm text-slate-500">강습 검색</span>
          <SearchIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5" />
        </Link>
      </section>

      <section className="flex flex-col gap-4 py-4 px-4">
        <h2 className="font-bold text-lg">수영장 살펴보기</h2>
        <ul className="flex flex-col gap-6">
          {pools.map((pool, index) => (
            <li key={pool.id}>
              <Link href={`/pools/${pool.id}`} className="flex">
                <Image
                  src={pool.photos[0]}
                  alt="수영장 사진"
                  width={100}
                  height={100}
                  priority={index < 5}
                  className="flex-none w-32 aspect-square rounded-lg"
                />
                <div className="flex-none flex flex-col gap-1 pl-3">
                  <ul className="flex items-center gap-2">
                    {pool.tags.map((tag) => (
                      <li
                        key={tag}
                        className="text-xs px-1 py-0.5 border rounded-lg"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <h3 className="font-bold">{pool.name}</h3>
                  <p className="text-xs">{pool.location}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default PoolsPage;
