module.exports = [
"[project]/Downloads/ALARIS/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/ALARIS/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/ALARIS/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/Downloads/ALARIS/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/ALARIS/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/ALARIS/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/ALARIS/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/ALARIS/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/ALARIS/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Downloads/ALARIS/app/locales/en.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"nav\":{\"home\":\"Home\",\"services\":\"Services\",\"about\":\"About Us\",\"landowners\":\"For Landowners\",\"projects\":\"Projects\",\"landsurvey\":\"Land Survey\",\"contact\":\"Contact\"},\"hero\":{\"kicker\":\"Sustainable Energy Solutions\",\"title\":\"Your Partner for Sustainable Wind Energy Solutions\",\"subtitle\":\"Powering World green energy revolution with innovative wind farm solutions. From design to deployment, we deliver excellence in every project.\",\"cta_primary\":\"Get in Touch\",\"cta_secondary\":\"Learn More\"},\"about1\":{\"kicker\":\"About Us\",\"title\":\"Leading the Wind Energy Revolution\",\"p1\":\"At ALARIS, we are committed to accelerating World transition to clean energy. With over a decade of experience, we have established ourselves as a trusted partner for businesses, landowners, and institutions seeking reliable wind energy solutions.\",\"p2\":\"Our team of expert engineers and project managers ensures every installation meets the highest standards of quality and efficiency, delivering long-term value for our clients.\",\"discover\":\"Discover Our Story\",\"imageAlt\":\"Wind turbine installation engineers at work\"},\"about\":{\"preview\":{\"kicker\":\"About Us\",\"title\":\"Leading the Wind Energy Revolution\",\"p1\":\"At ALARIS, we are committed to accelerating World transition to clean energy. With over a decade of experience, we have established ourselves as a trusted partner for businesses, landowners, and institutions seeking reliable wind energy solutions.\",\"p2\":\"Our team of expert engineers and project managers ensures every installation meets the highest standards of quality and efficiency, delivering long-term value for our clients.\",\"discover\":\"Discover Our Story\",\"imageAlt\":\"Wind turbine installation engineers at work\"},\"hero\":{\"subtitle\":\"About Us\",\"title\":\"ALARIS — Who We Are and What We Do\",\"description\":\"For two decades, the shareholders of farmWIND GmbH have been committed to renewable energy, working in partnership with landowners. As a project developer, farmWIND GmbH plans, builds, and operates wind and photovoltaic parks. Their goal is to create a sustainable electricity supply in Germany with local added value. Dedicated employees consistently strive for the best possible project outcomes, always adhering to the highest quality and economic standards. Even under adverse external circumstances, projects are pursued with perseverance, requiring patience and tenacity. With farmWIND GmbH, established renewable energy project developers in Germany are reuniting.\"},\"teamSection\":{\"subtitle\":\"Our Team\",\"title\":\"Leadership & Shareholders\",\"description\":\"The experienced professionals behind ALARIS.\"},\"team\":{\"thomas\":{\"name\":\"Thomas Griffith\",\"role\":\"Partner\",\"bio\":\"A trained savings bank business administrator, Thomas Griffith began his career in 2003 as a corporate client advisor and specialized in financing renewable energy projects, particularly wind and solar farms, from 2008 onwards. With a certification as a specialist advisor for regional energy development projects, he successfully manages a community wind farm with 44 wind turbines and almost 100 MW. In addition to his role as managing director and partner of several renewable energy companies, he has been the managing partner of Griffith EE Konzept GmbH since 2023. His focus here is on commercial management and the development of wind and solar projects.\"},\"arneH\":{\"name\":\"Dipl. Ing. Arne Henn\",\"role\":\"Managing Partner\",\"bio\":\"Arne Henn graduated from Hamburg University of Applied Sciences in 1990 with a Master's degree in Aircraft Engineering. After several years of international experience in engine repair and maintenance, Arne Henn has been successfully involved in the development and implementation of wind energy projects both domestically and internationally since 2000, with more than 32 wind farms completed. Arne Henn manages various companies in the wind and solar PV sectors.\"},\"carsten\":{\"name\":\"Carsten Jensen\",\"role\":\"Shareholder\",\"bio\":\"Carsten Jensen, a farmer and certified master farmer since 1990, successfully manages arable land and livestock in North Frisia. Since 2004, he has also been active as a consultant and project developer in the field of renewable energies, particularly wind energy. He has made significant contributions to the realization of wind energy projects in Schleswig-Holstein and Lower Saxony and operates wind turbines and rooftop photovoltaic systems himself. He has extensive experience in the planning and management of cable routes for connecting wind and PV parks to the electricity grid. He is also a partner in various renewable energy operating companies.\"},\"kristian\":{\"name\":\"Kristian Schachlewitz\",\"role\":\"Partner & Authorized Signatory\",\"bio\":\"Kristian Schachlewitz began his career in the real estate industry in 2004 as a developer and construction manager. In 2006, he became a managing partner of a project development and investment company in Germany. In 2009, he founded the Nadeva Group and led its operations until 2021. He sold Nadeva, with more than 500 MW of wind and solar PV projects, to one of the leading companies in this sector in Germany.\"},\"arneS\":{\"name\":\"Dr. Arne Scheschonk\",\"role\":\"Shareholder\",\"bio\":\"Dr. Arne Scheschonk has been a self-employed lawyer since 2008 and founder of CTCAP Holding GmbH. Previously, he was a lawyer in Prague, including at Bird & Bird, specializing in renewable energy in Eastern Europe. He then served as General Counsel for several investment funds in Luxembourg and Zurich, focusing on wind energy projects in Northern and Eastern Europe, Canada, and the USA. He also headed the wind energy project development department of a major German energy company and oversaw the development of numerous wind farms in Northern Germany and larger real estate projects in and around Munich.\"},\"lorenz\":{\"name\":\"Lorenz Peter Jensen\",\"role\":\"Shareholder\",\"bio\":\"Lorenz Peter Jensen has worked in agriculture since 1992, before shifting his focus to renewable energies in 1999. As the driving force behind the Dagebüll community wind farm, developed and built in 2011, he implemented a pioneering project in the region. In his role as Managing Director of Reenergiehöfe Nordfriesland, he successfully manages and operates several wind and photovoltaic projects. With extensive experience as a project developer and operator of various facilities, he is driving the energy transition forward.\"},\"kai\":{\"name\":\"Kai Olufs\",\"role\":\"Shareholder\",\"bio\":\"Kai Olufs, agricultural economist and owner of a farm since 2003. The first wind turbine was developed and erected on his own land in 1990. Since 2003, Kai Olufs has been actively involved in securing the site, from planning to construction.\"}}},\"services1\":{\"kicker\":\"Our Services\",\"title\":\"Comprehensive Wind Energy Solutions\",\"description\":\"From initial consultation to ongoing maintenance, we provide end-to-end wind energy services.\",\"view_all\":\"View All Services\",\"cards\":{\"planning\":{\"title\":\"Planning\",\"desc\":\"Custom-engineered wind solutions tailored to your site's unique wind patterns and energy needs.\"},\"implementation\":{\"title\":\"Implementation & Construction\",\"desc\":\"Professional turbine installation with rigorous quality control ensuring optimal performance from day one.\"}}},\"landowner1\":{\"kicker\":\"For Landowners\",\"title\":\"Turn Your Land Into a Green Energy Asset\",\"p\":\"Own suitable land? Partner with us to develop wind farm projects and earn stable, long-term income while contributing to World renewable energy goals.\",\"cta\":\"Check Land Suitability\",\"imageAlt\":\"Wind turbines on rural land\"},\"cta\":{\"title\":\"Ready to Harness Wind Power?\",\"p\":\"Contact us today for a free consultation and discover how wind energy can benefit your business or land.\",\"contact\":\"Contact Us\",\"assessment\":\"Site Assessment\"},\"services\":{\"kicker\":\"Our Services\",\"title\":\"ALARIS – Your partner from idea to implementation\",\"description\":\"From initial consultation to ongoing maintenance, we provide end-to-end wind farm solutions designed to maximize your investment and contribute to a sustainable future.\",\"learnMore\":\"Learn More\",\"process\":{\"kicker\":\"Our Process\",\"title\":\"How We Work\",\"description\":\"Our streamlined process ensures your wind project is delivered on time and within budget.\",\"consultation\":\"Consultation\",\"consultationDesc\":\"Initial meeting to understand your requirements and goals.\",\"assessment\":\"Assessment\",\"assessmentDesc\":\"Detailed site evaluation and wind resource analysis.\",\"design\":\"Design\",\"designDesc\":\"Custom wind farm design optimized for your needs.\",\"delivery\":\"Delivery\",\"deliveryDesc\":\"Professional installation with ongoing support.\"},\"cards\":{\"planning\":{\"title\":\"Planning\",\"desc\":\"Our expert engineers create custom wind farm designs optimized for your specific site conditions, wind patterns, and energy requirements. We utilize advanced simulation tools to maximize energy yield.\",\"features\":{\"siteAnalysis\":\"Site analysis and preliminary planning\",\"solarIrradiance\":\"Solar irradiance analysis (PV)\",\"windYield\":\"Wind yield measurement (wind)\",\"economicStudy\":\"Economic feasibility study\",\"siteSecuring\":\"Site securing, Design planning\",\"gridPlanning\":\"Planning of grid connection routes and access roads\",\"acquisition\":\"Acquisition of existing wind farms\",\"repowering\":\"Project acquisition, Repowering\",\"citizenParticipation\":\"Citizen participation models\",\"municipalParticipation\":\"Municipal participation solutions\"}},\"implementation\":{\"title\":\"Implementation & Construction\",\"desc\":\"From foundation work to turbine erection, our experienced installation teams ensure your wind farm is built to the highest standards with minimal disruption to surrounding areas.\",\"features\":{\"permits\":\"Obtaining the necessary permits\",\"tender\":\"Structuring the tendering process\",\"siteTechnology\":\"Selection of site-specific plant technology\",\"roadFoundation\":\"Road and foundation construction\",\"gridCoordination\":\"Coordination of grid connection\",\"acceptance\":\"Acceptance and commissioning processes\",\"compliance\":\"Compliance with Federal Immission Control Act (BImSchG)\",\"compensatory\":\"Compensatory measures, Financing\"}},\"landowners\":{\"hero\":{\"kicker\":\"For Landowners\",\"title\":\"Transform Your Land Into a Green Energy Asset\",\"subtitle\":\"Renewable energies are inextricably linked to the land on which they are built. For landowners, renewable energies have long been recognized as a profitable and long-term source of income. They offer high yields with minimal land use, thus providing a crucial support for any agricultural operation.\",\"cta\":\"Check Land Suitability\",\"imageAlt\":\"Wind turbines on rural land\"},\"requirements\":{\"kicker\":\"Land Requirements\",\"wind1\":{\"title\":\"Which locations are suitable for wind turbines?\",\"subtitle\":\"We look for specific characteristics to ensure optimal wind farm performance. Here are the key requirements we consider:\",\"imageAlt\":\"Suitable land for wind farm development\"},\"pv\":{\"title\":\"Which locations are suitable for photovoltaic systems?\",\"subtitle\":\"We look for specific characteristics to ensure optimal photovoltaic performance. Here are the key site types we consider:\",\"imageAlt\":\"Suitable land for photovoltaic or mixed development\"},\"wind\":{\"farmland\":\"Farmland\",\"pastureland\":\"Pastureland\",\"grassland\":\"Grassland\",\"forest\":\"Forest\",\"formerLandfills\":\"Former landfills\",\"reclaimedMines\":\"Reclaimed open-cast mines \"},\"pv1\":{\"arablePasture\":\"Arable land and pasture\",\"motorwayRailway\":\"Motorway shoulders, railway lines\",\"conversionAreas\":\"Conversion areas\",\"designatedAreas\":\"Areas with designated building areas\"}},\"benefits\":{\"stableIncome\":{\"title\":\"Stable Long-Term Income\",\"desc\":\"Earn guaranteed lease payments for 25+ years, providing a reliable income stream from your land.\"},\"environment\":{\"title\":\"Environmental Contribution\",\"desc\":\"Play a vital role in India's renewable energy transition and reduce carbon emissions.\"},\"zeroInvestment\":{\"title\":\"Zero Investment Required\",\"desc\":\"We handle all costs—you simply provide the land and enjoy the benefits.\"},\"hassleFree\":{\"title\":\"Hassle-Free Partnership\",\"desc\":\"Our team manages everything from permits to maintenance, so you can sit back and earn.\"}},\"process\":{\"kicker\":\"Our Process\",\"title\":\"How It Works\",\"subtitle\":\"Our simple four-step process to turn your land into a wind energy asset.\",\"submit\":{\"title\":\"Submit Your Details\",\"desc\":\"Fill out our online form with your land details and contact information.\"},\"assessment\":{\"title\":\"Initial Assessment\",\"desc\":\"Our team reviews your submission and conducts a preliminary feasibility check.\"},\"siteVisit\":{\"title\":\"Site Visit\",\"desc\":\"Our engineers visit your land to perform detailed wind resource surveys and assessments.\"},\"agreement\":{\"title\":\"Agreement & Development\",\"desc\":\"If suitable, we finalize the lease agreement and begin project development.\"}},\"assessment\":{\"kicker\":\"Site Assessment\",\"title\":\"Submit Your Land Details\",\"subtitle\":\"Fill out the form with your land details, and our team will evaluate its suitability for wind farm development. We'll get back to you within 48 hours.\",\"documentVerification\":{\"title\":\"Document Verification\",\"desc\":\"We'll guide you on required documents after initial review.\"},\"personalConsultation\":{\"title\":\"Personal Consultation\",\"desc\":\"Our experts will discuss your options in detail.\"}}}}}}"));}),
"[project]/Downloads/ALARIS/app/locales/de.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"nav\":{\"home\":\"Startseite\",\"services\":\"Dienstleistungen\",\"about\":\"Über uns\",\"landowners\":\"Für Grundstückseigentümer\",\"projects\":\"Projekte\",\"landsurvey\":\"Flächenprüfung\",\"contact\":\"Kontakt\"},\"hero\":{\"kicker\":\"Nachhaltige Energielösungen\",\"title\":\"Ihr Partner für nachhaltige Windenergie-Lösungen\",\"subtitle\":\"Wir treiben die weltweite Energiewende mit innovativen Windpark-Lösungen voran. Von der Planung bis zur Umsetzung liefern wir Spitzenleistung in jedem Projekt.\",\"cta_primary\":\"Kontakt aufnehmen\",\"cta_secondary\":\"Mehr erfahren\"},\"about1\":{\"kicker\":\"Über uns\",\"title\":\"Wir leiten die Windenergie-Revolution\",\"p1\":\"Bei ALARIS setzen wir uns dafür ein, den Übergang zu sauberer Energie zu beschleunigen. Mit mehr als einem Jahrzehnt Erfahrung haben wir uns als vertrauenswürdiger Partner für Unternehmen, Grundstückseigentümer und Institutionen etabliert, die zuverlässige Windenergielösungen suchen.\",\"p2\":\"Unser Team aus erfahrenen Ingenieuren und Projektmanagern sorgt dafür, dass jede Installation die höchsten Qualitäts- und Effizienzstandards erfüllt und dauerhaften Mehrwert für unsere Kunden schafft.\",\"discover\":\"Unsere Geschichte entdecken\",\"imageAlt\":\"Windpark-Monteure bei der Arbeit\"},\"about\":{\"preview\":{\"kicker\":\"Über uns\",\"title\":\"Wir leiten die Windenergie-Revolution\",\"p1\":\"Bei ALARIS setzen wir uns dafür ein, den Übergang zu sauberer Energie zu beschleunigen. Mit mehr als einem Jahrzehnt Erfahrung haben wir uns als vertrauenswürdiger Partner für Unternehmen, Grundstückseigentümer und Institutionen etabliert, die zuverlässige Windenergielösungen suchen.\",\"p2\":\"Unser Team aus erfahrenen Ingenieuren und Projektmanagern sorgt dafür, dass jede Installation die höchsten Qualitäts- und Effizienzstandards erfüllt und dauerhaften Mehrwert für unsere Kunden schafft.\",\"discover\":\"Unsere Geschichte entdecken\",\"imageAlt\":\"Windpark-Monteure bei der Arbeit\"},\"hero\":{\"subtitle\":\"Über uns\",\"title\":\"ALARIS — Wer wir sind und was wir tun\",\"description\":\"Seit zwei Jahrzehnten engagieren sich die Gesellschafter der farmWIND GmbH für erneuerbare Energien und arbeiten partnerschaftlich mit Grundstückseigentümern zusammen. Als Projektentwickler plant, baut und betreibt die farmWIND GmbH Wind- und Photovoltaikparks. Ziel ist es, eine nachhaltige Stromversorgung in Deutschland mit lokalem Mehrwert zu schaffen. Engagierte Mitarbeiter streben stets nach bestmöglichen Projektergebnissen und halten sich an höchste Qualitäts- und Wirtschaftlichkeitsstandards. Auch unter widrigen äußeren Umständen werden Projekte mit Beharrlichkeit verfolgt — Geduld und Ausdauer sind gefragt. Mit farmWIND GmbH kommen erfahrene Projektentwickler für erneuerbare Energien in Deutschland wieder zusammen.\"},\"teamSection\":{\"subtitle\":\"Unser Team\",\"title\":\"Führung & Gesellschafter\",\"description\":\"Die erfahrenen Fachleute hinter ALARIS.\"},\"team\":{\"thomas\":{\"name\":\"Thomas Griffith\",\"role\":\"Partner\",\"bio\":\"Thomas Griffith, ausgebildeter Sparkassenbetriebswirt, begann seine Karriere 2003 als Firmenkundenberater und spezialisierte sich ab 2008 auf die Finanzierung von Projekten im Bereich der erneuerbaren Energien, insbesondere Wind- und Solarparks. Mit einer Zertifizierung als Fachberater für regionale Energieentwicklungsprojekte leitet er erfolgreich einen Bürgerwindpark mit 44 Windenergieanlagen und fast 100 MW. Neben seiner Tätigkeit als Geschäftsführer und Partner mehrerer Unternehmen im Bereich erneuerbare Energien ist er seit 2023 geschäftsführender Gesellschafter der Griffith EE Konzept GmbH. Sein Schwerpunkt liegt dabei auf dem kaufmännischen Management sowie der Entwicklung von Wind- und Solarprojekten.\"},\"arneH\":{\"name\":\"Dipl. Ing. Arne Henn\",\"role\":\"Geschäftsführender Partner\",\"bio\":\"Arne Henn schloss 1990 sein Studium an der Hochschule für Angewandte Wissenschaften Hamburg mit einem Masterabschluss in Luftfahrttechnik ab. Nach mehreren Jahren internationaler Erfahrung in der Triebwerksinstandhaltung und -reparatur ist er seit 2000 erfolgreich in der Entwicklung und Umsetzung von Windenergieprojekten im In- und Ausland tätig und hat mehr als 32 Windparks realisiert. Arne Henn leitet verschiedene Unternehmen im Bereich Wind- und Solarenergie.\"},\"carsten\":{\"name\":\"Carsten Jensen\",\"role\":\"Gesellschafter\",\"bio\":\"Carsten Jensen, Landwirt und geprüfter Agrarmeister seit 1990, bewirtschaftet erfolgreich Ackerland und Viehhaltung in Nordfriesland. Seit 2004 ist er zudem als Berater und Projektentwickler im Bereich der erneuerbaren Energien, insbesondere der Windenergie, tätig. Er hat bedeutende Beiträge zur Realisierung von Windenergieprojekten in Schleswig-Holstein und Niedersachsen geleistet und betreibt selbst Windenergieanlagen sowie Photovoltaikanlagen auf Dachflächen. Er verfügt über umfangreiche Erfahrung in der Planung und Umsetzung von Kabeltrassen zur Anbindung von Wind- und PV-Parks an das Stromnetz. Zudem ist er Partner verschiedener Betreibergesellschaften im Bereich erneuerbare Energien.\"},\"kristian\":{\"name\":\"Kristian Schachlewitz\",\"role\":\"Partner & Prokurist\",\"bio\":\"Kristian Schachlewitz begann seine berufliche Laufbahn 2004 in der Immobilienbranche als Entwickler und Bauleiter. Im Jahr 2006 wurde er geschäftsführender Gesellschafter eines Projektentwicklungs- und Investmentunternehmens in Deutschland. 2009 gründete er die Nadeva-Gruppe und leitete deren Geschäftstätigkeit bis 2021. Er verkaufte Nadeva, das mehr als 500 MW an Wind- und Solaranlagen realisiert hatte, an eines der führenden Unternehmen der Branche in Deutschland.\"},\"arneS\":{\"name\":\"Dr. Arne Scheschonk\",\"role\":\"Gesellschafter\",\"bio\":\"Dr. Arne Scheschonk ist seit 2008 als selbstständiger Anwalt tätig und Gründer der CTCAP Holding GmbH. Zuvor war er als Anwalt in Prag tätig, unter anderem bei Bird & Bird, mit dem Schwerpunkt erneuerbare Energien in Osteuropa. Anschließend war er als General Counsel für mehrere Investmentfonds in Luxemburg und Zürich tätig, mit Fokus auf Windenergieprojekte in Nord- und Osteuropa, Kanada und den USA. Darüber hinaus leitete er die Windenergie-Projektentwicklungsabteilung eines großen deutschen Energieunternehmens und begleitete die Entwicklung zahlreicher Windparks in Norddeutschland sowie bedeutender Immobilienprojekte in und um München.\"},\"lorenz\":{\"name\":\"Lorenz Peter Jensen\",\"role\":\"Gesellschafter\",\"bio\":\"Lorenz Peter Jensen war ab 1992 in der Landwirtschaft tätig, bevor er sich ab 1999 auf erneuerbare Energien spezialisierte. Als treibende Kraft hinter dem 2011 entwickelten und gebauten Bürgerwindpark Dagebüll setzte er ein wegweisendes Projekt in der Region um. In seiner Funktion als Geschäftsführer der Reenergiehöfe Nordfriesland führt er erfolgreich mehrere Wind- und Photovoltaikprojekte. Mit umfassender Erfahrung als Projektentwickler und Betreiber verschiedener Anlagen treibt er die Energiewende maßgeblich voran.\"},\"kai\":{\"name\":\"Kai Olufs\",\"role\":\"Gesellschafter\",\"bio\":\"Kai Olufs, Agrarökonom und Inhaber eines landwirtschaftlichen Betriebs seit 2003. Die erste Windenergieanlage wurde 1990 auf seinem eigenen Land projektiert und errichtet. Seit 2003 ist Kai Olufs aktiv in der Standortentwicklung von der Planung bis zur baulichen Umsetzung tätig.\"}}},\"services1\":{\"kicker\":\"Unsere Dienstleistungen\",\"title\":\"Umfassende Windenergie-Lösungen\",\"description\":\"Von der Erstberatung bis zum Betrieb bieten wir End-to-End-Dienstleistungen für Windenergie.\",\"view_all\":\"Alle Dienstleistungen anzeigen\",\"cards\":{\"planning\":{\"title\":\"Planung\",\"desc\":\"Maßgeschneiderte Windlösungen, abgestimmt auf die einzigartigen Windmuster und Energiebedürfnisse Ihres Standorts.\"},\"implementation\":{\"title\":\"Ausführung & Bau\",\"desc\":\"Professionelle Turbineninstallation mit strenger Qualitätskontrolle, die eine optimale Leistung von Anfang an gewährleistet.\"}}},\"landowner1\":{\"kicker\":\"Für Grundstückseigentümer\",\"title\":\"Verwandeln Sie Ihr Land in eine grüne Einnahmequelle\",\"p\":\"Besitzen Sie geeignetes Land? Arbeiten Sie mit uns zusammen, um Windparkprojekte zu entwickeln und langfristige stabile Einnahmen zu erzielen und gleichzeitig zur Erreichung erneuerbarer Energieziele beizutragen.\",\"cta\":\"Flächentauglichkeit prüfen\",\"imageAlt\":\"Windkraftanlagen auf ländlichem Land\"},\"cta\":{\"title\":\"Bereit, Windkraft zu nutzen?\",\"p\":\"Kontaktieren Sie uns noch heute für eine kostenlose Beratung und erfahren Sie, wie Windenergie Ihrem Unternehmen oder Land zugutekommen kann.\",\"contact\":\"Kontakt\",\"assessment\":\"Flächentauglichkeit\"},\"services\":{\"kicker\":\"Unsere Dienstleistungen\",\"title\":\"ALARIS – Ihr Partner von der Idee bis zur Umsetzung\",\"description\":\"Von der Erstberatung bis zum laufenden Betrieb bieten wir umfassende Lösungen für Windparks, um Ihre Investition zu maximieren und zu einer nachhaltigen Zukunft beizutragen.\",\"learnMore\":\"Mehr erfahren\",\"process\":{\"kicker\":\"Unser Prozess\",\"title\":\"Wie wir arbeiten\",\"description\":\"Unser optimierter Prozess stellt sicher, dass Ihr Windprojekt termingerecht und im Budget umgesetzt wird.\",\"consultation\":\"Beratung\",\"consultationDesc\":\"Erstgespräch zur Ermittlung Ihrer Anforderungen und Ziele.\",\"assessment\":\"Bewertung\",\"assessmentDesc\":\"Detaillierte Standortbewertung und Windressourcenanalyse.\",\"design\":\"Entwurf\",\"designDesc\":\"Maßgeschneiderte Windparkplanung, optimiert für Ihre Anforderungen.\",\"delivery\":\"Ausführung\",\"deliveryDesc\":\"Professionelle Installation mit fortlaufender Unterstützung.\"},\"cards\":{\"planning\":{\"title\":\"Planung\",\"desc\":\"Unsere erfahrenen Ingenieure erstellen maßgeschneiderte Windparkentwürfe, optimiert für die spezifischen Standortbedingungen, Windmuster und Energieanforderungen. Wir nutzen moderne Simulationstools, um die Energieausbeute zu maximieren.\",\"features\":{\"siteAnalysis\":\"Standortanalyse und Vorplanung\",\"solarIrradiance\":\"Analyse der Sonneneinstrahlung (PV)\",\"windYield\":\"Windenergiemessung (Wind)\",\"economicStudy\":\"Wirtschaftlichkeitsuntersuchung\",\"siteSecuring\":\"Standortsicherung, Entwurfsplanung\",\"gridPlanning\":\"Planung von Netzanschlussstrecken und Zufahrten\",\"acquisition\":\"Übernahme bestehender Windparks\",\"repowering\":\"Projektübernahme, Repowering\",\"citizenParticipation\":\"Modelle für Bürgerbeteiligung\",\"municipalParticipation\":\"Lösungen für kommunale Beteiligung\"}},\"implementation\":{\"title\":\"Ausführung & Bau\",\"desc\":\"Von den Fundamentarbeiten bis zur Turbinenmontage sorgen unsere erfahrenen Installationsteams dafür, dass Ihr Windpark nach höchsten Standards mit minimaler Beeinträchtigung gebaut wird.\",\"features\":{\"permits\":\"Einholung der notwendigen Genehmigungen\",\"tender\":\"Gestaltung des Ausschreibungsverfahrens\",\"siteTechnology\":\"Auswahl standortspezifischer Anlagentechnik\",\"roadFoundation\":\"Straßen- und Fundamentbau\",\"gridCoordination\":\"Koordination des Netzanschlusses\",\"acceptance\":\"Abnahme- und Inbetriebnahmeprozesse\",\"compliance\":\"Einhaltung des Bundes-Immissionsschutzgesetzes (BImSchG)\",\"compensatory\":\"Ausgleichsmaßnahmen, Finanzierung\"}},\"landowners\":{\"hero\":{\"kicker\":\"For Landowners\",\"title\":\"Transform Your Land Into a Green Energy Asset\",\"subtitle\":\"Renewable energies are inextricably linked to the land on which they are built. For landowners, renewable energies have long been recognized as a profitable and long-term source of income. They offer high yields with minimal land use, thus providing a crucial support for any agricultural operation.\",\"cta\":\"Check Land Suitability\",\"imageAlt\":\"Wind turbines on rural land\"},\"requirements\":{\"kicker\":\"Land Requirements\",\"wind\":{\"title\":\"Which locations are suitable for wind turbines?\",\"subtitle\":\"We look for specific characteristics to ensure optimal wind farm performance. Here are the key requirements we consider:\",\"imageAlt\":\"Suitable land for wind farm development\",\"farmland\":\"Farmland\",\"pastureland\":\"Pastureland\",\"grassland\":\"Grassland\",\"forest\":\"Forest\",\"formerLandfills\":\"Former landfills\",\"reclaimedMines\":\"Reclaimed open-cast mines\"},\"pv\":{\"title\":\"Which locations are suitable for photovoltaic systems?\",\"subtitle\":\"We look for specific characteristics to ensure optimal photovoltaic performance. Here are the key site types we consider:\",\"imageAlt\":\"Suitable land for photovoltaic or mixed development\",\"arablePasture\":\"Arable land and pasture\",\"motorwayRailway\":\"Motorway shoulders, railway lines\",\"conversionAreas\":\"Conversion areas\",\"designatedAreas\":\"Areas with designated building areas\"}},\"benefits\":{\"stableIncome\":{\"title\":\"Stable Long-Term Income\",\"desc\":\"Earn guaranteed lease payments for 25+ years, providing a reliable income stream from your land.\"},\"environment\":{\"title\":\"Environmental Contribution\",\"desc\":\"Play a vital role in India's renewable energy transition and reduce carbon emissions.\"},\"zeroInvestment\":{\"title\":\"Zero Investment Required\",\"desc\":\"We handle all costs—you simply provide the land and enjoy the benefits.\"},\"hassleFree\":{\"title\":\"Hassle-Free Partnership\",\"desc\":\"Our team manages everything from permits to maintenance, so you can sit back and earn.\"}},\"process\":{\"kicker\":\"Our Process\",\"title\":\"How It Works\",\"subtitle\":\"Our simple four-step process to turn your land into a wind energy asset.\",\"submit\":{\"title\":\"Submit Your Details\",\"desc\":\"Fill out our online form with your land details and contact information.\"},\"assessment\":{\"title\":\"Initial Assessment\",\"desc\":\"Our team reviews your submission and conducts a preliminary feasibility check.\"},\"siteVisit\":{\"title\":\"Site Visit\",\"desc\":\"Our engineers visit your land to perform detailed wind resource surveys and assessments.\"},\"agreement\":{\"title\":\"Agreement & Development\",\"desc\":\"If suitable, we finalize the lease agreement and begin project development.\"}},\"assessment\":{\"kicker\":\"Site Assessment\",\"title\":\"Submit Your Land Details\",\"subtitle\":\"Fill out the form with your land details, and our team will evaluate its suitability for wind farm development. We'll get back to you within 48 hours.\",\"documentVerification\":{\"title\":\"Document Verification\",\"desc\":\"We'll guide you on required documents after initial review.\"},\"personalConsultation\":{\"title\":\"Personal Consultation\",\"desc\":\"Our experts will discuss your options in detail.\"}}}}}}"));}),
"[project]/Downloads/ALARIS/app/i18n-provider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "I18nProvider",
    ()=>I18nProvider,
    "useTranslation",
    ()=>useTranslation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/ALARIS/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/ALARIS/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$app$2f$locales$2f$en$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/Downloads/ALARIS/app/locales/en.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$app$2f$locales$2f$de$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/Downloads/ALARIS/app/locales/de.json (json)");
"use client";
;
;
;
;
const STORAGE_KEY = "alaris_lang";
const translations = {
    en: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$app$2f$locales$2f$en$2e$json__$28$json$29$__["default"],
    de: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$app$2f$locales$2f$de$2e$json__$28$json$29$__["default"]
};
const I18nContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    lang: "en",
    setLang: (l)=>{},
    t: (key, fallback)=>fallback ?? key
});
function I18nProvider({ children }) {
    const [lang, setLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("en");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved === "en" || saved === "de") setLang(saved);
        } catch  {}
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch  {}
        if (typeof document !== "undefined") document.documentElement.lang = lang;
    }, [
        lang
    ]);
    const t = (path, fallback = "")=>{
        const parts = path.split(".");
        // @ts-ignore
        let cur = translations[lang] ?? {};
        for (const p of parts){
            if (cur && Object.prototype.hasOwnProperty.call(cur, p)) cur = cur[p];
            else {
                cur = undefined;
                break;
            }
        }
        return cur ?? fallback ?? path;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(I18nContext.Provider, {
        value: {
            lang,
            setLang,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/ALARIS/app/i18n-provider.tsx",
        lineNumber: 48,
        columnNumber: 10
    }, this);
}
function useTranslation() {
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(I18nContext);
    if (!ctx) throw new Error("useTranslation must be used within I18nProvider");
    return ctx;
}
}),
"[project]/Downloads/ALARIS/components/header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/header.tsx
__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/ALARIS/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/ALARIS/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/ALARIS/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Downloads/ALARIS/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Downloads/ALARIS/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__ = __turbopack_context__.i("[project]/Downloads/ALARIS/node_modules/lucide-react/dist/esm/icons/wind.js [app-ssr] (ecmascript) <export default as Wind>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/ALARIS/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$app$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/ALARIS/app/i18n-provider.tsx [app-ssr] (ecmascript)"); // adjust if path differs
"use client";
;
;
;
;
;
;
function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { lang, setLang, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$app$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const toggleLang = ()=>setLang(lang === "en" ? "de" : "en");
    const navigation = [
        {
            name: t("nav.home"),
            href: "/"
        },
        {
            name: t("nav.services"),
            href: "/services"
        },
        {
            name: t("nav.about"),
            href: "/about"
        },
        {
            name: t("nav.landowners"),
            href: "/landowners"
        },
        {
            name: t("nav.projects"),
            href: "/projects"
        },
        {
            name: t("nav.landsurvey"),
            href: "/landsurvey"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex lg:flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "-m-1.5 p-1.5 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__["Wind"], {
                                    className: "h-8 w-8 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/ALARIS/components/header.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xl font-bold text-foreground",
                                    children: "ALARIS"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/ALARIS/components/header.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/ALARIS/components/header.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/ALARIS/components/header.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex lg:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground",
                            onClick: ()=>setMobileMenuOpen(true),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                className: "h-6 w-6",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/ALARIS/components/header.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/ALARIS/components/header.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/ALARIS/components/header.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:flex lg:gap-x-8",
                        children: navigation.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: "text-sm font-medium text-foreground/80 hover:text-primary transition-colors",
                                children: item.name
                            }, item.href, false, {
                                fileName: "[project]/Downloads/ALARIS/components/header.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/ALARIS/components/header.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleLang,
                                className: "rounded-md border px-3 py-1 text-sm",
                                "aria-label": "Toggle language",
                                children: lang === "en" ? "DE" : "EN"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/ALARIS/components/header.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    children: t("nav.contact")
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/ALARIS/components/header.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/ALARIS/components/header.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/ALARIS/components/header.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/ALARIS/components/header.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden fixed inset-0 z-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 bg-foreground/20",
                        onClick: ()=>setMobileMenuOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/ALARIS/components/header.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "-m-1.5 p-1.5 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__["Wind"], {
                                                className: "h-8 w-8 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/ALARIS/components/header.tsx",
                                                lineNumber: 88,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl font-bold text-foreground",
                                                children: "ALARIS"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/ALARIS/components/header.tsx",
                                                lineNumber: 89,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/ALARIS/components/header.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: toggleLang,
                                                className: "rounded-md border px-3 py-1 text-sm",
                                                children: lang === "en" ? "DE" : "EN"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/ALARIS/components/header.tsx",
                                                lineNumber: 93,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "-m-2.5 rounded-md p-2.5 text-foreground",
                                                onClick: ()=>setMobileMenuOpen(false),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    className: "h-6 w-6",
                                                    "aria-hidden": "true"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/ALARIS/components/header.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/ALARIS/components/header.tsx",
                                                lineNumber: 100,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/ALARIS/components/header.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/ALARIS/components/header.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 flow-root",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "-my-6 divide-y divide-border",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2 py-6",
                                            children: navigation.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: item.href,
                                                    className: "-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-muted",
                                                    onClick: ()=>setMobileMenuOpen(false),
                                                    children: item.name
                                                }, item.href, false, {
                                                    fileName: "[project]/Downloads/ALARIS/components/header.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/ALARIS/components/header.tsx",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "py-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                asChild: true,
                                                className: "w-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/contact",
                                                    children: t("nav.contact")
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/ALARIS/components/header.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/ALARIS/components/header.tsx",
                                                lineNumber: 129,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/ALARIS/components/header.tsx",
                                            lineNumber: 128,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/ALARIS/components/header.tsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/ALARIS/components/header.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/ALARIS/components/header.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/ALARIS/components/header.tsx",
                lineNumber: 80,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/ALARIS/components/header.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/ALARIS/components/footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/ALARIS/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/ALARIS/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__ = __turbopack_context__.i("[project]/Downloads/ALARIS/node_modules/lucide-react/dist/esm/icons/wind.js [app-ssr] (ecmascript) <export default as Wind>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/Downloads/ALARIS/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/Downloads/ALARIS/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Downloads/ALARIS/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
;
;
;
const navigation = {
    main: [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "Services",
            href: "/services"
        },
        {
            name: "About Us",
            href: "/about"
        },
        {
            name: "For Landowners",
            href: "/landowners"
        },
        {
            name: "Projects",
            href: "/projects"
        },
        {
            name: "Contact",
            href: "/contact"
        }
    ],
    legal: [
        {
            name: "Privacy Policy",
            href: "/privacy"
        },
        {
            name: "Terms of Service",
            href: "/terms"
        },
        {
            name: "Disclaimer",
            href: "/disclaimer"
        }
    ]
};
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-primary text-primary-foreground",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-6 py-12 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "flex items-center gap-2 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__["Wind"], {
                                            className: "h-8 w-8"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/ALARIS/components/footer.tsx",
                                            lineNumber: 28,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xl font-bold",
                                            children: "ALARIS"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/ALARIS/components/footer.tsx",
                                            lineNumber: 29,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/ALARIS/components/footer.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-primary-foreground/80 leading-relaxed",
                                    children: "Your trusted partner for sustainable wind energy solutions in India. Powering a greener future, one wind farm at a time."
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/ALARIS/components/footer.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/ALARIS/components/footer.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-semibold mb-4",
                                    children: "Quick Links"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/ALARIS/components/footer.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3",
                                    children: navigation.main.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: item.href,
                                                className: "text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors",
                                                children: item.name
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/ALARIS/components/footer.tsx",
                                                lineNumber: 43,
                                                columnNumber: 19
                                            }, this)
                                        }, item.name, false, {
                                            fileName: "[project]/Downloads/ALARIS/components/footer.tsx",
                                            lineNumber: 42,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/ALARIS/components/footer.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/ALARIS/components/footer.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-semibold mb-4",
                                    children: "Contact Us"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/ALARIS/components/footer.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start gap-2 text-sm text-primary-foreground/80",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    className: "h-4 w-4 mt-0.5 shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/ALARIS/components/footer.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "123 Wind Park, Green Energy Complex, Mumbai, Maharashtra 400001, India"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/ALARIS/components/footer.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/ALARIS/components/footer.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-center gap-2 text-sm text-primary-foreground/80",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    className: "h-4 w-4 shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/ALARIS/components/footer.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "+91 22 1234 5678"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/ALARIS/components/footer.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/ALARIS/components/footer.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-center gap-2 text-sm text-primary-foreground/80",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                    className: "h-4 w-4 shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/ALARIS/components/footer.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "info@ALARIS.in"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/ALARIS/components/footer.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/ALARIS/components/footer.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/ALARIS/components/footer.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/ALARIS/components/footer.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-semibold mb-4",
                                    children: "Legal"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/ALARIS/components/footer.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3",
                                    children: navigation.legal.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: item.href,
                                                className: "text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors",
                                                children: item.name
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/ALARIS/components/footer.tsx",
                                                lineNumber: 79,
                                                columnNumber: 19
                                            }, this)
                                        }, item.name, false, {
                                            fileName: "[project]/Downloads/ALARIS/components/footer.tsx",
                                            lineNumber: 78,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/ALARIS/components/footer.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/ALARIS/components/footer.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/ALARIS/components/footer.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 pt-8 border-t border-primary-foreground/20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-sm text-primary-foreground/80",
                        children: [
                            "© ",
                            new Date().getFullYear(),
                            " ALARIS Pvt. Ltd. All rights reserved."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/ALARIS/components/footer.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/ALARIS/components/footer.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/ALARIS/components/footer.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/ALARIS/components/footer.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/ALARIS/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/page.tsx
__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/ALARIS/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/ALARIS/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/ALARIS/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Downloads/ALARIS/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__ = __turbopack_context__.i("[project]/Downloads/ALARIS/node_modules/lucide-react/dist/esm/icons/leaf.js [app-ssr] (ecmascript) <export default as Leaf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__ = __turbopack_context__.i("[project]/Downloads/ALARIS/node_modules/lucide-react/dist/esm/icons/wind.js [app-ssr] (ecmascript) <export default as Wind>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Downloads/ALARIS/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/ALARIS/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$components$2f$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/ALARIS/components/header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$components$2f$footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/ALARIS/components/footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$app$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/ALARIS/app/i18n-provider.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const services = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__["Wind"],
        titleKey: "services1.cards.planning.title",
        descriptionKey: "services1.cards.planning.desc"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        titleKey: "services1.cards.implementation.title",
        descriptionKey: "services1.cards.implementation.desc"
    }
];
function HomePage() {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$app$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$components$2f$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative min-h-screen flex items-center pt-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                className: "absolute inset-0 w-full h-full object-cover z-0",
                                src: "/230549.mp4",
                                autoPlay: true,
                                muted: true,
                                loop: true,
                                playsInline: true
                            }, void 0, false, {
                                fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-foreground/60"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-medium text-primary-foreground/90 mb-4 uppercase tracking-wider",
                                    children: t("hero.kicker")
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight text-balance",
                                    children: t("hero.title")
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-6 text-lg text-primary-foreground/90 leading-relaxed max-w-xl",
                                    children: t("hero.subtitle")
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-10 flex flex-wrap gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "lg",
                                            asChild: true,
                                            className: "bg-primary hover:bg-primary/90",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/contact",
                                                children: [
                                                    t("hero.cta_primary"),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "ml-2 h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                                lineNumber: 59,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "lg",
                                            variant: "outline",
                                            asChild: true,
                                            className: "border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/services",
                                                children: t("hero.cta_secondary")
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                                lineNumber: 70,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-24 bg-background",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-7xl px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid lg:grid-cols-2 gap-12 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium text-primary mb-2 uppercase tracking-wider",
                                        children: t("about.kicker")
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance",
                                        children: t("about1.title")
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground leading-relaxed mb-6",
                                        children: t("about1.p1")
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground leading-relaxed mb-8",
                                        children: t("about1.p2")
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/about",
                                            children: [
                                                t("about1.discover"),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "ml-2 h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                            lineNumber: 89,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/wind-turbine-installation-engineers-working-on-sit.jpg",
                                    alt: t("about.imageAlt", "Wind turbine installation engineers at work"),
                                    fill: true,
                                    className: "object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-24 bg-secondary",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-7xl px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center max-w-2xl mx-auto mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-medium text-primary mb-2 uppercase tracking-wider",
                                    children: t("services1.kicker")
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance",
                                    children: t("services1.title")
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground",
                                    children: t("services1.description")
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-6",
                            children: services.map((service)=>{
                                const Icon = service.icon;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: "h-6 w-6 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                                lineNumber: 125,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                            lineNumber: 124,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-card-foreground mb-2",
                                            children: t(service.titleKey)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                            lineNumber: 127,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground leading-relaxed",
                                            children: t(service.descriptionKey)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                            lineNumber: 128,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, service.titleKey, true, {
                                    fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                    lineNumber: 120,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mt-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/services",
                                    children: [
                                        t("services1.view_all"),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "ml-2 h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-24 bg-background",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-7xl px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-primary rounded-2xl p-8 lg:p-12 grid lg:grid-cols-2 gap-8 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__["Leaf"], {
                                                className: "h-5 w-5 text-primary-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                                lineNumber: 151,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-primary-foreground uppercase tracking-wider",
                                                children: t("landowner1.kicker")
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                                lineNumber: 152,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance",
                                        children: t("landowner1.title")
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-primary-foreground/90 leading-relaxed mb-6",
                                        children: t("landowner1.p")
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                        lineNumber: 159,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "secondary",
                                        size: "lg",
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/landowners",
                                            children: [
                                                t("landowner1.cta"),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "ml-2 h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                            lineNumber: 161,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-[300px] rounded-lg overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/wind-turbines-on-rural-farmland-in-indian-countrys.jpg",
                                    alt: t("landowner.imageAlt", "Wind turbines on rural land"),
                                    fill: true,
                                    className: "object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                    lineNumber: 168,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                lineNumber: 167,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                        lineNumber: 148,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-24 bg-background",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-4xl px-6 lg:px-8 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance",
                            children: t("cta.title")
                        }, void 0, false, {
                            fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                            lineNumber: 182,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground mb-8 max-w-2xl mx-auto",
                            children: t("cta.p")
                        }, void 0, false, {
                            fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                            lineNumber: 183,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "lg",
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/contact",
                                        children: [
                                            t("cta.contact"),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "ml-2 h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                                lineNumber: 188,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                        lineNumber: 186,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                    lineNumber: 185,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "lg",
                                    variant: "outline",
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/landowners",
                                        children: t("cta.assessment")
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                            lineNumber: 184,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                    lineNumber: 181,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$ALARIS$2f$components$2f$footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/Downloads/ALARIS/app/page.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/ALARIS/app/page.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Downloads_ALARIS_2c9b745e._.js.map