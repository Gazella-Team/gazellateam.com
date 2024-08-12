import Meta from './Meta'
import Navbar from './Navbar'
import Footer from './Footer'
import localFont from 'next/font/local'
import Script from 'next/script'
import { cn } from '@/lib/utils'
import SalesModal from './SalesModal'

export default function Layout({
	className,
	children,
	cta,
	transparentNav,
}: {
	className?: string
	children: React.ReactNode
	cta?:boolean
	transparentNav?: boolean,
}) {
	return (
		<div className="flex flex-col justify-between min-h-screen">
			<div>
				<Script
					src="https://api.toolbird.io/js/script.js"
					strategy="lazyOnload"
					data-domain="gazellateam.com"
				/>
				<Meta />
				<div>
					<div className={`${className}`}>
						<Meta />
						<Navbar transparent={transparentNav} />
						<div className={cn("pt-[80px] bg-[url(/bgs/line.svg)] bg-cover bg-center flex flex-col justify-between min-h-screen text-main", transparentNav && "pt-0")}>
							{children}
						</div>
						<Footer noCta={cta} />
					</div>
				</div>
			</div>
		</div>
	)
}
