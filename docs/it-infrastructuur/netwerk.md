# Netwerk

!!! info "Versie: *17-12-2025* | Status: *Definitief*"

# 1. Inleiding

Alle communicatie binnen het iWlz-netwerkmodel vindt plaats via internet, er wordt dus geen gebruik gemaakt van private netwerken. Gezien de gevoelige aard van de gegevens zijn alle deelnemers aan het iWlz netwerk verplicht gebruik te maken van DNSSEC.

# 2. Domain Name System Security Extensions (DNSSEC)

Met DNSSEC kan de ontvanger de echtheid van de domeinnaaminformatie (waaronder IP-adressen) controleren. Dit voorkomt bijvoorbeeld dat een aanvaller het IP-adres ongemerkt manipuleert (DNS-spoofing) en daarmee internetverkeer omleidt naar een eigen server.

Een domeinnaamhouder kan met DNSSEC een digitale handtekening toevoegen aan DNS-informatie. Aan de hand van deze handtekening kan de client de inhoud en de ontvangen DNS-informatie valideren. Hierdoor is met grote waarschijnlijkheid vast te stellen dat het antwoord van de DNS onderweg niet is gemanipuleerd door derden.

Zie ook: [DNSSEC | Forum Standaardisatie](https://www.forumstandaardisatie.nl/open-standaarden/dnssec)

# 3. Transportbeveiliging (TLS)

Alle communicatie tussen verschillende deelnemers aan het iWlz-netwerkmodel over het netwerk is gebaseerd op het artikel [Identificatie & authenticatie](https://wlz.atlassian.net/wiki/spaces/IWLZAS/pages/23071502).

Alle over het internet verlopende communicatie tussen één deelnemer aan het iWlz-netwerkmodel en de operationeel ketenbeheerder moet minimaal beveiligd zijn met tweezijdig TLS 1.2 of TLS 1.3 op basis van een PKI VECOZO certificaat.

---