import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="w-full h-[48px] bg-[#000000] flex items-center justify-center">
        <p className="text-white text-[14px] leading-[24px]">
          Foodtuck
        </p>
      </div>
    </>
  );
}
