# Afsprakenstelsel iWlz

> [!NOTE]
> **Publicatie** op: https://istandaarden.github.io/Afsprakenstelsel-iWlz/  
> **Staging** (pre-publicatie) op: https://istandaarden.github.io/Afsprakenstelsel-iWlz/staging/

---

# Beheer van de publicatie
1. [Beheer van het menu en inhoud](#1-beheer-van-het-menu-en-inhoud)
2. [Beheer van de pagina's](#2-beheer-van-de-paginas)
3. Beheer van de publicatie
4. Publicatie proces
5. PDF
6. Framework
7. Locale installatie (*optioneel - niet noodzakelijk voor beheer*)


## 1. Beheer van het menu en inhoud

De indeling van het menu en de veerwijzing naar de inhoud per menu-item verloopt via `mkdocs.yml`. In het yaml-document [`mkdocs.yml`](./mkdocs.yml) is er de hoofdtag `nav:`. 
bijvoorbeeld (deel van de inhoud)
```yml
  - Welkom: index.md
  - Inleiding:
      - inleiding/index.md
      - Achtergrond en toelichting: inleiding/achtergrond_toelichting.md
      - Governance: inleiding/governance.md
      - Begrippenlijst: inleiding/begrippenlijst.md
  - Organisatiebeleid:
      - organisatiebeleid/index.md
      - Randvoorwaarden: organisatiebeleid/randvoorwaarden.md
  - ...
```

### 1.1 Opbouw menu

De menu-items op het hoogste niveau, staan vooraan in de 'tree'. Dit zijn in het voorbeeld: 
- *Welkom*, 
- *Inleiding* en 
- *Organisatebeleid*. 

Onderdelen van een submenu staan weer een niveau lager onder het hoofdemenu. In het voorbeeld zijn onder de 
- Inleiding: 
  - *Achtergrond en toelichting*,
  - *Governance* en 
  - *Begrippenlijst*

### 1.2 Verwijzing naar de inhoud

De verwijzing naar de inhoud van elk menu-item volgt de structuur: 
> `{Titel op het scherm}: {verwijzing naar het brondocument}`

- Een Hoofdmenu-item heeft altijd de naam `index.md`
- Een Submenu-item heeft de naam van het `menuitem.md`

Het eerder voorbeeld toont dat de bron van het **Hoofdmenu-item** *Inleiding* is te vinden in `inleiding/index.md` en dat de inhoud van het **Submenu-item** *Achtergrond en toelichting* te vinden is in `inleiding/achtergrond_toelichting.md`.


## 2. Beheer van de pagina's

### 2.1 Markdown
De publicatie van de website gaat op basis van markdown. De bestanden zijn te vinden in de directory [`docs/`](/docs/). 
De structuur onder `docs/` volgt de structuur zoals beschreven in het navigatie-deel in `mkdocs.yml`.

Op basis van de huidige publicatie (augustus 2026) ziet de inhoud onder `docs/` er als volgt uit:
```shell
    |-- docs                                            # Hoofddirectory publicatie
    |   |-- applicatie/                                 # Documenten mbt artikel APPLICATIE
    |   |   |-- applicatiecomponenten.md
    |   |   |-- diensten
    |   |   |   |-- index.md
    |   |   |   |-- notificeren-en-melden.md
    |   |   |   |-- raadplegen.md
    |   |   |   |-- testen.md
    |   |   |   |-- toetreden.md
    |   |   |   `-- uittreden.md
    |   |   |-- graphql_over_http.md
    |   |   |-- index.md
    |   |   |-- nid_netwerkstelsel.md
    |   |   `-- silvester.md
    |   |-- img/                                        # Afbeeldingen uit de diverse artikelen
    |   |   `-- welkom-lagen.png
    |   |-- informatie/                                 # Documenten mbt artikel INFORMATIE
    |   |   |-- index.md
    |   |   `-- informatiestandaard.md
    |   |-- inleiding/                                  # Documenten mbt artikel INLEIDING
    |   |   |-- achtergrond_toelichting.md
    |   |   |-- begrippenlijst.md
    |   |   |-- governance.md
    |   |   `-- index.md
    |   |-- it-infrastructuur/                          # Documenten mbt artikel IT-INFRASTRUCTUUR
    |   |   |-- identificatie_authenticatie.md
    |   |   |-- index.md
    |   |   |-- logging.md
    |   |   `-- netwerk.md
    |   |-- organisatiebeleid/                          # Documenten mbt artikel ORGANISATIEBELEID
    |   |   |-- architectuur.md
    |   |   |-- index.md
    |   |   |-- ontwerpkeuzes.md
    |   |   |-- randvoorwaarden.md
    |   |   |-- releasebeleid.md
    |   |   |-- serviceafspraken/
    |   |   |   |-- afnemersdeel.md
    |   |   |   |-- bronhoudersdeel.md
    |   |   |   |-- index.md
    |   |   |   `-- operationeel_netwerkbeheer.md
    |   |   `-- wijzigingsverzoeken.md
    |   |-- proces/                                     # Documenten mbt artikel PROCES
    |   |   |-- index.md
    |   |   |-- netwerkfuncties.md
    |   |   `-- procesmodel.md
    |   `-- uitwisselprofiel/                           # Documenten mbt artikel UITWISSELPROFIEL
    |       |-- index.md
    |       |-- uitwisselprofiel_bemiddeling.md
    |       `-- uitwisselprofiel_indicatie.md
    `-- index.md                                        # Homepage publicatie
```

### 2.2 Diagrammen

Voor diagrammen wordt zoveel als mogelijk *Mermaid* gebruikt. Daarmee borgen we direct de source-code van een diagram in het artikel zelf. Voor meer informatie zie [Github - creating diagrams](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams) en [Mermaid](https://mermaid.ai/open-source/intro/).

Bij de publicatie wordt de mermaid-code omgezet naar een leesbaar diagram.

### 2.3 Afbeeldingen

Wanneer het niet mogelijk is gebruik te maken van een Mermaid-diagram, plaats je een afbeelding in: `/docs/img/` waarbij je de afbeelding begint met de naam van het artikel waarin het wordt gebruikt. Zo komt in het artikel 'Welkom' een afbeelding voor met de lagen-structuur. De naam van de afbeelding is `welkom-lagen.png`.

## 3. Publicatie proces

De toelichting onder [1. Beheer van het menu en inhoud](#1-beheer-van-het-menu-en-inhoud) en [2. Beheer van de pagina's](#2-beheer-van-de-paginas) is voldoende om de publicatie van het Afsprakenstelsel iWlz inhoudelijk te beheren.

Aanpassingen aan het menu gaat op basis van aanpassingen in `mkdocs.yml` en `/docs/` (zie 1. Beheer van het menu en inhoud). Aanpassingen in de inhoud van de artikelen gaat door middel van het aanpassen van het betreffende markdown document. 

Het proces om aanpassingen in een nieuwe publicatie te verwerken is als volgt: 

```mermaid
stateDiagram
direction LR
    [*] --> Create_Staging
    Create_Staging --> Update_Staging
    Update_Staging --> Commit_Staging
    Commit_Staging --> Verify_Staging
    state VerificationS <<choice>>
    Verify_Staging --> VerificationS
    VerificationS --> Update_Staging : false
    VerificationS --> Merge_Main : correct
    state VerificationM <<choice>>
    Merge_Main --> Verify_Main
    Verify_Main --> VerificationM
    VerificationM --> Update_Staging: false
    VerificationM --> Delete_Staging: correct
    Delete_Staging --> [*]

    Create_Staging: Maak een "staging-*" branch aan
    Update_Staging: Wijzig staging
    Commit_Staging: Commit Staging
    Verify_Staging: Controleer de staging publicatie
    Merge_Main: Merge Staging naar Main
    Verify_Main: Controleer de publicatie
    Delete_Staging: Verwijder de staging-branch
```

Toelichting:
| Stap | Uitleg |
| --: | :-- |
| 1. | Maak een staging branch aan. De branchnaam **moet** beginnen met `staging`. Bijvoorbeeld `staging_260817` of `staging_remo`. Iets wat voor jou herkenbaar is. |
| 2. | Voer de benodigde wijzigingen door op/in de zojuist aangemaakt staging-branch
| 3. | Elke commit op de staging-branch zorgt voor een nieuwe publicatie op https://istandaarden.github.io/Afsprakenstelsel-iWlz/< staging-branch-naam >, bijvoorbeeld: https://istandaarden.github.io/Afsprakenstelsel-iWlz/staging_260817/ |
| 4. | Controleer de wijzigingen |
| 5. | Als de wijzigingen zijn zoals verwacht, merge dan de staging-branch naar `main` |
| 6. | Controleer de wijzigingen op: https://istandaarden.github.io/Afsprakenstelsel-iWlz/ (productie omgeving) | 
| 7. | Verwijder de aangemaakte staging-branch. Dit zorgt er ook voor dat de staging publicatie zal worden verwijderd!







## 4. Beheer van de publicatie
Hieronder volgt een korte beschrijving van de overige onderdelen.

```shell
|-- docs                                            # Hoofddirectory publicatie
|   |-- applicatie/                                 # Documenten mbt artikel APPLICATIE
|   |   |-- applicatiecomponenten.md
|   |   |-- diensten
|   |   |   |-- index.md
|   |   |   |-- notificeren-en-melden.md
|   |   |   |-- raadplegen.md
|   |   |   |-- testen.md
|   |   |   |-- toetreden.md
|   |   |   `-- uittreden.md
|   |   |-- graphql_over_http.md
|   |   |-- index.md
|   |   |-- nid_netwerkstelsel.md
|   |   `-- silvester.md
|   |-- assets/                                     # Nodig voor publicatie
|   |-- css/                                        # Nodig voor publicatie
|   |-- img/                                        # Afbeeldingen uit de diverse artikelen
|   |   `-- welkom-lagen.png
|   |-- informatie/                                 # Documenten mbt artikel INFORMATIE
|   |   |-- index.md
|   |   `-- informatiestandaard.md
|   |-- inleiding/                                  # Documenten mbt artikel INLEIDING
|   |   |-- achtergrond_toelichting.md
|   |   |-- begrippenlijst.md
|   |   |-- governance.md
|   |   `-- index.md
|   |-- it-infrastructuur/                          # Documenten mbt artikel IT-INFRASTRUCTUUR
|   |   |-- identificatie_authenticatie.md
|   |   |-- index.md
|   |   |-- logging.md
|   |   `-- netwerk.md
|   |-- organisatiebeleid/                          # Documenten mbt artikel ORGANISATIEBELEID
|   |   |-- architectuur.md
|   |   |-- index.md
|   |   |-- ontwerpkeuzes.md
|   |   |-- randvoorwaarden.md
|   |   |-- releasebeleid.md
|   |   |-- serviceafspraken/
|   |   |   |-- afnemersdeel.md
|   |   |   |-- bronhoudersdeel.md
|   |   |   |-- index.md
|   |   |   `-- operationeel_netwerkbeheer.md
|   |   `-- wijzigingsverzoeken.md
|   |-- overrides/                                  # Nodig voor publicatie
|   |-- proces/                                     # Documenten mbt artikel PROCES
|   |   |-- index.md
|   |   |-- netwerkfuncties.md
|   |   `-- procesmodel.md
|   `-- uitwisselprofiel/                           # Documenten mbt artikel UITWISSELPROFIEL
|       |-- index.md
|       |-- uitwisselprofiel_bemiddeling.md
|       `-- uitwisselprofiel_indicatie.md
|-- index.md                                        # Homepage publicatie
|-- mkdocs.yml.                                     # Configuratiebestand publicatie
`-- README.md 
```


## Installatie
Onderdelen
- MkDocs: https://www.mkdocs.org
- Materials for MkDocs: https://squidfunk.github.io/mkdocs-material/

### Instructies
1. Volg de handleiding van James Willet: https://jameswillett.dev/getting-started-with-material-for-mkdocs/

Er is eventueel meer informatie via:
1. https://www.mkdocs.org/user-guide/installation/
3. https://squidfunk.github.io/mkdocs-material/getting-started/
 

### Handleiding
- https://squidfunk.github.io/mkdocs-material/setup/

## local install obv Python - MacOS
Hiermee installeer je de onderdelen om lokaal een server te draaien zodat je op je eigen omgeving in een preview kan testen. Doe je dit niet dan krijg je pas iets te zien als de Git-publicatie is voltooid. 

Om te publiceren is dit dus niet noodzakelijk, wel handig.

1. Python: `brew install python` 
2. Pango (voor pdf-generatie): `brew install pango`
3. Add to `~/.zshrc` or `~/.bash_profile`: `export DYLD_LIBRARY_PATH="/opt/homebrew/lib:$DYLD_LIBRARY_PATH"` 
4. Setup a Python virtual environment by typing `python -m venv venv`
5. Type `source venv/bin/activate` to activate the virtual environment
6. Install mkdocs material - `pip install mkdocs-material`
7. Install plugin glightbox voor het kunnen vergroten van plaatjes in een pop-up: `pip install mkdocs-glightbox`
8. Install plugin voor het genereren van een pdf: `pip install mkdocs-with-pdf` 

### Opstarten lokale server:

1. Als de virtual environment nog niet is geactiveerd: `source .venv/bin/activate`
2. Lokale server starten: `mkdocs serve`
3. Lokale server is beschikbaar op http://localhost:8000/Afsprakenstelsel-iWlz

### Afsluiten lokale server:

1. `CTRL`+ `C` - sluit de server af
2. `deactivate` - om de python VM af te sluiten

### PDF lokaal aanmaken
Standaard wordt er lokaal geen PDF gegenereerd. Dit is om het publicatie proces van de website te versnellen en er niet elke keer opnieuw een pdf zal worden gegenereerd. 

**Fysieke pdf lokaal**  
Wil je dit wel een keer laten genereren voer dan het volgende uit in de terminal nadat de Python VM is opgestart:  
`ENABLED_PDF_EXPORT=1 mkdocs build`

Daarna zal er een pdf beschikbaar zijn onder: `./site/pdf`

**pdf in runtime lokaal**

PDF beschikbaar stellen in lokale website:  
`ENABLED_PDF_EXPORT=1 mkdocs serve`

Daarna zal er een pdf beschikbaar zijn via: http://localhost:8000/Afsprakenstelsel-iWlz/pdf/afsprakenstelsel-iWlz.pdf

### PDF op website
Vanuit Github gebeurd dit wel telkens wanneer er een nieuwe commit plaatsvindt tenzij je dit aanpast in de action. 
