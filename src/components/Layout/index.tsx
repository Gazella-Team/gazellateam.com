import Meta from "./Meta";
import Navbar from "./Navbar";
import Footer from "./Footer";
import localFont from "next/font/local"

export default function Layout({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <Meta />
        <div>
            <div className={`${className}`}>
            <Meta />
            <Navbar />
            <div className="pt-[85px] text-main">
                {children}
            </div>
            <Footer />
            </div>
        </div>
      </div>
    </div>
  );
}