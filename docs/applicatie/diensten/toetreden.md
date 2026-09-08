## 1. Inleiding

Dit artikel beschrijft de dienst toetreden, bestaande uit twee onderdelen:

- **Aansluiten bij VECOZO**: het sluiten van een overeenkomst en registratie als deelnemer.
- **Aansluiten op het iWlz-netwerk**: het technisch realiseren van de toegang tot het iWlz-netwerk.

De verantwoordelijke voor informatiebeveiliging, vaak een Chief Information Security Officer (CISO), ziet toe op een correcte implementatie van het toegangsbeleid binnen de eigen zorgorganisatie.

## 2. Aansluiten bij VECOZO

Om gebruik te kunnen maken van het iWlz-netwerk moet een organisatie aangesloten zijn bij VECOZO. Hiervoor gelden de volgende vereisten:

- KvK-nummer
- AGB-code (m.u.v. softwareleveranciers en tussenpartijen software)
- Een ondertekende aansluitovereenkomst (OVK - Overeenkomst VECOZO Ketenpartijen) met VECOZO (incl. [VECOZO Generiek Aansluitvoorwaarden (VGA)](https://www.vecozo.nl/aandeslag-ad/vecozo-generieke-aansluitvoorwaarden/))

Daarnaast dient de deelnemer te voldoen aan de eisen zoals vastgelegd in NEN 7510 (Informatiebeveiliging in de zorg), conform de [VECOZO Generieke Aansluitvoorwaarden (VGA)](https://www.vecozo.nl/aandeslag-ad/vecozo-generieke-aansluitvoorwaarden/).

Voor **softwareleveranciers en zorginkoopbemiddelaars** geldt dat zij niet zelf NEN 7510-gecertificeerd hoeven te zijn. De zorgorganisatie die hun software of diensten gebruikt, blijft verantwoordelijk en moet aantoonbaar maken dat de softwareleverancier en/of zorginkoopbemiddelaar voldoet aan de gestelde eisen (bijvoorbeeld via certificering van de software, onafhankelijke audit of een keurmerk zoals Keurmerk 7510).

!!! note
    Indien een organisatie al via een OVK bij VECOZO is aangesloten, hoeft dit aansluitproces niet opnieuw doorlopen te worden.

Autorisatie voor het gebruik van specifieke diensten binnen het iWlz-netwerk volgt via de [**Autorisatiematrix**](https://github.com/iStandaarden/iWlz-Autorisatiematrix), zoals vastgesteld door de opdrachtgever/verwerkingsverantwoordelijke(n).

## 3. Aansluiten op het iWlz-netwerk

Na aansluiting bij VECOZO volgt de technische aansluiting op het iWlz-netwerk. Dit omvat de onderstaande stappen.

### 3.1 Aanvragen systeemcertificaten bij VECOZO voor iWlz-netwerkmodel

Via het Systeemcertificaatbeheer van VECOZO kan een nieuw certificaat worden aangevraagd. De contactpersoon van de organisatie kan dit doen.

Zie ook: [VECOZO | Hoe vraag ik een systeemcertificaat aan?](https://www.vecozo.nl/support/Account/systeemcertificaat/hoe-vraag-ik-een-systeemcertificaat-aan/)

!!! note
    Voor het iWlz-netwerkmodel moet zowel voor test- als voor productieomgeving een certificaat worden aangevraagd.

### 3.2 Installeren systeemcertificaten

De aangevraagde certificaten worden geïnstalleerd.

### 3.3 Vastleggen IP adressen bij Systeemcertificaat in VECOZO portal

De IP-adressen van de deelnemer moeten bij VECOZO worden geregistreerd als extra beveiligingsmaatregel. Een deelnemer kan uitsluitend vanaf geregistreerde adressen verbinding maken met het iWlz-netwerk. Meer informatie is beschikbaar via de website van [VECOZO | Hoe kan ik mijn IP-adres registreren?](https://www.vecozo.nl/support/Account/systeemcertificaat/hoe-kan-ik-mijn-ip-adres-registreren/) en het artikel [IT-Infrastructuur > Identificatie & authenticatie - 2.4 Controle op IP-adressen](../../it-infrastructuur/identificatie_authenticatie#24-controle-op-ip-adressen).

### 3.4 Aanmelden resource-server endpoints

Binnen het iWlz-netwerk wordt informatie gedeeld via registers die via GraphQL te benaderen zijn. Om te achterhalen welke registers en bijbehorende services in het netwerk beschikbaar zijn, is een adresboek nodig. Dit fungeert als een register van registers en bevat informatie over de verschillende gegevensdiensten die door netwerkdeelnemers worden aangeboden.

!!! note
    Als voorziening hiervoor is het ZORG-AB bedoeld, maar dit is momenteel nog niet geschikt voor gebruik binnen het iWlz-netwerk. Op termijn is aansluiting op ZORG-AB wel het doel. Tot dat moment wordt gebruikgemaakt van een tijdelijke voorziening in een van de ZORG-AB specificatie afgeleid formaat.  
    De specificatie daarvan, inclusief de adreslijst, toegangsinformatie en de manier waarop adressen aangemeld kunnen worden, is beschikbaar via: [GitHub - iStandaarden/iWlz-adresboek-public: Tijdelijk alternatief voor ZORG-AB aansluiting](https://github.com/iStandaarden/iWlz-adresboek-public)

### 3.5 Toestemmingsverklaring

Wanneer een deelnemer gebruikmaakt van softwareleveranciers of tussenpersonen om namens de eigen organisatie te communiceren binnen het iWlz-netwerkmodel, dient voor deze partijen een toestemmingsverklaring te worden ingesteld.

Meer informatie is te vinden op de website van VECOZO:

- [https://www.vecozo.nl/support/aanmelden-wijzigen/](https://www.vecozo.nl/support/aanmelden-wijzigen/) onderdeel Toestemmingsverklaringen
- [https://www.vecozo.nl/support/aanmelden-wijzigen/toestemmingsverklaringen/hoe-stel-ik-een-toestemmingsverklaring-in/](https://www.vecozo.nl/support/aanmelden-wijzigen/toestemmingsverklaringen/hoe-stel-ik-een-toestemmingsverklaring-in/)

---
