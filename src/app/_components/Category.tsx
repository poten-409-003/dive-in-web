// "use client";

// import Image from "next/image";
// import { useState } from "react";

// type Props = {
//   categories: string[];
//   selectedCategory: string;
//   onCategoryClick: (category: string) => void;
// };

// export default function Category({categories, selectedCategory, onCategoryClick}: Props) {
//   return (
//     <div className="flex gap-2 mb-4">
//       {categories.map((category)=> (
//         <button 
//           key={category} 
//           onClick={()=> onCategoryClick(category)}
//           className={`px-4 py-2 rounded-lg ${
//             selectedCategory === category
//             ? "bg-blue-500 text-white" 
//             : "bg-gray-200 text-gray-800" } hover:bg-gray-300`}
//         >
//           {category}
//         </button>
//       ))}
//     </div>
//   );
// };
