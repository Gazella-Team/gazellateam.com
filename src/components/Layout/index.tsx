import Meta from "./Meta";
import Navbar from "./Navbar";
import Footer from "./Footer";
import localFont from "next/font/local"
import Script from "next/script";
import { cn } from "@/contentlayer/lib/utils";



export default function Layout({
  className,
  children,
  noNavPadding
}: {
  className?: string;
  children: React.ReactNode;
  noNavPadding?: boolean;
}) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <Script src="https://api.toolbird.io/js/script.js" strategy="lazyOnload" data-domain="gazellateam.com"/>
        <Meta />
        <div>
            <div className={`${className}`}>
            <Meta />
            <Navbar noNavPadding={noNavPadding} />
            <div className={cn("pt-[80px] bg-cover bg-center flex flex-col justify-between min-h-screen text-main", noNavPadding && "pt-0")}>
                {children}
                <Footer />
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}