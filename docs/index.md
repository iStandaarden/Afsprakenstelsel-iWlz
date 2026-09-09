# Afsprakenstelsel iWlz-netwerkmodel 


!!! info "Versie: *17-12-2025* | Status: *Definitief* | [Release notes](./welkom/release_notes#versie-100---17-12-2025)"


??? note "Toelichting" 

    Dit is de introductiepagina van het Afsprakenstelsel iWlz-netwerkmodel. 

    Het iWlz-netwerkmodel biedt zorgaanbieders, zorgkantoren en andere partijen die actief zijn in de langdurige zorg de mogelijkheid om zorgadministratieve gegevens direct bij de bron te raadplegen. Deze gegevens worden opgeslagen bij de bronhouder en zijn beschikbaar voor aangesloten partijen (afnemers). Met de invoering van het iWlz netwerkmodel beogen partijen in de langdurige zorg de administratieve lasten te verminderen, de informatiepositie van cliënten te verbeteren en de kwaliteit van de dienstverlening te verhogen. 

    Het afsprakenstelsel heeft als doel deelnemers aan het iWlz-netwerkmodel op een uniforme en eenduidige wijze te informeren over de geldende afspraken, procedures en regels. Het vormt daarmee de basis voor samenwerking en gegevensuitwisseling binnen het iWlz-netwerkmodel. 

??? warning "Incrementele implementatie" 

    Het iWlz-netwerkmodel wordt incrementeel geïmplementeerd aan de hand van het Afsprakenstelsel iWlz-netwerkmodel. Het eerste deel dat is geïmplementeerd is het Indicatieregister. Het tweede deel is het Bemiddelingsregister, wat naar verwachting per april 2026 operationeel wordt. 

    De implementatie van het iWlz-netwerkmodel vindt incrementeel plaats aan de hand van het afsprakenstelsel. Het eerste onderdeel dat in gebruik is genomen, betreft het Indicatieregister. Het tweede onderdeel, het Bemiddelingsregister, wordt naar verwachting in april 2026 operationeel. Deze versie van het Afsprakenstelsel iWlz-netwerkmodel is geactualiseerd ten behoeve van de implementatie van het Bemiddelingsregister. 

    Per artikel wordt indien relevant aangegeven welke onderdelen nog niet van toepassing zijn. Bij iedere volgende implementatiestap wordt het afsprakenstelsel geactualiseerd zodat duidelijk is welke onderdelen worden toegevoegd. 


## 1. Leeswijzer

Het Afsprakenstelsel iWlz-netwerkmodel is opgebouwd uit verschillende lagen die de afspraken beschrijven die nodig zijn voor de totstandkoming, het uitvoeren en het beheer van het iWlz-netwerkmodel. Het [Nictiz interoperabiliteitsmodel](https://nictiz.nl/wat-we-doen/zorginformatiestelsel/interoperabiliteit/ "https://nictiz.nl/wat-we-doen/zorginformatiestelsel/interoperabiliteit/") is als basis voor deze structuur gekozen. Van boven naar onder worden de onderwerpen steeds specifieker. Het afsprakenstelsel bestaat uit de volgende lagen:

* **Inleiding:** In deze laag wordt een beschrijving gegeven van de achtergrond en context van het iWlz-netwerkmodel. Ook worden de aanvullende afspraken op het convenant besproken en de begrippenlijst weergegeven.
* **Organisatiebeleid:** Deze laag beschrijft de randvoorwaarden en ontwerpkeuzes die bij het opstellen van het Afsprakenstelsel iWlz-netwerkmodel zijn gehanteerd en geeft inzicht in de hieruit voortvloeiende architectuur. Daarnaast bevat deze laag informatie over de rollen van deelnemers aan het iWlz-netwerkmodel en beschrijft de laag afspraken over de ontwikkeling en het beheer van het iWlz-netwerkmodel in de vorm van serviceafspraken.
* **Proces:** Deze laag beschrijft het iWlz zorgadministratieve proces aan de hand van de netwerkfuncties en het procesmodel.
* **Informatie:** Deze laag beschrijft de in het iWlz-netwerkmodel gehanteerde informatiestandaarden.
* **Applicatie:** Deze laag beschrijft de applicaties, diensten en technische afspraken die nodig zijn voor de implementatie van het iWlz-netwerkmodel.
* **IT-infrastructuur:** In deze laag wordt ingegaan op de technische infrastructuur.
* **Uitwisselprofielen:** Deze laag beschrijft de specifieke afspraken die gelden per register. Deze afspraken zijn aanvullend aan de generieke afspraken op de overige lagen.
  

De structuur van het Afsprakenstelsel iWlz-netwerkmodel is hieronder schematisch weergegeven:
![Structuur afsprakenstelsel iWlz-netwerkmodel](./img/welkom-lagen.png)
Structuur afsprakenstelsel iWlz-netwerkmodel

## 2. Voor wie?

Het Afsprakenstelsel iWlz-netwerkmodel is primair opgesteld voor de volgende doelgroepen:

* Deelnemers - partijen die een rol hebben in het iWlz-netwerkmodel:
  * Centraal administratiekantoor (CAK), Centrum Indicatiestelling Zorg (CIZ), zorgkantoren, zorgaanbieders, Zorginstituut Nederland
* ICT-dienstverleners van deelnemers, zoals:
  * VECOZO
  * Leveranciers van netwerkcomponenten en bronsystemen (o.a. EPD leveranciers)
    

> **N.B.:** Cliënten zijn deelnemers aan het iWlz-netwerkmodel maar het Afsprakenstelsel iWlz-netwerkmodel is niet primair voor deze doelgroep opgesteld.

## 3. Status implementatie iWlz-netwerkmodel

Het iWlz-netwerkmodel wordt incrementeel geïmplementeerd aan de hand van het Afsprakenstelsel iWlz-netwerkmodel. Het eerste deel dat is geïmplementeerd is het Indicatieregister. Vanaf 16-01-2025 is Indicatieregister 2 van toepassing. Voor deze tussenstap is het Afsprakenstelsel iWlz-netwerkmodel bijgewerkt in januari 2025 vanwege een aantal elementaire aanpassingen in de werking van de basisinfrastructuur.

Het Bemiddelingsregister wordt toegevoegd per april 2026. Met de december 2025 release wordt hierop voorgesorteerd. Hiervoor zijn alle artikelen doorgenomen en waar nodig bijgewerkt. Hierbij zijn de volgende vastgestelde RFC’s verwerkt: [RFC0018 - Melden van fouten in gegevens volgens iStandaard iWlz](https://github.com/iStandaarden/iWlz-RequestForComment/blob/main/RFC/RFC0018%20-%20Melden%20van%20fouten%20in%20gegevens%20volgens%20iStandaard%20iWlz.md "https://github.com/iStandaarden/iWlz-RequestForComment/blob/main/RFC/RFC0018%20-%20Melden%20van%20fouten%20in%20gegevens%20volgens%20iStandaard%20iWlz.md"), [RFC0022a - Tracelogging - TraceID en SpanID](https://github.com/iStandaarden/iWlz-RequestForComment/blob/main/RFC/RFC0022a%20-%20Tracelogging%20-%20TraceID%20en%20SpanID.md "https://github.com/iStandaarden/iWlz-RequestForComment/blob/main/RFC/RFC0022a%20-%20Tracelogging%20-%20TraceID%20en%20SpanID.md") en [RFC0040 - GraphQL gebruik HTTP-statuscodes](https://github.com/iStandaarden/iWlz-RequestForComment/blob/main/RFC/RFC0040%20-%20GraphQL%20http-statuscodes.md "https://github.com/iStandaarden/iWlz-RequestForComment/blob/main/RFC/RFC0040%20-%20GraphQL%20http-statuscodes.md"). Deze zijn respectievelijk verwerkt in de artikelen: [Notificeren en Melden](https://wlz.atlassian.net/wiki/spaces/IWLZAS/pages/23071204)Voorvertoning , [Logging](https://wlz.atlassian.net/wiki/spaces/IWLZAS/pages/690651198)Voorvertoning en [GraphQL over HTTP](https://wlz.atlassian.net/wiki/spaces/IWLZAS/pages/690552899)Voorvertoning . Daarnaast is het [Uitwisselprofiel Bemiddeling](https://wlz.atlassian.net/wiki/spaces/IWLZAS/pages/690618376)Voorvertoning toegevoegd.

In de [release notes](https://wlz.atlassian.net/wiki/spaces/IWLZAS/overview#5.-Release-notes "https://wlz.atlassian.net/wiki/spaces/IWLZAS/overview#5.-Release-notes") is per artikel aangegeven wat deze wijzigingen zijn. Hierin is ook aangegeven welke artikelen zijn komen te vervallen.

## 4. Navigatietips

* **Inhoudsopgave**  
  Aan de linkerkant van het scherm staat de inhoudsopgave. Door op de pijltjes te klikken worden onderliggende artikelen zichtbaar. Door op de naam van een artikel te klikken wordt het desbetreffende artikel geopend. Het is ook mogelijk om de inhoudsopgave tijdelijk te verbergen door **CTRL + \[** in te toetsen, hiermee kan de inhoudsopgave ook weer worden teruggehaald.
* **Versie en status artikel**  
  Links bovenaan ieder artikel staat het versienummer en de status van het artikel.
* **Afbeeldingen**  
  Veel artikelen bevatten afbeeldingen. Deze zijn te vergroten door op de afbeelding te klikken. Om vervolgens weer terug naar de tekst van het artikel te gaan raden wij aan om op de X rechts bovenaan de afbeelding te klikken (in plaats van de pijltjes in uw internetbrowser te gebruiken).
* **Links openen**  
  Wanneer je een link in een nieuw tabblad wilt openen, houd dan de CTRL-toets (Windows) of Command-toets (macOS) ingedrukt terwijl je op de link klikt.
  



## 5. Colofon

| Titel | Afsprakenstelsel iWlz-netwerkmodel |
| :-- | :-- |
| Publicatiedatum | 17 december 2025 (grote publicatie: update vanwege toevoeging Bemiddelingsregister)4 april 2025 (technische publicatie: update vanwege aanpassen externe links)17 januari 2025 (beperkte publicatie: update vanwege een aantal elementaire aanpassingen in de werking van de basisinfrastructuur)25 mei 2023 (grote publicatie: oorspronkelijke publicatiedatum) |
| Auteurs | Het Afsprakenstelsel iWlz-netwerkmodel is opgesteld door het Actieprogramma iWlz in samenwerking met technisch en inhoudelijk experts, beleidsmedewerkers en juristen van betrokken partijen. |
| Contact | Zorginstituut Nederland Postbus 320 1110 AH Diemen​ |

