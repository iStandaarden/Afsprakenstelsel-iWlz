# IT-Infrastuctuur

!!! info "Versie: *17-12-2025* | Status: *Definitief*"

**Inleiding**  
In dit hoofdstuk zijn de technische afspraken vastgelegd die noodzakelijk zijn om het iWlz-netwerkmodel betrouwbaar en veilig te laten functioneren.

Het uitgangspunt is dat het iWlz-netwerkmodel zoveel mogelijk aansluit bij reeds bestaande en breed gedragen standaarden op het gebied van netwerkcommunicatie, beveiliging, identificatie, monitoring en logging.

Dit hoofdstuk bevat onder andere de volgende onderdelen:


<div class="grid cards" markdown>

-   :material-identifier:{ .lg .middle } __Identificatie & authenticatie__

    ---

    Dit artikel beschrijft hoe entiteiten in het iWlz-netwerkmodel van een verifieerbare identiteit worden voorzien. De entiteiten die hieronder vallen zijn deelnemers en dienstverleners die namens deze deelnemers optreden. De identiteit wordt verifieerbaar door gebruik te maken van sleutelmateriaal.

    [:octicons-arrow-right-24: lees verder](./identificatie_authenticatie.md)

-   :fontawesome-solid-network-wired:{ .lg .middle } __Netwerk__

    ---

    Alle communicatie binnen het iWlz-netwerkmodel vindt plaats via internet, er wordt dus geen gebruik gemaakt van private netwerken. Gezien de gevoelige aard van de gegevens zijn alle deelnemers aan het iWlz netwerk verplicht gebruik te maken van DNSSEC.

    [:octicons-arrow-right-24: lees verder](./netwerk.md)

-   :fontawesome-solid-file-signature:{ .lg .middle } __Logging__

    ---

    Binnen het iWlz-netwerkmodel is gestandaardiseerde tracelogging verplicht. Het doel hiervan is om transacties en gebeurtenissen in de keten end-to-end te kunnen volgen en analyseren. Hiermee kan sneller worden vastgesteld waar een fout optreedt, hoe een verzoek zich door het netwerk beweegt en welke partijen betrokken zijn.

    [:octicons-arrow-right-24: lees verder](./logging.md)

</div>

!!! info
    
    Afspraken over beschikbaarheid, responstijden en ondersteuning zijn opgenomen in het hoofdstuk [**Organisatiebeleid > Serviceafspraken**](../organisatiebeleid/serviceafspraken/).