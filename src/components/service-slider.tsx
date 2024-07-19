import Link from "next/link";
import Slider from "react-infinite-logo-slider";

const serviceData = [
  {image: "/hjemmeside/case-fotos/1.webp", link: "https://coad.dk/"},
  {image: "/hjemmeside/case-fotos/2.webp", link: "https://coad.dk/"},
  {image: "/hjemmeside/case-fotos/3.webp", link: "https://coad.dk/"},
  {image: "/hjemmeside/case-fotos/4.webp", link: "https://coad.dk/"},
  {image: "/hjemmeside/case-fotos/5.webp", link: "https://coad.dk/"},
  {image: "/hjemmeside/case-fotos/6.webp", link: "https://coad.dk/"},
  {image: "/hjemmeside/case-fotos/1.webp", link: "https://coad.dk/"},
  {image: "/hjemmeside/case-fotos/2.webp", link: "https://coad.dk/"},
  {image: "/hjemmeside/case-fotos/3.webp", link: "https://coad.dk/"},
  {image: "/hjemmeside/case-fotos/4.webp", link: "https://coad.dk/"},
  {image: "/hjemmeside/case-fotos/5.webp", link: "https://coad.dk/"},
  {image: "/hjemmeside/case-fotos/6.webp", link: "https://coad.dk/"},
  {image: "/hjemmeside/case-fotos/1.webp", link: "https://coad.dk/"},
  {image: "/hjemmeside/case-fotos/2.webp", link: "https://coad.dk/"},
  {image: "/hjemmeside/case-fotos/3.webp", link: "https://coad.dk/"},
  {image: "/hjemmeside/case-fotos/4.webp", link: "https://coad.dk/"},
  {image: "/hjemmeside/case-fotos/5.webp", link: "https://coad.dk/"},
  {image: "/hjemmeside/case-fotos/6.webp", link: "https://coad.dk/"},
]

export default function ServiceSlider() {
    return (
      <section className="py-10 pb-24 bg-white flex items-center overflow-hidden">
        <div>
          <Slider
            width="430px"
            duration={150}
            pauseOnHover={false}
            blurBorders={false}
            blurBoderColor={"#ffff"}
          >
            {serviceData.map((v) => (
              <Slider.Slide key={v}>
                <Link className="mr-10 bg-black" href={v.link}>
                  <img className="w-[1000px] opacity-90" src={v.image}></img>
                </Link>
              </Slider.Slide>
            ))}
          </Slider>
        </div>
      </section>
    );
  }