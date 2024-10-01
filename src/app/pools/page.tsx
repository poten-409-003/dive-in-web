import { dummySwimmingPools } from "@/data/dummy";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PoolsPage = async () => {
  const pools = dummySwimmingPools;
  return (
    <div className="flex flex-col">
      <section className="flex flex-col">
        <div className="flex items-center gap-2 pt-10 px-4 pb-4">
          <h2 className="font-bold text-2xl">수영장</h2>
          <p className="font-bold text-lg text-gray-500">{pools.length}</p>
        </div>

        <ul className="flex flex-col gap-4 px-4 pb-4">
          {pools.map((pool, index) => (
            <li key={pool.id}>
              <Link
                href={`/pools/${pool.id}`}
                className="flex items-start gap-4"
              >
                <Image
                  src={pool.photos[0]}
                  alt="수영장 사진"
                  width={100}
                  height={100}
                  priority={index < 5}
                  className="flex-none w-[100px] aspect-square rounded-lg"
                />
                <div className="flex-none flex flex-col items-start gap-2">
                  <p className="text-xs font-bold text-gray-500 px-1.5 py-0.5 rounded bg-gray-200">
                    {pool.location}
                  </p>
                  <div className="flex flex-col gap-0.5">
                    <h3 className="text-gray-900 font-bold">{pool.name}</h3>
                    <p className="text-gray-500 text-sm">{pool.location}</p>
                  </div>
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
