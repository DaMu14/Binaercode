# Spiele Api

# Projekt-Dokumentation

Müller und Jeanneret

## 1 Informieren

### 1.1 Ihr Projekt

In diesem Projekt entwickeln wir eine Anwendung, mit der man Binärcode umrechnen kann.

| US-№ | Verbindlichkeit | Typ           | Beschreibung                                                                                                                                                |
| ---- | --------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Muss            | Funktional    | Als Benutzer möchte ich die Applikation starten können, damit ich sie für meine Zwecke brauchen kann.                                                       |
| 2     | Muss           | Funktional    | Als Benutzer möchte ich auswählen können, was für Zahlen  ich in Binärcode umwandeln will, damit ich flexibel Binärcode herausfinden kann. |
| 3    | Muss            | Funktional    | Als Benutzer möchte ich Binärcode in Dezimalzahlen umrechnen können, damit ich verschiedene Codes miteinander vergleichen kann.                        |
| 4    | Muss            | Funktional    | Als Benutzer möchte ich Dezimalzahlen in Binärcode umrechnen können, damit ich effizient mit Binärdaten arbeiten kann.                                       |
| 5    | Muss            | Funktional    | Als Benutzer möchte ich, dass Dezimalzahlen mit Kommas in der Applikation in Binärcode umgerechnet werden können, damit ich präzise Daten verarbeiten kann.  |
| 6    | Muss            | Funktional    | Als Benutzer möchte ich sehen, Binärcode in Kommazahlen umwandeln können, damit ich die Daten präzise verarbeiten kann.              |
| 7    | Muss            | Funktional    | Als Benutzer möchte ich BCD-Code in der Applikation verwenden können, damit ich spezielle binäre Darstellungen nutzen kann.                                |
| 8    | Muss            | Funktional    | Als Benutzer möchte ich ASCII-Code verwenden können in der Applikation, damit ich andere binäre Daten umrechnen kann.                                        |
| 9    | Muss            | Funktional    | Als Benutzer möchte ich die verschiedenen Binärcodes ineinander umrechnen können, damit ich flexibel zwischen den Darstellungen wechseln kann.           |
| 10   | Muss            | Qualität      | Als Benutzer möchte ich, dass Fehleingaben abgefangen werden, damit sichergestellt ist, dass die Umrechnungen korrekt erfolgen.                            |
| 11   | Muss            | Randbedingung | Als Benutzer möchte ich, dass die Applikation benutzerfreundlich ist, damit ich sie intuitiv und effizient nutzen kann.                      |
| 12   | Muss            | Funktional    | Als Benutzer möcht ich negative Zahlen in Binärzahlen umrechnen können, damit ich auch mit diessen Binärdaten arbeiten kann. |
| 13   | Muss            | Funktional    | Als Benutzer möchte ich Text in Binärcode umwandeln können, damit ich flexibler bin. |

### 1.3 Testfälle

| TC-№ | Ausgangslage | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  | PC ist gestartet | Applikation öffnen | Applikation öffnet sich. |
| 2.1  | Applikation ist gestartet | BCD Code oder ASCII Code auswählen | Umrechnungsmenu öffnet sich. |
| 3.1  | BCD wurde ausgewählt      | 0110|  6|
| 3.2  | ASCII Code wurde ausgewählt | 20   | 0010 0000 |
| 4.1  | BCD wurde ausgewählt   | 12 | 1100 |
| 4.2  | ASCII wurde ausgewählt     | 33   | !   |
| 5.1  | BCD wurde ausgewählt      | 12,3 | 1100,01001 |
| 6.1  | BCD wurde ausgewählt      | 1100,01  | 12,25 |
| 7.1  | Applikation ist gestartet | Klicken auf BCD Code | Umrechnungsmenu von BCD Rechner öffnet sich. |
| 8.1  | Applikation ist gestartet  | Klicken auf ASCII Code |  Umrechnungsmenü von ASCII Rechner öffnet sich. |
| 9.1  | Dezimal ausgewählt  | 12     | 1100   |
| 9.2  | Kommazahl ausgewählt    | 12,2 | 1100,0011 |
| 10.1 | BCD wurde ausgewählt | 1é | Fehlermeldung |
| 10.2 | ASCII wurde ausgewählt | 漢語 | Fehlermeldung |
| 12.1 | BCD Code und Negativezahl ausgewählt | -6 | 1 0110 |
| 12.2 | ASCII Code und Negativezahlen ausgewählt | -6 | 45 54 |
| 13.1 | BCD Code ausgewählt | Mein Name ist Paul. | 1101 0110 1001 1100  1101 1010 1101 0110  1001 1011 1100  1111 1010 1110 1100 |




### 1.4 Diagramme

![image](https://github.com/DaMu14/Binaercode/assets/110892742/064d213f-76a6-4da4-a3c0-bda2b1890f39)
 
Usecase Diagramm


## 2 Planen

| AP-№ | Frist      | Zuständig   | Beschreibung                  | Geplante Zeit |
| ---- | ---------- | ----------- | ----------------------------- | ------------- |
|  1.A | 8.3.24     | Jeanneret   | Userstories schreiben         |  60 min       | 
|  2.A | 8.3.24     | Jeanneret   | Testfälle schreiben           |  60 min       | 
|  3.A | 15.3.24    | Jeanneret   | Planen schreiben              |  60 min       | 
|  4.A | 15.3.24    | Jeanneret   | Html.index machen             |  120 min      | 
|  5.A | 15.3.24    | Jeanneret   | CSS.style machen              |  180 min      | 
|  6.A | 8.3.24     | Müller | BCD-Code.Js beginnen               |  120 min      | 
|  6.B | 15.3.24    | Müller | BCD-Code.JS fertig machen          |  120 min      | 
|  7.A | 15.3/22.3.24| Müller | ASCII-Code.Js beginnen            |  120 min      | 
|  7.B | 22.3/5.4.24| Müller | ASCII-Code.Js fertig machn         |  120 min      | 
|  8.A | 5.4.24     | Müller      | Code Überprüfen               |  60 min       |
|  9.A | 5.4.24     | Jeanneret   | Kontrollieren schreiben       |  60 min       |
|  10.A| 26.4.24    | Individuell | Portfolio schreiben           |  120 min      |

Total: 1140 min

## 3 Entscheiden

Wir haben beschlossen, gemäß dem Plan vorzugehen und mit dem Projekt zu beginnen.
 
## 4 Realisieren

| AP-№ | Datum             | Zuständig   | geplante Zeit | tatsächliche Zeit |
| ---- | ----------------- | ----------- | ------------- | ----------------- |
| 1.A  |  8.3.24           | Jeanneret   | 60 min        |      60 min       |
| 2.A  |  8.3.24           | Jeanneret   | 60 min        |      60 min       | 
| 3.A  |  8.3.24           | Jeanneret   | 60 min        |      60 min       |
| 4.A  |  15.3.24          | Jeanneret   | 120 min       |      100 min      |
| 5.A  |  15.3.24          | Jeanneret   | 180 min       |      240 min      |
| 6.A  |  8.3.24           | Müller      | 120 min       |      120 min      |
| 6.B  |  15.3.24          | Müller      | 120 min       |      120 min      |
| 7.A  |  15.3/22.3.24     | Müller      | 120 min       |      120 min      |
| 7.B  |  22.3/5.4.24      | Müller      | 120 min       |      120 min      |

## 5 Kontrollieren

### 5.1 Testprotokoll

| TC-№ | Datum      | Resultat | Tester |
| ---- | ---------- | -------- | ------ |
 

 

## 6 Auswerten
 

