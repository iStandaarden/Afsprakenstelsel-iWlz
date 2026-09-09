## 1. Inleiding

De iWlz is een informatiestandaard die onderdeel uitmaakt van de iStandaarden. Zorginstituut Nederland is de bij wet aangewezen beheerder van deze standaarden. De iStandaarden ondersteunen de uitvoering van de Wlz, Wmo en de Jeugdwet.

Nieuwe releases van de iStandaarden doorlopen verschillende fasen van voorbereiding, uitwerking en invoering, waarbij in elke fase wordt samengewerkt met experts uit het veld. Hiervoor zijn een releasebeleid en een releaseproces opgesteld.

Het releasebeleid van het iWlz-netwerkmodel sluit aan bij dit algemene releaseproces voor iStandaarden. In dit document wordt toegelicht hoe dit releasebeleid binnen het iWlz-netwerkmodel wordt toegepast.

Meer informatie is beschikbaar via:
[Releaseproces en releasebeheer](https://www.istandaarden.nl/algemeen/releaseproces-en-releasebeheer)

In dit artikel wordt naast het releasebeleid ook het releaseproces van het Afsprakenstelsel iWlz-netwerkmodel toegelicht.

## 2. Releasebeleid iWlz-netwerkmodel

Het reguliere releasebeleid voor de iStandaarden is beschreven in het document [_Releasebeleid iStandaarden_](https://www.istandaarden.nl/services/file/get?key=bgFfpPyLfKowBC7yc3_eGduStOPbxRWJRIR4jw39hAhUOmNSXJt0ivGCEKpP0GdbzpvYXMCCggUOnmt2n7Du5ZULVlfEBphvzKwjyMtqlXs451XgrGWbQY3WbBT2JCM_mQowu6fbQfeznRE24gY). Dit vormt het vertrekpunt voor het releasebeleid van het iWlz-netwerkmodel.

Voor het estafettemodel wordt dit beleid volledig gevolgd.
Voor het netwerkmodel zijn er echter enkele afwijkingen. Deze afwijkingen hebben betrekking op:

- **Releasesoorten** (hoofdstuk 3 in _Releasebeleid iStandaarden_),
- **Planning** (hoofdstuk 4 in _Releasebeleid iStandaarden_),
- **Overlegvormen** (paragraaf 5.2 in _Releasebeleid iStandaarden_).

In de volgende paragrafen wordt toegelicht hoe deze afwijkingen in het netwerkmodel zijn ingericht.

### 2.1 Releases binnen het netwerkmodel

Een registerrelease komt tot stand wanneer meerdere onderdelen tegelijk worden aangepast en deze gezamenlijk leiden tot nieuwe functionaliteit van het register. Dit kan bijvoorbeeld het geval zijn wanneer een toevoeging impact heeft op zowel regelrapporten, codelijsten als query’s. In dat geval is een nieuwe versie van het register noodzakelijk.

Het reguliere releasebeleid onderscheidt drie soorten releases: **major, minor en patch** (hoofdstuk 3 in _Releasebeleid iStandaarden_).

Binnen het netwerkmodel is tot op heden alleen sprake van **major releases** op het niveau van een register. Een release wordt gekenmerkt door de naam van het register gevolgd door een volgnummer. Samen vormt dit de duiding van een release.
Voorbeeld: op 16 januari 2025 is `Indicatieregister 2` geïmplementeerd.

Onderdelen die binnen een release vallen, zoals producten van het informatiemodel of koppelvlakspecificaties, worden afzonderlijk geversioneerd. Deze onderdelen kunnen naast major- ook minor- en patchreleases kennen.

| Niveau | Type release | Voorbeeldversie | Toelichting |
| :--- | :--- | :--- | :--- |
| **Register** | Altijd **major** | _Indicatieregister 2_ | Release = naam register + volgnummer |
| **Onderdelen** (bijv. codelijsten, koppelvlakken, regelrapport) | Major / Minor / Patch | v1.0 → v1.1 → v1.1.1 | Worden afzonderlijk geversioneerd, maar vallen altijd binnen een registerrelease |

Hoe dit in de praktijk uitwerkt bij opeenvolgende registerreleases wordt toegelicht in [Releasebeleid_Praktijkvoorbeeld: registerreleases](./releasebeleid#25-praktijkvoorbeeld-registerreleases).

### 2.2 Planning netwerkmodel

Het reguliere releasebeleid volgt in de basis een jaarlijkse cyclus. Daarbij wordt de implementatie van een nieuwe iWlz-release meestal in productie genomen op 1 januari, en ook de publicatie van specificaties kent vaste momenten in het jaar.

Voor het netwerkmodel geldt een andere werkwijze. Omdat releases zich niet meer toespitsen op de gehele keten maar op één register, kan een meer _agile_ aanpak worden gevolgd. De registereigenaar (bronhouder) en afnemers van het register bepalen samen de inhoud van de release en de planning, inclusief de datum waarop de nieuwe registerversie in de keten leidend wordt.

Zie ook: [https://www.istandaarden.nl/algemeen/aanpak](https://www.istandaarden.nl/algemeen/aanpak)

### 2.3 Aanvullende overlegvormen netwerkmodel

Naast de bestaande overlegstructuren die in het reguliere releasebeleid zijn beschreven, zijn voor het netwerkmodel aanvullende overlegvormen ingericht. Deze sluiten aan bij de meer gefaseerde en agile aanpak van releases.

De bestaande overlegstructuren blijven daarbij geïnformeerd, zodat de ketenbrede afstemming behouden blijft.

De aanvullende overlegvormen zijn:

- **Werkgroep Bezorg**: bespreekt functionele aspecten van het nieuwe register.
- **Technisch overleg**: beoordeelt technische keuzes en implicaties.
- **Koplopersoverleg**: bepaalt omvang en planning van een release.
- **Werkgroep initiële vulling:** houdt zich bezig met de initiële vulling van het indicatie- en bemiddelingsregister.

### 2.4 Releaseproces netwerkmodel

Het reguliere releaseproces is beschreven in het document _Releaseproces iStandaarden_. Dit proces blijft het uitgangspunt.

Voor het netwerkmodel zijn er echter twee belangrijke afwijkingen:

- **Releasekalender**: de planning wordt per register afgestemd met bronhouder en afnemers, in plaats van volgens de vaste jaarlijkse cyclus. Hierbij wordt ook bepaald wanneer partijen kunnen aansluiten.
- **Overlegvormen**: naast de bestaande structuren worden aanvullende overleggen ingezet (zie [Releasebeleid_Aanvullende overlegvormen netwerkmodel](./releasebeleid#23-aanvullende-overlegvormen-netwerkmodel)).

De afwijkingen doen zich met name voor in de voorbereidings- en uitwerkingsfase van een release.

### 2.5 Praktijkvoorbeeld: registerreleases

Releases binnen het netwerkmodel concentreren zich rond één register. De specificaties die daarbij horen zijn altijd gekoppeld aan de publicatie en implementatie van dat register.

- **Voor de bronhouder** is zo duidelijk welke nieuwe functionaliteit gerealiseerd moet worden.
- **Voor de gebruiker of raadpleger** is helder hoe de nieuwe functionaliteit gebruikt kan worden.

Zoals in paragraaf 2.2 al is toegelicht, kent het netwerkmodel registerreleases die altijd als **major** worden aangemerkt, terwijl onderdelen binnen een release (zoals koppelvlakken, codelijsten en regelrapporten) afzonderlijk worden geversioneerd.

Het schema hieronder (zie figuur 1) toont hoe opeenvolgende releases (_Register Release 1, 2 en 3_) zich tot elkaar verhouden en hoe onderdelen hun versies krijgen.

![Voorbeel van registerreleases en versiebeheer](../img/Releasebeleid%20-%20Voorbeel%20van%20registerreleases%20en%20versiebeheer.png)
Figuur 1. Voorbeeld van opeenvolgende registerreleases en versiebeheer van onderdelen


#### **2.5.1 Toelichting bij het schema**

- De ontwikkeling start met _Register Release 1_. Onderdelen worden gebundeld en gepubliceerd als _“In Ontwikkeling”_ versie van _Register Release 1_.
- Zodra deze release in productie wordt genomen, verschuift de status naar _“Lopend”_.
- Met de ingebruikname van _Register Release 1_ start de ontwikkeling van _Register Release 2_, die voortbouwt op de laatste versies van de onderdelen uit Release 1.
- Zo zijn onderdelen altijd aan één specifieke release gekoppeld.

#### **2.5.2 Voorbeeld van versiebeheer**

- Het koppelvlak in _Register Release 1_ krijgt versie **v1.0**.
- Het eerste koppelvlak in _Register Release 2_ zou **minimaal versie v1.1.0** krijgen.
- Een correctie die na de ingebruikname van _Register Release 1_ plaatsvindt, krijgt versie **v1.0.1**.

## 3. Releasebeleid Afsprakenstelsel iWlz-netwerkmodel

Het Afsprakenstelsel iWlz-netwerkmodel wordt geactualiseerd om wijzigingen in beleid, techniek en uitvoering in impact hebben op de afspraken in de keten door te voeren. Hierbij wordt onderscheid gemaakt tussen drie typen publicaties: technische publicaties, beperkte publicaties en grote publicaties. Deze worden hieronder toegelicht.

### 3.1 Technische publicatie

Een technische publicatie betreft kleine, redactionele of tekstuele aanpassingen aan het afsprakenstelsel. Dit kunnen correcties zijn op schrijffouten, verwijzingen, hyperlinks of verduidelijkingen. Hoewel het doel van dergelijke verduidelijkingen is om de bedoeling van bestaande afspraken explicieter te maken, kan een verduidelijking in sommige gevallen zichtbaar maken dat partijen dezelfde afspraak verschillend hebben uitgelegd of ingericht. In dat geval kan alsnog sprake zijn van impact. Is dat het geval dan wordt dit gezien als een _beperkte publicatie_.

- Er is geen review of goedkeuring door externe partijen nodig.
- Publicatie vindt direct plaats na interne controle door het redactieteam.

### 3.2 Beperkte publicatie

Een beperkte publicatie omvat wijzigingen aan één of enkele artikelen, gericht op een beperkt aantal onderwerpen binnen het afsprakenstelsel.

- Deze wijzigingen worden beoordeeld via een review door interne en externe experts, passend bij het onderwerp van de wijziging. Externe experts kunnen bijvoorbeeld afkomstig zijn uit het Technisch Afstemmingsoverleg of juridische expertgroepen. Per wijziging wordt bepaald welke expertise noodzakelijk is; daardoor kan de samenstelling van het reviewteam per artikel verschillen. De beoordeling vindt in de regel plaats conform het RFC-proces.
- De Stuurgroep iWlz wordt geïnformeerd over de inhoud en planning van de publicatie.
- Geen formele goedkeuring door de Stuurgroep iWlz is vereist, tenzij de wijzigingen strategische consequenties hebben.
- De planning van en communicatie over een beperkte publicatie worden afgestemd met betrokken partijen.

### 3.3 Grote publicatie

Een grote publicatie betreft een major update van het afsprakenstelsel, waarbij meerdere lagen of onderdelen van het netwerkmodel worden geraakt (zoals technische, organisatorische en/of juridische afspraken).

- Er vindt een uitgebreide review plaats door interne en externe experts.
- Voorafgaand aan publicatie moet de Stuurgroep iWlz de wijziging formeel goedkeuren.
- De planning van en communicatie over een grote publicatie worden afgestemd met betrokken partijen.

