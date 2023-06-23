const dataLines = [
  {
    data: {
      headline: "Happiness på arbejdspladsen er et hit",
      url: "http://www.business.dk/vaekst/happiness-paa-arbejdspladsen-er-et-hit",
      date: "2017-03-06",
    },
  },
  {
    data: {
      headline: "So finden Sie den richtigen Steuerberater",
      url: "http://www.focus.de/finanzen/experten/steuerberater-finden-so-finden-sie-den-richtigen-steuerberater_id_5637377.html",
      date: "2016-07-20",
    },
  },
  {
    data: {
      headline: "Buchhaltung und Steuern für Existenzgründer",
      url: "http://www.focus.de/finanzen/experten/start-up-guide-buchhaltung-und-steuern-fuer-existenzgruender_id_5828955.html",
      date: "2016-09-01",
    },
  },
  {
    data: {
      headline: "TV 2-dokumentar får seerne til at kontakte deres advokat",
      url: "http://livsstil.tv2.dk/forbrug/2017-01-10-tv-2-dokumentar-faar-seerne-til-at-kontakte-deres-advokat",
      date: "2017-01-10",
    },
  },
  {
    data: {
      headline: "Historien om Ageras",
      url: "http://www.tv2lorry.dk/webdok/logik",
      date: "2016-11-29",
    },
  },
  {
    data: {
      headline: "Børsnotering kan være i støbeskeen",
      url: "http://borsen.dk/nyheder/avisen/artikel/11/143372/artikel.html",
      date: "2016-06-07",
    },
  },
  {
    data: {
      headline: "Fra to til 60 tyskere på seks måneder",
      url: "http://borsen.dk/nyheder/avisen/artikel/11/143364/artikel.html",
      date: "2016-06-07",
    },
  },
  {
    data: {
      headline: "Skal du købe bolig? Her kan du spare tusindvis af kroner",
      url: "http://nyheder.tv2.dk/2015-03-18-skal-du-koebe-bolig-her-kan-du-spare-tusindvis-af-kroner",
      date: "2015-03-18",
    },
  },
  {
    data: {
      headline:
        "Efter grænsekontrol: Dansk direktør skaffer tre BMW&quot;er til sine medarbejdere",
      url: "http://www.mx.dk/nyheder/danmark/story/27129310",
      date: "2016-01-05",
    },
  },
  {
    data: {
      headline:
        "Tre BMW&quot;er blev direktørs løsning på grænseproblem for 20 medarbejdere",
      url: "http://borsen.dk/nyheder/virksomheder/artikel/1/317399/tre_bmwer_blev_direktoers_loesning_paa_graenseproblem_for_20_medarbejdere.html",
      date: "2016-01-05",
    },
  },
  {
    data: {
      headline: "Skifter grænsekontrol ud med 1. klasse: I BMW over Øresund",
      url: "http://nyheder.tv2.dk/samfund/2016-01-06-skifter-graensekontrol-ud-med-1-klasse-i-bmw-over-oeresund",
      date: "2016-01-06",
    },
  },
  {
    data: {
      headline:
        "Danska Ageras hyr bilar för att anställda ska slippa id-kontroller",
      url: "https://8till5.se/2016/01/07/danska-ageras-hyr-bilar-for-att-anstallda-ska-slippa-id-kontroller/",
      date: "2016-01-07",
    },
  },
  {
    data: {
      headline: "Deras lösning på id-kontrollerna – BMW-bilar till anställda",
      url: "http://www.breakit.se/artikel/2270/deras-losning-pa-id-kontrollerna-bmw-bilar-till-anstallda",
      date: "2016-01-07",
    },
  },
  {
    data: {
      headline: "Företag hyr lyxbilar för att slippa id-kontroller",
      url: "http://www.svd.se/foretag-hyr-lyxbilar-for-att-slippa-id-koll",
      date: "2016-01-06",
    },
  },
  {
    data: {
      headline: "Succesvirksomhed kører uden om grænsekontrollen i Kastrup",
      url: "http://politiken.dk/udland/fokus_int/Flygtningestroem/ECE3002727/succesvirksomhed-koerer-uden-om-graensekontrollen-i-kastrup/",
      date: "2016-01-05",
    },
  },
  {
    data: {
      headline: "Direktør Rico kender en smutvej udenom om paskontrollen",
      url: "http://finans.dk/live/erhverv/ECE8344959/direktoer-rico-kender-en-smutvej-udenom-om-paskontrollen",
      date: "2016-01-05",
    },
  },
  {
    data: {
      headline: "ID-kontrol: Direktør skaffer BMW&quot;er til ansatte",
      url: "http://www.tv2lorry.dk/artikel/id-kontrol-direktoer-skaffer-bmwer-til-ansatte",
      date: "2016-01-06",
    },
  },
  {
    data: {
      headline:
        "Rico Andersen er 24 år, direktør for 100 ansatte og vil gerne børsnoteres",
      url: "http://finans.dk/live/erhverv/ECE8740241/rico-andersen-er-24-aar-direktoer-for-100-ansatte-og-vil-gerne-boersnoteres",
      date: "2016-06-08",
    },
  },
  {
    data: {
      headline: "Droppede skolen og blev direktør i egen virksomhed",
      url: "http://www.business.dk/navne/droppede-skolen-og-blev-direktoer-i-egen-virksomhed",
      date: "2014-06-24",
    },
  },
  {
    data: {
      headline: "Omsætter for 20 millioner på gammel opfindelse",
      url: "http://finans.dk/artikel/ECE6569703/oms%C3%A6tter_for_20_millioner_p%C3%A5_gammel_opfindelse",
      date: "2014-07-15",
    },
  },
  {
    data: {
      headline: "Ska föra in pendlare till Sverige i lyxbilar",
      url: "http://www.expressen.se/kvallsposten/ska-fora-in-pendlare-till-sverige-i-lyxbilar/",
      date: "2016-01-07",
    },
  },
  {
    data: {
      headline:
        "Danish Agera: entering Sweden was a tough but educational experience",
      url: "http://www.nordicstartupbits.com/2015/04/17/danish-agera-entering-sweden-was-a-tough-but-educational-experience/",
      date: "2015-04-17",
    },
  },
  {
    data: {
      headline: "Rico Andersen: Jeg savner større hjælp til talentudvikling",
      url: "https://www.ivaerk-tv.dk/ivaerksaetter-kultur/rico-andersen-savner-talentudvikling",
      date: "2014-04-26",
    },
  },
  {
    data: {
      headline: "TV: Kunne du forestille dig at arbejde her?",
      url: "http://navisen.dk/blog/tv-kunne-du-forestille-dig-at-arbejde-her/",
      date: "2015-03-24",
    },
  },
  {
    data: {
      headline: "Ungt makkerpar med succes på nettet",
      url: "http://sn.dk/Roskilde/Ungt-makkerpar-med-succes-paa-nettet/artikel/217522",
      date: "2012-08-11",
    },
  },
  {
    data: {
      headline: "Iværksættervirksomhed har øjnene rettet mod børsnotering",
      url: "http://trendsonline.dk/2016/06/27/ivaerksaettervirksomhed-har-ojnene-rettet-mod-borsnotering/",
      date: "2016-06-27",
    },
  },
  {
    data: {
      headline:
        "Se glad, konfetti-skydende &quot;Happiness Manager&quot; motivere ansatte",
      url: "http://tv.tv2.dk/natholdet/2014-10-27-se-glad-konfetti-skydende-happiness-manager-motivere-ansatte",
      date: "2014-10-27",
    },
  },
  {
    data: {
      headline: "&quot;Happiness manager&quot; skruede omsætningen i vejret",
      url: "http://finans.dk/artikel/ECE7136569/%22happiness_manager%22_skruede_oms%C3%A6tningen_i_vejret",
      date: "2015-07-15",
    },
  },
  {
    data: {
      headline: "Radio 24/7",
      url: "http://www.radio24syv.dk/programmer/reporterne/11009034/reporterne-05-03-2015-1/",
      date: "2015-03-05",
    },
  },
  {
    data: {
      headline: "Hofnarren der spreder arbejdsglæde",
      url: "https://www.arbejdslyst.dk/happiness_manager",
      date: "2016-03-13",
    },
  },
  {
    data: {
      headline: "Derfor er dette drømmearbeidsplassen",
      url: "http://www.side2.no/annonsebilag/derfor-er-dette-drmmearbeidsplassen/8558214.html",
      date: "2015-03-23",
    },
  },
  {
    data: {
      headline: "Dansk vækstkomet får ny direktør",
      url: "http://www.business.dk/businessdirect/agera-aps/dansk-vaekstkomet-faar-ny-direktoer",
      date: "2014-07-31",
    },
  },
  {
    data: {
      headline: "Iværksætterselskaber stiftes i stor stil",
      url: "http://www.business.dk/businessdirect/agera-aps/ivaerksaetterselskaber-stiftes-i-stor-stil",
      date: "2014-01-13",
    },
  },
  {
    data: {
      headline: "Stor forskel på boligadvokaters salær",
      url: "http://www.business.dk/businessdirect/agera-aps/stor-forskel-paa-boligadvokaters-salaer",
      date: "2013-12-09",
    },
  },
  {
    data: {
      headline: "OK med advokat på anbud",
      url: "http://www.advokatbladet.no/2015/03/ok-med-advokat-pa-anbud",
      date: "2015-03-26",
    },
  },
  {
    data: {
      headline: "23-årig iværksætter sælger sin virksomhed for millionbeløb",
      url: "http://finans.dk/live/erhverv/ECE7874466/23-%C3%A5rig-iv%C3%A6rks%C3%A6tter-s%C3%A6lger-sin-virksomhed-for-millionbel%C3%B8b/",
      date: "2015-07-17",
    },
  },
  {
    data: {
      headline: "Iværksætteren der har alt ønsker sig raketgave",
      url: "http://finans.dk/live/erhverv/ECE7253700/Iv%C3%A6rks%C3%A6tteren-der-har-alt-%C3%B8nsker-sig-raketgave/",
      date: "2014-12-03",
    },
  },
  {
    data: {
      headline: "22 år og chef for 40 medarbejdere",
      url: "http://finans.dk/live/erhverv/ECE7113481/22-%C3%A5r-og-chef-for-40-medarbejdere/",
      date: "2014-10-24",
    },
  },
  {
    data: {
      headline: "Flex Fundings største crowdfundinglån var overtegnet",
      url: "http://finanswatch.dk/Finansnyt/Pengeinstitutter/article7973325.ece",
      date: "2015-08-28",
    },
  },
  {
    data: {
      headline: "Flexfunding sætter rekord i nye kunder",
      url: "http://finanswatch.dk/Finansnyt/article7900468.ece",
      date: "2015-07-31",
    },
  },
  {
    data: {
      headline: "Thorborg vælger Flexfunding",
      url: "http://borsen.dk/nyheder/avisen/artikel/11/117636/artikel.html",
      date: "2015-07-30",
    },
  },
  {
    data: {
      headline: "Martin Thorborg går uden om banken efter lån på 1,5 mio",
      url: "http://finans.borsen.dk/artikel/1/308176/martin_thorborg_gaar_uden_om_banken_efter_laan_paa_15_mio.html",
      date: "2015-07-29",
    },
  },
  {
    data: {
      headline: "Men en dag ringede Thorborg",
      url: "http://borsen.dk/nyheder/avisen/artikel/11/70521/artikel.html?hl=YToxOntpOjA7czo1OiJBZ2VyYSI7fQ,,",
      date: "2014-01-07",
    },
  },
  {
    data: {
      headline: "Her er seks unge succesfulde iværksættere",
      url: "http://www.business.dk/vaekst/her-er-seks-unge-succesfulde-ivaerksaettere",
      date: "2014-10-28",
    },
  },
  {
    data: {
      headline: "Rico kan blive den næste Dyne-Larsen – bare bedre",
      url: "http://www.business.dk/navne/rico-kan-blive-den-naeste-dyne-larsen-bare-bedre",
      date: "2014-06-24",
    },
  },
  {
    data: {
      headline: "TV2Lorry: KONT@KT",
      url: "http://www.tv2lorry.dk/kontkt/kontkt-26/6-2014",
      date: "2014-06-26",
    },
  },
  {
    data: {
      headline: "ZDF - Morgenmagazin",
      url: "http://www.zdf.de/ZDFmediathek#/beitrag/einzelsendung/2707696/Morgenmagazin-vom-1-April-2016",
      date: "2016-04-01",
    },
  },
  {
    data: {
      headline: "Global vækstfond skyder millioner i danske Ageras",
      url: "http://techsavvy.media/global-vaekstfond-skyder-millioner-i-danske-ageras",
      date: "2017-03-15",
    },
  },
  {
    data: {
      headline:
        "Milliardfond fra Bahrain sender kæmpebeløb efter ung dansk virksomhed",
      url: "http://nyheder.tv2.dk/business/2017-03-15-milliardfond-fra-bahrain-sender-kaempebeloeb-efter-ung-dansk-virksomhed",
      date: "2017-03-15",
    },
  },
  {
    data: {
      headline:
        '25-årig efter millionsalg til gigantfond: "Jeg var ved at give op flere gange',
      url: "http://borsen.dk/nyheder/avisen/artikel/11/166526/artikel.html",
      date: "2017-03-24",
    },
  },
  {
    data: {
      headline:
        "Ung vækstkomet vil være milliardforretning: Kontakter 2000 på Linkedin om ugen",
      url: "http://borsen.dk/nyheder/avisen/artikel/11/183687/artikel.html",
      date: "2017-11-04",
    },
  },
  {
    data: {
      headline:
        "25-årig skiftede Thorborg ud med rig kapitalfond: Nu vil han skabe milliardvirksomhed",
      url: "http://borsen.dk/nyheder/avisen/artikel/11/183686/artikel.html",
      date: "2017-11-04",
    },
  },
  {
    data: {
      headline: "Sådan vækster du din digitale forretning",
      url: "https://euroinvestor.dk/nyheder/2018/07/16/saadan-vaekster-du-din-digitale-forretning/13860286",
      date: "2018-07-16",
    },
  },
  {
    data: {
      headline: "DR P1 Morgen: Store forskelle på advokatpriser",
      url: "https://www.dr.dk/radio/p1/p1-morgen/p1-morgen-2018-08-04",
      date: "2018-08-04",
    },
  },
  {
    data: {
      headline:
        "Se dig for i advokatjunglen: Der kan være tusinder kroner at spare",
      url: "https://www.dr.dk/nyheder/penge/se-dig-i-advokatjunglen-der-kan-vaere-tusinder-kroner-spare",
      date: "2018-08-04",
    },
  },
  {
    data: {
      headline: "OK med advokat på anbud",
      url: "http://www.advokatbladet.no/2015/03/ok-med-advokat-pa-anbud",
      date: "2018-10-22",
    },
  },
  {
    data: {
      headline: "Regnskabsprogram i skyen udfordrer e-conomic",
      url: "",
      date: "2011-04-24",
    },
  },
  {
    data: {
      headline: "Hvorfor skal regnskabsprogrammer være så dødssyge?",
      url: "https://www.computerworld.dk/art/118471/hvorfor-skal-regnskabsprogrammer-vaere-saa-doedssyge/",
      date: "2011-08-11",
    },
  },
  {
    data: {
      headline: "Iværksættere vil skabe Silicon Valley i Bredgade",
      url: "https://www.business.dk/digital/ivaerksaettere-vil-skabe-silicon-valley-i-bredgade/",
      date: "2011-09-27",
    },
  },
  { data: { headline: "Til workshop hos SKAT", url: "", date: "2012-08-05" } },
  {
    data: {
      headline: "Online økonomisystemer vinder frem",
      url: "",
      date: "2014-10-23",
    },
  },
  {
    data: {
      headline: "Billy sætter brugervenligheden i centrum",
      url: "https://issuu.com/europeanmediapartner/docs/fremtidens_digitalisering_web/2/",
      date: "2015-08-25",
    },
  },
  {
    data: {
      headline: "Vil skabe vækst og jobs",
      url: "https://www.youtube.com/watch?v=N80l7UNcNrg&feature=emb_title",
      date: "2015-09-30",
    },
  },
  {
    data: {
      headline:
        "Ageras: ‘Billy’ er den manglende brik i revisions-puslespillet",
      url: "https://techsavvy.media/ageras-billy-er-den-manglende-brik-i-revisions-puslespillet/",
      date: "2019-08-27",
    },
  },
  {
    data: {
      headline:
        "IT-virksomhed køber regnskabskomet for »stort« tocifret millionbeløb",
      url: "https://www.berlingske.dk/virksomheder/it-virksomhed-kober-regnskabskomet-for-stort-tocifret-millionbelob",
      date: "2019-08-27",
    },
  },
  {
    data: {
      headline: "Ageras acquires accounting software firm Billy",
      url: "https://www.nordicknowledgepartners.com/library/ageras-acquires-accounting-software-firm-billy",
      date: "2019-08-30",
    },
  },
  {
    data: {
      headline:
        "Topchef om Billy-opkøb: Platformen kan lanceres i et nyt land på 24 timer",
      url: "https://itwatch.dk/ITNyt/Brancher/branchesoftware/article11575951.ece",
      date: "2019-08-26",
    },
  },
  {
    data: {
      headline:
        "Ageras – Fra milliongæld til pivotering og afbetaling på 4 mdr.",
      url: "https://ivaerksaetterhistorier.dk/ageras-rico-andersen-har-ingen-plan-b/",
      date: "2020-02-11",
    },
  },
  {
    data: {
      headline:
        "Ageras vil skabe det ultimative finansielle cockpit for små virksomheder",
      url: "https://www.businessinsights.dk/copenhagen-fintech-dk/ageras-vil-skabe-det-ultimative-finansielle-cockpit-for-smaa-virksomheder/",
      date: "2020-09-16",
    },
  },
  {
    data: {
      headline:
        "Regn­skabs­plat­form Bil­ly ind­går fin­tech-part­ner­skab - vil gøre det hur­ti­ge­re og bil­li­ge­re at ord­ne regn­skab",
      url: "https://borsen.dk/nyheder/finans/regnskabsplatform-billy-indgaar-fintech-partnerskab-vil-goere-det-hurtigere-og-billigere-at-ordne-regnskab",
      date: "2020-01-27",
    },
  },
  {
    data: {
      headline:
        'Fin­tech-sel­skab lan­der vig­tig til­la­del­se fra Fi­nan­stil­sy­net: "Mu­lig­he­der­ne er man­ge, der­for for­dob­ler vi vo­res ud­vik­lings­ka­pa­ci­tet',
      url: "https://borsen.dk/nyheder/finans/fintech-selskab-lander-vigtig-tilladelse-fra-finanstilsynet-mulighederne-er-mange-derfor-fordobler-vi-vores-udviklingskapacitet",
      date: "2020-01-21",
    },
  },
  {
    data: {
      headline: "Danish platform Billy looking to transform accounting at SMEs",
      url: "https://www.finextra.com/newsarticle/35818/danish-platform-billy-looking-to-transform-accounting-at-smes",
      date: "2020-05-13",
    },
  },
  {
    data: {
      headline:
        "Open Banking: Danish Accounting Platform Billy to Help SMEs Work with Financial Data from Banks",
      url: "https://www.crowdfundinsider.com/2020/05/161453-open-banking-danish-accounting-platform-billy-to-help-smes-work-with-financial-data-from-banks/",
      date: "2020-05-14",
    },
  },
  {
    data: {
      headline:
        "Bil­ly og Di­nero i for­re­ste ræk­ke til bru­gen af re­vo­lu­tio­ne­ren­de nyt bank­sy­stem i EU",
      url: "https://borsen.dk/nyheder/finans/dinero-og-billy-erobrer-ny-bankverden",
      date: "2020-05-19",
    },
  },
  {
    data: {
      headline:
        "Dinero og Billy blandt de første til at anvende ny EU-regler om open banking",
      url: "https://www.computerworld.dk/art/251974/dinero-og-billy-blandt-de-foerste-til-at-anvende-ny-eu-regler-om-open-banking",
      date: "2020-05-20",
    },
  },
  {
    data: {
      headline:
        "Lad iværksætterselskaber overleve og skyd gevinsten i teknologi mod svindel",
      url: "https://finans.dk/debat/ECE12220938/lad-ivaerksaetterselskaber-overleve-og-skyd-gevinsten-i-teknologi-mod-svindel/",
      date: "2020-06-16",
    },
  },
  {
    data: {
      headline:
        "Det danske regnskabsprogram Billy skal have ny direktør - her er profilen, som selskabet er på udkig efter",
      url: "https://www.computerworld.dk/art/252385/det-danske-regnskabsprogram-billy-skal-have-ny-direktoer-her-er-profilen-som-selskabet-er-paa-udkig-efter",
      date: "2020-06-22",
    },
  },
  {
    data: {
      headline: "Danske Ageras får Rabobank som medejer - køber op i Holland",
      url: "https://www.computerworld.dk/art/252450/morgen-briefing-bredbaandspuljen-faar-kritik-det-er-ikke-i-orden-80-danskere-har-benyttet-smittestop-appen-nye-regler-for-netneutralitet",
      date: "2020-06-26",
    },
  },
  {
    data: {
      headline:
        "Ageras køber Hollandsk regnskabsprogram og får Rabobank som medejer",
      url: "https://techsavvy.media/ageras-koeber-hollandsk-regnskabsprogram-og-faar-rabobank-som-medejer/",
      date: "2020-06-25",
    },
  },
  {
    data: {
      headline:
        "Små byg­ge­fir­ma­er øger om­sæt­ning trods cor­o­na: 10 pct hø­je­re end sid­ste år",
      url: "https://borsen.dk/nyheder/ejendomme/de-smaa-virksomheder-oger-omsaetning-trods-corona",
      date: "2020-08-26",
    },
  },
  {
    data: {
      headline:
        "Billy klar med ny topchef: Tidligere salgsdirektør i rivalen Visma e-conomic bliver ny CEO",
      url: "https://www.computerworld.dk/art/253141/billy-klar-med-ny-topchef-tidligere-salgsdirektoer-i-rivalen-visma-e-conomic-bliver-ny-ceo",
      date: "2020-08-26",
    },
  },
  {
    data: {
      headline: "Virksomhed bag regnskabssoftware har fundet ny direktør",
      url: "https://itwatch.dk/ITNyt/Brancher/branchesoftware/article12370701.ece",
      date: "2020-08-26",
    },
  },
  {
    data: {
      headline:
        'Her er den nye Billy-topchefs plan for selskabet: "Vi har et stort uforløst potentiale',
      url: "https://www.computerworld.dk/art/253159/her-er-den-nye-billy-topchefs-plan-for-selskabet-vi-har-et-stort-uforloest-potentiale",
      date: "2020-08-31",
    },
  },
  {
    data: {
      headline:
        "Så hårdt har coronakrisen ramt små danske it-virksomheder: Omsætningen er faldet med 8,5 procent",
      url: "https://www.computerworld.dk/art/253223/saa-haardt-har-coronakrisen-ramt-smaa-danske-it-virksomheder-omsaetningen-er-faldet-med-8-5-procent",
      date: "2020-09-01",
    },
  },
  {
    data: {
      headline:
        "Rebelske fintechs bliver voksne. Men bliver de så bare “mere af det samme”?",
      url: "https://techsavvy.media/fintechs-bliver-voksne/",
      date: "2020-09-15",
    },
  },
  {
    data: {
      headline:
        "Billy fylder rundt og kigger tilbage på fintech: Fra bogføringssoftware til PSD2-drevet disruption",
      url: "https://techsavvy.media/billy-fylder-rundt-og-kigger-tilbage-paa-fintech-fra-bogfoeringssoftware-til-psd2-drevet-disruption/",
      date: "2020-10-01",
    },
  },
  {
    data: {
      headline:
        "Flere banker vil være iværksætternes bank. Betyder det, at bankernes rolle er under forandring?",
      url: "https://techsavvy.media/flere-banker-vil-vaere-ivaerksaetternes-bank-betyder-det-at-bankernes-rolle-er-under-forandring/",
      date: "2020-10-21",
    },
  },
  {
    data: {
      headline:
        "Di­rek­tør: Kom­pli­ce­re­de reg­ler spæn­der ben for små selv­stæn­di­ge",
      url: "https://borsen.dk/nyheder/opinion/debat-direktor-komplicerede-regler-spaender-ben-for-smaa-selvstaendige",
      date: "2020-10-31",
    },
  },
  {
    data: {
      headline:
        "Nye tal afslører: Efter hårdt corona-forår stiger omsætningen igen i de små it-virksomheder",
      url: "https://www.computerworld.dk/art/254124/nye-tal-afsloerer-efter-haardt-corona-foraar-stiger-omsaetningen-igen-i-de-smaa-it-virksomheder",
      date: "2020-11-09",
    },
  },
  {
    data: {
      headline:
        "Trods nedlukning: Små bygge- og anlægsvirksomheder fastholder høj omsætning",
      url: "https://www.mestertidende.dk/article/view/749682/trods_nedlukning_sma_bygge_og_anlaegsvirksomheder_fastholder_hoj_omsaetning",
      date: "2020-11-11",
    },
  },
  {
    data: {
      headline: "Stor hjælp til iværksættere",
      url: "https://www.avisen.dk/stor-hjaelp-til-ivaerksaettere_632498.aspx",
      date: "2021-01-31",
    },
  },
  {
    data: {
      headline: "SMV’ere vil hellere have moms-afdragsordning",
      url: "https://www.avisen.dk/smver-vil-hellere-have-moms-afdragsordning_634250.aspx",
      date: "2021-02-12",
    },
  },
  {
    data: {
      headline:
        "5 skar­pe til smv-le­de­ren: Smal­l­tal­ker med sine an­sat­te hver mor­gen og sy­nes, at MU-sam­ta­ler er for­æl­de­de",
      url: "https://borsen.dk/nyheder/generelt/5-skarpe-til-smv-lederen-smalltalker-med-sine-ansatte-hver-morgen-og-synes-at-mu-samtaler-er-foraeldede",
      date: "2021-02-11",
    },
  },
  {
    data: {
      headline:
        "Virksomhederne vil ikke optage flere momslån – foreslår i stedet afdragsordning",
      url: "https://techsavvy.media/virksomhederne-vil-ikke-optage-flere-momslaan-foreslaar-i-stedet-afdragsordning/",
      date: "2021-02-12",
    },
  },
  {
    data: {
      headline:
        "Corona-hjælp: Små og mellemstore virksomheder skal inddrages tidligere",
      url: "https://finans.dk/debat/ECE12765254/coronahjaelp-smaa-og-mellemstore-virksomheder-skal-inddrages-tidligere/",
      date: "2021-02-17",
    },
  },
  {
    data: {
      headline:
        "Rabobank invests in Ageras to develop financial services for SMEs",
      url: "https://www.assetfinanceinternational.com/index.php/technology/technology-archive/technology-articles/19517-rabobank-invests-in-ageras-to-develop-financial-services-for-smes",
      date: "2020-07-08",
    },
  },
  {
    data: {
      headline:
        "Rabobank køber sig ind i dansk it-virksomhed: Vil tilbyde kreditkort og erhvervskonti til SMV'er",
      url: "https://finanswatch.dk/Finansnyt/Fintech/article12246786.ece",
      date: "2020-06-25",
    },
  },
  {
    data: {
      headline:
        "Rabo Frontier Ventures acquires stake in SME marketplace Ageras",
      url: "https://www.finextra.com/newsarticle/36094/rabo-frontier-ventures-acquires-stake-in-sme-marketplace-ageras",
      date: "2020-06-25",
    },
  },
  {
    data: {
      headline:
        "Rabo Frontier Ventures teams up with online marketplace Ageras",
      url: "https://thepaypers.com/payments-general/rabo-frontier-ventures-teams-up-with-online-marketplace-ageras--1243153",
      date: "2020-06-25",
    },
  },
  {
    data: {
      headline: "PE-backed Ageras acquires Tellow from Rabobank",
      url: "https://www.nordicknowledgepartners.com/library/pe-backed-ageras-acquires-tellow-from-rabobank",
      date: "2020-06-26",
    },
  },
  {
    data: {
      headline: "Ageras acquired the Dutch company Tellow",
      url: "https://nordic9.com/news/ageras-acquired-the-dutch-company-tellow-news9752007270/",
      date: "2020-06-25",
    },
  },
  {
    data: {
      headline:
        "Netherlands based Firms Made Several Important Fintech Acquistions in 2020 in Order to Diversify and Strengthen Business Operations",
      url: "https://www.crowdfundinsider.com/2020/12/170283-netherlands-based-firms-made-several-important-fintech-acquistions-in-2020-in-order-to-diversify-and-strengthen-business-operations-report/",
      date: "2020-12-15",
    },
  },
  {
    data: {
      headline: "Talent 100: Martin Hegelund er den fødte iværksætter",
      url: "https://www.berlingske.dk/karriere/den-foedte-ivaerksaetter",
      date: "2019-04-26",
    },
  },
  {
    data: {
      headline:
        "Age­ras vil star­te egen e-bank ef­ter in­ve­ste­ring på 450 mio",
      url: "https://borsen.dk/nyheder/finans/ageras-group-starter-egen-e-bank",
      date: "2021-02-22",
    },
  },
  {
    data: {
      headline:
        "Ageras announced an investment deal of DKK 450 million backed by Lugard Road Capital.",
      url: "https://nordic9.com/news/ageras-announced-an-investment-deal-of-dkk-450-million-backed-by-lugard-road-capital/",
      date: "2021-02-22",
    },
  },
  {
    data: {
      headline: "Ny in­ve­stor gi­ver Age­ras vær­di på 1,5 mia kr",
      url: "https://borsen.dk/nyheder/finans/ny-investor-giver-ageras-vaerdi-paa-15-mia-kr",
      date: "2021-02-22",
    },
  },
  {
    data: {
      headline: "Ageras Group har hentet en investering på 450 mio. kr.",
      url: "https://finans.dk/erhverv/ECE12777685/ageras-group-har-hentet-en-investering-paa-450-mio-kr/?ctxref=ext",
      date: "2021-02-23",
    },
  },
  {
    data: {
      headline:
        "Ageras nabs $73M at a $244M valuation for its accountancy marketplace and bookkeeping tech stack",
      url: "https://techcrunch.com/2021/02/22/ageras-nabs-73m-at-a-244m-valuation-for-its-accountancy-marketplace-and-bookkeeping-tech-stack/",
      date: "2021-02-22",
    },
  },
  {
    data: {
      headline:
        "Ageras lander mega-investering til ekspansion, opkøb og… en bank?",
      url: "https://techsavvy.media/ageras-lander-mega-investering-til-ekspansion-opkoeb-og-en-bank/",
      date: "2021-02-24",
    },
  },
  {
    data: {
      headline: "Fintech-selskab køber op igen",
      url: "https://itwatch.dk/ITNyt/Brancher/fintech/article13247332.ece",
      date: "2021-09-02",
    },
  },
  {
    data: {
      headline: "Lønsystemet Salary solgt til dansk fintech-komet",
      url: "https://techsavvy.media/loensystemet-salary-solgt-til-dansk-fintech-komet/",
      date: "2021-08-03",
    },
  },
  {
    data: {
      headline:
        "Kolding-frisør fik 100 pct overblik over moms, skat, debit og kredit med digitalt system",
      url: "https://borsen.dk/nyheder/proselvstaendig/kolding-frisor-fik-100-pct-overblik-med-digitalt-system",
      date: "2021-12-15",
    },
  },
  {
    data: {
      headline:
        "Salary vil vende op og ned på danskernes løn: Sådan kan du få din løn udbetalt før tid",
      url: "https://www.computerworld.dk/art/259641/danske-salary-vil-vende-op-og-ned-paa-danskernes-loen-saadan-kan-du-faa-din-loen-udbetalt-foer-tid",
      date: "2022-01-10",
    },
  },
  {
    data: {
      headline: "Lønfejl koster iværksættere millioner",
      url: "https://www.avisen.dk/loenfejl-koster-ivaerksaettere-millioner_671737.aspx",
      date: "2021-12-01",
    },
  },
  {
    data: {
      headline:
        "Dansk fintech-selskab køber lønsystem: Bestem selv, hvornår du vil have din løn",
      url: "https://borsen.dk/nyheder/finans/ageras-kober-lonsystem-for-tocifret-millionbelob",
      date: "2021-08-02",
    },
  },
  {
    data: {
      headline:
        "Salary lancerer ny platform: Nu kan medarbejdere selv udbetale lønnen",
      url: "https://finans.dk/erhverv/ECE12728007/virksomheden-salary-lancerer-ny-platform-nu-kan-medarbejdere-selv-udbetale-loennen/?ctxref=ext",
      date: "2021-02-03",
    },
  },
  { data: { headline: "Swipe din løn", url: "", date: "2021-02-03" } },
]

module.exports = dataLines
