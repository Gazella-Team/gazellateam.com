import Accordion from '../elements/Accordion'

export default function DevelopmentFAQ() {
	return (
		<Accordion
			items={[
				{
					title: 'Frontend Udvikling',
					content: (
						<div className="flex flex-col gap-4">
							<p className="font-light text-[18px] paragraph text-gray-600">
								Vores frontend-team kan bringe dine designs til
								live ved at skabe fængslende brugergrænseflader
								og gnidningsløse brugeroplevelser. Med fokus på
								responsivt design og optimal ydeevne udvikler vi
								applikationer, der engagerer og fastholder dine
								brugere. Fra pixelperfekte layouts til
								interaktive elementer sikrer vi problemfri
								interaktioner på tværs af enheder. Vi har
								særligt fokus på følgende:
							</p>
							<ul
								role="list"
								className="ml-4 list-disc list-inside [&>li]:font-light [&>li]: text-[18px] [&>li]:paragraph [&>li]:text-gray-600"
							>
								<li>React</li>
								<li>React Native</li>
								<li>Typescript</li>
								<li>Responsive design</li>
								<li>Webpack</li>
								<li>Tailwind CSS</li>
								<li>
									Frontend testing (Jest, Cypress, Enzyme,
									etc.)
								</li>
								<li>RESTful API&nbsp;integration</li>
								<li>Performance optimisation</li>
								<li>Web accessibility </li>
							</ul>
						</div>
					),
				},
				{
					title: 'Backend Udvikling',
					content: (
						<div className="flex flex-col gap-4">
							<p className="font-light text-[18px] paragraph text-gray-600">
								Vores dygtige team af backend-udviklere bygger
								motoren, der driver din software. Fra robuste
								API&apos;er og server-side logik til
								databasedesign og optimering sikrer vi, at dine
								applikationer kører effektivt og sikkert. Med
								fokus på skalerbarhed og ydeevne lægger vi
								grundlaget for problemfrie brugeroplevelser og
								pålidelig funktionalitet. Stol på os til at
								håndtere de tekniske kompleksiteter, så du kan
								fokusere på at udvikle din forretning. Vi er
								særligt kompetente inden for:
							</p>
							<ul
								role="list"
								className="ml-4 list-disc list-inside [&>li]:font-light [&>li]: text-[18px] [&>li]:paragraph [&>li]:text-gray-600"
							>
								<li>NodeJS</li>
								<li>GO</li>
								<li>Typescript</li>
								<li>Express</li>
								<li>JEST</li>
								<li>Redis</li>
								<li>Firebase</li>
								<li>SQL Databases</li>
								<li>No-SQL Databases</li>
								<li>RESTful APIs</li>
								<li>Git</li>
							</ul>
						</div>
					),
				},
				{
					title: 'Prototype & MVP Udvikling',
					content: (
						<div className="flex flex-col gap-4">
							<p className="font-light text-[18px] paragraph text-gray-600">
								Skal du hurtigt lancere et MVP, men er ikke helt
								sikker på, hvad du har brug for? Du er kommet
								til det rette sted. Vores erfarne team kan
								hjælpe dig med at omdanne dine idéer til et
								fuldt funktionelt MVP hurtigt. Vi begynder med
								at samarbejde tæt med dig for at definere
								omfanget af dit projekt og sikre, at vi fanger
								din vision præcist.
							</p>

							<p className="font-light text-[18px] paragraph text-gray-600">
								Med vores agile tilgang prioriterer vi at få de
								første demoer leveret hurtigt, ofte{' '}
								<span className="font-medium">
									inden for den første måned
								</span>{' '}
								af udviklingen. Du vil modtage regelmæssige
								opdateringer og demoer, så snart de er klar, så
								du altid er informeret om fremskridt i dit
								projekt.
							</p>
							<p className="font-light text-[18px] paragraph text-gray-600">
								Når tiden er inde til at tage dit MVP til næste
								niveau, er vi klar til at implementere det i
								produktion på web-, Android- eller
								iOS-platforme, så det imødekommer din målgruppe
								problemfrit.
							</p>
							<p className="font-light text-[18px] paragraph text-gray-600">
								Du får en dedikeret projektleder, der guider dig
								gennem hele udviklingsprocessen og hurtigt
								adresserer eventuelle spørgsmål eller
								bekymringer.
							</p>
						</div>
					),
				},
				{
					title: 'Full-Stack App Udvikling',
					content: (
						<div className="flex flex-col gap-4">
							<p className="font-light text-[18px] paragraph text-gray-600">
								Ønsker du at opbygge en kraftfuld og robust
								applikation fra bunden? Fra konceptualisering
								til udførelse kan vores team dække alle aspekter
								af dit projekt for at sikre en problemfri
								brugeroplevelse og ydelse i topklasse.
							</p>
							<p className="font-light text-[18px] paragraph text-gray-600">
								Vi vil arbejde tæt sammen med dig for at forstå
								dine unikke krav og designe en skalerbar og
								fremtidssikret arkitektur. Uanset om det er en
								Web-Applikation, SaaS, Mobil App, eller alle
								tre, så har vi dig.
							</p>
							<p className="font-light text-[18px] paragraph text-gray-600">
								Ved at udnytte de nyeste teknologier og bedste
								praksisser skaber vi dynamiske frontend
								interfaces, der fanger brugerne, og
								backend-systemer, der håndterer komplekse
								operationer uden besvær.
							</p>
							<p className="font-light text-[18px] paragraph text-gray-600">
								Med fokus på kontinuerlig integration og agile
								metoder leverer vi regelmæssige opdateringer og
								demoer, så du altid er opdateret.
							</p>
							<p className="font-light text-[18px] paragraph text-gray-600">
								Er du klar til at se din vision blive til
								virkelighed? Book et opkald, og lad os
								diskutere, hvordan vi kan forvandle din drømme
								App til virkelighed.
							</p>
						</div>
					),
				},
			]}
		/>
	)
}
