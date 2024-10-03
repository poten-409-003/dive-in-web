import { getPools } from "@/api/pools";
import LessonChip from "@/components/ui/Chip";
import Image from "next/image";
import Link from "next/link";

const PoolsPage = async () => {
  const pools = await getPools();
  return (
    <div className="flex flex-col">
      <section className="flex flex-col">
        <div className="flex items-center gap-2 pt-10 px-4 pb-5">
          <h2 className="text-heading_2 text-gray-900">수영장</h2>
          <p className="text-body_lb text-gray-500">{pools.length}</p>
        </div>

        <ul className="grid grid-cols-2 gap-4 px-4 pb-10">
          {pools.map((pool, index) => (
            <li key={pool.id}>
              <Link
                href={`/pools/${pool.id}`}
                className="flex flex-col items-start gap-3"
              >
                <Image
                  src={pool.imageUrl || "/empty/image.png"}
                  alt="수영장 사진"
                  width={200}
                  height={200}
                  priority={index < 8}
                  className="flex-none w-full h-[100px] object-cover rounded-lg"
                />
                <div className="flex-none flex flex-col items-start gap-2">
                  <LessonChip label={pool.region} />
                  <div className="flex flex-col gap-0.5">
                    <h3 className="text-gray-900 text-body_bb">
                      {pool.poolName}
                    </h3>
                    <p className="text-gray-600 text-body_sr line-clamp-1">
                      {pool.poolAddress}
                    </p>
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
