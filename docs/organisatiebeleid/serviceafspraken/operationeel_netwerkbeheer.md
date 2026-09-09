
## 1. Inleiding

Dit artikel beschrijft de serviceafspraken die gelden voor de rol operationeel netwerkbeheer. De operationeel netwerkbeheerder beheert de operationele werking van het iWlz-netwerkmodel. Een operationeel netwerkbeheerder draagt zorg voor de servicedesk operationeel netwerkbeheer, ondersteunt bij het aansluiten van partijen op het iWlz-netwerk en monitort het iWlz-netwerk. De rol operationeel netwerkbeheerder wordt door VECOZO uitgevoerd.

De Beschikbaarheid, Integriteit, Vertrouwelijkheid (BIV) classificaties in dit artikel hebben betrekking op de generieke functies: identificatie, authenticatie en autorisatie. Deze functies worden in opdracht van de zorgkantoren door VECOZO geleverd.

> ⚠️
> Dit artikel is een informatieve weergave van de serviceafspraken zoals die gelden voor operationeel netwerkbeheer binnen het iWlz-netwerkmodel. De inhoud is afgeleid van formele SLA’s, maar vormt geen 1-op-1 afschrift van ondertekende overeenkomsten. De ondertekende overeenkomsten blijven leidend voor de organisaties (zie ook [Positie van de serviceafspraken](./index#22-positie-van-de-serviceafspraken)).

## 2. Servicevenster en contactgegevens

Voor incidenten en vragen kan contact worden opgenomen met de Servicedesk Operationeel netwerkbeheer via e-mail ([nID\_Algemeen@vecozo.nl](mailto:nID_Algemeen@vecozo.nl)).

### 2.1 Servicevenster


|  | **Openingstijden Servicedesk Operationeel netwerkbeheer** | **Mate van ondersteuning** |
| :--- | :--- | :--- |
| **Werkdagen: Maandag t/m donderdag** | 09:00 – 17:00 uur | Full Support |
| **Werkdagen: vrijdag** | 09:00 – 15:30 uur | Full Support |
| **Buiten bovengenoemde tijden** |  | Incidenten met de netwerkcomponenten krijgen full support voor de Productie-omgeving (deze worden gemonitord buiten kantoortijden) |

### 2.2 Contactgegevens

| |  |
| :--- | :--- |
| **Contactpunt** | Servicedesk Operationeel netwerkbeheer |
| **E-mail** | [nID\_Algemeen@vecozo.nl](mailto:nID_Algemeen@vecozo.nl) |
| **Inbreuk in verband met Persoonsgegevens Melding (Datalek)** | 013-46 41 204<br>Dit telefoonnummer is uitsluitend bereikbaar voor het melden van een vermoedelijke constatering van een vermoedelijke Inbreuk in verband met persoonsgegevens. Het gaat hier met name over (vermoedelijke) datalekken zoals in [scenario 3 beschreven (zie paragraaf Datalekken)](./index#34-datalekken).<br><br> <u>Binnen openingstijden van de servicedesk</u> wordt dit telefoonnummer doorgeschakeld naar een 3e/2e lijn support medewerker (dus buiten het bestaande keuzemenu van de Servicedesk om). De Melding wordt vervolgens doorgegeven aan de afdeling Informatiebeveiliging.<br><br><u>Buiten openingstijden van de servicedesk</u> wordt dit telefoonnummer doorgeschakeld naar de standby dienst. Deze collega neemt de melding aan en geeft deze vervolgens door aan het MT ter beoordeling/opvolging. |

## 3. Beschikbaarheid, Integriteit, Vertrouwelijkheid (BIV) generieke functies

### 3.1 Algemeen

In de Overeenkomst zijn tussen partijen afspraken gemaakt over het te hanteren normenkader. VECOZO is NEN 7510 en ISO 27001 gecertificeerd. VECOZO treft onder andere rekening houdend met de techniek, de aard en omvang, de context en de uitvoeringskosten, passende technische en organisatorische maatregelen voor de beveiliging van gegevens. Deze maatregelen worden steeds geëvalueerd om te controleren of de genomen maatregelen doeltreffend zijn en blijven.

Al deze aspecten dragen (in)direct bij aan de onderdelen op Beschikbaarheid, Integriteit en Vertrouwelijkheid.

### 3.2 Beschikbaarheid

| **Prestatienorm/KPI** | **Meetmethode** | **Rapportage** | **Bijzonderheden** |
| :--- | :--- | :--- | :--- |
| **Minimaal te realiseren beschikbaarheid** ≥ 99,5 procent per kalendermaand, binnen het dienstverleningsvenster\*. | Monitoring | Maandelijkse servicerapportage | **Meetpunt:** centrale netwerkonderdelen en diensten uitgevoerd door de Operationeel netwerkbeheerder. |

\*De berekening van de Beschikbaarheid is gedefinieerd in [Serviceafspraken_Berekening beschikbaarheid](./index#311-berekening-beschikbaarheid).

Uitzondering: gepland onderhoud tijdens het dienstverleningsvenster wordt niet meegenomen in de berekening van niet-beschikbare minuten, zie factor D in de formule [Serviceafspraken_Berekening beschikbaarheid](./index#311-berekening-beschikbaarheid).

Diensten en onderliggende infrastructuur worden 24/7 gemonitord.

### 3.3 Integriteit

De geleverde generieke functies bevatten geen data. De operationeel netwerkbeheerder heeft geen inzicht in data van bronhouders en afnemers en kan ook hierin geen verantwoordelijkheid nemen.

### 3.4 Vertrouwelijkheid

Vertrouwelijkheid is de mate waarin de toegang tot data van de dienst beperkt moet zijn tot een geautoriseerde groep gebruikers. In het Afsprakenstelsel zijn hier specifieke afspraken over opgenomen.

In alle gevallen zal de constatering waarbij een afwijking op de vertrouwelijkheid aan de orde is, worden opgepakt als Incident met prioriteit 1.

VECOZO voert standaard toetsing uit of redelijkerwijs kan worden aangenomen dat deze gebeurtenis geleid heeft, leidt of kan leiden tot een aanmerkelijke kans op verlies of onrechtmatige verwerking van persoonsgegevens (inbreuk in verband met persoonsgegevens). Bij vaststelling volgt de datalekprocedure van VECOZO.

### 3.5 Prestaties generieke functies

Voor alle diensten de operationeel netwerkbeheerder aanbiedt geldt het volgende:

| **Grenswaarden (norm) prestatie** | **Minimaal te realiseren** |
| :--- | :--- |
| Afgehandeld binnen 1,5 sec | 90% per maand |

### 3.6 Onderhoud

Het Onderhoudsvenster stelt VECOZO in staat op vooraf vastgestelde tijdsvensters regulier onderhoud uit te voeren. De dag waarop onderhoud is gepland volgens het standaard onderhoudsvenster kan bestaan uit 2 varianten:

1. Binnen [dienstverleningsvenster](./index#36-dienstverleningsvenster): Onderhoud vindt plaats zonder noemenswaardig effect op beschikbaarheid of prestatie van de Dienst of Infrastructuur.
2. Buiten [dienstverleningsvenster](./index#36-dienstverleningsvenster): Onderhoud vindt plaats met een mogelijk effect op beschikbaarheid of prestatie de Dienst of Infrastructuur.

VECOZO plant dit onderhoud in overleg met de Technische klankbordgroep. Onderhoud buiten het standaard onderhoudsvenster zal minimaal 3 werkdagen vooraf aangekondigd worden. In uitzonderingsgevallen, bijvoorbeeld naar aanleiding van (security) incidenten of bij een urgente wijziging is sprake van ongepland onderhoud. VECOZO stelt in zo’n geval betrokkenen op de hoogte. Als er voorzien wordt dat er door een wijziging een conflict kan ontstaan met ander gepland onderhoud in het onderhoudsvenster, dan zal VECOZO trachten de wijziging op een ander tijdstip uit te voeren.

| **Niet beschikbaar** | **Productie omgeving** | **Frequentie** |
| :--- | :--- |:--- |
| Gepland functioneel en technisch onderhoud voor de diensten. | VECOZO generieke functies | In overleg |

## 4. Incidentmanagement

### 4.1 Incident management proces

Om de afhandeling van incidenten te borgen heeft VECOZO een incident management proces. Dit proces is onderdeel van interne en externe periodieke audits. Ook worden alle prioriteit 1 incidenten automatisch opgeschaald naar management niveau voor sturing en controle.

VECOZO heeft het incident management proces zo ingericht dat het binnen en buiten kantoortijden functioneert en waarmee gesignaleerde Incidenten eventueel kunnen worden geëscaleerd tot op directieniveau. Op deze manier worden onder andere afwijkende raadplegingen, zoals veelvuldig afgekeurde raadpleegverzoeken, geprioriteerd en opgepakt. Hierbij zijn de reactie- en oplostijden afhankelijk van de toegekende prioriteit.

### 4.2 Incidentmelding

Incidenten worden bij de servicedesk operationeel netwerkbeheerder gemeld. Deze registreert het Incident. Het kan voorkomen dat bij de melding van een Incident niet duidelijk is of de Melding bij één van ketenpartijen of bij VECOZO ligt. Het is de verantwoordelijkheid van VECOZO om te onderzoeken waar het incident ontstaat en of dit incident ook andere ketenpartijen raakt.

### 4.3 Prioriteren van incidenten

De Melder kent bij de aanmelding prioriteit toe aan Incidenten. Deze prioriteit wordt overgenomen door VECOZO. Indien VECOZO zich niet kan vinden in de door de melder gehanteerde prioriteit, neemt VECOZO contact op met de melder binnen de afgesproken reactietijd. In overleg wordt de prioriteit opnieuw vastgesteld. Incidenten kunnen tijdens het proces door VECOZO in overleg met de melder en eventuele andere betrokkenen worden gewijzigd naar een hogere of lagere prioriteit.

De onderstaande tabel wordt gebruikt bij het vaststellen van de prioriteit:

| **Prioriteit** | **Beschrijving** |
| :--- | :--- |
| 1. Kritiek | Primair bedrijfsproces van (één van) de ketenpartijen of een kritisch deel hiervan is gestagneerd en tijd kritisch (**moet op zo kort mogelijke termijn worden opgelost,** **direct handelen en indien mogelijk ondertussen informeren**). Dit betreft een inspanningsverplichting voor wat betreft het direct ondernemen van actie op incidenten, Beschikbaarheid en prestatie problemen van de Dienst met een hoge urgentie en grote impact en een resultaatsverplichting als de oorzaak bij VECOZO zelf ligt. |
| 2. Hoog | Bedrijfsproces van (één van) de ketenpartijen is volledig gestagneerd, beperkt tijd kritisch (**moet snel worden opgelost,** **eerst informeren en daarna handelen**). Dit betreft een inspanningsverplichting voor wat betreft het zo spoedig mogelijk ondernemen van actie op incidenten, Beschikbaarheid en prestatie problemen van de Dienst met een hoge urgentie of een grote impact. Deze prioriteit is ondergeschikt aan prioriteit 1 en zal daar zo nodig voor moeten wijken. |
| 3. Midden | Bedrijfsproces van (één van) de ketenpartijen is deels gestagneerd, beperkt tijd kritisch (**oplossing kan in overleg ingepland worden, idealiter zonder openbreken van ontwikkel en release processen**). Dit betreft een inspanningsverplichting voor wat betreft het zo spoedig mogelijk ondernemen van actie op incidenten, Beschikbaarheid en prestatie problemen van de Dienst met een hoge urgentie of een grote impact. Deze prioriteit is ondergeschikt aan prioriteit 1 en 2 en zal daar zo nodig voor moeten wijken. |
| 4. Laag | Bedrijfsproces van (één van) de ketenpartijen is deels gestagneerd, niet tijd kritisch (tolerabel, staat het gebruik niet in de weg). Dit betreft een passende inspanning die in overleg met Opdrachtgever zal worden genomen. Deze categorie is ondergeschikt aan categorie 1, 2 en 3 en zal daar zo nodig voor moeten wijken. | 

| |
| :---|
| _Indien voor een dienst (onderdeel) met een gestelde prioriteit niet aan de overeengekomen inspanningsverplichting kan worden voldaan en de verwerkingen en activiteiten met een ondergeschikte prioriteit schuiven daardoor in de planning, dan zal dit toch maar als één overschrijding van de afspraken worden beschouwd en als zodanig worden aangemerkt in de rapportages._ |  |

### 4.4 Reactie en oplostijden

De onderstaande responstijden en oplostijden gelden:

| **Prioriteit** | **Maximale reactietijd** | **Maximale oplostijd 90% Meldingen per maand binnen** |
| :--- | :--- | :--- |
| Kritiek | 1 uur | 1 dag |
| Hoog | 4 uur | 2 werkdagen |
| Midden | 1 werkdag | Oplossen indien mogelijk binnen de eerst volgende sprint van betreffende applicatie/product, releasen in overleg. |
| Laag | 1 werkdag | In overleg |

De volgorde van afhandeling van incidenten die bij VECOZO gemeld worden, wordt door VECOZO bepaald. Zodra duidelijk is dat de oplossing van een incident niet binnen de afgesproken oplostijd kan worden gerealiseerd dan neemt VECOZO in overleg met melder de beslissing of het incident wordt overgeheveld naar de escalatieprocedure en deze in werking treedt.

### 4.5 Melden van (keten) Incidenten

Het kan voorkomen dat bij de melding van een incident niet duidelijk is of de melding bij één van de partijen of bij VECOZO ligt (hierna: de keten). Het is de verantwoordelijkheid van VECOZO om te onderzoeken of een incident ook bij andere afnemers van de systemen voorkomt en vice versa. Eventueel kan de Servicedesk medewerker van VECOZO die het Incident behandelt hierover contact opnemen met deze of andere partijen.

VECOZO maakt een incidentmelding aan en start het incidentbeheer proces. Voor de prioritering en afstemming van keten-incidenten vindt te allen tijde afstemming plaats tussen de servicedesks van de betrokken deelnemers.

### 4.6 Communicatie over incident

In geval van een incident met prioriteit 1 of 2 kan er vanuit VECOZO naast het contact met de melder mogelijk ook breder schriftelijk worden gecommuniceerd en geïnformeerd (bijvoorbeeld per e-mail of via de website). De inschatting van hoe het beste gecommuniceerd kan worden (meest passend bij type incident) wordt altijd afgestemd met o.a. de Incidentmanager.

De communicatie is gericht aan de door VECOZO ingerichte “distributiegroep” voor betreffende dienst. De berichtgeving is generiek van aard en bedoeld ter informatie. Het is mogelijk dat de berichtgeving vanuit VECOZO aanleiding is voor het ondernemen van (interne) acties door de partijen. Dit is de verantwoordelijkheid van deze partijen.

| **Prioriteit** | **Scope** |
| :--- | :--- |
| 1 | Bericht op website VECOZO en/of e-mail naar betrokken of een grotere groep geregistreerde contactpersonen. Indien door de melder een 24/7 nummer beschikbaar is gesteld zal er in elk geval bij een prioriteit 1 incident ook telefonisch contact wordt opgenomen. |
| 2 | E-mail naar betrokken of een grotere groep geregistreerde contactpersonen. |

### 4.7 Status incident

VECOZO zal bij incidenten de melder op frequente basis informeren over de voortgang. In geval van een verstoring met impact hoog wordt er vanuit VECOZO schriftelijk (e-mail) gecommuniceerd. De communicatie is gericht aan de door VECOZO ingerichte “distributiegroep” voor betreffende dienst. De berichtgeving is bedoeld ter informatie. Het is mogelijk dat de status berichtgeving vanuit VECOZO aanleiding is voor het ondernemen van (interne) acties door partijen.

## 5. Escalatieprocedure

VECOZO monitort de SLA afspraken en signaleert verminderde prestatie, daaraan gekoppeld initieert VECOZO verbeteringen om in de toekomst de gewenste SLA afspraken te blijven leveren. In geval van in gebreke blijven van VECOZO kunnen partijen via onderstaande afspraken een escalatie starten, tenzij hierover afwijkende afspraken zijn gemaakt in de Overeenkomst.

Als leidende gedragsregel geldt:

- Eerst overleggen;
- dan escaleren en informeren.

Indien een probleem niet opgelost kan worden in een lager genoemd echelon, zal de escalatie in een hogergenoemd echelon behandeld worden. Het escaleren kan via deze stappen (hierbij is het uitgangspunt dat de communicatie plaatsvindt op hetzelfde niveau):

- Van medewerker naar teamleider, naar manager, naar directeur.
- Bij overstijgende netwerkproblemen kan escalatie naar de Stelselbeheerder (Zorginstituut Nederland) plaatsvinden. Zie ook [Serviceafspraken_geschillen en escalatie](./index#33-geschillen-en-escalatie).

Rapportage van beveiligingsincidenten met een directe impact op één van de Opdrachtgevers en Melding van (potentiële) Inbreuk in verband met Persoonsgegevens (Datalek) zijn uitgewerkt in een afzonderlijke escalatieprocedure binnen de verwerkersovereenkomst die VECOZO afsluit met de verwerkingsverantwoordelijke. Hiervoor gelden andere doorlooptijden en dit valt buiten dit Afsprakenstelsel.

## 6. Request for Change (RfC)

Bij de ontvangst van een Melding wordt door VECOZO bepaald of er sprake is van een incident of een incident dat kan leiden tot een wijziging in de dienst. Indien het incident een wijziging in de dienst vraagt, vertaalt VECOZO dit in een Request for Change (RfC). Deze wordt volgens de door het Zorginstituut Nederland gedefinieerde RfC-procedure afgehandeld.

## 7. Boetes en beperkingen

### 7.1 Boetes

De SLA bevat geen boetebepalingen.

### 7.2 Beperkingen

De SLA en alle toepasselijke serviceniveaus zijn niet van toepassing op prestatie- of beschikbaarheidsproblemen:

- Vanwege Overmacht.
- Veroorzaakt door gebruik van door VECOZO ter beschikbaar gestelde voorzieningen nadat VECOZO de betreffende deelnemer(s) heeft geadviseerd het gebruik hiervan te wijzigen binnen een aan te geven redelijke termijn, als gebruik niet binnen de aangegeven termijn is gewijzigd en deze termijn is overschreden.
- Die het gevolg zijn van het feit dat deelnemers of dienstverleners:
  - Zich niet aan de door VECOZO (vooraf gecommuniceerde) vereiste configuraties en/of de door VECOZO ter beschikking gestelde (technische en functionele) documentatie houden.
  - Niet ondersteunde platforms gebruiken.
  - De door VECOZO ter beschikbaar gestelde voorzieningen gebruiken op een manier die niet overeenkomt met de functies en functionaliteit hiervan (bijvoorbeeld pogingen om bewerkingen uit te voeren die niet worden ondersteund).
- Dan wel anderszins gebruik maakt/maken van de door VECOZO ter beschikbaar gestelde voorzieningen die onverenigbaar en/of tegenstrijdig zijn met de instructies die VECOZO hieraan geeft.


