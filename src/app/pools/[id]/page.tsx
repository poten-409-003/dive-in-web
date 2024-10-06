import { getPool } from "@/api/pools";
import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import InnerPage from "./_components/InnerPage";

type Props = {
  params: { id: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const poolId = Number(params.id);

  if (isNaN(poolId)) {
    redirect("/pools");
  }

  const pool = await getPool(poolId);

  if (!pool) {
    notFound();
  }

  return {
    title: `${pool.poolName} - 수영장 정보 | Dive In`,
    description: `${pool.region}에 위치한 ${pool.poolName}. Dive In에서 수영장 정보를 확인하고 강습을 찾아보세요!`,
  };
};

const PoolPage = async ({ params }: Props) => {
  const poolId = Number(params.id);
  // const pool = await getPool(poolId);

  // if (!pool) {
  //   notFound();
  // }

  // console.log("log: PoolPage -> pool", pool);
  // console.log("log: PoolPage -> pool", pool.poolImages);
  // console.log("log: PoolPage -> pool", pool.lessons);

  return <InnerPage poolId={poolId} />;
};

export default PoolPage;
