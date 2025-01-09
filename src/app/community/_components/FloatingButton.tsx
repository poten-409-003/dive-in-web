import Link from "next/link";

export default function FloatingButton(){
  return (
    <div>
      <Link
        href="/community/posts"
        className="fixed bottom-20 right-4 w-20 h-20 bg-blue-900 text-white rounded-full 
        flex items-center justify-center shadow-lg hover:bg-blue-800"
      >
        <p className="text-4xl leading-none relative top-[-2px] hover:scale-110 transition-transform">+</p>
      </Link>

    </div>
  );
}