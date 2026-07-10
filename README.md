# Dummy pagina voor het Afsprakenstelsel iWlz

Afsprakenset iWlz 

Zie publicatie https://istandaarden.github.io/Afsprakenstelsel-iWlz/ 

---
## Beheer van de publicatie

### Beheer van het menu

De indeling en inhoud van het menu wordt bepaald door twee onderdelen:
1. De inhoud van het document: `mkdocs.yml`
2. De directory-structuur onder de map `docs/` 

#### 1. Inhoud `mkdocs.yml`
In het yaml-document is er een hoofdtag `nav:`hieronder wordt de menustructuur gedefinieerd.  De opbouw volgt de structuur : 
> `{Titel op het scherm}: {verwijzing naar het brondocument}`

bijvoorbeeld:
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

Hieruit valt op te maken dat er een **Inleiding** is waarvan de bron is te vinden in `inleiding/index.md` 


#### 2. De structuur onder `docs/`
De structuur onder `docs/` volgt de structuur zoals beschreven in `mkdocs.yml` in het deel `{verwijzing naar het brondocument}`

        |-- docs                                            # Hoofddirectory publicatie
        |   |-- applicatie/                                 # Documenten mbt artikel APPLICCATIE
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
