import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import { Star } from 'lucide-react';

export default function App() {
  return (
    <>
	<section className='py-24'>
		<div className='w-[95%] rounded-3xl p-10 mx-auto max-w-[1500px]'>
			<Swiper navigation={true} modules={[Navigation]} className="mySwiper text-main">
				<SwiperSlide>
					<div className='max-w-3xl flex flex-col gap-10 mx-auto'>
						<div className='flex items-center'>
							<div className='bg-green-200 shadow-sm rounded-full p-4'><Star color='rgb(21 128 61)' fill='rgb(21 128 61)' /></div>
							<div className='bg-green-200 shadow-sm ml-[-20px] rounded-full p-4'><Star color='rgb(21 128 61)' fill='rgb(21 128 61)' /></div>
							<div className='bg-green-200 shadow-sm ml-[-20px] rounded-full p-4'><Star color='rgb(21 128 61)' fill='rgb(21 128 61)' /></div>
							<div className='bg-green-200 shadow-sm ml-[-20px] rounded-full p-4'><Star color='rgb(21 128 61)' fill='rgb(21 128 61)' /></div>
							<div className='bg-green-200 shadow-sm ml-[-20px] rounded-full p-4'><Star color='rgb(21 128 61)' fill='rgb(21 128 61)' /></div>
						</div>
						<p className='text-3xl text-left'>&apos;Uden en klar forståelse af kundernes adfærd og rejse gennem hjemmesiden, kan det være udfordrende at identificere flaskehalse og forbedringsområder. Kan det være udfordrende at identificere.&apos;</p>
						<div className='flex items-center gap-6'>
							<img className='w-20 rounded-full border border-gray-600/10' src='/team/lasseosmann.webp'></img>
							<div className='flex flex-col'>
								<h2 className='font-semibold text-xl text-main'>Lasse Osmann</h2>
								<p className='font-normal text-gray-600 text-base'>Ejer, LM Capital</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='max-w-3xl flex flex-col gap-10 mx-auto'>
						<div className='flex items-center'>
							<div className='bg-green-200 shadow-sm rounded-full p-4'><Star color='rgb(21 128 61)' fill='rgb(21 128 61)' /></div>
							<div className='bg-green-200 shadow-sm ml-[-20px] rounded-full p-4'><Star color='rgb(21 128 61)' fill='rgb(21 128 61)' /></div>
							<div className='bg-green-200 shadow-sm ml-[-20px] rounded-full p-4'><Star color='rgb(21 128 61)' fill='rgb(21 128 61)' /></div>
							<div className='bg-green-200 shadow-sm ml-[-20px] rounded-full p-4'><Star color='rgb(21 128 61)' fill='rgb(21 128 61)' /></div>
							<div className='bg-green-200 shadow-sm ml-[-20px] rounded-full p-4'><Star color='rgb(21 128 61)' fill='rgb(21 128 61)' /></div>
						</div>
						<p className='text-3xl text-left'>&apos;Uden en klar forståelse af kundernes adfærd og rejse gennem hjemmesiden, kan det være udfordrende at identificere flaskehalse og forbedringsområder. Kan det være udfordrende at identificere.&apos;</p>
						<div className='flex items-center gap-6'>
							<img className='w-20 rounded-full border border-gray-600/10' src='/team/lasseosmann.webp'></img>
							<div className='flex flex-col'>
								<h2 className='font-semibold text-xl text-main'>Lasse Osmann</h2>
								<p className='font-normal text-gray-600 text-base'>Ejer, LM Capital</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='max-w-3xl flex flex-col gap-10 mx-auto'>
						<div className='flex items-center'>
							<div className='bg-green-200 shadow-sm rounded-full p-4'><Star color='rgb(21 128 61)' fill='rgb(21 128 61)' /></div>
							<div className='bg-green-200 shadow-sm ml-[-20px] rounded-full p-4'><Star color='rgb(21 128 61)' fill='rgb(21 128 61)' /></div>
							<div className='bg-green-200 shadow-sm ml-[-20px] rounded-full p-4'><Star color='rgb(21 128 61)' fill='rgb(21 128 61)' /></div>
							<div className='bg-green-200 shadow-sm ml-[-20px] rounded-full p-4'><Star color='rgb(21 128 61)' fill='rgb(21 128 61)' /></div>
							<div className='bg-green-200 shadow-sm ml-[-20px] rounded-full p-4'><Star color='rgb(21 128 61)' fill='rgb(21 128 61)' /></div>
						</div>
						<p className='text-3xl text-left'>&apos;Uden en klar forståelse af kundernes adfærd og rejse gennem hjemmesiden, kan det være udfordrende at identificere flaskehalse og forbedringsområder. Kan det være udfordrende at identificere.&apos;</p>
						<div className='flex items-center gap-6'>
							<img className='w-20 rounded-full border border-gray-600/10' src='/team/lasseosmann.webp'></img>
							<div className='flex flex-col'>
								<h2 className='font-semibold text-xl text-main'>Lasse Osmann</h2>
								<p className='font-normal text-gray-600 text-base'>Ejer, LM Capital</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='max-w-3xl flex flex-col gap-10 mx-auto'>
						<div className='flex items-center'>
							<div className='bg-green-200 shadow-sm rounded-full p-4'><Star color='rgb(21 128 61)' fill='rgb(21 128 61)' /></div>
							<div className='bg-green-200 shadow-sm ml-[-20px] rounded-full p-4'><Star color='rgb(21 128 61)' fill='rgb(21 128 61)' /></div>
							<div className='bg-green-200 shadow-sm ml-[-20px] rounded-full p-4'><Star color='rgb(21 128 61)' fill='rgb(21 128 61)' /></div>
							<div className='bg-green-200 shadow-sm ml-[-20px] rounded-full p-4'><Star color='rgb(21 128 61)' fill='rgb(21 128 61)' /></div>
							<div className='bg-green-200 shadow-sm ml-[-20px] rounded-full p-4'><Star color='rgb(21 128 61)' fill='rgb(21 128 61)' /></div>
						</div>
						<p className='text-3xl text-left'>&apos;Uden en klar forståelse af kundernes adfærd og rejse gennem hjemmesiden, kan det være udfordrende at identificere flaskehalse og forbedringsområder. Kan det være udfordrende at identificere.&apos;</p>
						<div className='flex items-center gap-6'>
							<img className='w-20 rounded-full border border-gray-600/10' src='/team/lasseosmann.webp'></img>
							<div className='flex flex-col'>
								<h2 className='font-semibold text-xl text-main'>Lasse Osmann</h2>
								<p className='font-normal text-gray-600 text-base'>Ejer, LM Capital</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='max-w-3xl flex flex-col gap-10 mx-auto'>
						<div className='flex items-center'>
							<div className='bg-green-200 shadow-sm rounded-full p-4'><Star color='rgb(21 128 61)' fill='rgb(21 128 61)' /></div>
							<div className='bg-green-200 shadow-sm ml-[-20px] rounded-full p-4'><Star color='rgb(21 128 61)' fill='rgb(21 128 61)' /></div>
							<div className='bg-green-200 shadow-sm ml-[-20px] rounded-full p-4'><Star color='rgb(21 128 61)' fill='rgb(21 128 61)' /></div>
							<div className='bg-green-200 shadow-sm ml-[-20px] rounded-full p-4'><Star color='rgb(21 128 61)' fill='rgb(21 128 61)' /></div>
							<div className='bg-green-200 shadow-sm ml-[-20px] rounded-full p-4'><Star color='rgb(21 128 61)' fill='rgb(21 128 61)' /></div>
						</div>
						<p className='text-3xl text-left'>&apos;Uden en klar forståelse af kundernes adfærd og rejse gennem hjemmesiden, kan det være udfordrende at identificere flaskehalse og forbedringsområder. Kan det være udfordrende at identificere.&apos;</p>
						<div className='flex items-center gap-6'>
							<img className='w-20 rounded-full border border-gray-600/10' src='/team/lasseosmann.webp'></img>
							<div className='flex flex-col'>
								<h2 className='font-semibold text-xl text-main'>Lasse Osmann</h2>
								<p className='font-normal text-gray-600 text-base'>Ejer, LM Capital</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	</section>
    </>
  );
}
