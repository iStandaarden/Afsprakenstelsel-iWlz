
## 1. Inleiding

In dit artikel zijn de serviceafspraken opgenomen die gelden voor **bronhouders** binnen het iWlz-netwerkmodel. Deze afspraken beschrijven de verantwoordelijkheden van bronhouders bij het aanbieden van gegevens via het netwerk en bij het gebruik van de bijbehorende diensten.

De serviceafspraken in dit deel hebben betrekking op onder meer:

- het beschikbaar stellen van testomgevingen voor afnemers;
- het organiseren van tweedelijns ondersteuning (servicedesk bronhouder);
- het waarborgen van logische toegangsbeveiliging;
- het uitvoeren van incident- en probleembeheer met betrekking tot de eigen gegevensvoorziening;
- het uitvoeren van capaciteits-, continuïteits- en configuratiebeheer;
- het uitvoeren van logging en monitoring binnen de eigen organisatie.

Dit artikel gaat uitsluitend in op de rol van bronhouders. Afspraken over diensten van de [operationeel netwerkbeheerder](./operationeel_netwerkbeheer) of verantwoordelijkheden van [afnemers](./afnemersdeel) zijn opgenomen in de desbetreffende delen van het afsprakenstelsel. Daarnaast zijn de algemene afspraken over serviceafspraken van toepassing die zijn verwoord in het artikel [serviceafspraken](./index).

## 2. Algemene serviceafspraken bronhouders

### 2.1 Beschikbaar stellen testomgeving door bronhouders

Bronhouders stellen een testomgeving beschikbaar voor afnemers ten behoeve van aansluiting op het netwerk en bij wijzigingen in producten of diensten. Daarbij gelden de volgende voorwaarden:

- Bronhouders stellen 1 of meerdere testomgevingen beschikbaar waarmee:
  - deelnemers nieuwe functionaliteiten kunnen testen, in aanloop naar een release;
  - nieuwe deelnemers hun aansluiting kunnen testen.
- In de testomgeving is het gebruik van productiedata niet toegestaan. Om te kunnen testen stelt de bronhouder een representatieve testdataset beschikbaar. De stelselbeheerder Zorginstituut publiceert bij nieuwe releases een lijst met fictieve BSN’s voor testdoeleinden.
- Indien de testdataset niet voldoet voor de test die een afnemer wil uitvoeren, dan zal de bronhouder in overleg met de afnemer een specifieke testdata beschikbaar stellen. Dit stemmen de afnemer en bronhouder rechtstreeks met elkaar af. Een bronhouder kan dit verzoek weigeren.

> ⚠️
> De definitieve specificaties van de testomgevingen en testdata worden bepaald na afronding van het onderzoek naar de testbehoefte van deelnemers.

### 2.2 Databeschikbaarheid

Onder _beschikbaarheidstermijn_ verstaan we de periode waarin gegevens online beschikbaar zijn in het iWlz-netwerk. Deze termijn verschilt van juridische of interne bewaartermijnen (opslag/archief). De beschikbaarheidstermijn wordt per register vastgesteld op basis van functionele noodzaak, valt binnen de rechtmatig toegestane bewaartermijnen en eindigt zodra doel of grondslag vervalt. De termijn mag niet in strijd zijn met een vernietigingsplicht.

Elke bronhouder is zelf verantwoordelijk voor het naleven van de voor hem geldende bewaartermijnen en beschikbaarheidsvereisten. Een afnemer kan niet verlangen dat bronhouders dezelfde termijnen hanteren, omdat dit zou leiden tot gezamenlijke verwerkingsverantwoordelijkheid, hetgeen niet past binnen de verantwoordelijkheidsverdeling van het iWlz-netwerkmodel.

**Beschikbaarheidtermijn per register:**

| **Register** | **Startpunt** | **Eindpunt** | **Minimale beschikbaarheidstermijn** |
| :--- | :--- | :--- | :--- |
| Indicatieregister | Registratie indicatie | Einde geldigheid indicatiebesluit of overlijden cliënt | (Startpunt t/m Eindpunt) + 5 jaar |
| Bemiddelingsregister | Start bemiddeling | Einde bemiddeling of einde indicatieN.B.: indien het gaat om een foutieve bemiddeling, dan wordt deze verwijderd en geldt de beschikbaarheids-termijn niet. | (Startpunt t/m Eindpunt) + 7 jaar |

### 2.3 Reactietermijnen

De afnemer is verantwoordelijk voor het tijdig melden van onjuiste informatie aan de bronhouder. De bronhouder is daaropvolgend verantwoordelijk voor het tijdig corrigeren van de onjuiste informatie.

| **Actie** | **Actiehouder** | **Termijn** |
| :--- | :--- | :--- |
| Melden onjuiste informatie | Afnemer | 1 werkdag |
| Corrigeren onjuiste informatie | Bronhouder | 1 werkdag |

## 3. Dienstverlening bronhouders

### 3.1 Servicedesk bronhouder

De servicedesk van de bronhouder verzorgt eerstelijns voor interne gebruikers, tweedelijns voor servicedesks van afnemers en is aanspreekpunt voor de operationeel netwerkbeheerder.

Servicedesk bronhouder – afspraken:

- De bronhouder verzorgt eerstelijns ondersteuning voor interne gebruikers. Dit valt buiten de scope van de serviceafspraken.
- De servicedesk levert tweedelijns ondersteuning aan servicedesks van afnemers.
- De servicedesk is aanspreekpunt voor de operationeel netwerkbeheerder bij incidenten die het bronsysteem raken.
- Op verzoek ondersteunt de servicedesk de operationeel netwerkbeheerder bij het opsporen en oplossen van verstoringen die het bronsysteem raken.

### 3.2 Logische toegangsbeveiliging

Generieke afspraken over logische toegangsbeveiliging zijn opgenomen in [Serviceafspraken_logische toegangsbeveiliging](./index#38-logische-toegangsbeveiliging). Dit deel bevat geen aanvullende afspraken specifiek voor bronhouders.

## 4. Beheerprocessen bronhouders

### 4.1 Incidentbeheer bronhouders

Incidenten binnen het iWlz-netwerkmodel kunnen betrekking hebben op verschillende onderdelen:

- **Bronhouder** – incidenten die verband houden met de beschikbaarheid, juistheid of integriteit van brongegevens.
- **Afnemer** – incidenten binnen de organisatie of infrastructuur van de afnemer. Deze incidenten vallen buiten de scope van de serviceafspraken.
- **Netwerk** – incidenten die het iWlz-netwerk zelf raken of meerdere deelnemers beïnvloeden.

Bronhouders zijn verantwoordelijk voor de inrichting van het eigen incidentbeheerproces en handelen incidenten als volgt af:

1. De eigen servicedesk ontvangt meldingen van gebruikers (van de eigen organisatie) of afnemers (via de servicedesk van de afnemer) over incidenten die verband houden met het bronregister.
2. De servicedesk onderzoekt het incident, stelt urgentie en impact vast, en lost indien mogelijk het probleem zelfstandig op.
3. Wanneer de impact van een incident buiten de eigen organisatie reikt - bijvoorbeeld als het een netwerkbreed probleem betreft of betrekking heeft op een afnemer - wordt het incident doorgezet naar de servicedesk van de operationeel netwerkbeheerder of, indien van toepassing, naar de servicedesk van de betreffende afnemer.

Hierbij gelden de volgenden procesafspraken:

- Incidenten worden door gebruikers gemeld bij de eerstelijns ondersteuning van de eigen organisatie. Deze eerstelijns ondersteuning doet onderzoek naar het incident en stelt urgentie en impact vast en schakelt indien van toepassing met de servicedesk van andere deelnemers.
- Partijen zijn vrij het eigen incidentbeheerproces in te richten. Hierbij wordt voldaan aan de [minimale openingstijden](./index#35-minimale-openingstijden-servicedesks) van de servicedesks die beschreven zijn in het artikel Serviceafspraken.
  Incidentmeldingen die aangeleverd worden buiten de openstellingstijden worden zoveel mogelijk opgepakt.
- Een bronhouder maakt na het optreden van een calamiteit (een incident met veel impact) zo snel mogelijk inzichtelijk wat de gevolgen hiervan zijn voor de afnemers en komt met een oplostermijn voor de herstelactiviteiten om de dienstverlening te herstellen.
- Bij een calamiteit verloopt de communicatie primair via de operationeel netwerkbeheerder.
  Voorbeelden van calamiteiten zijn: brand in het datacentrum, kabelbreuken door graafwerkzaamheden of cyberaanvallen, waardoor een bronhouder gedurende langere tijd niet beschikbaar is.

### 4.2 Probleembeheer bronhouders

Bronhouders committeren zich aan het inrichten en onderhouden van een proces voor probleembeheer binnen de eigen organisatie. Dit proces is gericht op het structureel voorkomen van incidenten en het waarborgen van de continuïteit en kwaliteit van de dienstverlening.

**Probleembeheer:** de bronhouder analyseert en verhelpt structurele oorzaken van incidenten binnen de eigen organisatie. Problemen met juistheid, tijdigheid of volledigheid van eigen brongegevens worden intern opgelost. Ketenbrede of standaard-rakende problemen worden gemeld bij de centrale servicedesk voor triage. Als de oplossing een wijziging aan standaarden of netwerkafspraken vergt, wordt deze via het RFC-proces ingebracht

### 4.3 Capaciteitsbeheer bronhouders

Bronhouders maken inschattingen van het verwachte gebruik en de benodigde capaciteit bij substantiële veranderingen in de verwerking of beschikbaarstelling van gegevens die onder de scope van de iWlz-netwerkserviceafspraken vallen. Deze inschattingen worden tijdig gedeeld met de centrale servicedesk, zodat de betrokken partijen tijdig maatregelen kunnen treffen om performance en beschikbaarheid van het netwerk te waarborgen.

| **Prestatienorm/KPI** | **Meetmethode** | **Rapportage** | **Bijzonderheden** |
| :--- | :--- | :--- | :--- |
| Bronhouders monitoren de benodigde capaciteit en schakelen waar nodig extra capaciteit bij om aan de vraag te kunnen voldoen. | N.t.b. | N.t.b. | - |

### 4.4 Continuïteitsbeheer bronhouders

Bronhouders zijn zelf verantwoordelijk voor de beschikbaarheid en continuïteit van hun eigen infrastructuur, waaronder de systemen en componenten waarmee brongegevens worden opgeslagen, beheerd en ontsloten. Iedere bronhouder draagt zorg voor een ingericht continuïteitsbeheerproces waarmee bij calamiteiten de dienstverlening conform deze iWlz netwerk serviceafspraken hersteld kunnen worden.

| **Prestatienorm/KPI** | **Meetmethode** | **Rapportage** | **Bijzonderheden** |
| :--- | :--- | :--- | :--- |
| **Beschikbaarheid** ≥ 99,5 procent per kalendermaand, binnen het dienstverleningsvenster\*. | N.t.b. | N.t.b. | **Meetpunt:** ingang bronsysteem/ netwerkpunt. |
| **Onderhoud** wordt uitgevoerd binnen het onderhoudsvenster (zie [Ondersvenster](./index#37-onderhoudsvenster)). Aankondiging niet vereist indien binnen venster. | N.t.b. | N.t.b. | **Overrun buiten onderhoudsvenster:** Vereist melding aan Operationeel netwerkbeheerder en telt als downtime. |
| **Verstoringen** met ketenimpact worden door de bronhouder direct gemeld bij de operationeel netwerkbeheerder | N.t.b. | N.t.b. | **Netwerkbrede communicatie:** verloopt via de operationeel netwerkbeheerder. <br><br>**Onderbrekingen binnen een onderhoudsvenster:** worden niet als verstoring aangemerkt |

\*De berekening van de Beschikbaarheid is gedefinieerd in [Serviceafspraken_Berekening beschikbaarheid](./index#311-berekening-beschikbaarheid).

### 4.5 Configuratiebeheer bronhouders

Generieke afspraken over configuratiebeheer zijn opgenomen in [Serviceafspraken_Configuratiebeheer](./index#39-configuratiebeheer). Er zijn geen aanvullende afspraken specifiek voor bronhouders.

### 4.6 Logging, monitoring en rapportage bronhouders

Generieke afspraken over logging en monitoring zijn opgenomen in [_Serviceafspraken_](./index). Dit deel bevat geen aanvullende afspraken specifiek voor bronhouders.

### 4.7 Kwaliteitsbeheer

De bronhouder is verantwoordelijk voor het bewaken van de kwaliteit van de data en de services die hij aanbiedt.
De specifieke kwaliteitseisen waaraan de data (zoals uitwisselformaat en actualiteit) en de services (zoals interfaces en responstijden) moeten voldoen, zijn vastgelegd in de uitwisselprofielen van de registers.

### 4.8 Escalatie bij productie verstoringen

Escalatie bij productieverstorende incidenten, problemen of bij het niet naleven van de prestatieafspraken vindt plaats conform [Serviceafspraken_Geschillen en escalatie](./index#33-geschillen-en-escalatie)

## 5. Boetes en beperkingen

### 5.1 Boetes

De SLA bevat geen boetebepalingen.

### 5.2 Beperkingen

De SLA en alle toepasselijke serviceniveaus zijn niet van toepassing op prestatie- of beschikbaarheidsproblemen:

- Die het gevolg zijn van overmacht.
- Die ontstaan door het gebruik van door de bronhouder ter beschikking gestelde voorzieningen nadat de bronhouder de betreffende deelnemer(s) heeft geadviseerd het gebruik daarvan te wijzigen binnen een redelijke, vooraf aangegeven termijn, en dit gebruik desondanks niet tijdig is aangepast.
-
- Die het gevolg zijn van het handelen of nalaten van deelnemers of diens dienstverleners die:
  - Zich niet houden aan de door de bronhouder vooraf gecommuniceerde vereiste configuraties en aan de door de bronhouder beschikbaar gestelde technische en functionele documentatie.
  - De door de bronhouder beschikbaar gestelde voorzieningen op een wijze gebruiken die niet overeenkomt met de bedoelde functies en functionaliteit (bijvoorbeeld pogingen om niet-ondersteunde bewerkingen uit te voeren).


