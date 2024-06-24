import Meta from "@/components/Layout/Meta";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GroupNavbar from "@/components/Layout/GroupNavbar";

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
            <div className="pt-[135px] bg-[url(/bgs/line.svg)] bg-cover bg-center flex flex-col justify-between min-h-screen text-main">
                {children}
                <Footer />
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}