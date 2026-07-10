# nID-netwerkstelsel

!!! info "Versie: *17-12-2025* | Status: *Definitief*"

## 1. Inleiding

!!! note
    Dit artikel beschrijft het nID netwerkstelsel en haar netwerkservices zoals autoriseren. Met de juiste autorisatie kunnen bronhouders en deelnemers acties uitvoeren zoals notificaties versturen en registers bevragen. De inhoud van dit artikel is gebaseerd op [_RFC0014 Functionele uitwerking aanvragen van autorisatie_](https://github.com/iStandaarden/iWlz-RequestForComment/blob/main/RFC/RFC0014%20-%20Functionele%20uitwerking%20aanvragen%20van%20autorisatie.md) die is vastgesteld in december 2024.

Het nID netwerkstelsel is de basisinfrastructuur voor veilige gegevensuitwisseling binnen het iWlz-netwerkmodel. Het ondersteunt processen zoals authenticatie, autorisatie, en gegevensraadpleging door gebruik te maken van een federatief model. De kern van het stelsel wordt beheerd door VECOZO en maakt gebruik van open-source componenten, waaronder Open Policy Agent (OPA).

Het nID netwerkstelsel is opgebouwd uit de onderstaande onderdelen en netwerkservices.

- Deelnemers
- Autoriseren
- Datatoegangspunten (Resource-server)
- Policies:
    - Policy Enforcement Point (PEP)
    - Policy Decision Point (PDP)
    - Policy Retrieval Point (PRP)
    - Policy Administration Point (PAP)
    - Policy Information Point (PIP)

De bovenstaande onderdelen en netwerkservices van het nID netwerkstelsel worden in onderstaande paragrafen toegelicht. Hieronder volgt eerst een totaaloverzicht om de relaties tussen de verschillende onderdelen weer te geven.

```mermaid

flowchart TD
    AuthServer["Autorisatieserver"]
    Client(["Client"])
    PEP["Policy Enforcement Point<br/>(PEP)"]

    PDP["Policy Decision Point<br/>(PDP)"]
    DataAccess[("Data Toegangspunt<br/>(Resource-Server)")]
    PIP["Policy Information Point<br/>(PIP)"]

    PRP["Policy Retrieval Point<br/>(PRP)"]
    PAP["Policy Administration Point<br/>(PAP)"]

    Client -->|Tokenaanvraag| AuthServer
    AuthServer -->|JWT Access-token| Client

    Client -->|"GraphQL + JWT verzoek"| PEP
    PEP -->|Gevraagde data| Client

    PEP -->|Toegangsverzoek| PDP
    PDP -->|Toegangsbesluit| PEP

    PDP -->|Geautoriseerde data-aanvraag| DataAccess
    DataAccess -->|Gevraagde data| PDP

    PDP -->|Contextinformatie opvragen| PIP
    PIP -->|Contextinformatie retourneren| PDP

    PDP -->|Beleidsregels ophalen| PRP
    PRP -->|Beleidsregels retourneren| PDP

    PAP -->|Beleidsregels beheren| PRP

```
> *Afbeelding: Algeheel overzicht relaties*

![algeheel-overzicht-relaties.png](../img/nID-netwerkstelsel-algeheel-overzicht-relaties.png)
> *Afbeelding: Algeheel overzicht relaties*


## 2. Deelnemers

Om als deelnemer deel te nemen aan het nID netwerkstelsel, is het belangrijk te begrijpen dat toegang en gegevensuitwisseling binnen het stelsel streng worden gereguleerd. Dit waarborgt de beveiliging en naleving van beleidsregels, terwijl het tegelijkertijd een flexibele en efficiënte samenwerking tussen verschillende partijen mogelijk maakt.

Elke deelnemer speelt een rol binnen het federatieve stelsel en moet aan specifieke vereisten voldoen om toegang te krijgen tot registers en andere middelen. Deze vereisten zijn ontworpen om:

- Authenticatie: Zorgen dat alleen vertrouwde partijen deelnemen.
- Autorisatie: Beheersen wie toegang heeft tot welke gegevens.
- Traceerbaarheid: Inzicht bieden in het gebruik van gegevens en acties binnen het stelsel.

Het naleven van deze vereisten is essentieel om een veilige, betrouwbare en compliant werking van het netwerk te garanderen.

### 2.1. Uitgangspunten om deel te kunnen nemen aan het nID netwerkstelsel

Hieronder zijn de uitgangspunten om deel te kunnen nemen aan het nID netwerkstelsel verwoord.

- Elke deelnemer in het iWlz-netwerkmodel heeft een attest van deelname nodig. Momenteel wordt dit via VECOZO verzorgd tijdens de [onboarding](https://wlz.atlassian.net/wiki/spaces/IWLZAS/pages/23071441).
- Elke deelnemer heeft een authenticatiemiddel van een vertrouwde uitgever. Waar momenteel een VECOZO systeemcertificaat wordt gebruikt, kan t.z.t. ook PKIOverheid worden vertrouwd of het gebruik van DiD en Verifiable Credentials mogelijk zijn.
- Elke deelnemer moet zijn endpoints registreren in het Adresboek, dit geldt voor de endpoints van de autorisatieserver, PEP en de resourceserver. Op dit moment is het Adresboek nog niet gerealiseerd, endpoints worden nu in een aparte lijst bijgehouden. [Link tijdelijk Adresboek](https://github.com/iStandaarden/iWlz-adresboek-public).

## 3. Autoriseren

Voor het uitvoeren van alle activiteiten in het iWlz-netwerkmodel zijn autorisaties noodzakelijk. Voorbeelden van activiteiten zijn: lezen, schrijven, aanpassen en verwijderen van data uit registers. Daarnaast zijn er ook autorisaties nodig voor het mogen versturen van notificaties en meldingen. Deze autorisaties kunnen worden aangevraagd bij de autorisatieserver. Voor het aanvragen van een autorisatie heeft een deelnemer een authenticatiemiddel nodig van een vertrouwde uitgever.

### 3.1. Schematische weergave aanvragen van autorisatie

In het onderstaande schema wordt de basis uitgelegd voor het aanvragen van autorisatie en hoe vervolgens een raadpleging (GraphQL request) verloopt.


```mermaid
sequenceDiagram
    actor Client as Deelnemer (Client)
    participant AuthzServer as Autorisatieserver

    Client->>AuthzServer: 1. Aanvragen van autorisatie<br/>(scope, authenticatiemiddel)
    AuthzServer->>AuthzServer: 2. Valideer authenticatiemiddel
    AuthzServer->>AuthzServer: 3. Beoordeel scope<br/>(beleidsregels)
    AuthzServer->>AuthzServer: 4. Controleer audience
    AuthzServer-->>Client: 5. Genereer en retourneer<br/>(access token)
    AuthzServer--xClient: 6. Foutmeldingen<br/>(400/403/500)
```


| **#** | **Processtap** | **Beschrijving** |
| --- | --- | --- |
| 1 | Aanvragen van autorisatie | De deelnemer (Client) vraagt autorisatie aan bij het token endpoint van de autorisatieserver. |
| 2 | Valideer authenticatiemiddel | De autorisatieserver valideert de client op basis van het aangeboden authenticatiemiddel (bijv. certificaat). |
| 3 | Beoordeel scope | De autorisatieserver doorloopt voor elke aanvraag de rule-engine om de aangevraagde scopes te beoordelen. |
| 4 | Controleer audience | De rule-engine valideert de aangevraagde scopes op basis van ingestelde beleidsregels. |
| 5 | Genereer en retourneer | Als de aanvraag succesvol is, wordt een access-token gegenereerd met de goedgekeurde scopes en resources. |
| 6 | Foutmeldingen | Fouten in de aanvraag of van de server worden geretourneerd. |

### 3.2. Autorisatieserver

Binnen het netwerk is momenteel een autorisatieserver beschikbaar, bij deze autorisatieserver kunnen netwerkdeelnemers toestemming tot autorisatie aanvragen. De autorisatieaanvraag voldoet aan de OAuth 2.0 standaard. Het resultaat van de aanvraag is een access-token (JWT).

Toegang tot deze autorisatieserver is beperkt tot alleen netwerkdeelnemers en alleen via het token-endpoint waarvoor een vertrouwd authenticatiemiddel vereist is. Momenteel alleen met gebruik van een VECOZO systeemcertificaat.

#### 3.2.1. Grant\_type

OAuth 2.0 ondersteunt verschillende "flow standaarden" (ook wel grants genoemd) om toegang te verlenen. Voor server-naar-server communicatie wordt meestal de “Client Credential Flow” toegepast. Deze “Client Credential flow” wordt ook gebruikt bij het aanvragen van toestemming tot autorisatie bij de autorisatieserver in het netwerk stelsel.

> Voor meer informatie zie Logius [NL GOV Assurance profile for OAuth 2.0 v1.1.0](https://gitdocumentatie.logius.nl/publicatie/api/oauth/#use-case-client-credentials-flow).

#### 3.2.2. Scopes

Een (OAuth) scope geeft het bereik van autorisatie tot een resource aan. Een scope kan een deelnemer bij de autorisatieserver aanvragen. Dit zal het systeem gebruiken om na te gaan welke acties een gebruiker mag doen voor het raadplegen van registers. De autorisatieserver vereist dat de client in het autorisatieverzoek een scope parameter specificeert.

De scope speelt een cruciale rol in het aanvragen van autorisatie. De scope geeft het bereik aan waarvoor autorisatie wordt aangevraagd en daarmee beperkt en specificeert welke gegevens of functionaliteiten de client kan gebruiken of bevragen.

Een scope is opgebouwd uit de combinatie van resource\_type en de benodigde toegang.

**Voorbeeld:** De onderstaande scope is bruikbaar voor de autorisatieaanvraag tot het opvragen (read) van indicatiegegevens uit het indicatieregister:

```json
"scope":"registers/wlzindicatieregister/indicaties:read"
``` 
Indien de autorisatieserver de scope van de aanvraag goedkeurt, zal de “scope” in het access-token terugkomen. De waarde van de scope parameter in het verzoek is uitgedrukt als een spatie-gescheiden lijst van case-sensitive strings.

De volgorde van de spatie-gescheiden strings is onbelangrijk. De autorisatieserver zal elke string verwerken als extra scope in het access-token. Indien er 2 dezelfde scopes worden meegegeven, dan worden deze samengevoegd tot 1 unieke scope.

Voor een goede request flow is het nodig om de scope in de request body op te stellen zoals in onderstaande voorbeelden wordt weergegeven.

**Voorbeeld:** van een scope request parameter waarin meerdere scopes worden aangevraagd:

```json
"scope":"registers/wlzbemiddelingsregister/bemiddelingen:read registers/wlzbemiddelingsregister/bemiddelingen:write"
```

Als een client een scope aanvraagt waarvoor hij geen autorisatie heeft, dan zal de autorisatieserver een foutmelding retourneren "Access denied, invalid scope", ongeacht of er in dezelfde aanvraag scopes zitten waarvoor wel is geautoriseerd.

Als de client geen of een lege scope parameter meegeeft in zijn request aan de autorisatieserver, dan MOET de autorisatieserver het verzoek verwerken door een vooraf gedefinieerde standaard scope toe te passen of een "Invalid scope" foutmelding te retourneren. Als de autorisatieserver een verzoek ontvangt waar 1 of meerdere Scopes incorrect zijn MOET de autorisatieserver een "Access denied, invalid scope" retourneren.

Een standaard scope zou kunnen zijn: _“user/profile:read”_ (Deze scope is als voorbeeld en bestaat in het huidige netwerkmodel niet)

De scopes zijn beschreven in de verschillende diensten of uitwisselprofielen.

#### 3.2.3. Audience

Als je in OAuth een Access-token aanvraagt, moet je specificeren wie of wat de uiteindelijke ontvanger van deze token is, deze ontvanger wordt aangeduid als Audience. Dit helpt om te verzekeren dat het token alleen kan worden gebruikt bij de bedoelde resource-server en nergens anders.

- Het opgeven van een Audience is verplicht.
- Enkel één Audience is toegestaan.
- De audience moet een valide “https” URL zijn. De Audience is de afgeschermde URL van de resource-server welke ook alleen de Policy Enforcement Point van de resource-server vertrouwd.

#### 3.2.4. Access-token request

Een Access-token request is een toegangsverzoek om toegang te krijgen tot een datatoegangspunt zoals een register. In een Access-token request wordt aangegeven namens wie het request wordt uitgevoerd. Dit kan op twee manieren, als de partij zelf of als actor namens een partij. In beide gevallen wordt een request gedaan met een VECOZO systeemcertificaat om te bepalen wie de partij is.

Softwareleveranciers of intermediairs, die namens zorgaanbieders of zorgkantoren handelen, maken hierbij gebruik van een actor om aanvragen in te dienen.

Om toegang te krijgen tot een datatoegangspunt zoals een register, moet in het tokenaanvraagproces naast het VECOZO-systeemcertificaat ook worden aangegeven namens welke partij de actor handelt. Deze partijen kunnen momenteel zorgaanbieders (geïdentificeerd door AGB-codes) of zorgkantoren (geïdentificeerd door UZOVI-codes) zijn.

De actor fungeert als vertegenwoordiger van de instantie en zorgt ervoor dat toegangsverzoeken correct en veilig worden geautoriseerd, zodat altijd duidelijk is namens welke partij de aanvraag wordt uitgevoerd.

> Voor zowel een eigen aanvraag als een aanvraag namens een andere partij geldt:
>
> - Een request header MOET het Content-Type: application/json bevatten om aan te geven dat de body in JSON formaat is.
> - Een token request kan alleen worden aangevraagd met een VECOZO systeemcertificaat dit wordt dan gezien als een VECOZO identity.
> - De maximale access-token-duration (exp) is 1 uur, ongeacht de scope.

Hieronder worden voor zowel een eigen aanvraag als een aanvraag namens een andere partij voorbeelden gegeven van een access-token request.

##### 3.2.4.1 Een Access-token aanvragen voor jezelf

Een partij vraagt een Access-token aan voor zichzelf. Een voorbeeld hiervan is:

```bash linenums="1"
POST https://api.vecozo.nl/netwerkmodel/v3/auth/token

{
    "grant_type": "client_credentials",
    "scope": "registers/wlzindicatieregister/indicaties:read",
    "audience": "https://koppelpunt.ciz.nl/iwlz/indicatieregister/v2/graphql"
}
```

`POST https://api.vecozo.nl/netwerkmodel/v3/auth/token { "grant_type": "client_credentials", "scope": "registers/wlzindicatieregister/indicaties:read", "audience": "https://koppelpunt.ciz.nl/iwlz/indicatieregister/v2/graphql" }`

De response is een JWT:

`{ "iss":"auth.nid", "sub":"20001000001131", "aud":"https://koppelpunt.ciz.nl/iwlz/indicatieregister/v2/graphql", "exp":1731318519, "nbf":1730713599, "iat":1730713719, "jti":"eaa55b46-8d97-46ab-82a3-3a5a44170c67", "_claim_names":{ "agb":"localhost", "uzovi":"localhost" }, "_claim_sources":{ "localhost":{ "jwt":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2IiOiIwMTIzNDUxMjMiLCJ1em92aSI6bnVsbH0.Y6XJZI7Ri0gV8Xqh6HZ0kk97oLu6sixc3T2v2K2GKfU" } }, "client_id":"20001000001131", "subjects":null, "scopes":[ "registers/wlzindicatieregister/indicaties:read" ], "consent_id":"7a8ddf4d-8953-4232-9714-4d1926888a65", "client_metadata":null }`

##### 3.2.4.2 Een Access-token aanvragen namens een andere partij

Wanneer als actor een request wordt ingediend, moet het token worden uitgebreid met een “access\_token/sub” element. Dit element bevat de identificatie van de partij waarvoor een token wordt opgehaald. Op het moment kan er geacteerd worden als zorgkantoor of zorgaanbieder. De waarde van het element kan er als volgt uit zien:

| **Instantie Type** | **Identificatie** | **Element waarde** |
| --- | --- | --- |
| Zorgkantoor | 5000 (uzovi) | uzovi:5000 |
| Zorgaanbieder | 012345678 (agb) | agbcode:012345678 |

Voorbeeld Access-token request als actor namens een zorgkantoor:

`POST https://api.vecozo.nl/netwerkmodel/v3/auth/token { "grant_type": "client_credentials", "scope": "registers/wlzindicatieregister/indicaties:read", "audience": "https://koppelpunt.ciz.nl/iwlz/indicatieregister/v2/graphql", "access_token" : { "sub" : "uzovi:5000" } }`

De response is een JWT:

`{ "iss":"auth.nid", "sub":"20001000001131", "aud":"https://koppelpunt.ciz.nl/iwlz/indicatieregister/v2/graphql", "exp":1731318519, "nbf":1730713599, "iat":1730713719, "jti":"eaa55b46-8d97-46ab-82a3-3a5a44170c67", "_claim_names":{ "agb":"localhost", "uzovi":"localhost" }, "_claim_sources":{ "localhost":{ "jwt":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2IiOm51bGwsInV6b3ZpIjoiNTAwMCJ9.9mRf50AuhkVfGwIcqYA4I_8fChcXg_N9h-VHhMo2MlE" } }, "client_id":"uzovi:5000", "subjects":null, "scopes":[ "registers/wlzindicatieregister/indicaties:read" ], "consent_id":"7a8ddf4d-8953-4232-9714-4d1926888a65", "client_metadata":null, "act":{ "sub":"20001000001131" } }`

## 4. Datatoegangspunten (Resource-server)

Datatoegangspunten, ook wel resource-servers genoemd, zijn de eindpunten binnen het nID-netwerkstelsel waar gegevens toegankelijk worden gemaakt. Ze vormen een cruciaal onderdeel in de gegevensverwerking en worden alleen bereikt wanneer een verzoek succesvol is gevalideerd door de voorafgaande beveiligings- en autorisatieprocessen.

### 4.1. Functies van datatoegangspunten

De datatoegangspunten hebben in het algemeen een aantal functies die hieronder worden toegelicht.

#### 4.1.1. Dataopslag en raadpleging:

1. Gegevensbeheer:
   - Een datatoegangspunt beheert en verstrekt gegevens op basis van goedgekeurde toegangsverzoeken.
   - Alleen de gegevens die voldoen aan de beleidsregels worden ontsloten.
2. Dataconsistentie:
   - Registers moeten data consistent opslaan en up-to-date houden, zelfs bij hoge belasting of parallelle aanvragen.
3. Auditlogboek:
   - Alle dataraadplegingen en wijzigingen moeten worden vastgelegd in een auditlogboek voor compliance en toezicht.

#### 4.1.2. Veiligheid en toegangscontrole

1. Authenticatie en autorisatie: Elk verzoek moet worden gevalideerd op basis van een Access-token, scope en beleidsregels via het Policy Enforcement Point (PEP).
2. Minimale toegangsrechten:
   - Registers moeten werken volgens het least privilege-principe, waarbij deelnemers alleen toegang krijgen tot de gegevens die strikt noodzakelijk zijn.
3. Bescherming tegen misbruik:
   - Er moeten limieten worden ingesteld op het aantal toegangsverzoeken (rate limiting) om misbruik, zoals DDoS-aanvallen, te voorkomen.

#### 4.1.3. Schaalbaarheid en prestaties

1. Schaalbare architectuur:
   - Datatoegangspunten moeten schaalbaar zijn, zowel horizontaal als verticaal, om een toenemend aantal gebruikers en verzoeken te ondersteunen.
2. Caching:
   - Implementatie van caching voor veelvoorkomende dataquery’s om de responstijd te verbeteren en de belasting op het netwerk te verminderen. Let op: of een deelnemer cached, hoe en hoelang is afhankelijk van de bronhouder en wat hij hierover afspreekt. Hij is tenslotte verwerkingsverantwoordelijke.
3. Response tijden:
   - Over response tijden kunnen we nu nog niet veel zeggen en eventuele afspraken hierover worden op een later moment aan de hand van ervaringen en metingen bepaald. Deze zullen dan worden verwerkt in de uitwisselprofielen.

#### 4.1.4. Interactie met de PEP

1. Routing van verzoeken:
   1. Het Policy Enforcement Point (PEP) moet verzoeken naar het juiste datatoegangspunt routeren, afhankelijk van de gevraagde gegevens en beleidsregels. Het adresboek zal gebruikt worden voor het registreren van de endpoints en contactgegevens van de verschillende registers.
2. Feedbackloop naar de PEP:
   1. Het datatoegangspunt moet duidelijke foutcodes en antwoorden verstrekken aan de PEP om de client correct te informeren (bijvoorbeeld 403 Toegang Geweigerd).

### 4.2. Procesflow interactie met een datatoegangspunt

Hier is een diagram dat de interactie met een datatoegangspunt schematisch weergeeft:

interactie-datatoegangspunt.png openen

![interactie-datatoegangspunt](../img/nID-netwerkstelsel-interactie-datatoegangspunt.png)

PlantUML

`@startuml skinparam monochrome true skinparam defaultTextAlignment center actor "Deelnemer (Client)" as Client participant "Policy Enforcement Point\n(PEP)" as PEP participant "Datatoegangspunt\n(Resource-Server)" as AccessPoint autonumber "<b>[000]" Client -> PEP : "GraphQL-query\n+ access-token" PEP -> AccessPoint : "Doorsturen geautoriseerd verzoek" AccessPoint --> PEP : "Gevraagde data" PEP -> Client : "Gevraagde data" @enduml`

| **#** | **Processtap** | **Beschrijving** |
| --- | --- | --- |
| 1 | GrapQL-query + Acces-token | De deelnemer dient een GraphQL-query in bij de PEP, samen met een geldig access-token. |
| 2 | Doorsturen geautoriseerd verzoek | De PEP valideert de query en besluit of deze naar het juiste datatoegangspunt wordt doorgestuurd. |
| 3 | Gevraagde data | Het datatoegangspunt verwerkt de query en retourneert de gevraagde gegevens aan de PEP. |
| 4 | Gevraagde data | De PEP routeert het resultaat aan de client. De PEP heeft hierbij geen toegang tot de gerouteerde data en dus geen mogelijkheid tot bewerking of inzicht van de data. |

## 5. Policy Enforcement Point (PEP)

Een Policy Enforcement Point (PEP) regelt toegang tot resource-servers van deelnemers en beschermt deze resource-servers tegen ongeautoriseerde toegang/verzoeken.

De PEP stuurt alle toegangsverzoeken naar resource-servers eerst door naar het PDP ter beoordeling. Waarna (conform de beslissing) het verzoek wordt toegestaan of wordt afgewezen (Allow of Deny).

- De PEP is voor netwerkdeelnemers alleen toegankelijk op het GraphQL-endpoint.
- De PEP vereist een vertrouwd authenticatiemiddel en een geldig Access-Token.
- De netwerkdeelnemer registreert zelf in het adresboek welke PEP zijn resource-server beschermt.
- De resource-servers van de netwerkdeelnemers vertrouwen de PEP op het valideren van de grondslag.
- In het netwerk is momenteel maar één PEP(redundant) beschikbaar.

### 5.1 GraphQL Request naar de PEP

Het versturen van een GraphQL Request naar de PEP is onderdeel binnen het toegangscontroleproces van het nID-netwerkstelsel. Dit proces stelt een deelnemer (client) in staat om met behulp van een access-token een verzoek te doen bij de Policy Enforcement Point (PEP). De PEP speelt hierbij een centrale rol door de query te valideren, beleidsregels toe te passen en uiteindelijk het verzoek door te sturen naar de juiste resource-server voor verdere verwerking.

Het huidige endpoint dat wordt aangesproken is de resource-server. Hier wordt een reeks validatiestappen doorlopen om de veiligheid, integriteit en naleving van beleidsregels te waarborgen voordat een verzoek wordt afgehandeld. Deze validatiestappen zijn nodig om ervoor te zorgen dat alleen geautoriseerde verzoeken toegang krijgen tot de gevraagde gegevens.

### 5.2 Procesflow interactie met de PEP

Hier is een diagram dat de interactie met een PEP schematisch weergeeft:

interactie-pep.png openen

Procesflow PEP

![interactie-pep](../img/nID-netwerkstelsel-interactie-pep.png)

PlantUML

`@startuml graphql_request skinparam ParticipantPadding 20 skinparam BoxPadding 10 box "Deelnemer" participant "Client" as Client end box box "nID" participant "PEP" as PEP participant "PDP" as PDP end box box "Register" participant "Resource-Server" as resourceserver end box autonumber "<b>[000]" Client -> PEP: **GraphQL Request**\nAuthenticatiemiddel + JWT Access-Token + Query activate Client activate PEP note right of PEP: Inline filtering requests PEP -> PEP: Valideer Authenticatiemiddel PEP -> PEP: Valideer Access-Token PEP -> PDP: Query met policy valideren activate PEP #LightGray activate PDP PDP -> PDP: Valideer query PDP -> PDP: Verify context information PDP -> PEP: Query allowed deactivate PDP PEP -> resourceserver: GraphQL Request deactivate PEP activate resourceserver resourceserver --> PEP: 200 Response (GraphQL) deactivate resourceserver PEP --> Client: 200 Response (GraphQL) deactivate PEP deactivate Client @enduml`

| **#** | **Processtap** | **Beschrijving** |
| --- | --- | --- |
| 1 | GraphQL Request | Een client kan met het access-token een verzoek uitzetten bij de PEP om een raadpleging te doen bij een resource-server. |
| 2 | Valideer Authenticatiemiddel | Valideren van de client o.b.v. het aangeboden authenticatiemiddel. |
| 3 | Valideer Access-token | Valideren van de access-token o.a. op eigenaar en geldigheid. |
| 4 | Query met policy valideren | De query wordt aangeboden aan het PDP om te beoordelen of deelnemer de ingediende query mag uitvoeren  en of de verplichte onderdelen aanwezig zijn. |
| 5 | Valideer query | Bepaal of de query aan de gestelde policy of beleidsregel voldoet. |
| 6 | Verify context information | Het kan nodig zijn dat het PDP contextinformatie nodig heeft om de query te valideren. Dit kan het PDP doen bij een externe resource. |
| 7 | Query allowed | Query voldoet aan de policy. |
| 8 | GraphQL Request | De PEP routeert het graphQL verzoek aan de juiste resource-server. |
| 9 | 200 Response (GraphQL) | De resource-server stuurt het GraphQL resultaat terug. |
| 10 | 200 Response (GraphQL) | De PEP routeert het resultaat aan de client. De PEP heeft hierbij geen toegang tot de gerouteerde data en dus geen mogelijkheid tot bewerking of inzicht van de data. |

Na stap 8 van bovenstaande procesflow wordt het request dat is toegestaan doorgestuurd naar de resource server. Aan dit request wordt een request header ‘claims’ toegevoegd met daarin de door de deelnemer gebruikte JWT exclusief de JWT header en signature. Deze header kan gebruikt worden voor eventuele logging doeleinden door de resource server.

Voorbeeld van een request header ‘claims’:

`{ "iss": "auth.nid", "sub": "uzovi:5529", "aud": "https://koppelpunt.test.ciz.nl/iwlz/indicatieregister/v2/graphql", "exp": 1729689721, "nbf": 1729084801, "iat": 1729084921, "jti": "38679b9f-6495-44d4-9875-503aff8e669e", "_claim_names": { "agb": "localhost", "uzovi": "localhost" }, "_claim_sources": { "localhost": { "jwt": "eyJhbGciOiAiSFMyNTYiLCAidHlwIjogIkpXVCJ9.eyJhZ2IiOiBudWxsLCAidXpvdmkiOiAiNTUyOSJ9.4YmLNTMhftIz7jL3_BOuJG0uBVHA2MobjsbMXJ9hctw" } }, "client_id": "uzovi:5529", "subjects": null, "scopes": [ "registers/wlzindicatieregister/indicaties:read" ], "consent_id": "5879861e-ddee-4212-974c-1cdbb4a0c61b", "client_metadata": null, "act": { "sub": "40000000100507" } }`

### 5.3 PEP Endpoints

In het netwerkstelsel zijn momenteel onderstaande PEP’s in gebruik.

| **Omgeving** | **URL** |
| --- | --- |
| TST | [https://tst-api.vecozo.nl/tst/netwerkmodel/v3/pep](https://tst-api.vecozo.nl/tst/netwerkmodel/v3/pep) |
| PRD | [https://api.vecozo.nl/netwerkmodel/v3/pep](https://api.vecozo.nl/netwerkmodel/v3/pep) |

## 6. Policy Decision Point (PDP)

Het Policy Decision Point (PDP) speelt een centrale rol in de toegangscontrole. Het PDP is verantwoordelijk voor het nemen van toegangsbeslissingen op basis van beleidsregels (policies) en analyseert toegangsverzoeken die worden ingediend met een GraphQL-query.

Hieronder een diagram dat de interactie tussen het PDP en andere componenten schetst:

interactie-pdp-2.png openen

![interactie-pdp-2](../img/nID-netwerkstelsel-interactie-pdp-2.png)

Procesflow interactie PDP

PlantUML

`@startuml skinparam monochrome true skinparam defaultTextAlignment center participant "Policy Enforcement Point\n(PEP)" as PEP participant "Policy Decision Point\n(PDP)" as PDP participant "Policy Retrieval Point\n(PRP)" as PRP participant "Decision Log" as Log autonumber "<b>[000]" PEP -> PDP : "GraphQL-query\n+ access-token" PDP -> PRP : "Ophalen beleidsregels" PRP -> PDP : "Beleidsregels retourneren" PDP -> PEP : "Besluit toestaan/weigeren" PDP -> Log : "Besluit vastleggen" autonumber stop @enduml`

In onderstaande stappen wordt uitgelegd hoe het Policy Decision Point PDP werkt.

| **#** | **Processtap** | **Beschrijving** |
| --- | --- | --- |
| 1 | GraphQL-query + access token | Het Policy Enforcement Point (PEP) stuurt een toegangsverzoek in de vorm van een GraphQL-query naar het Policy Decision Point (PDP). Dit bestaat uit een query en access-token. |
| 2 | Ophalen beleidsregels | Het PDP stuurt een verzoek naar het Policy Retrieval Point (PRP) om de relevante beleidsregels op te halen. Deze beleidsregels worden gebruikt om te bepalen of de aangevraagde acties en entiteiten in de query zijn toegestaan. |
| 3 | Beleidsregels retourneren | Het PRP retourneert de beleidsregels aan het PDP. Deze beleidsregels bevatten de toegangscriteria die het PDP gebruikt om het verzoek te evalueren. |
| 4 | Besluit toestaan/weigeren | Het PDP evalueert het toegangsverzoek aan de hand van de ontvangen beleidsregels. Er wordt een besluit genomen:Allow: Toegang wordt verleend.Deny: Toegang wordt geweigerd. |
| 5 | Besluit vastleggen | Het PDP legt elk genomen besluit vast in een Decision Log. Het log bevat zaken zoals: details van de ingediende query, de gebruikte beleidsregels en het uiteindelijke toegangsbesluit (Allow of Deny). |

## 7. Policy Retrieval Point (PRP)

Het Policy Retrieval Point (PRP) speelt een cruciale rol in het beheer en de levering van beleidsregels (policies) binnen het nID-netwerkstelsel. Als centrale opslagplaats zorgt het PRP ervoor dat beleidsregels consistent worden opgeslagen, beheerd en toegankelijk zijn voor andere onderdelen, zoals het Policy Decision Point (PDP). Deze centrale aanpak waarborgt dat alle toegangsbeslissingen gebaseerd zijn op dezelfde regels, waardoor consistentie in toegangscontrole wordt gegarandeerd.

Daarnaast biedt het PRP transparantie door gebruik te maken van een versiebeheersysteem, zoals GitHub, waarmee alle wijzigingen in beleidsregels inzichtelijk en traceerbaar zijn. Dit maakt het eenvoudig om beleidsregels te beheren, bij te werken en wijzigingen consistent door te voeren in het hele netwerk, wat de beheerbaarheid aanzienlijk vergroot.

image-20250114-105000.png openen

Procesflow PRP

![image-20250114-105000](../img/nID-netwerkstelsel-image-20250114-105000.png)

PlantUML

`@startuml skinparam monochrome true actor "Deelnemer (Client)" as Client rectangle "Policy Enforcement Point\n(PEP)" as PEP rectangle "Policy Decision Point\n(PDP)" as PDP rectangle "Policy Retrieval Point\n(PRP)" as PRP Client -> PEP : "[1] Toegangsverzoek" PEP -down-> PDP : "[2] Valideren verzoek" PDP -down-> PRP : "[3] Ophalen beleidsregels" PRP -> PDP : "[4] Beleidsregels retourneren" PDP -> PEP : "[5] Besluit: toestaan of weigeren" PEP -> Client : "[6] Resultaat terugsturen" @enduml`

| **#** | **Processtap** | **Beschrijving** |
| --- | --- | --- |
| 1 | Toegangsverzoek | Het proces begint wanneer een toegangsverzoek wordt ingediend door een deelnemer (Client). Dit verzoek wordt door het Policy Enforcement Point (PEP) doorgestuurd naar het Policy Decision Point (PDP). Het bevat alle benodigde informatie, zoals een GraphQL-query, een access-token, en de gevraagde acties en scopes. |
| 2 | Valideren verzoek | Het PDP valideert het toegangsverzoek op basis van de ontvangen informatie. Dit omvat de controle op de geldigheid van het access-token en de aanwezigheid van de juiste scopes. Tijdens deze validatie kan het PDP vaststellen dat aanvullende beleidsregels nodig zijn om een besluit te kunnen nemen. |
| 3 | Ophalen beleidsregels | Indien aanvullende regels nodig zijn, stuurt het PDP een verzoek naar het PRP om de relevante beleidsregels op te halen. Het PRP zoekt in zijn centrale opslag naar de regels die van toepassing zijn op de ingediende query en retourneert deze naar het PDP. Deze stap is cruciaal om ervoor te zorgen dat het toegangsbesluit wordt gebaseerd op actuele en gedefinieerde beleidsregels. |
| 4 | Besluit: toegang of weigeren | Met de opgehaalde beleidsregels en de eerder ontvangen informatie neemt het PDP een besluit. Dit besluit bepaalt of het toegangsverzoek wordt toegestaan of geweigerd. Het PDP gebruikt hierbij de beleidsregels om te controleren of de gevraagde acties voldoen aan de toegangscriteria. |
| 5 | Resultaat terugsturen | Het PDP stuurt het besluit terug naar het PEP, dat dit vervolgens communiceert naar de deelnemer (Client). Bij een positief besluit kan de client toegang krijgen tot de gevraagde resource, terwijl bij een negatief besluit het verzoek wordt geweigerd. |

### 7.1. Functies van het PRP

Het PRP zorgt ervoor dat het Policy Decision Point (PDP) altijd beschikt over de meest actuele beleidsregels, wat cruciaal is voor nauwkeurige en veilige toegangsbeslissingen. Met functies zoals versiebeheer, efficiënte distributie en integratie met het Policy Administration Point (PAP), biedt het PRP een betrouwbare en schaalbare oplossing voor toegangscontrole binnen het netwerk.

1. Opslag van beleidsregels:
   - Het PRP fungeert als repository voor alle beleidsregels die bepalen wie toegang heeft tot welke resources.
   - Beleidsregels worden beheerd door het Policy Administration Point (PAP) en opgeslagen in een centrale locatie.
2. Toegankelijkheid voor het PDP:
   - Wanneer het PDP een toegangsverzoek ontvangt, haalt het de relevante beleidsregels op uit het PRP.
   - Dit zorgt ervoor dat toegangsbeslissingen altijd gebaseerd zijn op de meest actuele beleidsregels.
3. Versiebeheer en wijzigingen:
   - Het PRP biedt mogelijkheden om wijzigingen in beleidsregels bij te houden. Dit zorgt voor consistente en traceerbare toegangscontrole.
4. Efficiënte distributie:
   - Het PRP maakt beleidsregels toegankelijk via gestructureerde processen (zoals API-aanroepen of Git-integraties), zodat het PDP snel en betrouwbaar toegang heeft tot de benodigde informatie.

### 7.2. PRP in de huidige implementatie

In de huidige implementatie binnen het nID-netwerkstelsel worden beleidsregels opgeslagen in een OCI-repository binnen de VECOZO-organisatie. Dit functioneert als een praktische en schaalbare PRP-oplossing:

1. Cloud opslag en Geografische Ondersteuning:
   - Beleidsregels worden beheerd op een centrale opslag en worden automatisch opgehaald naar een beveiligde punt.
   - De laatste versie van beleidsregels wordt opgehaald en kan worden gerepliceerd over verschillende geografische gebieden.
2. Bevraging door het PDP:
   - Het PDP kan beleidsregels dynamisch ophalen uit de repository wanneer een toegangsbeslissing moet worden genomen.
3. Beheer en bijwerken:
   - Het bijwerken van policies gebeurd door een geautomatiseerde uitrol met goedkeuring. Na uitrol zal de nieuwe versie opgeslagen worden op de centrale plek, waarna het systeem deze dan automatisch ophaalt en gebruikt voor de validatie.

## 8. Policy Administration Point (PAP)

Het Policy Administration Point (PAP) is verantwoordelijk voor het beheren en onderhouden van beleidsregels (policies) binnen het nID-netwerk. Het PAP biedt een interface voor het creëren, aanpassen, en verwijderen van beleidsregels, en zorgt ervoor dat deze regels consistent beschikbaar zijn voor andere componenten zoals het Policy Retrieval Point (PRP) en het Policy Decision Point (PDP). Een GitHub repository in de VECOZO-organisatie dient momenteel als PAP voor de policies van nID-netwerkstelsel.

Het proces van het PAP bestaat uit een reeks stappen die zorgen voor een gestructureerd beheer en veilige implementatie van beleidsregels. Hieronder wordt de procesflow beschreven.

interactie-pap.png openen

![interactie-pap](../img/nID-netwerkstelsel-interactie-pap.png)

PlantUML

`@startuml skinparam monochrome true skinparam defaultTextAlignment center actor "Beheerder" as Admin participant "Policy Administration Point\n(PAP)" as PAP participant "Policy Retrieval Point\n(PRP)" as PRP participant "Policy Decision Point\n(PDP)" as PDP autonumber "<b>[000]" Admin -> PAP : "Creëren of aanpassen van beleidsregels" PAP -> PAP : "Validatie van beleidsregels" PAP -> PAP : "Opslaan in versiebeheersysteem" PAP -> PRP : "Publicatie van beleidsregels" PAP -> PDP : "Synchronisatie met beleidsregels" @enduml`

Procesflow van het PAP

| **#** | **Processtap** | **Beschrijving** |
| --- | --- | --- |
| 1 | Creëren of aanpassen van beleidsregels | Beheerders maken nieuwe beleidsregels aan of wijzigen bestaande regels via de interface van het PAP. |
| 2 | Validatie van beleidsregels | Het PAP valideert de beleidsregels op correctheid, consistentie en afstemming met bestaande regels. |
| 3 | Versiebeheer | Het PAP slaat beleidsregels op in een versiebeheersysteem, zodat wijzigingen historisch worden vastgelegd. |
| 4 | Publicatie van beleidsregels | De gevalideerde beleidsregels worden gepubliceerd naar het PRP voor distributie naar andere componenten. |
| 5 | Synchronisatie met het PDP | Het PAP synchroniseert de beleidsregels met het PDP, zodat deze de meest recente regels gebruikt. |

## 9. Policy Information Point (PIP)

Het Policy Information Point (PIP) is een integraal onderdeel van het nID-netwerkstelsel en speelt een cruciale rol in het ondersteunen van toegangsbeslissingen. Het PIP levert contextuele informatie die nodig is voor het evalueren van toegangsverzoeken. Deze informatie kan afkomstig zijn uit externe bronnen of interne gegevensbronnen binnen het netwerk en versterkt de toegangscontrole op meerdere manieren.

Door het gebruik van contextinformatie biedt het PIP flexibiliteit, waardoor beleidsregels kunnen worden afgestemd op complexe scenario’s. Daarnaast maakt het PIP real-time besluitvorming mogelijk, omdat het actuele gegevens levert die essentieel zijn voor nauwkeurige en tijdige toegangsbeslissingen. Bovendien zorgt de mogelijkheid om meerdere bronnen te koppelen voor schaalbaarheid, wat uitgebreide en efficiënte beleidsregels binnen het nID-netwerk mogelijk maakt.

Het PIP heeft een aantal functies voor het leveren van contextinformatie. Deze worden hieronder toegelicht.

**Leveren van contextinformatie**

Het PIP verstrekt aanvullende gegevens die nodig zijn om een toegangsbesluit te nemen.

Voorbeelden:

- Identiteit of rol van de deelnemer.
- Tijdgebonden restricties.
- Relaties tussen entiteiten (bijvoorbeeld een zorgverlener en een patiënt).

**Interactie met de PDP**

Het PIP wordt geraadpleegd door het Policy Decision Point (PDP) wanneer meer informatie nodig is om een beleidsregel toe te passen.

De opgevraagde informatie wordt dynamisch opgehaald en teruggekoppeld aan de PDP.

**Ondersteuning van beleidsregels**

Door aanvullende gegevens beschikbaar te stellen, maakt het PIP flexibele en gedetailleerde beleidsregels mogelijk.

Beleidsregels kunnen afhankelijk zijn van complexe contextuele relaties die door het PIP worden verstrekt.

**Verbinding met externe bronnen**

Het PIP kan worden gekoppeld aan externe systemen, zoals registers of databases, om real-time informatie op te halen.

Met deze combinatie van flexibiliteit, real-time capaciteiten en schaalbaarheid vormt het PIP een onmisbare schakel in het toegangscontroleproces.

interactie-pip-2.png openen

![interactie-pip-2](../img/nID-netwerkstelsel-interactie-pip-2.png)

Procesflow PIP

PlantUML

`@startuml skinparam monochrome true skinparam defaultTextAlignment center participant "Policy Enforcement Point\n(PEP)" as PEP participant "Policy Decision Point\n(PDP)" as PDP participant "Policy Information Point\n(PIP)" as PIP participant "Externe bron\nof interne database" as DataSource autonumber "<b>[000]" PEP -> PDP : "Toegangsverzoek" PDP -> PIP : "Behoefte aan aanvullende informatie" PDP -> PIP : "Contextinformatie opvragen" PIP -> DataSource : "Gegevens ophalen" DataSource --> PIP : "Gegevens retourneren" PIP --> PDP : "Informatie terugkoppelen" PDP --> PEP : "Besluit toestaan/weigeren" autonumber stop @enduml`

| **#** | **Processtap** | **Beschrijving** |
| --- | --- | --- |
| 1 | Toegangsverzoek | Het Policy Enforcement Point (PEP) stuurt een toegangsverzoek naar het Policy Decision Point (PDP). Dit verzoek bevat informatie zoals de benodigde scopes en de authenticatie van de gebruiker. |
| 2 | Behoefte aan aanvullende informatie | Tijdens de evaluatie van het toegangsverzoek merkt het PDP dat aanvullende contextinformatie nodig is om de beleidsregels correct te kunnen evalueren. |
| 3 | Contextinformatie opvragen | Het PDP stuurt een verzoek naar het Policy Information Point (PIP) om aanvullende gegevens op te halen. Dit kan bijvoorbeeld informatie zijn over de rol van een deelnemer of specifieke attributen die nodig zijn voor de beoordeling.Het PIP kan een breed scala aan contextinformatie verstrekken, zoals:Identiteitsinformatie Rol of status van de deelnemer (bijvoorbeeld zorgverlener of cliënt).Relatie-informatie Verbanden tussen entiteiten, zoals een zorgverlener die toegang vraagt tot gegevens van een specifieke cliënt.Tijdrestricties Controle of toegang binnen de toegestane tijdsperiode valt.Beveiligingsregels Verificatie van compliance met beveiligingsstandaarden. |
| 4 | Gegevens ophalen | Het PIP raadpleegt een relevante bron, zoals een interne database of een externe bron, om de gevraagde contextinformatie op te halen. |
| 5 | Gegevens retourneren | De opgehaalde gegevens worden teruggestuurd van de bron naar het PIP, zodat deze beschikbaar zijn voor verdere verwerking. |
| 6 | Informatie terugkoppelen | Het PIP retourneert de verzamelde contextinformatie naar het PDP, zodat deze gebruikt kan worden voor het maken van een toegangsbesluit. |
| 7 | Besluit toestaan/weigeren | Het PDP gebruikt de verstrekte informatie en de beleidsregels om een besluit te nemen over het toegangsverzoek. Dit besluit wordt teruggestuurd naar het PEP, dat het uiteindelijke resultaat communiceert naar de client. |

## 10. Foutmeldingen

**OAuth HTTP Error Responses**

In het onderstaande schema staan de mogelijke foutmeldingen die kunnen optreden bij het ophalen van autorisaties of het uitvoeren van een GraphQL-verzoek.

**Overzicht van HTTP Error Responses**

Let op: foutmeldingen kunnen afhankelijk van de geïmplementeerde client anders worden weergegeven.

> **NB 1: GraphQL 200 OK**
>
> Een GraphQL 200 OK response kan inhoudelijk nog steeds een fout-melding bevatten. De standaard beschrijft dat wanneer een GraphQL request door de server is ontvangen er altijd een 200 OK response volgt. Dit betekent niet automatisch dat de query volledig succesvol kon worden afgehandeld.

> **NB 2: Inhoud Error Responses**
>
> Het overzicht geeft de mogelijke HTTP Error responses vanuit voornamelijk de PEP. Dezelfde fouten kunnen ook voorkomen bij de Resource-server. Een onderscheid in afzender moet mogelijk zijn. In een volgende update zal er afzenderinformatie in de message-body moeten worden toegevoegd.

![](https://github.com/iStandaarden/iWlz-RequestForComment/raw/main/plantUMLsrc/rfc0014-02-foutmeldingen_overzicht.svg)

### 10.1 Foutmeldingen Aanvraag van Autorisatie

foutmeldingen-aanvragen-van-autorisatie.png openen

![foutmeldingen-aanvragen-van-autorisatie](../img/nID-netwerkstelsel-foutmeldingen-aanvragen-van-autorisatie.png)

PlantUML

`@startuml skinparam ParticipantPadding 20 skinparam BoxPadding 10 box "Deelnemer" participant "Client" as Client end box box "nID" participant "Autorisatieserver" as AuthzServer end box autonumber "<b>[000]" activate Client Client -> AuthzServer: **Aanvragen van autorisatie**\n"scope": "registers/wlzindicatieregister/indicaties:read"\nAuthenticatiemiddel autonumber stop Client <-[#red]-X AuthzServer:<color:red>[1] 400 Audience Required Client <-[#red]-X AuthzServer:<color:red>[2] 403 Not Allowed Client <-[#red]-X AuthzServer:<color:red>[3] 403 Invalid Client Certificate Client <-[#red]-X AuthzServer:<color:red>[4] 404 Not Found Client <-[#red]-X AuthzServer:<color:red>[5] 500 Internal Server Error autonumber resume activate AuthzServer AuthzServer -> AuthzServer: Valideer Authenticatiemiddel AuthzServer -> AuthzServer: Run Rule-engine o.b.v. scope(s) deactivate AuthzServer AuthzServer --> Client --: 200 Response (Access-Token) deactivate Client @enduml`

#### [01] 400 Audience Required

- **HTTP Response:**
  `HTTP/1.1 400 Bad Request "audience is required"`
- **Details**:
Controleer of alle headers op de juiste manier worden meegegeven zoals: ‘content-type’. Het netwerkmodel gebruikt de flow standaard (grant\_type) “client\_credentials”. Een _**audience**_ en _**scope**_parameter zijn vereist bij het aanvragen van een token. Voeg deze toe aan de request body.
  Bijvoorbeeld:
  `{ "grant_type": "client_credentials", "scope": "registers/wlzindicatieregister/indicaties:read", "audience": "https://koppelpunt.ciz.nl/iwlz/indicatieregister/graphql/v2/graphql" }`

#### [02] 401 Unauthorized

- **HTTP Response:**
  `HTTP/1.1 401 Unauthorized "authenticating with issuing authority"`
- **Details:**
Er kan niet geacteerd worden namens een partij (subject), omdat hier geen rechten voor zijn geregistreerd. Indien subject en actor hetzelfde zijn, dan wordt deze foutmelding ook gegeven.
  - Controleer of acteren mogelijk moet zijn en neem contact op met VECOZO.
  - Verander de body zodat er als directe partij een aanvraag wordt gedaan.
  Voorbeeld body als er geacteerd wordt namens een partij:
  `{ "grant_type": "client_credentials", "scope": "registers/wlzindicatieregister/indicaties:read", "audience": "https://koppelpunt.ciz.nl/iwlz/indicatieregister/v2/graphql", "access_token": { "sub": "uzovi:5000" } }`
  Voorbeeld body als aanvraag wordt gedaan als directe partij:
  `{ "grant_type": "client_credentials", "scope": "registers/wlzindicatieregister/indicaties:read", "audience": "https://koppelpunt.ciz.nl/iwlz/indicatieregister/v2/graphql" }`

#### [03] 403 Not Allowed

- **HTTP Response:**
  `HTTP/1.1 403 Forbidden`
- **Details**:
Mogelijke oorzaken zijn:
  - Het IP-adres is niet geregistreerd bij het authenticatiemiddel.
  - Het authenticatiemiddel kan geblokkeerd zijn. Neem contact op met de VECOZO contactpersoon binnen uw organisatie, deze kan in de portaal van VECOZO controleren of uw IP-adres is opgenomen in de lijst van IP-adressen.
  - Zie VECOZO website: [https://www.vecozo.nl/support/controle-op-ip-adressen/ip-adres-registreren/hoe-kan-ik-mijn-ip-adres-registreren/](https://www.vecozo.nl/support/controle-op-ip-adressen/ip-adres-registreren/hoe-kan-ik-mijn-ip-adres-registreren/)

#### [04] 403 Invalid Client Certificate

- **HTTP Response**:
  `HTTP/1.1 403 Invalid Client Certificate`
- **Details**:
Het certificaat ontbreekt, is ongeldig of verlopen (van toepassing bij gebruik van een VECOZO-systeemcertificaat). Zorg ervoor dat het authenticatiemiddel overeenkomt met de juiste omgeving. Zie deze VECOZO website [![](https://www.vecozo.nl/favicon.ico)Uw certificaat installeren of vernieuwen | VECOZO](https://www.vecozo.nl/certificaten-installerenvernieuwen/) of neem contact op met VECOZO Functioneel Beheer.

#### [05] 404 Not Found

- **HTTP Response**:
  `HTTP/1.1 404 Not Found`
- **Details**:
Een onjuist endpoint van de autorisatieserver is gebruikt. Controleer of het correcte endpoint is geconfigureerd, zoals gespecificeerd in dit document onder de details van de autorisatieserver.

#### [06] 500 Internal Server Error

- **HTTP Response**:
  `HTTP/1.1 500 Internal Server Error`
- **Details**:
Een onverwachte fout is opgetreden op de autorisatieserver. Probeer het later opnieuw of volg het incidentbeheerproces indien nodig.

### 10.2 Foutmeldingen PEP endpoint bij GraphQL request

foutmeldingen-graphql-request.png openen

![foutmeldingen-graphql-request](../img/nID-netwerkstelsel-foutmeldingen-graphql-request.png)

PlantUML

`@startuml skinparam ParticipantPadding 20 skinparam BoxPadding 10 box "Deelnemer" participant "Client" as Client end box box "nID" participant "PEP" as Filter end box box "Register" participant "Resource-Server" as resourceserver end box autonumber "<b>[000]" activate Client Client -> Filter: **GraphQL Request**\nAuthenticatiemiddel + Access-Token note right of Filter: Inline filtering requests autonumber stop Client <-[#red]-X Filter: <color:red>[1] 400 Invalid Query Syntax Client <-[#red]-X Filter: <color:red>[2] 400 No Operation Client <-[#red]-X Filter: <color:red>[3] 401 Access Denied, Invalid Scope Client <-[#red]-X Filter: <color:red>[4] 401 Unauthorized Client <-[#red]-X Filter: <color:red>[5] 401 Not Allowed Client <-[#red]-X Filter: <color:red>[6] 403 Invalid Client Certificate Client <-[#red]-X Filter: <color:red>[7] 403 Policy: Access Denied Client <-[#red]-X Filter: <color:red>[8] 403 Request Does Not Match Scopes Client <-[#red]-X Filter: <color:red>[9] 500 Internal Server Error Client <-[#red]-X Filter: <color:red>[10] 502 Bad Gateway Client <-[#red]-X Filter: <color:red>[11] 504 Gateway Timeout autonumber resume activate Filter Filter -> resourceserver: **GraphQL Request** resourceserver --> Filter: **200 Response (GraphQL)** deactivate Filter Filter --> Client: **200 Response (GraphQL)** deactivate Client @enduml`

#### [01] 400 Invalid Query Syntax

- **HTTP Response**:
  `HTTP/1.1 400 Bad Request`
- **Details**:
De query voldoet niet aan de vereiste syntax. Controleer de structuur van de query aan de hand van de specificaties.

#### [02] 400 No Operation

- **HTTP Response**:
  `HTTP/1.1 400 Bad Request {"ErrorCode": "bad_request", "Error": "No operation found to evaluate"}`
- **Details**:
Er ontbreekt een geldige operatie in de GraphQL-aanvraag. Controleer en pas de query aan om een bewerking te definiëren.

#### [03] 400 Invalid Scope

- **HTTP Response**:
  `HTTP/1.1 400 Bad Request "Scope is not allowed"`
- **Details**:
De opgevraagde scope komt niet overeen met de toegestane scope. Controleer de scope-instellingen.

#### [04] 401 Unauthorized

- **HTTP Response:**
  `HTTP/1.1 403 Unauthorized`
- **Details:**
De toegang werd geweigerd, omdat er mogelijk een access token ontbrak. Controleer of het access token correct is aangevraagd en wordt meegegeven. Indien de fout zich blijft voordoen, kunt u het incidentbeheerproces volgen.

#### [05] 401 Not Allowed

- **HTTP Response**:
  `HTTP/1.1 403 Not Allowed`
- **Details**:
Mogelijke oorzaken zijn:
  - Het IP-adres is niet geregistreerd bij het authenticatiemiddel.
  - Het authenticatiemiddel kan geblokkeerd zijn. Neem contact op met de VECOZO contactpersoon binnen uw organisatie, deze kan in de portaal van VECOZO controleren of uw IP-adres is opgenomen in de lijst van IP-adressen.
  - Voor meer informatie ga naar: [https://www.vecozo.nl/support/controle-op-ip-adressen/ip-adres-registreren/hoe-kan-ik-mijn-ip-adres-registreren/](https://www.vecozo.nl/support/controle-op-ip-adressen/ip-adres-registreren/hoe-kan-ik-mijn-ip-adres-registreren/)

#### [06] 403 Invalid Client Certificate

- **HTTP Response**:
  `HTTP/1.1 403 Invalid Client Certificate`
- **Details**:
Het certificaat ontbreekt, is ongeldig of verlopen (van toepassing bij gebruik van een VECOZO-systeemcertificaat). Zorg ervoor dat het authenticatiemiddel overeenkomt met de juiste omgeving.
  Voor meer informatie ga naar: [![](https://www.vecozo.nl/favicon.ico)Uw certificaat installeren of vernieuwen | VECOZO](https://www.vecozo.nl/certificaten-installerenvernieuwen/) of neem contact op met VECOZO Functioneel Beheer

#### [07] 403 Policy: Access Denied

- **HTTP Response:**
  `HTTP/1.1 403 Forbidden`
- **Details:**
Toegang geweigerd op basis van een policy. De toegangsrechten van het gebruikte authenticatiemiddel voldoen niet aan de toegangsvereisten. Controleer de query en probeer opnieuw.

#### [08] 403 Request Does Not Match Scopes

- **HTTP Response:**
  `HTTP/1.1 403 Forbidden`
- **Details:**
De aanvraag voldoet niet aan de vereiste scopes in het access token. Controleer de toegewezen scopes. Vraag een nieuwe access token aan indien de token voor een andere scope bestemd is.

#### [09] 500 Internal Server Error

- **HTTP Response**:
  `HTTP/1.1 500 Internal Server Error`
- **Details**:
Er is een onverwachte fout opgetreden op de server. Probeer het later opnieuw of raadpleeg het incidentbeheerproces.

#### [10] 502 Bad Gateway

- **HTTP Response**:
  `HTTP/1.1 502 Bad Gateway`
- **Details**:
De server kreeg een ongeldige reactie van een upstream-server. Controleer de serverinstellingen of probeer het later opnieuw.

#### [11] 504 Gateway Timeout

- **HTTP Response**:
  `HTTP/1.1 504 Gateway Timeout`
- **Details**:
De server reageerde niet binnen de verwachte tijd. Controleer de serververbindingen of probeer het later opnieuw.

---
