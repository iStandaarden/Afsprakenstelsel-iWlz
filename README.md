# Dummy pagina voor het Afsprakenstelsel iWlz

Afsprakenset iWlz 

Zie publicatie https://istandaarden.github.io/Afsprakenstelsel-iWlz/ 

---
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
