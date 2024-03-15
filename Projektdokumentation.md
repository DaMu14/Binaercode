# Spiele Api

# Projekt-Dokumentation

Müller und Jeanneret

## 1 Informieren

### 1.1 Ihr Projekt

In diesem Projekt entwickeln wir eine Anwendung, mit der man Binärcode umrechnen kann.

| US-№ | Verbindlichkeit | Typ           | Beschreibung                                                                                                                                                |
| ---- | --------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Muss            | Funktional    | Als Benutzer möchte ich die Applikation starten können, damit ich sie für meine Zwecke brauchen kann.                                                        |
| 2     | Muss           | Funktional    | Als Benutzer möchte ich auswählen können, was für Zahlen  ich in Binärcode umwandeln will, damit ich flexibel Binärcode herausfinden kann. |
| 3    | Muss            | Funktional    | Als Benutzer möchte ich Binärcode in Dezimalzahlen umrechnen können, damit ich verschiedene Codes miteinander vergleichen kann.                        |
| 4    | Muss            | Funktional    | Als Benutzer möchte ich Dezimalzahlen in Binärcode umrechnen können, damit ich effizient mit Binärdaten arbeiten kann.                                        |
| 5    | Muss            | Funktional    | Als Benutzer möchte ich, dass Dezimalzahlen mit Kommas in der Applikation in Binärcode umgerechnet werden können, damit ich präzise Daten verarbeiten kann.                  |
| 6    | Muss            | Funktional    | Als Benutzer möchte ich sehen, Binärcode in Kommazahlen umwandeln können, damit ich die Daten präzise verarbeiten kann.                                |
| 7    | Muss            | Funktional    | Als Benutzer möchte ich BCD-Code verwenden können in der Applikation, damit ich spezielle binäre Darstellungen nutzen kann.                                |
| 8    | Muss            | Funktional    | Als Benutzer möchte ich ASCII-Code verwenden können in der Applikation, damit ich andere binäre Daten umrechnen kann.                                        |
| 9    | Muss            | Funktional    | Als Benutzer möchte ich die verschiedenen Binärcodes ineinander umrechnen können, damit ich flexibel zwischen den Darstellungen wechseln kann.           |
| 10    | Muss            | Qualität      | Als Benutzer möchte ich, dass Fehleingaben abgefangen werden, damit sichergestellt ist, dass die Umrechnungen korrekt erfolgen.                            |
| 11   | Muss            | Randbedingung | Als Benutzer möchte ich, dass die Applikation benutzerfreundlich ist, damit ich sie intuitiv und effizient nutzen kann.                                    |
| 12  | Muss             | Funktional     | Als Benutzer möcht ich negative Zahlen in Binärzahlen umrechnen können, damit ich auch mit diessen Binärdaten arbeiten kann. |

### 1.3 Testfälle

| TC-№ | Ausgangslage | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  | PC ist gestartet | Applikation öffnen | Applikation öffnet sich. |
| 2.1  | Applikation ist gestartet | BCD Code oder ASCII Code auswählen | Umrechnungsmenu öffnet sich. |
| 3.1  | BCD wurde ausgewählt      | Im Menü bei Eingabe, Binär auswählen und bei Ausgabe, Dezimal auswählen. 0110| Umrechner braucht Eingabedaten. 6|
| 3.2  | ASCII Code wurde ausgewählt | Hallo    |  72 97 108 108 111   |
| 4.1  | BCD wurde ausgewählt   | 12 | 1100 |
| 4.2  | ASCII wurde ausgewählt     | 33   | !   |
| 5.1  | BCD wurde ausgewählt      | 12,3 | 1100,01001 |
| 6.1  | 
| 4.2  | Applikation ist gestartet | In der Eingabe, wird die Zahl 1 eingegeben. | In der Ausgabe steht 00110001. |
| 5.1  | Applikation ist gestartet | Im Menü bei Eingabe, ASCII-Code auswählen und bei Ausgabe, BCD-Code auswählen. |
| 5.2  | Applikation ist gestartet | In der Eingabe, wird 00110111	eingeben.| In der Ausgabe steht 0111. |
| 6.1  | Applikation ist gestartet | Im Menü bei Eingabe, BCD-Code auswählen und bei Ausgabe, Dezimalzahl auswählen. |
| 6.2  | Applikation ist gestartet | 0011 | 3 |


### 1.4 Diagramme

 ![Screenshot 2024-03-15 080305](https://github.com/DaMu14/Binaercode/assets/110892742/0616beef-4fbb-46f3-8af3-eda56defc2cb)
Usecase Diagramm


## 2 Planen

| AP-№ | Frist      | Zuständig   | Beschreibung                  | geplante Zeit |
| ---- | ---------- | ----------- | ----------------------------- | ------------- |
|  1.A | 8.3.24     | Jeanneret   | Userstories schreiben         |  60 min       | 
|  2.A | 8.3.24     | Jeanneret   | Testfälle schreiben           |  60 min       | 
|  3.A | 15.3.24    | Jeanneret   | Planen schreiben              |  60 min       | 
|  4.A | 15.3.24    | Jeanneret   | Html.index machen             |  60 min       | 
|  5.A | 15.3.24    | Müller      | CSS.style machen              |  120 min      | 
|  6.A | 15.3.24    | Müller/Jeanneret| BCD-Code.Js beginnen      |  120 min      | 
|  6.B | 22.3.24    | Müller/Jeanneret| BCD-Code.JS fertig machen |  120 min      | 
|  7.A | 22.3.24    | Müller/Jeanneret| ASCII-Code.Js beginnen    |  120 min      | 
|  7.B | 5.4.24     | Müller/Jeanneret| ASCII-Code.Js fertig machen| 120 min      | 
|  8.A | 5.4.24     | Müller      | Code Überprüfen               |  60 min       |
|  9.A | 5.4.24     | Jeanneret   | Kontrollieren schreiben       |  60 min       |
|   |              |   Individuell | Portfolio schreiben          | 3*45          |

Total:

## 3 Entscheiden

 

## 4 Realisieren

| AP-№ | Datum             | Zuständig   | geplante Zeit | tatsächliche Zeit |
| ---- | ----------------- | ----------- | ------------- | ----------------- |
 
 

## 5 Kontrollieren

### 5.1 Testprotokoll

| TC-№ | Datum      | Resultat | Tester |
| ---- | ---------- | -------- | ------ |
 

 

## 6 Auswerten
 

