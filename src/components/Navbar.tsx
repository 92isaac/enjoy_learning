// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { cn } from "../../lib/utils";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname();
//   const isActive = (href: string) => pathname.includes(href);

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-[#2b186b] text-white shadow-md z-50">
//       <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
//         <h1 className="text-2xl font-bold">Enjoy Learning Hub</h1>
//         <div className="hidden md:flex space-x-8">
//           {["Home", "About", "Gallery", "Contact"].map((item) => (
//             <a
//               href={`/${item.toLowerCase()}`}
//               className={cn("hover:text-accent", isActive(`/${item.toLowerCase()}`) ? "bg-white text-[#2b186b] px-3 rounded-sm" : "")}
//               key={item}
//             >
//               {item}
//             </a>
//           ))}
//         </div>
//         <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
//           ☰
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="md:hidden bg-primary p-4 text-center space-y-3"
//         >
//           {["Home", "About Us", "Gallery", "Contact Us"].map((item) => (
//             <Link
//               href={`#${item.toLowerCase()}`}
//               className="block"
//               key={item}
//               onClick={() => setIsOpen(false)}
//             >
//               {item}
//             </Link>
//           ))}
//         </motion.div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../../lib/utils";
import Image from "next/image";
import { logo } from "@/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Updated isActive logic
  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname.includes(href);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#2b186b] text-white shadow-md z-50">
      <div className=" mx-auto flex justify-between items-center p-4">
        {/* <h1 className="text-2xl font-bold">Enjoy Learning Hub</h1> */}
        <Image src={logo} alt="logo" width={100} height={50} className="" />
        <div className="hidden md:flex space-x-8">
          {[
            { label: "Home", path: "/" },
            { label: "About", path: "/about" },
            { label: "Gallery", path: "/gallery" },
            { label: "Contact", path: "/contact" },
          ].map(({ label, path }) => (
            <Link
              href={path}
              className={cn(
                "hover:text-accent",
                isActive(path) ? "bg-white text-[#2b186b] px-3 rounded-sm" : ""
              )}
              key={label}
            >
              {label}
            </Link>
          ))}
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-primary p-4 text-start space-y-5"
        >
         {[
            { label: "Home", path: "/" },
            { label: "About", path: "/about" },
            { label: "Gallery", path: "/gallery" },
            { label: "Contact", path: "/contact" },
          ].map(({ label, path }) => (
            <Link
              href={path}
              className={cn(
                "hover:text-accent block",
                isActive(path) ? "bg-white w-1/2 text-[#2b186b] px-3 rounded-sm" : ""
              )}
              key={label}
            >
              {label}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

