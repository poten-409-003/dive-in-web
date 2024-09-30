import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dive In",
  description: "수영에 빠져 빠져 빠져!",
};

export default function Home() {
  redirect("/lessons");
}
