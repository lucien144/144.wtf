<script setup>
import {ref} from 'vue';
import {useHead} from '@unhead/vue'
import ResumeSection from '@/components/resume/ResumeSection.vue'
import ResumeItem from '@/components/resume/ResumeItem.vue'
import ResumePersonalLink from '@/components/resume/ResumePersonalLink.vue'
import IconPin from "@/components/icons/IconPin.vue";
import TimelineItem from "@/components/resume/TimelineItem.vue";

useHead({
	title: 'Životopis - Jan Blaško',
	meta: [{name: 'robots', content: 'noindex,nofollow'},],
})

const darkMode = ref(false);
const toggleDarkMode = () => {
	darkMode.value = !darkMode.value;
	
	// Toggle dark class on html element
	if (darkMode.value) {
		document.body.parentNode.classList.add('dark');
	} else {
		document.body.parentNode.classList.remove('dark');
	}
};
</script>
<style langs="scss">
@import 'tailwindcss';

@custom-variant dark (&:where(.dark, .dark *));
</style>
<template>
	<div class="resume font-[Merriweather]">
		<div
			class="min-h-dvh min-w-[320px] bg-white text-gray-800 dark:bg-gray-950 dark:text-gray-100"
		>
			<!-- Toggle Dark Mode -->
			<div
				class="fixed right-0 top-0 z-50 flex size-12 items-center justify-center"
			>
				<button
					@click="toggleDarkMode()"
					type="button"
					class="inline-block size-9 text-gray-600 hover:opacity-75 dark:text-gray-400 cursor-pointer"
				>
					<svg
						v-if="!darkMode"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="inline-block size-6"
					>
						<circle cx="12" cy="12" r="4"/>
						<path d="M12 2v2"/>
						<path d="M12 20v2"/>
						<path d="m4.93 4.93 1.41 1.41"/>
						<path d="m17.66 17.66 1.41 1.41"/>
						<path d="M2 12h2"/>
						<path d="M20 12h2"/>
						<path d="m6.34 17.66-1.41 1.41"/>
						<path d="m19.07 4.93-1.41 1.41"/>
					</svg>
					<svg
						v-else
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="inline-block size-6"
					>
						<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
					</svg>
				</button>
			</div>
			<!-- END Toggle Dark Mode -->
			
			<div class="container mx-auto max-w-7xl">
				<div class="grid grid-cols-1 md:grid-cols-12">
					<!-- Info -->
					<div
						class="bg-gray-100 p-5 text-left dark:bg-gray-900 md:col-span-4 lg:p-14"
					>
						<h1
							class="leading-tight mt-5 text-4xl font-extrabold lg:text-6xl"
						>
							Jan<br/>
							Blaško
						</h1>
						<h2 class="mt-3 text-xl text-purple-600 dark:text-purple-500">
							Webový a mobilní vývojář,<br/>
							Produktový manažer
						</h2>
						<div class="-mx-5 mt-10 lg:-mx-16">
							<picture>
								<source srcset="@/assets/images/me.jpg.webp" type="image/webp"/>
								<img
									src="@/assets/images/me.jpg"
									class="inline-block lg:rounded-sm"
									alt="Fotografie Honzy Blaška"
								/>
							</picture>
						</div>
						<p
							class="mt-10 text-balance leading-relaxed text-gray-700 dark:text-gray-300"
						>
							Milovník všeho webového a mobilního. Aktuálně produktový vlastník, ve volném čase fullstack
							vývojář s vášní pro vlastní (mobilní) projekty.
						</p>
						<div class="mt-10 space-y-5">
							<div class="flex items-center gap-5">
								<IconPin
									class="inline-block size-6 flex-none text-purple-600 dark:text-purple-500"
								/>
								<span class="truncate font-medium">Praha, ČR</span>
							</div>
							<ResumePersonalLink
								icon="phone"
								url="tel:+420792374343"
								title="792 374 343"
							/>
							<ResumePersonalLink
								icon="mail"
								url="mailto:jan@blasko.cz"
								title="jan@blasko.cz"
							/>
							<ResumePersonalLink
								icon="website"
								url="https://144.wtf"
								title="www.144.wtf"
								blank
							/>
						</div>
					</div>
					<!-- END Info -->
					
					<!-- Bio -->
					<div class="mx-auto max-w-2xl space-y-16 p-5 md:col-span-8 md:p-10">
						
						<nav class="flex justify-end mb-0 text-sm mb-6">
							[&nbsp;
							<a href="#pracovne" class="border-b border-gray-500 hover:text-gray-500">Pracovně</a>,
							&nbsp;<a href="#vzdelani" class="border-b border-gray-500 hover:text-gray-500">Vzdělání</a>,
							&nbsp;<a href="#projekty" class="border-b border-gray-500 hover:text-gray-500">Projekty</a>,
							&nbsp;<a href="#osobni" class="border-b border-gray-500 hover:text-gray-500">Osobní</a>,
							&nbsp;<a href="#site" class="border-b border-gray-500 hover:text-gray-500">Sítě</a>
							&nbsp;]
						</nav>
						
						<!-- Work Experience -->
						<ResumeSection title="Pracovní zkušenosti" id="pracovne" sort>
							<ResumeItem
								begin="2/2023"
								end="nyní"
								rainbow
								role="Produktový vlastník, analytik"
								company="EUC a.s. (Praha)"
								companyWeb="https://www.euc.cz"
							>
								<p>Do EUC jsem nastoupil nejdříve jako konzultant pomáhající se startem nového projektu - překlopením stávající hybridní mobilní aplikace mojeEUC do nativní podoby.</p>
								<p>Následně jsem celý projekt převzal jako produktový vlastník a přidal k němu další interní produkty jako např. mobilní aplikaci pro Disease management, rezervace eReceptů pro veřejnost, implementaci Azure prostředí do firmy či vývoj nového webu moje.euc.cz.</p>
								<p>V EUC působím dodnes a všechny zmíněné projekty budou mít start letošní rok.</p>
							</ResumeItem>
							
							<ResumeItem
								begin="11/2013"
								end="nyní"
								rainbow
								role="Hlavní vývojář"
								company="Circul8 (Praha, Sydney)"
								companyWeb="https://www.circul8.com.au"
							>
								<p>Po opuštění GoodShape jsem se vrátil na nějaký čas zpět do Circul8 jako webový vývojář a pracoval pro ně vzdáleně z Prahy. V roce 2016 jsem se svojí ženou a dvěma dětmi do Sydney relokoval, kde jsem další necelé 3 roky působil jako hlavní šéf vývoje než jsme se vrátili zpět do Čech.</p>
								<p>S Circul8 se nám podařilo vyhrát několik zajímavých ocenění (Webby Awards, W3 Awards, Aimia Awards, ...) a mezi nejzajímavější projekty, na kterých jsem pracoval, patří:</p>
								<ul class="list-disc ml-6">
									<li><a href="https://www.whichplantwhere.com.au/" target="_blank" class="border-b border-gray-300 hover:border-gray-800 dark:border-gray-600 dark:hover:border-gray-200">Which Plant Where</a> - webová databáze rostlin rozdělených podle vlastností sloužící urban-architektům najít nejvhodnější rostliny při plánování zástavby na 30 let dopředu s přihlédnutím ke klimatickým změnám.
									</li>
									<li><a href="https://www.circul8.com.au/work/crop-count" target="_blank" class="border-b border-gray-300 hover:border-gray-800 dark:border-gray-600 dark:hover:border-gray-200">Crop Count (interní aplikace)</a> - mobilní aplikace pro pěstitelé avokád pomáhající zvýšit výnosnost jejich farem pomocí satelitních snímků a speciálního algoritmu vyvinutého v <a href="https://www.une.edu.au/" target="_blank" class="border-b border-gray-300 hover:border-gray-800 dark:border-gray-600 dark:hover:border-gray-200">University of New England</a>.
									</li>
									<li><a href="https://www.desirebull.com.au/" target="_blank" class="border-b border-gray-300 hover:border-gray-800 dark:border-gray-600 dark:hover:border-gray-200">DesireBull (částečně mimo provoz)</a> - vyhledávač býků na základě genetických vlastností usnadňující chovatelům najít "toho pravého" býka pro svoje stádo. Vyvinuto ve spolupráci s <a href="https://www.dpi.nsw.gov.au/" target="_blank" class="border-b border-gray-300 hover:border-gray-800 dark:border-gray-600 dark:hover:border-gray-200">Department of Primary Industries</a>.
									</li>
								</ul>
								<p>S Circul8 jsem dál v úzkém pracovním kontaktu, ačkoli se míra spolupráce i s ohledem na další projekty zredukovala.</p>
							</ResumeItem>
							
							<ResumeItem
								begin="10/2010"
								end="11/2013"
								role="Projektový manažer, analytik, partner"
								company="GoodShape (Praha)"
								companyWeb="https://www.goodshape.cz"
							>
								<p>Během pobytu v Austrálii mě kontaktoval GoodShape s nabídkou vstoupit do firmy jako
									spoluvlastník a projektový manažer. Zajímavou příležitost jsem přijal a kromě
									zmíněných pozic jsem zde zastával i pozici UX designéra.</p>
								<p>Kreslení drátěných modelů, psaní user stories a projektové dokumentace pro mě bylo
									vedle řízení firmy denní chléb. Mezi nejzajímavější klienty řadím Dopravní podnik
									hl. m. Prahy, TV Prima, Rádio 1 či Trigema.</p>
								<p>V GoodShape se mi podařilo navázat spolupráci s Circul8, se kterými jsem si udržel
									kontakt, a určitou dobu jsme pro ně vyvíjeli projekty z Čech - nejzajímavějším byl
									projekt Live It Up, což byl australský klon Grouponu.</p>
							</ResumeItem>
							
							<ResumeItem
								begin="4/2009"
								end="10/2010"
								role="Webový vývojář"
								company="Circul8 (Praha, Sydney)"
								companyWeb="https://www.circul8.com.au"
							>
								<p>Ačkoli mě práce v GoodShape naplňovala, rozhodl jsem se splnit si sen a odcestoval na
									začátku roku 2009 do Austrálie. Zde jsem první 3 měsíce studoval angličtinu a po
									skončení kurzu nastoupil na Central College studovat obor Business & Multimedia.</p>
								<p>Při studiích jsem si našel práci jako webový vývojář v digitálním studiu Circul8 kde
									jsem měl možnost pracovat na kampaních pro Greenpeace NZ, Amnesty International nebo
									Japanese National Tourism Organisation.</p>
							</ResumeItem>
							
							<ResumeItem
								begin="11/2006"
								end="1/2009"
								role="Webový vývojář, správce serverů"
								company="GoodShape (Praha)"
								companyWeb="https://www.goodshape.cz"
							>
								<p>Po cca roce a půl na volné noze jsem chtěl nabrat nové zkušenosti a zakotvil v té
									době malém rozrůstajícím se studiu GoodShape. V GoodShape jsem pracoval na webových
									projektech pro různé klienty středních velikostí a dále jako správce serverů.</p>
							</ResumeItem>
							
							<ResumeItem
								begin="6/2005"
								end="11/2006"
								role="Na volné noze"
							>
								<p>Během studia na vysoké škole (<a href="https://fei.upce.cz/" target="_blank" class="border-b border-gray-300 hover:border-gray-800 dark:border-gray-600 dark:hover:border-gray-200">UPCE</a>)
									jsem si začal přivydělávat nejdříve jako grafik, následně jako webový programátor. Z
									vysoké školy jsem odešel po dokončeném druhém ročníku a začal se plně živit jako
									vývojář na volné noze.</p>
								<p>Postupem času jsem začal spolupracovat hlavně se společností <a
									href="https://www.linkedin.com/company/inspiro-solutions/" target="_blank" class="border-b border-gray-300 hover:border-gray-800 dark:border-gray-600 dark:hover:border-gray-200">Inspiro
									Solutions</a>, která mi dodávala většinu zakázek. Pro tu jsem vybudoval její
									vlajkový produkt Inspiro Publisher CMS - tedy redakční systém, které tehdy poháněl
									weby všech firemních klientů.</p>
							</ResumeItem>
						
						</ResumeSection>
						<!-- END Work Experience -->
						
						<!-- Education -->
						<ResumeSection title="Vzdělání" id="vzdelani">
							<TimelineItem>
								<template #subheading>
									2009-2010
								</template>
								<template #title>
									<span class="font-bold">Central College</span> (Sydney, Austrálie)
								</template>
								V Austrálii jsem studoval obor Business &amp; Multimedia, který jsem dokončil získáním
								Diploma I. Během studia jsem nastoupil na částečný úvazek do Circul8.
							</TimelineItem>
							
							<TimelineItem>
								<template #subheading>
									2000-2004
								</template>
								<template #title>
									<span class="font-bold">Gymnázium U Libeňského zámku</span> (Praha, ČR)
								</template>
								Gymnázium se zaměřením na programování.
							</TimelineItem>
						</ResumeSection>
						<!-- END Education -->
						
						<!-- Side projects -->
						<ResumeSection title="Vedlejší projekty" id="projekty">
							<TimelineItem>
								<template #subheading>
									Mobilní aplikace
								</template>
								<template #title>
									<span class="font-bold">Fyx</span> &ndash;
									<a
										class="font-medium text-sm border-b border-gray-300 hover:border-gray-800 dark:border-gray-600 dark:hover:border-gray-200"
										target="_blank"
										href="https://apps.apple.com/cz/app/fyx-pro-nyx-cz/id1507921589?l=cs"
									>iOS</a>,
									<a
										class="font-medium text-sm border-b border-gray-300 hover:border-gray-800 dark:border-gray-600 dark:hover:border-gray-200"
										target="_blank"
										href="https://play.google.com/store/apps/details?id=net.lucien144.fyx"
									>Android</a>,
									<a
										class="font-medium text-sm border-b border-gray-300 hover:border-gray-800 dark:border-gray-600 dark:hover:border-gray-200"
										target="_blank"
										href="https://github.com/lucien144/fyx"
									>Zdrojové kódy</a>
								</template>
								Fyx je neoficiální klient pro český diskuzní server Nyx.cz s více než 800
								aktivními uživateli (DAU) napříč oběma mobilními platformami. Fyx je psán ve
								Flutteru.
							</TimelineItem>
							<TimelineItem>
								<template #subheading>
									Startup, AI, mobilní aplikace
								</template>
								<template #title>
									<span class="font-bold">SuperMeal</span>
								</template>
								<p>SuperMeal bude služba pomáhající uživatelům zlepšit své stravovací návyky na základě interně vyvinuté adaptivní diety. Středobodem bude mobilní aplikace, která vám sestaví jídelníček ze sady předem připravených vyvážených receptů přesně na míru.</p>
								<p>Aktuálně máme hotový prototyp aplikace pro iOS a Android, který testujeme na uživatelích.</p>
							</TimelineItem>
							<TimelineItem>
								<template #subheading>
									E-shop
								</template>
								<template #title>
									<span class="font-bold font-mono">/dev/null</span> &ndash;
									<a
										class="font-medium text-sm border-b border-gray-300 hover:border-gray-800 dark:border-gray-600 dark:hover:border-gray-200"
										target="_blank"
										href="https://devnull.store"
									>https://devnull.store</a>
								</template>
								<p>Malý obchod s tričky pro webové vývojáře, kteří nechtějí nosit klasické "Keep calm &amp; code" designy.</p>
							</TimelineItem>
							<TimelineItem disabled>
								<template #subheading>
									Hra, Mobilní aplikace
								</template>
								<template #title>
									<span class="font-bold">The Button Game</span> &ndash;
									<a
										class="font-medium text-sm border-b border-gray-300 hover:border-gray-800 dark:border-gray-600 dark:hover:border-gray-200"
										target="_blank"
										href="https://tbga.me/"
									>web</a>
								</template>
								<p>Mobilní PvP hra pro 2 hráče, kteří proti sobě bojují v hledání čísel na hrací ploše. Zároveň na sebe mohou útočit speciálními efekty jako zamíchání čísel, deaktivace čísel atp.</p>
								<p>Projekt je aktuálně pozastavený&hellip;</p>
							</TimelineItem>
							<TimelineItem disabled>
								<template #subheading>
									Web, Mobilní aplikace
								</template>
								<template #title>
									<span class="font-bold">Artkina</span> &ndash;
									<a
										class="font-medium text-sm border-b border-gray-300 hover:border-gray-800 dark:border-gray-600 dark:hover:border-gray-200"
										target="_blank"
										href="https://www.artkina.cz"
									>web</a>,
									<a
										class="font-medium text-sm border-b border-gray-300 hover:border-gray-800 dark:border-gray-600 dark:hover:border-gray-200"
										target="_blank"
										href="https://play.google.com/store/apps/details?id=cz.goodshape.artkina"
									>Android</a>,
									<span
										class="font-medium text-sm text-gray-500 dark:text-white line-through border-b border-gray-300 hover:border-gray-800 dark:border-gray-600 dark:hover:border-gray-200"
									>iOS</span>
								</template>
								<p>Aplikace pro miloníky filmu a artových kin, která sdružovala program právě z artových kin po celé ČR.</p>
								<p>Projekt je aktuálně pozastavený&hellip;</p>
							</TimelineItem>
						</ResumeSection>
						<!-- END Side projects -->
						
						<ResumeSection title="Osobní život" id="osobni">
							<TimelineItem>
								<template #subheading>
									Soukromě
								</template>
								<template #title>
									Je mi 40 let, jsem ženatý a mám 3 děti (11-9-7).
								</template>
							</TimelineItem>
							
							<TimelineItem>
								<template #subheading>Koníčky</template>
								<template #title>
									Včelařím 🐝, sbírám vinyly, rád plavu a piji černé filtrované kafe.
								</template>
							</TimelineItem>
						</ResumeSection>
						
						
						<!-- Social -->
						<div>
							
							<ResumeSection title="Sociální sítě" id="site">
								<TimelineItem>
									<template #subheading>
										LinkedIn
									</template>
									<template #title>
										Pracovní profil
									</template>
									<a href="https://www.linkedin.com/in/blaskojan" target="_blank" class="text-sm font-medium border-b border-gray-300 hover:border-gray-800 dark:border-gray-600 dark:hover:border-gray-200">www.linkedin.com/in/blaskojan</a>
								</TimelineItem>
								
								<TimelineItem>
									<template #subheading>Github</template>
									<template #title>
										Soukromý profil
									</template>
									<a href="https://github.com/lucien144" target="_blank" class="text-sm font-medium border-b border-gray-300 hover:border-gray-800 dark:border-gray-600 dark:hover:border-gray-200">github.com/lucien144</a>
								</TimelineItem>
								
								<TimelineItem>
									<template #subheading>Bluesky</template>
									<template #title>
										Soukromý profil
									</template>
									<a href="https://bsky.app/profile/lucien144.bsky.social" target="_blank" class="text-sm font-medium border-b border-gray-300 hover:border-gray-800 dark:border-gray-600 dark:hover:border-gray-200">@lucien144.bsky.social</a>
								</TimelineItem>
							</ResumeSection>
							
							<!-- Footer -->
							<footer
								class="mt-20 space-y-2 py-8 text-sm text-gray-400 dark:text-gray-800"
							>
								<p class="inline-flex items-center gap-1">
									<span>Šablona od
                    <a
						href="https://pixelcave.com"
						class="font-medium text-gray-400 underline border-none hover:text-black/75 dark:text-gray-800 dark:hover:text-white/75"
					>
                      pixelcave
                    </a></span
									>
								</p>
							</footer>
							<!-- END Footer -->
						</div>
						<!-- END Social -->
					</div>
					<!-- END Bio -->
				</div>
			</div>
		</div>
	</div>
</template>