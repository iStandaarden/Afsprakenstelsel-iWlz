# Begrippenlijst


## 1. Inleiding

Om tot duidelijke afspraken voor de totstandkoming van het iwlz-netwerkmodel te komen is een eenduidig begrippenkader vereist. De bestaande [iStandaarden-begrippenlijst](https://www.istandaarden.nl/algemeen/begrippenlijst) vormt hierbij de basis. De begrippen die wel nodig zijn voor het Afsprakenstelsel iWlz-netwerkmodel maar (nog) geen onderdeel zijn van de iStandaarden-begrippenlijst worden hieronder toegelicht. Aan begrippen die worden gedefinieerd in relevante wetgeving zoals maar niet beperkt tot de AVG en de Wlz wordt in het Afsprakenstelsel iWlz-netwerkmodel eenzelfde betekenis toegekend.

## 2. Begrippen


### A
| **Begrip** | **Betekenis** | **Link** |
| --- | --- | --- |
| Access-token | Een (OAuth) Access-token is een digitaal bewijs dat een deelnemer toegang geeft tot specifieke gegevens binnen een RegisterEen Acces-token wordt na succesvolle authenticatie uitgegeven aan een deelnemer. | [nID netwerkstelsel > 3.2.4. Access token request](../../applicatie/nid_netwerkstelsel#324-access-token-request) |
| Actor | Een actor is een zorgverlener, zorgmedewerker, cliënt/patiënt, zorgaanbieder, device, informatiesysteem of applicatie die of dat een rol vervult in een zorgcommunicatie of -service. | [nID netwerkstelsel > 3.2.4.1 Een Access token aanvragen voor jezelf](../../applicatie/nid_netwerkstelsel#3241-een-access-token-aanvragen-voor-jezelf) </br> [nID netwerkstelsel > 3.2.4.2 Een Access token aanvragen namens een andere partij](../applicatie/nid_netwerkstelsel#3242-een-access-token-aanvragen-namens-een-andere-partij) |
| Administrateur | Organisatorische rol in het iWlz-netwerkmodel. | [Rollen en deelnemers > 4. Organisatorische rollen](../../organisatiebeleid/rollen_deelnemers#4-organisatorische-rollen) |
| Adressering / Adresboek | Adressering is een generieke functie waarin adressen van endpoints worden bijgehouden en beschikbaar worden gesteld aan de deelnemers. | Aangezien er nog geen generieke Adresboek beschikbaar is, is ervoor gekozen om een tijdelijke Adresboek bij te houden in een beveiligde Github omgeving. Dit tijdelijk adresboek is gebaseerd op het ZORG-AB schema.[GitHub - iStandaarden/iWlz-adresboek-public: Tijdelijk alternatief voor ZorgAB aansluiting](https://github.com/iStandaarden/iWlz-adresboek) |
| Afnemer | Systeemrol in het iWlz-netwerkmodel. | [Rollen en deelnemers > Systeemrollen](../../organisatiebeleid/rollen_deelnemers#5-systeemrollen) |
| Attest | Zie 'verklaring'. | [Technologisch > DIZRA](https://dizra.gitbook.io/dizra/perspectieven/technology#betrouwbare-verklaringen) |
| Audience | De (OAuth) audience staat voor de bedoelde ontvanger waarvoor het access-token bedoeld is. In dit geval is het de locatie oftewel de URL van de resource-server. |  |
| Auditor | Besturingsrol in het iWlz-netwerkmodel. | [Rollen en deelnemers > Besturingsrollen](../../organisatiebeleid/rollen_deelnemers#3-besturingsrollen) |
| Authenticatie | Authenticatie is het proces waarbij wordt nagegaan of een gebruiker, een computer of applicatie daadwerkelijk is wie hij beweert te zijn. Bij de authenticatie wordt gecontroleerd of een opgegeven bewijs van identiteit overeenkomt met echtheidskenmerken, bijvoorbeeld een in het systeem geregistreerd bewijs. |  |
| Autorisatie | Autorisatie omvat feitelijk 2 processen:Het aanmaken van een autorisatie-record: het verlenen van toestemming (een bevoegdheid) aan een geauthentiseerde partij om toegang te krijgen tot een bepaalde dienst of toestemming om een bepaalde actie uit te voeren. Een autorisatie wordt vastgelegd in een autorisatie-record.Het geven van de juiste mate van toegang tot gegevens op basis van een eerder uitgegeven autorisatie-record. |  |
| Autorisatieserver | Een autorisatieserver (OAuth authorization server) deelt Access-Tokens uit om te kunnen communiceren met een resource-server. communicatie met een resource-server verloopt in het netwerkstelsel altijd via een policy-enforcement-point (PEP). |  |

### B
| **Begrip** | **Betekenis** | **Link** |
| --- | --- | --- |
| Basisregistratiehouder | Organisatorische rol in het iWlz-netwerkmodel. | [Rollen en deelnemers > Organisatorische rollen](../../organisatiebeleid/rollen_deelnemers#3-besturingsrollen) |
| Beoordelaar | Organisatorische rol in het iWlz-netwerkmodel. | [Rollen en deelnemers > Organisatorische rollen](../../organisatiebeleid/rollen_deelnemers#4-organisatorische-rollen) |
| Bevoegde uitgever van verklaringen | Systeemrol in het iWlz-netwerkmodel. | [Rollen en deelnemers > Systeemrollen](../../organisatiebeleid/rollen_deelnemers#5-systeemrollen) |
| Bronhouder | Systeemrol in het iWlz-netwerkmodel. | [Rollen en deelnemers > Systeemrollen](../../organisatiebeleid/rollen_deelnemers#5-systeemrollen) |

### C
| **Begrip** | **Betekenis** | **Link** |
| --- | --- | --- |
| Capabilities | Capabilities zijn algemene eigenschappen die applicatiecomponenten nodig hebben om veilige en betrouwbare gegevensuitwisseling tussen de deelnemers aan het iWlz-netwerkmodel mogelijk te maken. |  |
| Claim | Een (OAuth) claim is een kwalificatie, een behaalde prestatie of een stukje informatie over de achtergrond van een entiteit, zoals een naam, id, huisadres of afgeronde opleiding. Een claim zegt iets over de entiteit (deelnemer) en helpt bij het bepalen van toegang en rechten binnen een systeem. Weergegeven in key-value paar. |  |
| Cliënt | Organisatorische rol in het iWlz-netwerkmodel. | [Rollen en deelnemers > Organisatorische rollen](../../organisatiebeleid/rollen_deelnemers#4-organisatorische-rollen) |
| Client (Engelse term) | Een applicatie die een deelnemer gebruikt om deel te nemen aan het iWlz netwerkmodel. |  |

### D - E - F
| **Begrip** | **Betekenis** | **Link** |
| --- | --- | --- |
| Datastation | Het datastation is de verzameling van componenten voor de verwerking van data in het iWlz-netwerkmodel. Het omvat: toegang tot de (data)services met koppelvlakken;koppeling met bron- en doelsystemen;gestandaardiseerde data-interfaces._Synoniem: iWlz-datastation._ | [Applicatiecomponenten](../../applicatie/applicatiecomponenten) |
| Deelnemer | Een partij die een rol heeft in het iWlz-netwerkmodel.DIZRA onderscheidt de volgende types deelnemers: zorgorganisatie, zorgverlener, registerhouder, cliënt, secundaire deelnemer.Cliënten zijn deelnemer omdat ze cliënt van een zorgorganisatie worden, zijn of zijn geweest. Registerhouders, zorgorganisaties en secundaire deelnemers zijn deelnemer wanneer zij erkend zijn door een autoriteit, een instantie die bevoegd is. | [Organisatorisch > DIZRA](https://dizra.gitbook.io/dizra/perspectieven/organizational#de-deelnemers-aan-het-ecosysteem) |
| DID | | |
| Dienst | Een afgebakende technische prestatie die een bronhouder aanbiedt aan haar afnemers. Voorbeelden:raadplegen;abonneren;notificeren.Synoniem: _Service._ |  |
| DIZRA | DIZRA staat voor Duurzaam Informatiestelsel Zorg ReferentieArchitectuur, een referentiearchitectuur voor een duurzaam informatiesysteem in de zorg. Het is een raamwerk van normen en standaarden die de gegevensuitwisseling in de zorgsector regelen. | [Start > DIZRA](https://dizra.gitbook.io/) |


### G - H
| **Begrip** | **Betekenis** | **Link** |
| --- | --- | --- |
| Gegevensgids | Systeemrol in het iWlz-netwerkmodel. | [Rollen en deelnemers > Systeemrollen](../../organisatiebeleid/rollen_deelnemers#5-systeemrollen) |
| Gegevensregisseur | De gegevensregisseur is een rol van een burger. De gegevensregisseur voert regie over de gegevens over de cliënt. Cliënten hebben niet de rol van bronhouder, zij zijn gegevensregisseur en/of gezondheidsregisseur. | [Systeemactoren > DIZRA](https://dizra.gitbook.io/dizra/perspectieven/technology/actors#gegevensregisseur) |
| Gegevensregisseur / Gezondheidsregisseur | Systeemrol in het iWlz-netwerkmodel. | [Rollen en deelnemers > Systeemrollen](../../organisatiebeleid/rollen_deelnemers#5-systeemrollen) |
| GraphQL | GraphQL is de querytaal voor het raadplegen van gegevens uit de registers en het versturen van meldingen of notificaties van of naar die registers. GraphQL is naast een querytaal voor API's ook een runtime voor het uitvoeren van die query's op het register. Het is met één GraphQL interface (koppelvlak) mogelijk om als raadpleger alleen die gegevens op te vragen die op dat moment relevant zijn. Dit in tegenstelling tot REST waarbij die keuze niet mogelijk is. | [GraphQL > The query language for modern APIs](https://graphql.org/) |


### I
| **Begrip** | **Betekenis** | **Link** |
| --- | --- | --- |
| Identificatie | Bij identificatie gaat het om diverse manieren om iemands identiteit vast te stellen. Bijvoorbeeld via een wettelijk identiteitsdocument (WID). |  |
| Indicatiesteller | Organisatorische rol in het iWlz-netwerkmodel.Indicatiestellend voor Wlz zorg | [Rollen en deelnemers > Organisatorische rollen](../../organisatiebeleid/rollen_deelnemers#4-organisatorische-rollen) |

### J - K
| **Begrip** | **Betekenis** | **Link** |
| --- | --- | --- |
| JSON Web Token (JWT) | Een string welke een set van claims in de vorm van JSON-objecten beschrijft. Deze kunnen digitaal worden ondertekend en/of MACed (soort van sleutel waarmee de authenticiteit van een bericht kan worden gecontroleerd) en/of versleuteld. |  |


### L - M
| **Begrip** | **Betekenis** | **Link** |
| --- | --- | --- |
| Ledenadministratie | Systeemrol in het iWlz-netwerkmodel. | [Rollen en deelnemers > Systeemrollen](../../organisatiebeleid/rollen_deelnemers#5-systeemrollen) |


### N
| **Begrip** | **Betekenis** | **Link** |
| --- | --- | --- |
| Netwerk | Het geheel aan bronhouders, afnemers en andere deelnemers dat gezamenlijk zorgdraagt voor de informatievoorziening in de context van de Wet langdurige zorg. |  |
| Netwerkfuncties | Activiteiten van een deelnemer in het netwerk. |  |
| nID | nID is een op open-source componenten gebaseerde privacy raamwerk dat invulling geeft aan een federatief stelsel, waarmee bronregisters de mogelijkheid hebben om gegevens beschikbaar te stellen aan deelnemers. Toegang tot gegevens vindt plaats op basis van autorisaties die gebaseerd zijn op een geldige grondslag. | [nID netwerkstelsel](../../applicatie/nid_netwerkstelsel) |
| Nuts | Nuts is een initiatief dat ervoor zorgt dat zorgverleners op basis van open standaarden digitaal kunnen samenwerken. Hierbij wordt gebruik gemaakt van zogenaamde decentrale Nuts nodes. | [Nuts](https://nuts.nl/) |

### O
| **Begrip** | **Betekenis** | **Link** |
| --- | --- | --- |
| OAuth | OAuth 2.0 is het industriestandaardprotocol voor autorisatie. OAuth 2.0 richt zich op de eenvoud van clientontwikkelaars en biedt tegelijkertijd specifieke autorisatiestromen voor webapplicaties, desktopapplicaties, mobiele telefoons en apparaten in de woonkamer. | [OAuth 2.0 — OAuth](https://oauth.net/2/) |
| OPA | Open Policy Agent (OPA) is een open-source, generiek policy gebaseerde beleidsengine waarmee je consistente en flexibele toegangscontrole kunt instellen en afdwingen in softwaretoepassingen. Het framework is  om beleidsregels (policies) te beheren, te evalueren en te handhaven bij het raadplegen van de registers. Het bestaat onder andere uit de componenten PEP en PDP. | [Open Policy Agent](https://www.openpolicyagent.org/) </br> [nID netwerkstelsel](../../applicatie/nid_netwerkstelsel) |
| Operationeel ketenbeheerder | Systeemrol in het iWlz-netwerkmodel. | [Rollen en deelnemers > Systeemrollen](../../organisatiebeleid/rollen_deelnemers#5-systeemrollen) |

### P - Q
| **Begrip** | **Betekenis** | **Link** |
| --- | --- | --- |
| PGO | Persoonlijke Gezondheidsomgeving (PGO) is een digitale omgeving waar Nederlandse burgers hun medische gegevens kunnen beheren en delen. | [PGO.nl](https://www.pgo.nl) |
| PAP | Policy Administration Point (PAP) is het onderdeel binnen het nID-netwerkstelsel dat verantwoordelijk is voor het beheren en configureren van beleidsregels (policies). Het PAP stelt beheerders in staat om toegangsregels te definiëren, aan te passen, en te onderhouden, die vervolgens door het Policy Retrieval Point (PRP) beschikbaar worden gesteld aan het Policy Decision Point (PDP). | [nID netwerkstelsel > 8. Policy Administration Point (PAP)](../../applicatie/nid_netwerkstelsel#8.-Policy-Administration-Point-%28PAP%29) |
| PDP | Policy Decision Point (PDP): neemt de beleidsbeslissingen, voert de policy uit. | [nID netwerkstelsel > 6. Policy Decision Point (PDP)](../../applicatie/nid_netwerkstelsel#6.-Policy-Decision-Point-%28PDP%29) |
| PEP | Policy Enforcement Point (PEP): service die het OPA framework aanroept om een beleidsbeslissing aan te vragen of te verkrijgen. | [nID netwerkstelsel > 5. Policy Enforcement Point (PEP)](../../applicatie/nid_netwerkstelsel#5.-Policy-Enforcement-Point-%28PEP%29) |
| PIP | Policy Information Point (PIP) is een component binnen het nID-netwerkstelsel dat aanvullende contextinformatie levert aan het Policy Decision Point (PDP). Deze informatie is essentieel voor het nemen van toegangsbesluiten en kan afkomstig zijn van interne of externe bronnen, zoals databases of registers. | [nID netwerkstelsel > 9. Policy Information Point (PIP)](../../applicatie/nid_netwerkstelsel#9.-Policy-Information-Point-%28PIP%29) |
| PRP | Het Policy Retrieval Point (PRP) is het onderdeel binnen het nID-netwerkstelsel dat beleidsregels (policies) opslaat en beschikbaar maakt voor het Policy Decision Point (PDP). Het PRP fungeert als centrale opslagplaats, waar beleidsregels kunnen worden geraadpleegd om toegangsverzoeken te beoordelen. | [nID netwerkstelsel > 7. Policy Retrieval Point (PRP)](../../applicatie/nid_netwerkstelsel#7.-Policy-Retrieval-Point-%28PRP%29) |


### R
| **Begrip** | **Betekenis** | **Link** |
| --- | --- | --- |
| Register | Het functioneel concept waarvan afnemers en gegevensregisseurs gelijksoortige data en services op gestandaardiseerde wijze kunnen afnemen. Een register wordt op technisch niveau gerealiseerd door een of meerdere data stations. |  |
| Resource-Server | In het nID netwerkstelsel is een resource-server een GraphQL server van een netwerk deelnemer die GraphQL-queries accepteert en uitvoert naar onder andere de brondata. |  |

### S
| **Begrip** | **Betekenis** | **Link** |
| --- | --- | --- |
| Scope | Een (OAuth) scope geeft het bereik van autorisatie tot een resource aan. Een deelnemer vraagt een scope aan bij de autorisatieserver. Het systeem gebruikt deze om te bepalen welke acties zijn toegestaan. |  |
| Serviceafspraken (iWlz-netwerkmodel) | Serviceafspraken zijn de gezamenlijk vastgelegde afspraken over de dienstverlening binnen het iWlz-netwerkmodel waaraan alle deelnemers zich verbinden. | [Serviceafspraken](../../organisatiebeleid/serviceafspraken/) |
| Servicedesk | Een servicedesk is het aanspreekpunt binnen een organisatie voor vragen, incidenten en verzoeken van gebruikers, waarbij meldingen worden geregistreerd, opgevolgd en zo nodig gecoördineerd naar andere teams. |  |
| Silvester | Silvester is de migratievoorziening tussen het oude en nieuwe model waarvan partijen die nog niet zijn overgegaan op het netwerkmodel tijdelijk gebruik maken. |  |
| Stelsel Functioneel beheerder (in DIZRA: Stelselbeheerder) | Besturingsrol in het iWlz-netwerkmodel. | [Rollen en deelnemers > Besturingsrollen](../../organisatiebeleid/rollen_deelnemers#3-besturingsrollen) |
| Stelsel Technisch beheerder (in DIZRA: Technisch beheerder / Standaardisatieorganisatie) | Besturingsrol in het iWlz-netwerkmodel. | [Rollen en deelnemers > Besturingsrollen](../../organisatiebeleid/rollen_deelnemers#3-besturingsrollen) |
| Stelsel-distributeur (in DIZRA: Distributeur) | Besturingsrol in het iWlz-netwerkmodel. | [Rollen en deelnemers > Besturingsrollen](../../organisatiebeleid/rollen_deelnemers#3-besturingsrollen) |
| Stelselautorisator | Besturingsrol in het iWlz-netwerkmodel. | [Rollen en deelnemers > Besturingsrollen](../../organisatiebeleid/rollen_deelnemers#3-besturingsrollen) |
| Stelselbeheerder | Systeemrol in het iWlz-netwerkmodel. | [Rollen en deelnemers > Systeemrollen](../../organisatiebeleid/rollen_deelnemers#5-systeemrollen) |
| Stelselexpert | Besturingsrol in het iWlz-netwerkmodel. | [Rollen en deelnemers > Besturingsrollen](../../organisatiebeleid/rollen_deelnemers#3-besturingsrollen) |
| Stelselfinancier | Besturingsrol in het iWlz-netwerkmodel. | [Rollen en deelnemers > Besturingsrollen](../../organisatiebeleid/rollen_deelnemers#3-besturingsrollen) |
| Stelselgebruiker en Stelseleindgebruiker (DIZRA: Gebruiker) | Besturingsrol in het iWlz-netwerkmodel. | [Rollen en deelnemers > Besturingsrollen](../../organisatiebeleid/rollen_deelnemers#3-besturingsrollen) |
| Stelselhouder | Besturingsrol in het iWlz-netwerkmodel. | [Rollen en deelnemers > Besturingsrollen](../../organisatiebeleid/rollen_deelnemers#3-besturingsrollen) |

### T
| **Begrip** | **Betekenis** | **Link** |
| --- | --- | --- |
| Toegangsbewijs | zie ‘Acces-token’ |  |

### U
| **Begrip** | **Betekenis** | **Link** |
| --- | --- | --- |
| Uitgever | Een organisatie of persoon die bevoegd is voor het uitgeven van verklaringen._Synoniem: Bevoegde uitgever van verklaringen._ | [Systeemactoren > DIZRA](https://dizra.gitbook.io/dizra/perspectieven/technology/actors#bevoegde-uitgever-van-verklaringen) |

### V - W - X
| **Begrip** | **Betekenis** | **Link** |
| --- | --- | --- |
| Verklaring | Betrouwbare verklaring over een organisatie of persoon die kan worden ingezet ten behoeve van authenticatie en/of autorisatie. Voorbeelden:Een betrouwbare verklaring dat een bepaalde organisatie een zorgaanbieder is.Een betrouwbare verklaring dat een bepaalde deelnemer aan het iWlz-netwerkmodel rechten heeft tot het inzien van indicatie-gegevens van een bepaalde cliënt._Synoniem: Attest._ |  |
| Verstoring | Niet-geplande onderbreking of ernstige vermindering van de beschikbaarheid of performance van het iWlz-netwerk of één van de diensten, buiten een onderhoudsvenster. |  |
| Vertrouwensleverancier | Systeemrol in het iWlz-netwerkmodel. | [Rollen en deelnemers > Systeemrollen](../../organisatiebeleid/rollen_deelnemers#5-systeemrollen) |
| Verwerkingsverantwoordelijke | Een verwerkingsverantwoordelijke in de zin van artikel 4 lid 7 AVG. De natuurlijke persoon, rechtspersoon, overheidsinstantie, dienst of ander orgaan die/dat, alleen of samen met anderen, het doel van en de middelen voor de verwerking van persoonsgegevens vaststelt. Wanneer het doel van en de middelen voor deze verwerking in het Unierecht of het lidstatelijke recht worden vastgesteld, kan in die wetgeving worden bepaald wie de verwerkingsverantwoordelijke is of volgens welke criteria deze wordt aangewezen.Als een organisatie beslist “waarom” en “hoe” persoonsgegevens moeten worden verwerkt, is zij de verwerkingsverantwoordelijke. | [Artikel 4, AVG – Begripsbepalingen (eur-lex.europa.eu)](https://eur-lex.europa.eu/legal-content/NL/TXT/?uri=CELEX%3A32016R0679) |
| Verzekeraar betrouwbaarheid | Systeemrol in het iWlz-netwerkmodel. | [Rollen en deelnemers > Systeemrollen](../../organisatiebeleid/rollen_deelnemers#5-systeemrollen) |

### Y - Z
| **Begrip** | **Betekenis** | **Link** |
| --- | --- | --- |
| Zorgaanbieder | Rechtspersoon die zorgt aanbiedt. |  |
| ZORG-AB | zie 'Adressering' |  |
| Zorgkantoor | Organisatorische rol in het iWlz-netwerkmodel. | [Rollen en deelnemers > Organisatorische rollen](../../organisatiebeleid/rollen_deelnemers#4-organisatorische-rollen) |
| Zorgorganisatie (zorgaanbieder) | Organisatorische rol in het iWlz-netwerkmodel.De zorgaanbieder is de organisatie die zorg aanbiedt en gecontracteerd is voor het leveren van Wlz zorg. | [Rollen en deelnemers > Organisatorische rollen](../../organisatiebeleid/rollen_deelnemers#4-organisatorische-rollen) |
| Zorgverlener | Organisatorische rol in het iWlz-netwerkmodel.De individuele zorgverlener is de natuurlijke persoon die de zorg daadwerkelijk verleent. | [Rollen en deelnemers > Organisatorische rollen](../../organisatiebeleid/rollen_deelnemers#4-organisatorische-rollen) |


