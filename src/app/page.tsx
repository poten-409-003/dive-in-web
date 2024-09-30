import { redirect } from "next/navigation";

export const generateMetadata = () => {
  return {
    title: "Dive In",
    description: "수영에 빠져 빠져 빠져!",
  };
};

export default function Home() {
  redirect("/lessons");
}
