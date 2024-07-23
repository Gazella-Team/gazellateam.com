import Link from 'next/link'

export default function Footer() {
	return (
		<section className="py-[20px] text-main flex items-center bg-[#fafafa]">
			<div className="w-[94%] max-w-main mx-auto flex items-center justify-between gap-[70px] text-center">
				<p className="font-[200] text-sm text-gray-400">
					© {new Date().getFullYear()} Gazella Team
				</p>
				<p className="font-[200] text-sm text-gray-400">
					hey@gazellateam.com
				</p>
			</div>
		</section>
	)
}
