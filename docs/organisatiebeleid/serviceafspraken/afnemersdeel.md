
## 1. Inleiding

In dit artikel zijn de serviceafspraken opgenomen die gelden voor **afnemers** binnen het iWlz-netwerkmodel. Deze afspraken beschrijven de verantwoordelijkheden van afnemers bij het gebruik van het netwerk en de bijbehorende diensten.

De serviceafspraken in dit deel hebben betrekking op onder meer:

- het gebruik van de testomgeving;
- het organiseren van eerstelijns ondersteuning (servicedesk afnemer);
- het naleven van logische toegangsbeveiliging;
- het uitvoeren van incident- en probleembeheer;
- het uitvoeren van capaciteits- en continuïteitsbeheer;
- het uitvoeren van logging en monitoring binnen de eigen organisatie.

Dit artikel gaat uitsluitend in op de rol van afnemers. Afspraken over diensten van de [operationeel netwerkbeheerder](./operationeel_netwerkbeheer) of beheer door [bronhouders](./bronhoudersdeel) zijn opgenomen in de desbetreffende delen van het afsprakenstelsel. Daarnaast zijn de algemene afspraken over serviceafspraken van toepassing die zijn verwoord in het artikel [serviceafspraken](./index).

## 2. Algemene serviceafspraken afnemers

### 2.1 Gebruik testomgeving

Afnemers maken bij aansluiting en wijzigingen gebruik van de door de bronhouder/netwerkpartij beschikbaar gestelde testomgeving. Daarbij gelden de volgende voorwaarden:

- Afnemers gebruiken de testomgeving verplicht bij onboarding.
- Gebruik van productiegegevens is niet toegestaan. Voor het uitvoeren van tests stelt de bronhouder een representatieve test-set beschikbaar voor de afnemers.
- Indien de test-set niet voldoet voor de test die een afnemer wil uitvoeren, dan kan de afnemer een verzoek bij de bronhouder indienen voor het aanpassen van de test-set. Een bronhouder kan dit verzoek weigeren.
- Bij omvangrijke of belastende tests die de beschikbaarheid of performance van het iWlz-netwerk, het register of de centrale (test)infrastructuur merkbaar kunnen beïnvloeden, zoals loadtesten (een vorm van performancetesten), stemt de afnemer dit vooraf af met de operationeel netwerkbeheerder. De operationeel netwerkbeheerder beoordeelt welke bronhouder(s) door de test geraakt kunnen worden en stemt dit met hen af. De test wordt vervolgens in overleg gepland.

> ⚠️
> De definitieve specificaties van de testomgevingen en testdata worden bepaald na afronding van het onderzoek naar de testbehoefte van deelnemers.

## 3. Dienstverlening afnemers

### 3.1 Servicedesk afnemer

Afnemers organiseren zelf de eerstelijns ondersteuning van hun gebruikers. Daarbij gelden de volgende afspraken:

- Iedere afnemer kan één of meerdere servicedesks inrichten.
- De servicedesk afnemer is het aanspreekpunt richting de servicedesk operationeel netwerkbeheerder en visa versa.
- Incidenten worden uitsluitend via de servicedesk afnemer gemeld aan de servicedesk operationeel netwerkbeheerder.
- Individuele gebruikers nemen geen direct contact op met de servicedesk van de operationeel netwerkbeheerder of de servicedesk van de bronhouders.

### 3.2 Logische toegangsbeveiliging

Generieke afspraken over logische toegangsbeveiliging zijn opgenomen in [Serviceafspraken_Logische toegangsbeveiliging](./index#38-logische-toegangsbeveiliging). Dit deel bevat geen aanvullende afspraken specifiek voor afnemers.

## 4. Beheerprocessen afnemers

### 4.1 Incidentafhandeling afnemers

Incidenten kunnen betrekking hebben op verschillende onderdelen van het iWlz-netwerkmodel:

- **Bronhouder** - incidenten die verband houden met de beschikbaarheid of juistheid van brongegevens.
- **Afnemer** - incidenten binnen de eigen organisatie of infrastructuur van de afnemer. Deze incidenten vallen buiten de scope van de serviceafspraken.
- **Netwerk** - incidenten die het iWlz-netwerk zelf raken of meerdere deelnemers beïnvloeden.

Afnemers handelen incidenten als volgt af:

1. De eigen servicedesk (servicedesk afnemer) ontvangt incidentmeldingen van gebruikers.
2. De servicedesk afnemer onderzoekt het incident, stelt urgentie en impact vast en bepaalt of het incident primair een inhoudelijke vraag over brongegevens is of een technisch incident in het iWlz-netwerk.
3. Indien de impact buiten de eigen organisatie treedt, handelt de afnemer als volgt:
   1. bij **inhoudelijke vragen over brongegevens** meldt de servicedesk afnemer het incident bij de servicedesk van de betreffende bronhouder,
   2. bij **technische incidenten in het iWlz-netwerk of bij twijfel over de oorzaak** meldt de servicedesk afnemer het incident bij de servicedesk operationeel netwerkbeheerder.

Afnemers borgen intern dat bovenstaande werkwijze is vastgelegd en ingericht.

De servicedesk operationeel netwerkbeheerder bepaalt in samenwerking met de betrokken partijen urgentie, vervolgstappen en welke partij verantwoordelijk is voor het oplossen van het achterliggende probleem.

### 4.2 Capaciteitsbeheer afnemers

Afnemers maken inschattingen van verwacht gebruik bij substantiële veranderingen in het gebruik van producten en diensten die onder de scope van de iWlz netwerkserviceafspraken vallen. Deze inschattingen worden tijdig gemeld bij de centrale servicedesk, zodat leveranciers maatregelen kunnen nemen om performance en beschikbaarheid te borgen.

Escalatie bij productieverstorende incidenten of bij het niet naleven van deze prestatieafspraken vindt plaats conform [Serviceafspraken_Geschillen en escalatie](./index#33-geschillen-en-escalatie)

| **Prestatienorm** | **Meetmethode** | **Bijzonderheden** |
| :--- | :--- | :--- |
| Afnemers maken inschattingen van verwacht gebruik bij substantiële veranderingen en melden deze tijdig bij de centrale servicedesk. | N.t.b. | - |

### 4.3 Continuïteitsbeheer afnemers

Afnemers zijn zelf verantwoordelijk voor de beschikbaarheid van de eigen infrastructuur (netwerk) en componenten (inlezende applicaties etc.). Dit onderdeel valt buiten de scope van de iWlz netwerk serviceafspraken.

### 4.4 Configuratiebeheer afnemers

Generieke afspraken over configuratiebeheer zijn opgenomen in [Serviceafspraken_Configuratiebeheer](./index#39-configuratiebeheer). Er zijn geen aanvullende afspraken specifiek voor afnemers.

### 4.5 Logging, monitoring en rapportage afnemers

Generieke afspraken over logging en monitoring zijn opgenomen in [Serviceafspraken](./index). Dit deel bevat geen aanvullende afspraken specifiek voor afnemers.


