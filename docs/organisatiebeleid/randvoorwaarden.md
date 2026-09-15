
### **1. Inleiding**

Dit artikel beschrijft de randvoorwaarden die worden gehanteerd bij het ontwerpen, opstellen, beheren en doorontwikkelen van het iWlz-netwerkmodel. Hierbij zijn de randvoorwaarden kaderstellend. Dat wil zeggen dat de randvoorwaarden harde eisen zijn uit wet- en regelgeving.

De randvoorwaarden sluiten aan op de [Uitgangspunt](https://informatiemodel.istandaarden.nl/informatiemodel/iwlz/netwerk/indicatieregister-2/regels/uitgangspunt/) in het informatiemodel van het iWlz netwerkmodel. De koppelingen tussen randvoorwaarden en uitgangspunten zijn waar mogelijk expliciet beschreven.

De beschreven randvoorwaarden zijn niet uitputtend. De betrokken partijen zijn zelf verantwoordelijk voor de naleving van hun eigen wettelijke plichten.

Per randvoorwaarde is beschreven wat de belangrijkste kenmerken zijn en hoe de randvoorwaarde in het afsprakenstelsel iWlz-netwerkmodel concreet wordt ingevuld (zie groene tekstblokken).

#### 2. Randvoorwaarden

##### R01 De referentiearchitectuur voor een duurzaam informatiestelsel voor de zorg (DIZRA)

`BRON: BESLUITENLIJST INFORMATIEBERAAD`

Het iWlz-netwerkmodel is ontwikkeld in lijn met de door het Informatieberaad vastgestelde referentiearchitectuur voor een duurzaam informatiestelsel voor de zorg (DIZRA).

> ✅
> **Concrete invulling**
> De principes van DIZRA zijn:
>
> 1. regie op gezondheidsgegevens
> 2. gemeenschappelijke taal
> 3. data bij de bron
> 4. gelijk speelveld voor alle leveranciers
> 5. duurzaam informatiestelsel
> 6. FAIR-data
> 7. machineleesbaar
> 8. federatief samenwerken
> 9. open internationale standaarden
>
> Deze principes zijn als ontwerpkeuzes uitgewerkt in het artikel [Ontwerpkeuzes](./ontwerpkeuzes).

##### R02 Wet elektronische gegevensuitwisseling in de zorg (Wegiz)

`BRON: WEGIZ`

De Wegiz is een kaderwet die het mogelijk maakt gegevensuitwisselingen aan te wijzen die verplicht elektronisch plaatsvinden. Dat gebeurt met een AMvB. Om afspraken over de uitwisseling eenduidig vast te leggen, verwijst de AMvB naar kwaliteitsstandaarden en NEN-normen. Een NEN-norm kan vervolgens weer verwijzen naar een informatiestandaard.

Ook op Europees niveau wordt gewerkt aan regelgeving op het gebied van elektronische gegevensuitwisseling in de zorg. De Europese verordening European Health Data Space (EHDS) heeft raakvlakken met de Wegiz waar de EHDS eisen stelt aan ICT-systemen die gebruikt worden voor het uitwisselen van gezondheidsgegevens. De EHDS regelt toegang en beschikbaarheid voor burgers en zorgverleners tot elektronische gezondheidsgegevens.

> ✅
> **Concrete invulling**
> In het afsprakenstelsel iWlz-netwerkmodel is ingericht conform de Wegiz en relevante AMvB’s door waar mogelijk gebruik te maken van bestaande (informatie)standaarden en NEN-normen. De gebruikte informatiestandaarden worden toegelicht in de laag [Proces](../proces/).

##### R03 Wet langdurige zorg (Wlz)

`BRON: CONCRETISERING ARCHITECTUUR IWLZ`

Een belangrijk kader voor de vernieuwing van de informatievoorziening is de wet die de langdurige zorg regelt. Dat is de _Wet Langdurige zorg_ (Wlz), inclusief de daarmee samenhangende besluiten en regelingen. De wet beschrijft wie recht heeft op zorg en welke vormen van zorg het betreft. Ook beschrijft de wet de rollen van de verschillende partijen en welke taken daaraan zijn verbonden: bijv. vaststellen van recht op zorg, wie bemiddelt bij het uitvoeren van de zorg en wie de uiteindelijke zorg levert. De wet beschrijft dat in bepaalde gevallen informatie moet worden gedeeld, dat er sprake is van elektronisch berichtenverkeer en welke informatievoorzieningstaken bij welke partijen liggen.

> ✅
> **Concrete invulling**
>
> De wet doet over de exacte vorm van informatievoorziening geen uitspraken. Van alle in de wet opgenomen partijen wordt in het afsprakenstelsel toegelicht welke rol of rollen zij uitvoeren in het iWlz-netwerkmodel (zie [Rollen en deelnemers](./rollen_deelnemers)). Van alle in de wet opgenomen taken die relevant zijn in het kader van gegevensuitwisseling in het netwerk wordt in het afsprakenstelsel toegelicht op welke wijze deze kunnen worden ingevuld door middel van het iWlz-netwerkmodel. Het Afsprakenstelsel iWlz-netwerkmodel richt zich in eerste instantie op de Wet langdurige zorg. Indien mogelijk wordt alvast rekening gehouden met de Wet maatschappelijke ondersteuning 2015 (Wmo 2015) en de Jeugdwet (Jw) in verband met toekomstige scope uitbreiding.
>
> **Relevante uitgangspunten informatiemodel iWlz**
>
> [UP001](https://informatiemodel.istandaarden.nl/informatiemodel/iwlz/netwerk/indicatieregister-2/regels/uitgangspunt/up001/), [UP007](https://informatiemodel.istandaarden.nl/informatiemodel/iwlz/netwerk/indicatieregister-2/regels/uitgangspunt/up007/), [UP008](https://informatiemodel.istandaarden.nl/informatiemodel/iwlz/netwerk/indicatieregister-2/regels/uitgangspunt/up008/), [UP017](https://informatiemodel.istandaarden.nl/informatiemodel/iwlz/netwerk/indicatieregister-2/regels/uitgangspunt/up017/), [UP024](https://informatiemodel.istandaarden.nl/informatiemodel/iwlz/netwerk/indicatieregister-2/regels/uitgangspunt/up024/)

##### R04 Regeling langdurige zorg

`BRON: REGELING LANGDURIGE ZORG`

De Regeling langdurige zorg (Rlz) bevat eisen aan Wlz-partijen. Eisen die voortkomen uit het iWlz-netwerkmodel dienen hiermee in lijn te zijn. Indien het iWlz-netwerkmodel dit vereist, kan de Rlz eenvoudiger worden aangepast dan de Wet langdurige zorg (Wlz).

Artikel 7.1 van de Rlz beschrijft een niet-limitatieve set van persoonsgegevens die voor Wlz-uitvoerders noodzakelijk is voor de uitvoering van de wet. Bij introductie van een nieuw register laat het Zorginstituut door een externe partij toetsen in hoeverre uitwisseling van de gegevens in het registers conform wetgeving is. Dat geldt ook voor de die gegevens die niet genoemd zijn in artikel 7.1 van de Rlz. Het toevoegen van een register zal altijd in de vorm van een project en in overleg gebeuren met de deelnemers. Hierover zullen de deelnemers via werkgroepen en stuurgroep worden geïnformeerd.

> ✅
> **Concrete invulling**
>
> Artikel 7.1 beschrijft niet-limitatief de elementen van persoonsgegevens die voor Wlz-uitvoerders noodzakelijk zijn voor de uitvoering van de wet. Het uitgangspunt van de Algemene Verordening Gegevensbescherming (AVG) is dat er in principe zo min mogelĳk persoonsgegevens worden verzameld (dataminimalisatie).
>
> Voor het indicatieregister en bemiddelingsregister heeft het Zorginstituut door een externe onafhankelijke partij laten toetsen of de verwerking voldoet aan de AVG. Bij de introductie van een nieuw register zal het Zorginstituut alles wat in dit nieuwe register zal worden vastgelegd laten toetsen. Deze toets wordt door een externe onafhankelijke partij uitgevoerd.
>
> **Relevante uitgangspunten informatiemodel iWlz**
>
> [UP001](https://informatiemodel.istandaarden.nl/informatiemodel/iwlz/netwerk/indicatieregister-2/regels/uitgangspunt/up001/), [UP007](https://informatiemodel.istandaarden.nl/informatiemodel/iwlz/netwerk/indicatieregister-2/regels/uitgangspunt/up007/), [UP008](https://informatiemodel.istandaarden.nl/informatiemodel/iwlz/netwerk/indicatieregister-2/regels/uitgangspunt/up008/), [UP017](https://informatiemodel.istandaarden.nl/informatiemodel/iwlz/netwerk/indicatieregister-2/regels/uitgangspunt/up017/), [UP024](https://informatiemodel.istandaarden.nl/informatiemodel/iwlz/netwerk/indicatieregister-2/regels/uitgangspunt/up024/)

##### R05 Algemene Verordening Gegevensbescherming (AVG)

`BRON: ALGEMENE VERORDENING GEGEVENSBESCHERMING`

###### Toepassingsgebied

De AVG stelt kaders op het gebied van de bescherming van persoonsgegevens. Deze kaders zijn van toepassing op de volgende verwerkingen van persoonsgegevens in het iWlz-netwerkmodel:

- De verstrekking van niet-geaggregeerde persoonsgegevens door een bronhouder aan een afnemer;
- De verwerking van persoonsgegevens door de afnemer na verstrekking of inzage, waarbij de afnemer vanaf dat moment verwerkingsverantwoordelijke is;
- De logging van raadplegingen van persoonsgegevens door medewerkers in zorginformatiesystemen, zoals wettelijk verplicht via het Besluit elektronische gegevensverwerking door zorgaanbieders.

###### Bijzondere persoonsgegevens (AVG art. 9)

In het kader van het iWlz-netwerkmodel worden bijzondere persoonsgegevens verwerkt. De verwerking van bijzondere persoonsgegevens is verboden, tenzij een beroep kan worden gedaan op een uitzondering op dit verbod. In het kader van de iWlz zullen de toepasselijke uitzonderingen veelal artikel 9 lid 2 sub h of artikel 9 lid 2 sub i AVG zijn. Hierbij wordt opgemerkt dat alle partijen te allen tijde zelf verantwoordelijk zijn voor het beoordelen van de toepasselijke grondslagen en uitzonderingen die eventueel worden ingeroepen ten aanzien van een verwerking.

Het iWlz-netwerkmodel verplicht partijen daarbij op geen enkel moment tot het delen van gegevens waarvoor geen geldige grondslag of uitzondering onder de AVG bestaat.

###### Beveiligingsmaatregelen (AVG art. 32)

De AVG verplicht zowel bronhouder als afnemer passende technische en organisatorische maatregelen te nemen en om _privacy by design_ en _privacy by default_ toe te passen op de verwerking van persoonsgegevens. In het iWlz-netwerkmodel wordt dit geborgd door de volgende maatregelen:

- beveiliging (veilig netwerk, kanaalversleuteling en/of berichtversleuteling);
- dataminimalisatie;
- logging;
- gebruik van fictieve persoonsgegevens bij testen.

###### Meldplicht datalekken (AVG art. 33)

Artikel 33 van de AVG beschrijft de meldplicht. Elke partij is in beginsel zelf verantwoordelijk voor het tijdig en op juiste wijze melden van datalekken bij de Autoriteit Persoonsgegevens en/of betrokkenen. Voor zover het datalek ook andere partijen raakt, zal de partij die het datalek ontdekt die andere partijen zo spoedig mogelijk inlichten.

De meldplicht houdt in dat organisaties onverwijld en indien mogelijk binnen 72 uur een (voorlopige) melding moeten doen bij de Autoriteit Persoonsgegevens in geval van een datalek - een en ander is slechts anders wanneer het niet waarschijnlijk is dat het datalek een risico inhoudt voor de betrokken natuurlijke personen.

###### Verzoeken van betrokkenen (AVG art. 15–17)

De belangrijkste verzoeken die in het kader van de AVG kunnen worden gedaan zijn: informatie-, verwijder- en rectificatieverzoeken. Elke partij is in beginsel zelf verantwoordelijk voor de uitvoering van verzoeken van betrokkenen die hem bereiken via de daartoe opengestelde kanalen. Elke partij zorgt er dan ook voor dat betrokkenen hem op een passende en eenvoudige wijze kunnen bereiken om dergelijke verzoeken te kunnen doen. Voor zover nodig en redelijk assisteren partijen elkaar bij de opvolging van verzoeken van betrokkenen. Partijen zullen over en weer onverwijld de noodzakelijke inlichtingen verstrekken en medewerking verlenen, om de andere Partij in staat te stellen het verzoek tijdig af te handelen op een wijze die voldoet aan de AVG.

> ✅
> **Concrete invulling**
>
> **Grondslag, doelbinding en proportionaliteit**
>
> Partijen die gegevens uitwisselen in het iWlz-netwerk mogen deze gegevens enkel uitwisselen als onder andere grondslag, doelbinding en proportionaliteit van de uitwisseling zijn aangetoond, conform wat binnen de AVG daarover is vastgesteld.
>
> **Beveiligingsmaatregelen**
>
> In het iWlz-netwerkmodel haalt een afnemer gegevens op bij een bronhouder. De AVG verplicht zowel bronhouder (aanbieder) als afnemer passende technische en organisatorische maatregelen te nemen die voldoen aan de eisen die horen bij classificatieniveau van de gegevens. De minimale beveiligingsmaatregelen die de deelnemers aan het iWlz-netwerk dienen te nemen zijn opgenomen in het afsprakenstelsel iWlz-netwerkmodel.
>
> **Beveiligingsmaatregelen bronhouder**
>
> Om te voorkomen dat afnemers ongeoorloofde gegevens kunnen verwerken moet de bronhouder de volgende zaken kunnen controleren:
>
> 1. Welk systeem verbinding maakt
> 2. Dat het systeem als verwerker optreedt voor de afnemer
> 3. Dat de afnemer beschikt over bepaalde eigenschappen/kwalificaties (bijv. onboarding iWlz-netwerk)
>
> In het iWlz-netwerkmodel wordt dit mogelijk gemaakt door het gebruik van cryptografische bewijzen ('attesten'). Elk van de bovengenoemde controles kan met behulp van een cryptografische handtekening uitgevoerd worden. Een oplossing die voor deze controles gebruik zou maken van een actieve trusted third party voor deze controles zou niet voldoen aan DIZRA ([randvoorwaarde R01](./randvoorwaarden), [ontwerpkeuze O04](./ontwerpkeuzes)) en minder goed invulling geven aan de begrippen informatiebeveiliging en dataminimalisatie (gerelateerd aan de AVG).
>
> Indien hier aanleiding voor is kan een bronhouder de aansluiting met een afnemer tijdelijk stopzetten.
>
> **Beveiligingsmaatregelen afnemer**
>
> De afnemer moet zich ervan vergewissen dat de ingelogde gebruiker de gegevens mag verwerken. Om te voorkomen dat de ingelogde gebruiker ongeoorloofde gegevens kan verwerken moet de afnemer de volgende zaken kunnen controleren:
>
> 1. Welke persoon is ingelogd
> 2. Dat er sprake is van grondslag en doelbinding op basis waarvan de ingelogde gebruiker de opgevraagde gegevens mag verwerken
>
> **Verwerkingsverantwoordelijkheid**
>
> Partijen dragen ieder eigen verantwoordelijkheid voor de beveiliging van data die onder hun (verwerkings)verantwoordelijkheid vallen.
>
> Partijen zullen passende technische en organisatorische beveiligingsmaatregelen ten uitvoer leggen om data te beveiligen tegen verlies of tegen enige vorm van onrechtmatige verwerking. Deze maatregelen garanderen, rekening houdend met de stand van de techniek en de kosten van de tenuitvoerlegging, een passend beveiligingsniveau gelet op de risico’s die de verwerking en de aard van te bescherming data met zich meebrengen. De maatregelen zijn er mede op gericht onnodige verzameling en verdere verwerking van data te voorkomen.
>
> **Wanneer begint de verwerkingsverantwoordelijkheid van een partij?**
>
> Een partij wordt aangemerkt als verwerkingsverantwoordelijke vanaf het moment dat zij persoonsgegevens verwerkt.
>
> Voor de **bronhouder** ontstaat deze verantwoordelijkheid zodra persoonsgegevens binnen haar invloedsfeer komen, bijvoorbeeld bij de verzameling of ontvangst daarvan, en in elk geval vanaf het moment dat het gegeven in haar register is opgenomen.
>
> Voor de **afnemer** begint de verwerkingsverantwoordelijkheid zodra een gegeven in zijn invloedsfeer komt. Het ontvangen van persoonsgegevens markeert het punt waarop de afnemer verantwoordelijkheid neemt voor de verdere verwerking en bescherming van deze gegevens binnen zijn eigen systeem.
>
> **Wanneer stopt de verwerkingsverantwoordelijkheid van een partij?**
>
> De verwerkingsverantwoordelijkheid stopt niet zolang persoonsgegevens in het systeem of register van de partij aanwezig zijn. Wanneer een gegeven door een afnemer wordt opgehaald, wordt de afnemer verwerkingsverantwoordelijke voor het opgehaalde gegeven. De bronhouder blijft verantwoordelijk voor de gegevens in het eigen register.
>
> _Data Protection Impact Assessment (DPIA)_
>
> **Moeten partijen een DPIA opstellen?**
>
> De Autoriteit Persoonsgegevens (AP) heeft richtsnoeren gepubliceerd waarin is beschreven in welke gevallen een DPIA verplicht is. Partijen in het iWlz-netwerkmodel dienen deze criteria te hanteren bij hun beoordeling of een DPIA nodig is. Daarnaast geldt de norm **NEN 7512:2022** voor het uitwisselen van medische gegevens, die aanvullende eisen stelt aan de beveiliging en het waarborgen van vertrouwelijkheid bij gegevensuitwisseling.
>
> Het belang van de Data Protection Impact Assessment (DPIA) in het kader van de AVG kan niet genoeg worden benadrukt. De DPIA is een cruciaal instrument dat organisaties helpt om op een gestructureerde wijze de privacyrisico's van gegevensverwerking in kaart te brengen en te beoordelen. Hierbij spelen twee belangrijke aspecten een rol:
>
> 1. **Informatiedeling bij geconstateerde risico's:** De DPIA fungeert als een waardevol instrument om potentiële risico’s te identificeren die verband houden met gegevensverwerking. Indien en voor zover uit een DPIA volgt dat sprake is van mogelijke risico’s die ook betrekking hebben op andere betrokken verwerkingsverantwoordelijke, zal de partij die de DPIA uitvoert de andere partijen hierover informeren. Dit bevordert een proactieve samenwerking tussen verwerkingsverantwoordelijken om gezamenlijk maatregelen te nemen ter bescherming van de privacy van betrokkenen.
> 2. **Herijking en herziening bij wijzigingen in de verwerking:** De DPIA is geen eenmalige exercitie, maar eerder een dynamisch proces. Bij elke (significante) wijziging in de verwerking van persoonsgegevens is het noodzakelijk de DPIA opnieuw te beoordelen en mogelijk aan te passen. Dit waarborgt dat eventuele nieuwe risico's die ontstaan als gevolg van veranderingen in de verwerking, adequaat worden geïdentificeerd en aangepakt. Zo blijft de DPIA een actueel instrument dat organisaties helpt om voortdurend te voldoen aan de privacywetgeving en de belangen van betrokkenen te waarborgen.
>
> Met andere woorden: de DPIA vormt een essentiële pijler, die niet alleen helpt bij het proactief identificeren en beheren van privacyrisico's, maar tevens bijdraagt aan een continue verbetering van gegevensbeschermingsmaatregelen bij elke verandering in de gegevensverwerking. Elke partij is zelf verantwoordelijk voor de beoordeling van de vraag of een DPIA vereist is en zo ja, om de DPIA naar behoren uit te horen. Voor zover nodig en redelijk assisteren de andere partijen hem daar bij.
>
> **Relevante uitgangspunten informatiemodel iWlz**
>
> [UP003](https://informatiemodel.istandaarden.nl/informatiemodel/iwlz/netwerk/indicatieregister-2/regels/uitgangspunt/up003/)

##### R06 Uitvoeringswet Avg (UAVG)

_De uitvoeringswet Algemene verordening gegevensbescherming (UAVG)_ geeft uitvoering aan de AVG en geeft nadere regels inzake de verwerking van (bijzondere categorieën) persoonsgegevens, waaronder (algemene) uitzonderingen op het verbod op de verwerking van persoonsgegevens.

_UAVG Artikel 24_ beschrijft uitzonderingen op de verwerking van bijzondere persoonsgegevens t.b.v. wetenschappelijk/historisch onderzoek of statistische doeleinden. Dit artikel is relevant voor deelnemers aan het iWlz-netwerkmodel die gegevens afnemen ten behoeve van onderzoek of statistiek, zoals NZa en IGJ. N.B. Wanneer geanonimiseerde gegevens worden afgenomen, dan is er geen sprake van het verwerken van persoonsgegevens en is UAVG Artikel 24 niet relevant.

_UAVG Artikel 30_ regelt dat zorgaanbieders gezondheidsgegevens mogen verwerken met het oog op een goede behandeling of verzorging van de betrokkene.

Voor bestuursorganen geldt dat zij - onder voorwaarden - op grond van artikel 30 UAVG gezondheidsgegevens mogen verwerken voor zover dat noodzakelijk is met het oog op de uitvoering van wettelijke voorschriften die voorzien in aanspraken die afhankelijk zijn van de gezondheidstoestand van de betrokkene. Voor het CIZ is dat de Wlz indicatiestelling, aangezien betrokkenen op grond van de Wlz recht hebben op bepaalde aanspraken mits hun gezondheidstoestand voldoet aan de eisen die de Wlz stelt.

> ✅
> **Concrete invulling**
>
> De uitzonderingen op het verbod op de verwerking van gezondheidsgegevens die zijn opgenomen in de UAVG zijn van toepassing op het iWlz-netwerkmodel. Deelnemers aan het iWlz netwerk mogen deze gegevens verwerken, mits wordt voldaan aan de voorwaarden uit de UAVG.
>
> **Relevante uitgangspunten informatiemodel iWlz**
>
> [UP003](https://informatiemodel.istandaarden.nl/informatiemodel/iwlz/netwerk/indicatieregister-2/regels/uitgangspunt/up003/)

##### R07 Wet algemene bepalingen burgerservicenummer (Wabb)

`BRON: WABB`

De Wet algemene bepalingen burgerservicenummer (Wabb) geeft een aantal algemene normen voor het gebruik van het BSN. Zo is het verplicht om het BSN te gebruiken bij communicatie tussen burger en overheid, en mag bij gegevensuitwisseling tussen overheden onderling alleen het BSN als persoonsgebonden nummer gebruikt worden. Dat gebruik is specifiek voor de zorgsector verder uitgewerkt in de Wet aanvullende bepalingen verwerking persoonsgegevens in de zorg.

> ✅
> **Concrete invulling**
>
> Concreet betekent dit: In het iWlz-netwerkmodel wordt bij gegevensuitwisseling tussen bronhouders en afnemers en tussen bronhouders en cliënten het BSN gebruik als identificatiemiddel van cliënten.
>
> **Relevante uitgangspunten informatiemodel iWlz**
>
> [UP006](https://informatiemodel.istandaarden.nl/informatiemodel/iwlz/netwerk/indicatieregister-2/regels/uitgangspunt/up006/)

#### R08 Wet aanvullende bepalingen verwerking persoonsgegevens in de zorg (Wabvpz)

`BRON: WABVPZ`

De Wabvpz specificeert het gebruik van het BSN in de zorgsector. In de Wabpvz is bepaald dat het BSN in de zorg moet worden gebruikt door zorgaanbieders, zorgverzekeraars/zorgkantoren en indicatieorganen. Het BSN moet door deze partijen worden gebruikt om:

- fouten te voorkomen bij de uitwisseling van financiële en medische gegevens
- eenvoudiger te declareren bij de zorgverzekering
- persoonsverwisseling te voorkomen
- betere bescherming te bieden tegen identiteitsfraude

Daarnaast definieert de Wabvpz het begrip ‘elektronisch uitwisselingssysteem'.

> ✅
> **Concrete invulling**
>
> _BSN-gebruik_
>
> Op grond van artikel 46 UAVG mag het BSN alleen worden verwerkt indien dat volgt uit een wettelijke plicht. Elke deelnemer zal dus afzonderlijk moeten beoordelen of zij onder de Wabvpz vallen of onder een andere wet die uitwisseling op basis van het BSN toelaat.
>
> De Wabvpz stelt niet dat een cliënt het eigen BSN niet mag gebruiken. Er moet op een veilige en passende wijze kunnen worden vastgesteld dat het daadwerkelijk die cliënt is die gegevens opvraagt.
>
> _Wabvpz elektronisch uitwisselingssysteem_
>
> In het iWlz-netwerkmodel is sprake van de volgende registers: Indicatieregister en Bemiddelingsregister.
>
> - Het Indicatieregister en Bemiddelingsregister van respectievelijk indicatiesteller CIZ, zorgkantoren voldoen niet aan de definitie van een Wabvpz elektronisch uitwisselingssysteem omdat de bijbehorende bronhouder geen zorgaanbieder is.
> - Het Zorgleveringsregister voldoet naar verwachting niet aan de definitie van een elektronisch uitwisselingssysteem omdat er geen sprake is van het vooraf beschikbaar stellen van gegevens voor onbekend later gebruik. Deze uitspraak wordt nog juridisch getoetst.
>
> Doordat geen van de huidige registers in het iWlz-netwerkmodel voldoet aan de definitie van een Wabvpz elektronisch uitwisselingssysteem mogen gegevens beschikbaar worden gesteld zonder dat de cliënt daarvoor uitdrukkelijk toestemming heeft gegeven. Onverminderd dient sprake te zijn van een grondslag.
>
> **Relevante uitgangspunten informatiemodel iWlz**
>
> [UP006](https://informatiemodel.istandaarden.nl/informatiemodel/iwlz/netwerk/indicatieregister-2/regels/uitgangspunt/up006/)

#### R09 Wet op de Geneeskundige Behandelovereenkomst (WGBO)

`BRON: BURGERLIJK WETBOEK`

[Artikelen 454 en verder van het Burgerlijk Wetboek](https://wetten.overheid.nl/BWBR0005290/2020-04-01/#Boek7_Titeldeel7_Afdeling5_Artikel454) beschrijven de wet op de geneeskundige behandelingsovereenkomst (WGBO). De WGBO regelt o.a. de dossierplicht en stelt regels over de geheimhouding van het dossier.

> ✅
> **Concrete invulling**
>
> De dossierplicht uit de WGBO is voor deelnemers aan het iWlz-netwerkmodel die een behandelovereenkomst met de cliënt hebben of waarop de WGBO van overeenkomstige toepassing is, de wettelijke verplichting en daarmee de grondslag voor de verwerking van persoonsgegevens. De grondslag kan ook de uitvoering van de behandelovereenkomst zijn of, afhankelijk van de verwerkingen, (uitdrukkelijke) toestemming. Het is aan de individuele deelnemers om de juiste grondslag te bepalen.
>
> De geheimhoudingsplicht uit de WGBO verplicht bronhouders met een behandelovereenkomst met de cliënt gegevens alleen te delen indien daarvoor een geldige doorbrekingsgrond is (zie ook randvoorwaarde R05). De WGBO verplicht bronhouders met een behandelovereenkomst om gegevens minimaal conform de wettelijke termijn te bewaren (bewaartermijn). Daarnaast heeft de cliënt conform de WGBO het recht om haar dossiergegevens (voortijdig) te laten vernietigen.
>
> **Relevante uitgangspunten informatiemodel iWlz**
>
> [UP035](https://informatiemodel.istandaarden.nl/informatiemodel/iwlz/netwerk/indicatieregister-2/regels/uitgangspunt/up035/)

#### R10 iStandaarden

`BRON: CONCRETISERING ARCHITECTUUR IWLZ`

De _iStandaarden_ is de naam voor landelijk vastgestelde informatiestandaarden in de zorg en ondersteuning ten behoeve van de Wet langdurige zorg (Wlz), Wet maatschappelijke ondersteuning 2015 (Wmo) en Jeugdwet (Jw). De informatiestandaard iWlz is bedoeld voor de langdurige zorg volgens de Wlz. Elk van deze standaarden is een verzameling regels en afspraken die ervoor zorgt dat cliëntgegevens elektronisch, gestandaardiseerd, kwalitatief en veilig (in het kader van AVG doormiddel van autorisatieregels) worden uitgewisseld tussen alle gebruikers. Het Zorginstituut beheert de iStandaarden waarmee uitvoerders informatie uitwisselen.

> ✅
> **Concrete invulling**
>
> 1. iWlz-netwerkmodel wordt/is een integraal onderdeel van de iStandaarden door:
>    1. Structuur en inhoud van data voldoen aan het informatiemodel iWlz en andere relevante onderdelen uit de iStandaarden.
>    2. Structuur en inhoud van verzoeken om data en services voldoen aan de iStandaarden.
>    3. Koppelvlakken van services voldoen aan de iStandaarden
>
> **Relevante uitgangspunten informatiemodel iWlz**
>
> [overzicht](https://informatiemodel.istandaarden.nl/informatiemodel/iwlz/netwerk/indicatieregister-2/regels/uitgangspunt/)

#### R11 De geldende NEN- en/of ISO-normen

`BRON: NEN7510`

Iedere deelnemer aan het iWLz-netwerkmodel is op basis van bestaande wet- en regelgeving verplicht te voldoen aan de voor hem geldende NEN- en/of ISO-normen.

> ✅
> **Concrete invulling**
>
> Onafhankelijk van het Afsprakenstelsel iWlz-netwerkmodel zijn deelnemers aan het iWlz-netwerkmodel verplicht te voldoen aan de voor hen geldende NEN- en/of ISO-normen. Dit draagt bij aan de veiligheid van het iWLz-netwerkmodel.

#### R12 Archiefwet

Elke deelnemer (zowel bronhouder als afnemer) binnen het iWlz-netwerkmodel is zelf verantwoordelijk voor het naleven van de Archiefwet zodra gegevens binnen zijn of haar invloedssfeer komen.

Dit betekent dat de bronhouder gehouden is om de voor die partij relevante wetgeving rond archivering, bewaartermijnen en vernietiging van gegevens toe te passen op het eigen register. Zodra de gegevens beschikbaar zijn voor een afnemer en deze afnemer bewaart de gegevens uit een bron in de eigen administratie, past de afnemer de eigen wettelijke termijnen voor archivering en vernietiging van deze gegevens toe.

> ✅
> **Concrete invulling**
>
> De bewaartermijnen die een partij hanteert, vallen onder de eigen wettelijke verantwoordelijkheid van die partij. Een afnemer kan daarom niet van een bronhouder verlangen dat deze de bewaartermijn van de afnemer toepast. Dit voorkomt dat er sprake is van gezamenlijke verwerkingsverantwoordelijkheid, bijvoorbeeld doordat beide partijen zeggenschap zouden hebben over de opslag van dezelfde gegevens binnen de bronomgeving.
>
> Kortom: iedere partij bewaart en archiveert gegevens conform de voor haar geldende wettelijke verplichtingen, zoals vastgelegd in de Archiefwet, de AVG en aanverwante regelgeving.

---
