### 1. Inleiding

Dit artikel beschrijft de ontwerpkeuzes die worden toegepast bij het ontwerpen, opstellen, beheren en doorontwikkelen van het iWlz-netwerkmodel. Deze ontwerpkeuzes vormen de architectuurprincipes waarop het netwerkmodel is gebaseerd.

De ontwerpkeuzes sluiten aan bij de [Uitgangspunt](https://informatiemodel.istandaarden.nl/informatiemodel/iwlz/netwerk/indicatieregister-2/regels/uitgangspunt/) uit het informatiemodel van het iWlz-netwerkmodel en bij de randvoorwaarden die in het voorgaande artikel zijn beschreven. Waar mogelijk zijn de onderlinge relaties tussen ontwerpkeuzes, uitgangspunten en randvoorwaarden expliciet toegelicht.

Hieronder zijn per ontwerpkeuze de belangrijkste kenmerken beschreven. Ook is aangegeven hoe deze binnen het iWlz-netwerkmodel concreet worden uitgewerkt in de vorm van bijbehorende keuzes en invullingen.

### 2. Ontwerpkeuzes

#### O01 Cliënten hebben een sterke informatiepositie (momenteel buiten scope)

`BRON: DIZRA`

In het iWlz-netwerk wordt de informatiepositie van de cliënt verbeterd. Doordat zij inzicht krijgen in de gegevens die over hen zijn vastgelegd in het netwerk. Ook kunnen zij gegevens delen waar zij zelf eigenaar van zijn. Zoals: contactgegevens, of gegevens over contactpersonen.

> ✅
> Concreet betekent dit:
>
> - Er wordt een MedMij-gegevensdienst ten behoeve van het verzamelen van iWlz gegevens gepubliceerd.
> - Dienstverlener Aanbieder (DVA) zoals gedefinieerd in het MedMij-afsprakenstelsel sluiten aan op de diensten van een Bronhouder in het iWlz-netwerk.
> - Cliënten die iWlz gegevens willen verzamelen of delen dienen te beschikken over een persoonlijke gezondheidsomgeving (PGO) zoals gedefinieerd in het MedMij-afsprakenstelsel.
> - DVA’s en PGO’s van partijen die willen deelnemen aan het iWlz-netwerk dienen de onder punt 1 genoemde gegevensdienst te ondersteunen.
>
> **Relevante uitgangspunten informatiemodel iWlz**
>
> [UP019: De (zorg voor de) cliënt staat centraal.](https://informatiemodel.istandaarden.nl/informatiemodel/iwlz/netwerk/indicatieregister-2/regels/uitgangspunt/up019/)
>
> [UP023: Informatie wordt eenmalig bij de cliënt uitgevraagd.](https://informatiemodel.istandaarden.nl/informatiemodel/iwlz/netwerk/indicatieregister-2/regels/uitgangspunt/up023/)

#### O02 Gemeenschappelijke taal en gemeenschappelijke terminologie

`BRON: DIZRA`

Deelnemers aan het iWlz-netwerk maken onderling gebruik van een gemeenschappelijke taal en gemeenschappelijke terminologie. Deze worden vastgelegd in het afsprakenstelsel.

> ✅
> **Concrete invulling**
>
> - Informatie-niveau: In het afsprakenstelsel is een generieke regelset opgenomen. Deze regelset beschrijft op informatieniveau de regels waaraan alle uit te wisselen gegevens dienen te voldoen. Zie hoofdstuk [Informatie](../informatie/).
> - Informatie-niveau: Per register is een register-specifieke gegevensset in het afsprakenstelsel opgenomen. Deze beschrijft op informatie-niveau welke gegevens door het register worden aangeboden. Zie hoofdstuk [Uitwisselprofielen](../uitwisselprofiel/) .
> - Data-niveau: In het afsprakenstelsel worden per dienst de specificaties van de technische koppelvlakken beschreven. Zie hoofdstuk [Applicatie](../applicatie/).
> - Data-niveau: Per register zijn in het afsprakenstelsel specificaties opgenomen die de structuur van de uit te wisselen data beschrijven. Zie hoofdstuk [Uitwisselprofielen](../uitwisselprofiel/).
>
> **Relevante uitgangspunten informatiemodel iWlz**
>
> [UP017: De informatieuitwisseling in de Wlz is gebaseerd op gestandaardiseerd berichtenverkeer en/of bronregisters.](https://informatiemodel.istandaarden.nl/informatiemodel/iwlz/netwerk/indicatieregister-2/regels/uitgangspunt/up017/)

#### O03 Data blijft bij de bron

`BRON: DIZRA`

De data blijft bij de bron, onder de verantwoordelijkheid van de bronhouder, voor een veilig en vertrouwd informatiestelsel waarin het voor cliënten en deelnemers transparant is welke bronhouders welke gezondheidsgegevens registreren en wie het raadpleegt.

> ✅
> **Concrete invulling**
>
> In het iWlz-netwerkmodel worden data zoals bijvoorbeeld over indicaties, bemiddelingen en zorgtoewijzing door middel van registers door bronhouders toegankelijk gemaakt aan afnemers. Afnemers kunnen wanneer zij daar behoefte aan hebben van bronhouders data afnemen waarvoor zij zijn geautoriseerd. Hierdoor hebben zij altijd toegang tot de meest actuele data omdat invulling wordt gegeven aan ontwerpkeuze ‘Data blijft bij de bron’.
>
> **Relevante uitgangspunten informatiemodel iWlz**
>
> [UP017](https://informatiemodel.istandaarden.nl/informatiemodel/iwlz/netwerk/indicatieregister-2/regels/uitgangspunt/up017/), [UP035](https://informatiemodel.istandaarden.nl/informatiemodel/iwlz/netwerk/indicatieregister-2/regels/uitgangspunt/up035/), [UP036](https://informatiemodel.istandaarden.nl/informatiemodel/iwlz/netwerk/indicatieregister-2/regels/uitgangspunt/up036/)

#### O04 Gelijk speelveld voor alle leveranciers

`BRON: DIZRA`

Een duurzaam informatiestelsel vereist afspraken over het gebruik van standaarden, niet over het gebruik van een product of dienst. Op deze manier ontstaat een gelijk speelveld voor alle leveranciers en kan iedere organisatie haar eigen leveranciers voor het implementeren van de standaarden kiezen.

> ✅
> **Concrete invulling**
>
> Om ervoor te zorgen dat de werking van het iWlz-netwerkmodel onafhankelijk is van een product of dienst worden voor alle functionele en technische kenmerken van het iWlz-netwerkmodel afspraken gemaakt over het gebruik van standaarden. Deze afspraken worden vastgelegd in het afsprakenstelsel iWlz-netwerkmodel.
>
> **Relevante uitgangspunten informatiemodel iWlz**
>
> [UP017](https://informatiemodel.istandaarden.nl/informatiemodel/iwlz/netwerk/indicatieregister-2/regels/uitgangspunt/up017/)

#### O05 Groeimodel

`BRON: DIZRA`

Een informatiestelsel is duurzaam wanneer het relevant is en blijft. Om dit te bereiken is het nodig om de complexiteit van meerdere standaarden te omarmen en verandering en innovatie door middel van een groeimodel een plek te geven.

> ✅
> **Concrete invulling**
>
> Verandering en innovatie komen in het iWlz-netwerkmodel voornamelijk terug in het groeimodel en in de afspraken over de ontwikkeling en het beheer.
>
> **Groeimodel**
>
> Het iWlz-netwerkmodel kent een groeimodel. Enerzijds zal het aantal registers in het iWlz-netwerk incrementeel groeien. Anderzijds zal er een periode zijn waarin het estafettemodel en het netwerkmodel naast elkaar bestaan en waarin het estafettemodel stapsgewijs zal worden afgebouwd. De kenmerken van dit groeimodel zijn opgenomen in de iStandaarden.
>
> **Ontwikkeling en beheer**
>
> Afspraken over de wijze waarop de (door)ontwikkeling en het beheer van het afsprakenstelsel iWlz-netwerkmodel dienen te worden geïmplementeerd zijn expliciet onderdeel van het afsprakenstelsel iWlz-netwerkmodel. Deze afspraken zijn opgenomen in de vorm van besturingsrollen. De definitie van deze rollen en de toekenning ervan aan deelnemers is beschreven in [Rollen en deelnemers](./rollen_deelnemers). Dit sluit aan bij randvoorwaarde R11: De geldende NEN- en/of ISO normen.

#### O06 Enkelvoudig registreren, meervoudig gebruiken

`BRON: DIZRA`

Data wordt enkelvoudig geregistreerd bij de bron en vervolgens beschikbaar gesteld voor meervoudig gebruik in verschillende toepassingen. Hiervoor hanteert het informatiestelsel de FAIR-data principes.

> ✅
> **Concrete invulling**
>
> In de in het afsprakenstelsel opgenomen architectuur wordt expliciet beschreven op welke wijze in het iWlz-netwerkmodel invulling wordt gegeven aan de verschillende FAIR-principes.
>
> **Relevante uitgangspunten informatiemodel iWlz**
>
> [UP017](https://informatiemodel.istandaarden.nl/informatiemodel/iwlz/netwerk/indicatieregister-2/regels/uitgangspunt/up017/), [UP035](https://informatiemodel.istandaarden.nl/informatiemodel/iwlz/netwerk/indicatieregister-2/regels/uitgangspunt/up035/), [UP036](https://informatiemodel.istandaarden.nl/informatiemodel/iwlz/netwerk/indicatieregister-2/regels/uitgangspunt/up036/)

#### O07 Data is machineleesbaar

`BRON: DIZRA`

In een duurzaam informatiestelsel is data machineleesbaar. Machines begrijpen de data zonder daarbij de leesbaarheid van deze data voor mensen uit het oog te verliezen. Dit opent de mogelijkheden van data-analyse en data-science.

> ✅
> **Concrete invulling**
>
> De data die binnen het iWlz-netwerk wordt uitgewisseld, dient machineleesbaar te zijn. Dit wordt bereikt door in het afsprakenstelsel te beschrijven op welke wijze invulling wordt gegeven aan de FAIR-principes (zie ook ontwerpkeuze O06).
>
> **Relevante uitgangspunten informatiemodel iWlz**
>
> [UP017](https://informatiemodel.istandaarden.nl/informatiemodel/iwlz/netwerk/indicatieregister-2/regels/uitgangspunt/up017/)

#### O08 Federatief samenwerken aan afspraken voor data en voor services

`BRON: DIZRA`

In een duurzaam informatiestelsel wordt door (vertegenwoordigers van) de verschillende deelnemers federatief samengewerkt aan afspraken voor data en voor services. Alle deelnemers implementeren deze afspraken en zijn aanspreekbaar op het nakomen van de afspraken en de kwaliteit van de implementatie.

> ✅
> **Concrete invulling**
>
> In het afsprakenstelsel wordt beschreven op welke wijze de verschillende deelnemers aan het iWlz-netwerk samenwerken aan het beheer en de ontwikkeling van afspraken (zie ook randvoorwaarde R11). In het afsprakenstelsel worden functionele eisen, technische specificaties en andere afspraken dusdanig expliciet beschreven dat deze implementeerbaar zijn voor de verschillende deelnemers.
>
> **Relevante uitgangspunten informatiemodel iWlz**
>
> [UP017](https://informatiemodel.istandaarden.nl/informatiemodel/iwlz/netwerk/indicatieregister-2/regels/uitgangspunt/up017/), [UP035](https://informatiemodel.istandaarden.nl/informatiemodel/iwlz/netwerk/indicatieregister-2/regels/uitgangspunt/up035/), [UP036](https://informatiemodel.istandaarden.nl/informatiemodel/iwlz/netwerk/indicatieregister-2/regels/uitgangspunt/up036/)

#### O09 Open internationale standaarden

`BRON: DIZRA`

Semantische en technische interoperabiliteit wordt in een duurzaam informatiestelsel gerealiseerd door te kiezen voor open internationale standaarden en heldere afspraken te maken over de wijze waarop deze worden ingezet. Iedere deelnemer aan het stelsel moet voldoen aan de standaarden en nadere specificaties die zijn afgesproken.

> ✅
> **Concrete invulling**
>
> Het afsprakenstelsel beschrijft welke open internationale standaarden worden toegepast en specificeert de wijze waarop dit wordt gedaan. Het afsprakenstelsel beschrijft bijvoorbeeld niet alleen dat de open internationale standaarden TLS (zie [Netwerk](../it-infrastructuur/netwerk)) en OAuth (zie [nID netwerkstelsel](../applicatie/nid_netwerkstelsel)) dienen te worden gebruikt maar maakt ook expliciete specificaties over de te gebruiken versies en certificaten, de eisen aan de inhoud en ondertekening van certificaten en de eisen aan de inhoud en de interpretatie van access tokens.
>
> **Relevante uitgangspunten informatiemodel iWlz**
>
> [UP017](https://informatiemodel.istandaarden.nl/informatiemodel/iwlz/netwerk/indicatieregister-2/regels/uitgangspunt/up017/)

#### O10 iWlz-netwerkmodel maakt waar mogelijk gebruik van generieke functies

Voor de overgang naar het iWlz-netwerkmodel zijn de generieke functies een cruciale bouwsteen. Deze functies vormen de basis voor veilige, betrouwbare en gestandaardiseerde gegevensuitwisseling binnen de zorg. Daarom werkt het iWlz-Actieprogramma nauw samen met het Ministerie van Volksgezondheid, Welzijn en Sport (VWS) om zo goed mogelijk aan te sluiten op de landelijke ontwikkeling van deze generieke functies.
De generieke functies worden gefaseerd ontwikkeld. De huidige versie richt zich op Plateau 1 van de Nationale Visie en Strategie (NVS). In Plateau 2 worden de functies verder uitgebreid en geschikt gemaakt voor bredere gegevensuitwisselingen, waaronder die in het kader van het Actieprogramma iWlz.

Zodra de generieke functies beschikbaar zijn, zal het iWlz-netwerkmodel hier zo snel mogelijk op aansluiten. Het Actieprogramma neemt actief deel aan de overleggen over deze ontwikkeling en volgt de voortgang nauwgezet.

Daarnaast wordt binnen het programma aandacht besteed aan het harmoniseren van de inhoud en vorm van afsprakenstelsels. Dit gebeurt in samenhang met de andere stelsels die in het kader van Twiin als Landelijk Vertrouwensstelsel (LVS) samenwerken. Op deze manier wordt geborgd dat het iWlz-netwerkmodel aansluit bij landelijke standaarden en ontwikkelingen, en toekomstbestendig blijft binnen het bredere zorginformatielandschap.

> ✅
> **Concrete invulling**
>
> Zodra generieke functies beschikbaar komen zullen deze zo snel mogelijk worden ingebouwd in het iWlz-netwerkmodel. Zolang dit nog niet het geval is zullen er alternatieven worden gebruikt, die zoveel mogelijk in lijn zijn met de manier waarop de generieke functies worden uitgewerkt. In de onderstaande tabel zijn de generieke functies afgezet tegen de huidige uitwerking in het iWlz netwerkmodel.
>
> **Relevante uitgangspunten informatiemodel iWlz**
>
> [UP006](https://informatiemodel.istandaarden.nl/informatiemodel/iwlz/netwerk/indicatieregister-2/regels/uitgangspunt/up006/), [UP017](https://informatiemodel.istandaarden.nl/informatiemodel/iwlz/netwerk/indicatieregister-2/regels/uitgangspunt/up017/)

| **Item** | **Generieke functie** | **Huidige uitwerking iWlz netwerkmodel** |
| --- | --- | --- |
| Wie logt er in? | identificatie | VECOZO certificaat |
| Ben je wie je zeg dat je bent? | authenticatie | VECOZO certificaat |
| Is de patiënt akkoord met het delen van medische gegevens? | toestemming | n.v.t. |
| Welke gegevens mag jij inzien? | autorisatie | Externalized Authorization Management (EAM) i.c.m. Attribute/Policy bases access control |
| Waar staan de gezochte gegevens? | lokalisatie | n.v.t. |
| Wat is het digitale adres waar de gegevens staan en waar ze heen moeten? | adressering | Tijdelijk adresboek, gebaseerd op het ZORG-AB schema |

#### O11 Vertrouwen door gebruik van cryptografie

`BRON: CONCRETISERING ARCHITECTUUR`

In de zorg worden gegevens in de basis uitgewisseld tussen een bronhouder en een afnemer. Het realiseren van de juiste mate van vertrouwen tussen de bronhouder en de afnemer is daarbij essentieel. Alleen wanneer sprake is van de juiste mate van vertrouwen, kunnen gegevens op een veilige en verantwoorde manier en conform wet- en regelgeving worden uitgewisseld. Ter illustratie: Vanuit de bronhouder bekeken zijn o.a. de volgende vragen relevant om te kunnen bepalen of sprake is van de juiste mate van vertrouwen:

- Wat is de identiteit van de organisatie die gegevens wil afnemen?
- Treedt het afnemende systeem op als verwerker van de organisatie die gegevens wil afnemen?
- Is er sprake van een grondslag op basis waarvan de organisatie die gegevens wil afnemen de gevraagde gegevens mag verwerken?

Om de juiste mate van vertrouwen tussen de bronhouder en de afnemer te realiseren zijn op dit soort vragen antwoorden met een voldoende mate van zekerheid nodig.

Het realiseren van vertrouwen vindt plaats met een combinatie van _technologie_ en _organisatorische afspraken_. De balans tussen deze twee kan per gegevensuitwisseling verschillen. Omwille van schaalbaarheid, betaalbaarheid, beveiliging en privacy is het prettig als vertrouwen voor het leeuwendeel kan worden gerealiseerd op basis van _technologie_ en zo min mogelijk afhankelijk is van _organisatorische afspraken_.

Voor het realiseren van vertrouwen op basis van technologie wordt cryptografie toegepast. Het toepassen van cryptografie vereist een public key infrastructure (PKI). Traditioneel is een PKI geïmplementeerd met certificaten van een certificaatautoriteit (CA), bijvoorbeeld PKIoverheid of VECOZO. Een alternatief is een decentrale public key infrastructure (DPKI). Hierin zijn de publieke sleutels gepubliceerd in een andere voorziening waarmee het noodzakelijke vertrouwen kan worden geborgd.

> ✅
> **Concrete invulling**
>
> Voor het realiseren van vertrouwen op basis van de toepassing van cryptografie zijn afspraken nodig over de invulling van rollen (o.a. vertrouwensleverancier, stelselbeheerder) en verantwoordelijkheden (o.a. registratie van publieke sleutels, publiceren vertrouwenslijst). Voor het iWlz-netwerk worden deze afspraken vastgelegd in het afsprakenstelsel iWlz-netwerkmodel.
>
> Binnen het iWlz-netwerkmodel worden afspraken opgenomen over de technische realisatie van een public key infrastructure op basis van de open internationale standaard [Decentralized Identifiers](https://www.w3.org/TR/did-core/). We gebruiken voor indicatieregister en voor het bemiddelingsregister nog het PKI certificaat van VECOZO en geen DID, het wachten is op uitsluitsel vanuit de generieke functies.
>
> **Relevante uitgangspunten informatiemodel iWlz**
>
> [UP017](https://informatiemodel.istandaarden.nl/informatiemodel/iwlz/netwerk/indicatieregister-2/regels/uitgangspunt/up017/)

#### O12 Veilige gegevensuitwisseling door afspraken en derdenverklaringen

`BRON: DIZRA`

De uitwisseling van gegevens tussen deelnemers moet veilig zijn. Dat wordt gerealiseerd door enerzijds afspraken over standaarden voor bijvoorbeeld de versleuteling van het verkeer en anderzijds door afspraken over de softwareleveranciers die voldoen aan die afspraken. Een derdenverklaring van een auditor dat een softwareleverancier voldoet aan de vereiste afspraken in het kader van veilige gegevensuitwisseling kan dit vertrouwen geven.

> ✅
> **Concrete invulling**
>
> De rol auditor is belast met het toetsen van deelnemers op veilige gegevensuitwisseling en het opstellen van derdenverklaringen. Momenteel is de rol auditor nog niet ingevuld voor het iWlz-netwerk, ook is de praktische invulling van deze rol nog niet afgestemd. In het artikel [Rollen en deelnemers](./rollen_deelnemers) zal deze rol op een later moment worden ingevuld.
>
> **Relevante uitgangspunten informatiemodel iWlz**
>
> [UP017](https://informatiemodel.istandaarden.nl/informatiemodel/iwlz/netwerk/indicatieregister-2/regels/uitgangspunt/up017/)

#### O13 De betrouwbaarheid van verklaringen wordt verzekerd door afspraken

`BRON: DIZRA`

Gegevens over deelnemers aan het iWlz-netwerkmodel moeten betrouwbaar zijn om te kunnen worden hergebruikt. Daarom zijn afspraken nodig om de betrouwbaarheid van verklaringen over gegevens over deelnemers te kunnen garanderen. Een zogenaamde ‘verzekeraar van betrouwbaarheid’ maakt inzichtelijk welke verklaringen uitgegeven mogen worden door welke organisaties of personen door een registratie van ‘bevoegde uitgevers van verklaringen’ te publiceren. Elektronische handtekeningen op basis van cryptografie borgen dat de herkomst van een verklaring naar een bevoegde uitgever van verklaringen getraceerd kan worden en daarmee dat de verklaring verifieerbaar betrouwbaar is.

> ✅
> **Concrete invulling**
>
> In het afsprakenstelsel iWlz-netwerkmodel wordt vastgelegd hoe de rollen ‘verzekeraar van betrouwbaarheid' en 'bevoegde uitgever van verklaringen’ en de hiermee gepaard gaande verantwoordelijkheden worden ingevuld in het iWlz-netwerk.
>
> Binnen het Afsprakenstelsel iWlz-netwerkmodel zijn afspraken opgenomen over de technische realisatie van cryptografisch verifieerbare verklaringen. Deze verklaringen worden momenteel uitgegeven door VECOZO en gekoppeld aan het authenticatiemiddel VECOZO systeemcertificaat.
>
> Naar verwachting zal op termijn zal worden doorontwikkeld op basis van de open internationale standaard [Verifiable Credentials](https://www.w3.org/TR/vc-data-model/).
>
> **Relevante uitgangspunten informatiemodel iWlz**
>
> [UP017](https://informatiemodel.istandaarden.nl/informatiemodel/iwlz/netwerk/indicatieregister-2/regels/uitgangspunt/up017/)

---
