import Slider from "react-infinite-logo-slider";

const serviceData = ["User Experience", "App Development", "Web Development", "Customer Journey", "Future Design", "Conversions"]

export default function ServiceSlider() {
    return (
      <section className="py-0 bg-whites h-[8vh] flex items-center overflow-hidden">
        <div>
          <Slider
            width="200px"
            duration={20}
            pauseOnHover={false}
            blurBorders={true}
            blurBoderColor={"#fff"}
          >
            {serviceData.map((v) => (
              <Slider.Slide key={v}>
                <div className="flex items-center justify-center">
                  <p className="font-[200] text-gray-400">{v}</p>
                </div>
              </Slider.Slide>
            ))}
          </Slider>
        </div>
      </section>
    );
  }