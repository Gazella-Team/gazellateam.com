export default function Testimonials() {
	return (
		<section className="py-24">
			<div className="w-[90%] mx-auto max-w-[1300px] grid grid-cols-1 gap-24 lg:grid-cols-3 lg:gap-6">
				<div className="shadow-sm text-center flex flex-col justify-between bg-[#fafafa] p-10 px-16 border border-gray-600/10 rounded-2xl">
					<img
						className="w-20 rounded-full mx-auto mt-[-80px] mb-10"
						src="/testimonial-headshots/gustav-walsted.webp"
					></img>
					<p className="paragraph mb-10">
						&quot; Fuldkommen perfekt hjemmeside. Jeg har arbejdet
						sammen med Lasse og hans team da jeg stod og manglede en
						ny hjemmeside til mit agency. Der er ikke andet at sige
						end at resultatet er blevet virkelig lækkert og lige
						hvad jeg søgte. Kan varmt anbefales til alle der leder
						efter en hjemmeside fra øverste hylde! &quot;
					</p>
					<div className="flex flex-col gap-1">
						<h2 className="font-[300]">Gustav Walsted</h2>
						<p className="text-gray-600 paragraph">
							Marketingskonsulent
						</p>
					</div>
				</div>
				<div className="shadow-sm text-center flex flex-col justify-between bg-[#fafafa] p-10 px-16 border border-gray-600/10 rounded-2xl">
					<img
						className="w-20 rounded-full mx-auto mt-[-80px] mb-10"
						src="/testimonial-headshots/benjamin-madsen.webp"
					></img>
					<p className="paragraph mb-10">
						&quot; Jeg havde problemer med opsætning af min nye
						web-app, hvor jeg havde fornøjelsen af at søge
						vejledning hos Gazella Team. Lasse og hans team har et
						serviceorienteret og professionelt approach til deres
						arbejde, og jeg kan anbefale dem på det kraftigste!
						&quot;
					</p>
					<div className="flex flex-col gap-1">
						<h2 className="font-[300]">Benjaming Madsen</h2>
						<p className="text-gray-600 paragraph">
							Marketingskonsulent
						</p>
					</div>
				</div>
				<div className="shadow-sm text-center flex flex-col justify-between bg-[#fafafa] p-10 px-16 border border-gray-600/10 rounded-2xl">
					<img
						className="w-20 rounded-full mx-auto mt-[-80px] mb-10"
						src="/testimonial-headshots/asger-tiedt.webp"
					></img>
					<p className="paragraph mb-10">
						&quot; Jeg havde problemer med opsætning af min nye
						web-app, hvor jeg havde fornøjelsen af at søge
						vejledning hos Gazella Team. Lasse og hans team har et
						serviceorienteret og professionelt approach til deres
						arbejde, og jeg kan anbefale dem på det kraftigste!
						&quot;
					</p>
					<div className="flex flex-col gap-1">
						<h2 className="font-[300]">Asger Tiedt</h2>
						<p className="text-gray-600 paragraph">
							Frisør, Freelance
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
