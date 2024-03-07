import Meta from "./Meta";
import Navbar from "./Navbar";
import Footer from "./Footer";
import localFont from "next/font/local"

const GazellaTeamFont = localFont({
    src: [
      {
        path: '../Fonts/stolzl_medium.otf',
        weight: '400',
        style: 'normal',
      },
      {
        path: '../Fonts/stolzl_regular.otf',
        weight: '300',
        style: 'normal',
      },
      {
        path: '../Fonts/stolzl_book.otf',
        weight: '200',
        style: 'normal',
      },
      {
        path: '../Fonts/stolzl_light.otf',
        weight: '100',
        style: 'normal',
      },
    ],
  })

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
        <div className={GazellaTeamFont.className}>
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