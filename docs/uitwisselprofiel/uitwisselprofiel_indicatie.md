# Uitwisselprofiel Indicatie

## 1. Inleiding

Dit artikel beschrijft de specifieke afspraken aangaande het Indicatieregister.

De basis voor dit uitwisselprofiel wordt gevormd door de artikelen uit dit afsprakenstelsel. Het uitwisselprofiel bevat alleen die afspraken die aanvullend of specifiek zijn ten opzichte van de inhoud van andere artikelen. Om overlap te voorkomen is naar specifieke artikelen verwezen.

## 2. Doel en rationale

**Doel**  
  - Het doel van het indicatieregister is dat deelnemers in het iWlz-netwerk op basis van relevantie en grondslag op het juiste moment op de juiste plek de juiste indicatiegegevens kunnen raadplegen.
  - De indicatiegegevens zijn het resultaat van het processtap _beoordelen en afgeven indicatiebesluit_ en input voor de processtap _Toeleiden, bewaken passende zorg._

**Rationale**  
  - Inzage in de juiste indicatiegegevens is randvoorwaardelijk voor bovengenoemd doel.

## 3. Organisatiebeleid

**Voor welke deelnemers is dit uitwisselprofiel van toepassing?**

- het uitwisselprofiel Indicatie is van toepassing op deelnemers met de organisatorische rol Indicatiesteller (CIZ), Bemiddelaar (Zorgkantoor) en Zorgorganisatie (Zorgaanbieder).

**Afspraken bij twijfels/vragen over de kwaliteit van data?**

- Wanneer het een afwijking is op de gegevensregels van de iStandaard iWlz (overtreding gegevensregel) verloopt de terugkoppeling aan de bronhouder via de (fout)melding. Zie het artikel [Notificeren en Melden - 4. meldingen](../../applicatie/diensten/notificeren-en-melden#4-meldingen).
- Gaat het om andere twijfels/vragen: dan contact opnemen met bronhouder Indicatiesteller CIZ via telefoon of notitieverkeer.

## 4. Wet- en regelgeving

In het artikel [Randvoorwaarden](../../organisatiebeleid/randvoorwaarden)Voorvertoning is aangegeven welke wet- en regelgeving voor het Indicatieregister van toepassing is.

Specifiek voor het Indicatieregister zijn de volgende grondslagen van toepassing:

- Juridische grondslag van de afnemer voor de gegevensverwerking
- Noodzakelijkheid en proportionaliteit van de gegevensverwerking op basis van het doel

## 5. Proces

Het Indicatieregister ondersteund één proces.

**Proces Beoordelen**

Het proces beoordelen en afgeven indicatiebesluit is beschreven in het Artikel Proces. Zie [Procesmodel | CIZ: Beoordelen en afgeven indicatiebesluit](../../proces/procesmodel)

## 6. Informatie

!!! question 
    Geen van de onderstaande criteria/voorwaarden  staan in het artikel Informatie

**Peildata/peilperiode van gegevens**

  - Zowel actuele als historische indicatiegegevens kunnen worden geraadpleegd mits geautoriseerd voor de periode.

**In- en exclusiecriteria voor de informatievragen**

  - Organisaties met een rol Bemiddelaar (zorgkantoor) mogen de gegevens afnemen.
  - Organisaties met de rol Zorgorganisatie (zorgaanbieder) mogen de gegevens afnemen.

**Eisen aan de actualiteit, betrouwbaarheid en volledigheid van de data**

  - CIZ draagt zorg voor directe registratie van nieuwe en gewijzigde Indicatiebesluiten.

**Aggregatieniveau**

  - Indicatiegegevens worden enkel niet-geaggregeerd aangeboden en uitgewisseld

**Contextinformatie die wordt meegegeven vanuit bestaande kwalitatieve bronnen**

  - Basisregistratie Personen (BRP)

**Welke criteria gelden voor het bepalen van het subject van de uitwisseling.**

  - De gegevensuitwisseling vindt plaats per indicatiebesluit op basis van een uniek identificatienummer van de indicatie. Gegevens hebben betrekking op een cliënt. Er is geen sprake van geanonimiseerde gegevens.

## 7. Informatiemodel

Het Informatiemodel brengt de samenhang in processen, regels en registerspecificaties in kaart. Deze elementen zijn onlosmakelijk met elkaar verbonden: ze versterken óf beperken elkaar.

Het [Informatiemodel](https://informatiemodel.istandaarden.nl/) van het indicatieregister gaat specifiek in op het proces rondom en de inrichting van het [Indicatieregister](https://informatiemodel.istandaarden.nl/informatiemodel/iwlz/netwerk/indicatieregister-2/). Het bevat de volgende onderdelen:

!!! question 
    Onderstaande verplaatsen naar het artikel Informatie > Informatiemodel. 
    Het gaat hier nauwelijks om specifieke context

**Proces**

- de procesbeschrijving van het proces Beoordelen waarvoor het CIZ verantwoordelijk is.

**Register**

- beschrijving en opbouw van het register.
  - _Klasse diagram_ - onderlinge relatie klassen.
  - _Definities_: Betekenis en aanvullende documentatie van de verschillende klassen en elementen.

**Regel**

- met betrekking tot het proces en het register.
  - _**Uitgangspunten**:_ geldend voor de gehele iWlz standaard.
  - _**Bedrijfsregels**:_ (ook wel operationele bedrijfsregel genoemd) is een regel die in algemene zin beschrijft wat de afspraken zijn in de keten, hoe er gehandeld dient te worden en op welke wijze informatie geïnterpreteerd moet worden.
  - _**Invulinstructies**:_ verduidelijkt de bedoelde invulling van een gegeven in een register voor specifieke situaties.
  - _**Gegevensregel**_: een technisch te controleren beperking of verplichting t.a.v. de invulling van gegevens in een register.
  - _**Autorisatieregel**_: beschrijft per rol onder welke voorwaarde(n) en voor welke periode toegang tot gegevens geldt.
  - _**Autorisatiematrix**_: beschrijft per autorisatieregel de toegang op attribuutniveau. N.b. de Autorisatiematrix is beschikbaar bij de koppelvlakspecificatie.

**Gegevens**

- basis van de informatievoorziening
  - _Datatypen (logische)_: betekenis van het datatype, primaire datatype, restricties (maximale lengte etc.) en eventueel gekoppelde codelijst.
  - _Codelijsten_: beschrijving van een codelijst en waarden


## 8. Applicatie

Dit hoofdstuk beschrijft de specifieke invulling van de applicatie laag voor het Indicatieregister.

### 8.1 [Applicatiecomponenten](../applicatie/applicatiecomponenten)

In het netwerkmodel voor het indicatieregister worden de **diensten**:

- Abonneren, 
- Autoriseren, 
- Notificeren en 
- raadplegen gebruikt. 

De **bronhouder** van het Indicatieregister is indicatiesteller CIZ. 

**Afnemers** zijn 
  - de zorgkantoren en 
  - zorgorganisatie Care Expert 

VECOZO treedt op als **operationeel netwerkbeheerder**.

### 8.2 nID netwerkstelsel - scopes

Het Access-token bevat specifieke gegevens die worden gebruikt om de toegang tot resources te autoriseren en te valideren. Een van de gegevens is de scope. Voor het indicatieregister zijn momenteel de volgende scopes actief.

**Raadplegen van het indicatieregister**

Voor het mogen raadplegen **van** het indicatieregister moet de volgende scope worden meegegeven:

```
registers/wlzindicatieregister/indicaties:read
```

**Notificeren**

Voor het mogen notificeren **door** CIZ aan een zorgkantoor respectievelijke zorgaanbieder moet een van de volgende scopes worden meegegeven:

```
organisaties/zorgkantoor/notificaties/notificatie:create
```

of

```
organisaties/zorgaanbieder/notificaties/notificatie:create
```

**Melden aan het CIZ**

Voor het mogen versturen van meldingen **aan** het indicatieorgaan moet de volgende scope worden meegegeven:

```
organisaties/indicatieorgaan/meldingen/melding:create
```

### 8.4 Dienst raadplegen

In het netwerkmodel vind informatiedeling plaats via GraphQL.

De volgende onderdelen voor het raadplegen van het Indicatieregister zijn beschikbaar in de [GitHub omgeving van het Indicatieregister](https://github.com/iStandaarden/iWlz-indicatie):

**Koppelvlakspecificatie**

Elk register heeft een GraphQL-schema vertaling van het klasse diagram in het informatiemodel.

[GitHub - iStandaarden/iWlz-bemiddeling: Koppelvlak specificatie Indicatieregister](https://github.com/iStandaarden/iWlz-indicatie?tab=readme-ov-file#graphql-schema)

Aanvullend bevat het schema de definitie(s) van de query/queries voor het raadplegen van de gegevens in het register.

Het GraphQL-schema bedoelt voor implementatie door de bronhouder.

**GraphQL query templates en raadpleeg use-cases**

Een raadpleger gebruikt een GraphQL query voor het raadplegen van de gegevens in een register. Wanneer de raadpleging aan de autorisatie voldoet, ontvangt de raadpleger de gegevens terug.

Omdat een raadpleger zich moet houden aan de autorisatieregels is de raadpleging gebonden aan voorwaarden. Het kan zijn dat een raadpleger geen toegang heeft tot alle gegevens in het schema of dat een raadpleger niet in een raadpleging informatie mag inzien die direct betrekking heeft op de raadpleger zelf en afgeleide informatie. Om die afgeleide informatie te mogen inzien moet de raadpleger soms extra context verschaffen die eerst geraadpleegd moet worden. Daarnaast moet er altijd één of meer verplichte parameters worden meegegeven in de raadpleging.

Om de raadpleger te begeleiden naar juiste raadplegingen zijn er specifieke _raadpleeg use-cases_ opgesteld met een verwijzing naar een query-template. Het is niet nodig om deze query-templates letterlijk te volgen. Zo is het niet nodig altijd alle gegevens te raadplegen, maar kan dit naar wens worden aangepast.

De raadpleeg use-cases waarin ook een beschrijving is opgenomen van de bijbehorende toegangscontrole en query-template zijn te vinden via: [Raadplegen Indicatieregister](https://github.com/iStandaarden/iWlz-indicatie?tab=readme-ov-file#raadplegen-indicatieregister)

De query-templates zijn direct te vinden via: [query-templates Indicatieregister](https://github.com/iStandaarden/iWlz-indicatie?tab=readme-ov-file#graphql-query)

**Toegangscontrole**

Naast de raadpleeg use-cases is per use-case ook toegangscontrole beschrijving opgenomen die beschrijft op en hoe de PDP eventueel met behulp van PIP de toegangscontrole op de raadpleging uitvoert.

De toegangscontrole en raadpleeg use-cases zijn te vinden via: [Raadplegen Indicatieregister](https://github.com/iStandaarden/iWlz-indicatie?tab=readme-ov-file#raadplegen-indicatieregister)

#### Access Policy uitwisselprofiel Indicatie

De vertaling van autorisatieregel en autorisatiematrix naar machine-leesbare code is een policy. De PDP doet op basis van deze policy of een raadpleging is toegestaan.

Momenteel zijn de policies nog niet publiekelijk beschikbaar.

### 8.5 Dienst notificeren

De bronhouder is verantwoordelijk voor tijdige notificatie en correcte aflevering daarvan. Wanneer er aanleiding is voor het versturen van een notificatie, verstuurt het CIZ de notificatie die hoort bij die aanleiding en controleert of de notificatie is ontvangen.

**Overzicht notificaties**

Een overzicht van de notificaties die het CIZ moet versturen en de aanleiding daarvoor is beschikbaar in Github: [GitHub - iStandaarden/iWlz-indicatie: Koppelvlak specificatie Indicatieregister](https://github.com/iStandaarden/iWlz-indicatie?tab=readme-ov-file#notificaties)

#### Controle

Het CIZ verifieert door middel van de ontvangst van een HTTP 200 OK response zonder inhoudelijke verwijzing naar ‘errors’ dat een notificatie succesvol is afgeleverd. Is dit niet het geval dan onderzoekt CIZ de oorzaak, zo nodig herstelt en verzend de notificatie opnieuw.

## 9. IT-infrastructuur

**Endpoint**

Het Endpoint van het Indicatieregister is beschikbaar in het tijdelijke iWlz-Adresboek. Er zijn twee omgevingen beschikbaar. Per omgeving zijn ook de endpoints voor autorisatie en PEP beschreven.

De gegevensdienstID’s zijn

- CIZ\_REGISTER\_TST: voor het benaderen van de testomgeving.
- CIZ\_REGISTER\_PRD: voor het benaderen van de productieomgeving.

Ga naar het [**iWlz-adresboek**](https://github.com/iStandaarden/iWlz-adresboek-public) voor verdere details.

