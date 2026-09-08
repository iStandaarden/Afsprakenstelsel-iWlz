# Uitwisselprofiel Bemiddeling

## 1. Inleiding

Dit artikel beschrijft de specifieke afspraken aangaande het Bemiddelingsregister.

De basis voor dit uitwisselprofiel wordt gevormd door de artikelen uit dit afsprakenstelsel. Het uitwisselprofiel bevat alleen die afspraken die aanvullend of specifiek zijn ten opzichte van de inhoud van andere artikelen. Om overlap te voorkomen is naar specifieke artikelen verwezen.

## 2. Doel en rationale

- Doel
  - Het doel van het bemiddelingsregister is dat deelnemers in het iWlz-netwerk op basis van relevantie en grondslag op het juiste moment op de juiste plek de juiste gegevens met betrekking tot de bemiddeling (toewijzing) kunnen raadplegen.
- Wat is de rationale van dit uitwisselprofiel?
  - Inzage in de juiste bemiddelingsgegevens is randvoorwaardelijk voor bovengenoemd doel.

## 3. Organisatiebeleid

- Voor welke deelnemers is dit uitwisselprofiel van toepassing?
  - Het uitwisselprofiel Bemiddeling is van toepassing op deelnemers met de organisatorische rol: Zorgverlener, Indicatiesteller (CIZ) en Bemiddelaar (Zorgkantoor).
- Welke afspraken gelden bij twijfels/vragen over de kwaliteit van data?
  1. Wanneer het een afwijking is op de afspraken van de iStandaard iWlz (overtreding gegevensregel) verloopt dit via de (fout)melding. Zie het artikel [Notificeren en Melden](https://wlz.atlassian.net/wiki/spaces/IWLZAS/pages/23071204)Voorvertoning .
  2. Gaat het om andere twijfels/vragen: dan contact opnemen met het verantwoordelijke zorgkantoor via telefoon of notitieverkeer.

## 4. Wet- en regelgeving

In het artikel [Randvoorwaarden](https://wlz.atlassian.net/wiki/spaces/IWLZAS/pages/23069964) is aangegeven welke wet- en regelgeving voor het Bemiddelingsregister van toepassing is.

Specifiek voor het Bemiddelingsregister zijn de volgende grondslagen van toepassing:

- Juridische grondslag van de afnemer voor de gegevensverwerking
- Noodzakelijkheid en proportionaliteit van de gegevensverwerking op basis van het doel

## 5. Proces toeleiden en dossieroverdracht

Het Bemiddelingsregister ondersteunt twee processen.

### 5.1 Proces toeleiden

Het proces toeleiden en bewaken passende zorg is beschreven in het Artikel Proces. Zie [Procesmodel | 5. Zorgkantoor: Toeleiden, bewaken passende zorg](https://wlz.atlassian.net/wiki/spaces/IWLZAS/pages/23070659/Procesmodel#5.-Zorgkantoor%3A-Toeleiden%2C-bewaken-passende-zorg)Voorvertoning

### 5.2 Proces dossieroverdracht

Het proces dossieroverdracht is beschreven in het Artikel Proces. Zie [Procesmodel | 5.4 Dossieroverdracht](https://wlz.atlassian.net/wiki/spaces/IWLZAS/pages/23070659/Procesmodel#5.4-Dossieroverdracht)Voorvertoning

## 6. Informatie

- Peildata/peilperiode van gegevens:
  - Zowel actuele als historische bemiddelingsgegevens kunnen worden geraadpleegd mits geautoriseerd voor de periode.
- In- en exclusiecriteria voor de informatievragen:
  - Organisaties met een rol zorgkantoor mogen de gegevens afnemen.
  - Organisaties met de rol Zorgorganisatie (zorgaanbieder) mogen de gegevens afnemen.
  - Organisaties met de rol indicatiesteller mogen de gegevens afnemen.
- Eisen aan de actualiteit, betrouwbaarheid en volledigheid van de data:
  - De zorgkantoren dragen zorg voor registratie van nieuwe en gewijzigde Bemiddelingen en Overdrachten.
- Aggregatieniveau:
  - Bemiddelingsgegevens worden enkel niet-geaggregeerd aangeboden en uitgewisseld.
- Contextinformatie die wordt meegegeven vanuit bestaande kwalitatieve bronnen:
  - Geen
- Welke criteria gelden voor het bepalen van het subject van de uitwisseling.
  - De gegevensuitwisseling met betrekking tot de toeleiding van zorg vindt plaats per bemiddelingspecificatie op basis van een uniek identificatienummer van de bemiddelingspecificatie. Gegevens hebben betrekking op een cliënt. Er is geen sprake van geanonimiseerde gegevens.
  - De gegevensuitwisseling met betrekking tot dossieroverdracht vindt plaats per overdracht op basis van een uniek identificatienummer van de overdracht. Gegevens hebben betrekking op de dossieroverdracht van een client. Er is geen sprake van geanonimiseerde gegevens.

## 7 Informatiemodel Bemiddelingsregister

Het Informatiemodel brengt de samenhang in processen, regels en registerspecificaties in kaart. Deze elementen zijn onlosmakelijk met elkaar verbonden: ze versterken óf beperken elkaar.

Het [Informatiemodel](https://informatiemodel.istandaarden.nl/) van het Bemiddelingsregister gaat specifiek in op het proces rondom en de inrichting van het Bemiddelingsregister . Het bevat de volgende onderdelen:

### 7.1 Proces

- de procesbeschrijvingen van het proces Toeleiden en proces Dossieroverdracht waarvoor het zorgkantoor verantwoordelijk is.

### 7.2 Register

- beschrijving en opbouw van het register.
  - _Klasse diagram_ - onderlinge relatie klassen en inhoud van de klassen.
  - _Definities_: Betekenis en aanvullende documentatie van de verschillende klassen en elementen.

### 7.3 Regels

- met betrekking tot het proces en het register.
  - _**Uitgangspunten**:_ geldend voor de gehele iStandaard iWlz.
  - _**Bedrijfsregels**:_ (ook wel operationele bedrijfsregel genoemd) is een regel die in algemene zin beschrijft wat de afspraken zijn in de keten, hoe er gehandeld dient te worden en op welke wijze informatie geïnterpreteerd moet worden.
  - _**Invulinstructies**:_ verduidelijkt de bedoelde invulling van een gegeven in een register voor specifieke situaties.
  - _**Gegevensregel**_: een technisch te controleren beperking of verplichting t.a.v. de invulling van gegevens in een register.
  - _**Autorisatieregel**_: beschrijft per rol onder welke voorwaarde(n) en voor welke periode toegang tot gegevens geldt.
  - _**Autorisatiematrix**_: beschrijft per autorisatieregel de toegang op attribuutniveau. N.b. de Autorisatiematrix is beschikbaar bij de koppelvlakspecificatie.

### 7.4 Gegevens

- basis van de informatievoorziening
  - _Datatypen (logische)_: betekenis van het datatype, primaire datatype, restricties (maximale lengte etc.) en eventueel gekoppelde codelijst.
  - _Codelijsten_: beschrijving van een codelijst en waarden

## 8. Applicatie

Dit hoofdstuk beschrijft de specifieke invulling van de applicatie laag voor het Bemiddelingsregister.

### 8.1 Applicatiecomponenten

### 8.2 nID netwerkstelsel - scopes

Het Access-token bevat specifieke gegevens die worden gebruikt om de toegang tot resources te autoriseren en te valideren. Een van de gegevens is de scope. Voor het bemiddelingsregister zijn momenteel de volgende scopes actief.

**Raadplegen van het bemiddelingsregister**

Voor het mogen raadplegen **van** het bemiddelingsregister moet de volgende scope worden meegegeven:

```
registers/wlzbemiddelingsregister/bemiddelingen/bemiddeling:read
```

**Notificeren door het zorgkantoor**

Voor het mogen notificeren **door** het zorgkantoor aan een zorgkantoor respectievelijke zorgaanbieder moet een van de volgende scopes worden meegegeven:

```
organisaties/zorgkantoor/notificaties/notificatie:create
```

of

```
organisaties/zorgaanbieder/notificaties/notificatie:create
```

**Melden aan het zorgkantoor**

Voor het mogen versturen van meldingen **aan** het zorgkantoor moet de volgende scope worden meegegeven:

```
organisaties/zorgkantoor/meldingen/melding:create
```

### 8.3 Dienst Raadplegen

In het netwerkmodel vind informatiedeling plaats via GraphQL.

De volgende onderdelen voor het raadplegen van het Bemiddelingsregister zijn beschikbaar in de [GitHub omgeving van het Bemiddelingsregister](https://github.com/iStandaarden/iWlz-bemiddeling):

#### 8.3.1 Koppelvlakspecificatie

Elk register heeft een GraphQL-schema vertaling van het klasse diagram in het informatiemodel. [GitHub - iStandaarden/iWlz-bemiddeling: Koppelvlak specificatie Bemiddelingsregister](https://github.com/iStandaarden/iWlz-bemiddeling?tab=readme-ov-file#graphql-schema)

Aanvullend bevat het schema de definitie(s) van de query/queries voor het raadplegen van de gegevens in het register.

Het GraphQL-schema bedoelt voor implementatie door de bronhouder.

#### 8.3.2 GraphQL query templates en raadpleeg use-cases

Een raadpleger gebruikt een GraphQL query voor het raadplegen van de gegevens in een register. Wanneer de raadpleging aan de autorisatie voldoet, ontvangt de raadpleger de gegevens terug.

Omdat een raadpleger zich moet houden aan de autorisatieregels is de raadpleging gebonden aan voorwaarden. Het kan zijn dat een raadpleger geen toegang heeft tot alle gegevens in het schema of dat een raadpleger niet in een raadpleging informatie mag inzien die direct betrekking heeft op de raadpleger zelf en afgeleide informatie. Om die afgeleide informatie te mogen inzien moet de raadpleger soms extra context verschaffen die eerst geraadpleegd moet worden. Daarnaast moet er altijd één of meer verplichte parameters worden meegegeven in de raadpleging.

Om de raadpleger te begeleiden naar juiste raadplegingen zijn er specifieke _raadpleeg use-cases_ opgesteld met een verwijzing naar een query-template. Het is niet nodig om deze query-templates letterlijk te volgen. Zo is het niet nodig altijd alle gegevens te raadplegen, maar kan dit naar wens worden aangepast.

De raadpleeg use-cases waarin ook een beschrijving is opgenomen van de bijbehorende toegangscontrole en query-template zijn te vinden via: [Raadplegen Bemiddelingsregister](https://github.com/iStandaarden/iWlz-bemiddeling?tab=readme-ov-file#raadplegen-bemiddelingsregister)

De query-templates zijn direct te vinden via: [query-templates Bemiddelingsregister](https://github.com/iStandaarden/iWlz-bemiddeling?tab=readme-ov-file#graphql-query)

#### 8.3.3 Toegangscontrole

Naast de raadpleeg use-cases is per use-case ook toegangscontrole beschrijving opgenomen die beschrijft op en hoe de PDP eventueel met behulp van PIP de toegangscontrole op de raadpleging uitvoert.

De de toegangscontrole en raadpleeg use-cases zijn te vinden via: [Raadplegen Bemiddelingsregister](https://github.com/iStandaarden/iWlz-bemiddeling?tab=readme-ov-file#raadplegen-bemiddelingsregister)

### 8.4 Dienst notificeren

De bronhouder is verantwoordelijk voor tijdige notificatie en correcte aflevering daarvan. Wanneer er aanleiding is voor het versturen van een notificatie, verstuurt het zorgkantoor de notificatie die hoort bij die aanleiding en controleert of de notificatie is ontvangen.

#### 8.4.1 Overzicht notificaties

Een overzicht van de notificaties die het zorgkantoor moet versturen en de aanleiding daarvoor is beschikbaar in Github: [GitHub - iStandaarden/iWlz-bemiddeling: Koppelvlak specificatie Bemiddelingsregister](https://github.com/iStandaarden/iWlz-bemiddeling?tab=readme-ov-file#notificaties)

#### 8.4.2 Controle

Het zorgkantoor verifieert door middel van de ontvangst van een HTTP 200 OK response zonder inhoudelijke verwijzing naar ‘errors’ dat een notificatie succesvol is afgeleverd. Is dit niet het geval dan onderzoekt het zorgkantoor de oorzaak, zo nodig herstelt en verzend de notificatie opnieuw.

## 9. IT-infrastructuur

### 9.1 Endpoints

De Endpoints van de Bemiddelingsregisters zijn beschikbaar in het tijdelijke iWlz-Adresboek. Er zijn twee omgevingen beschikbaar. Per omgeving zijn ook de endpoints voor autorisatie en PEP beschreven.

Relevante `gegevensdienstID’s` zijn:

_<<Nog te bepalen en in te vullen>>_

Ga naar het [**iWlz-adresboek**](https://github.com/iStandaarden/iWlz-adresboek-public) voor verdere details.


