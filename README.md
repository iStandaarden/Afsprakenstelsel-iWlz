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
2. Setup a Python virtual environment by typing `python -m venv venv`
3. Type `source venv/bin/activate` to activate the virtual environment
4. Install mkdocs material - `pip install mkdocs-material`
5. Install plugin glightbox voor het kunnen vergroten van plaatjes in een pop-up: `pip install mkdocs-glightbox`
6. Install plugin voor het genereren van een pdf: `pip install mkdocs-with-pdf` 

Hierna kan je een lokale server opstarten: 

1. Als de virtual environment nog niet is geactiveerd: `source .venv/bin/activate`
2. Lokale server starten: `mkdocs serve`
3. Lokale server is beschikbaar op http://localhost:8000/Afsprakenstelsel-iWlz