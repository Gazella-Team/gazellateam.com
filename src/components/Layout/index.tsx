import Meta from "./Meta";
import Navbar from "./Navbar";
import Footer from "./Footer";
import localFont from "next/font/local"
import Script from "next/script";



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
        <Script src="https://api.toolbird.io/js/script.js" strategy="lazyOnload" data-domain="gazellateam.com"/>
        <Meta />
        <div>
            <div className={`${className}`}>
            <Meta />
            <Navbar />
            <div className="pt-[80px] bg-[url(/bgs/line.svg)] bg-cover bg-center flex flex-col justify-between min-h-screen text-main">
                {children}
                <Footer />
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}