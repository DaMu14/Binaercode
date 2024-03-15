# Spiele Api

# Projekt-Dokumentation

Müller und Jeanneret

## 1 Informieren

### 1.1 Ihr Projekt

In diesem Projekt entwickeln wir eine Anwendung, mit der man Binärcode ineinander umrechnen kann.

| US-№ | Verbindlichkeit | Typ           | Beschreibung                                                                                                                                                |
| ---- | --------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Muss            | Funktional    | Als Benutzer möchte ich die Applikation starten können, um sie für meine Zwecke verwenden zu können.                                                        |
| 2    | Muss            | Funktional    | Als Benutzer möchte ich Binärcode in Dezimalzahlen umrechnen können, um verschiedene Codes miteinander vergleichen zu können.                               |
| 3    | Muss            | Funktional    | Als Benutzer möchte ich Dezimalzahlen in Binärcode umrechnen können, um effizient mit Binärdaten arbeiten zu können.                                        |
| 4    | Muss            | Funktional    | Als Benutzer möchte ich Dezimalzahlen mit Kommas in der Applikation in Binärcode umrechnen können, um präzise Daten verarbeiten zu können.                  |
| 5    | Muss            | Funktional    | Als Benutzer möchte ich sehen, welcher Binärcode für welche Dezimalzahl steht, um eine klare Zuordnung der Werte zu haben.                                  |
| 6    | Muss            | Funktional    | Als Benutzer möchte ich BCD-Code verwenden können in der Applikation, um spezielle binäre Darstellungen zu nutzen.                                          |
| 7    | Muss            | Funktional    | Als Benutzer möchte ich ASCII-Code verwenden können in der Applikation, um andere binäre Daten umrechnen zu können.                                         |
| 8    | Muss            | Funktional    | Als Benutzer möchte ich die verschiedenen Binärcodes ineinander umrechnen können, um flexibel zwischen den Darstellungen zu wechseln.                       |
| 9    | Muss            | Qualität      | Als Benutzer möchte ich, dass Fehleingaben abgefangen werden, um sicherzustellen, dass die Umrechnungen korrekt erfolgen.                                   |
| 10   | Muss            | Randbedingung | Als Benutzer möchte ich, dass die Applikation benutzerfreundlich ist, damit ich sie intuitiv und effizient nutzen kann.                                     |

### 1.3 Testfälle

| TC-№ | Ausgangslage | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  | PC ist gestartet | Applikation öffnen | Applikation öffnet sich. |
| 2.1  | Applikation ist am laufen | Im Menü auf Umrechnen drücken. | Umrechnermenü öffnet sich. |
| 3.1  | Umrechnungsmenü ist offen | Im Menü bei Eingabe, Dezimalzahl auswählen und bei Ausgabe, BCD-Code auswählen.| Umrechner braucht Eingabedaten. |
| 3.2  | Umrechnungsmenü ist offen | In der Eingabe wird die Dezimalzahl 1 eingegeben. | In der Ausgabe wird 0001 ausgegeben. |
| 4.1  | Umrechnungsmenü ist offen | Im Menü bei Eingabe, Dezimal auswählen und bei der Ausgabe, ASCII-Code auswählen. | Umrechner braucht Eingabedaten. |
| 4.2  | Umrechnungsmenü ist offen | In der Eingabe, wird die Zahl 1 eingegeben. | In der Ausgabe steht 00110001. |
| 5.1  | Umrechnungsmenü ist offen | Im Menü bei Eingabe, ASCII-Code auswählen und bei Ausgabe, BCD-Code auswählen. |
| 5.2  | Umrechnungsmenü ist offen | In der Eingabe, wird 00110111	eingeben.| In der Ausgabe steht 0111. |
| 6.1  | Umrechnungsmenü ist offen | Im Menü bei Eingabe, BCD-Code auswählen und bei Ausgabe, Dezimalzahl auswählen. |
| 6.2  | Umrechnungsmenü ist offen | In der Eingabe, wird 0011 eingegeben. | In der Ausgabe steht 3. |


### 1.4 Diagramme

 ![Screenshot 2024-03-15 080305](https://github.com/DaMu14/Binaercode/assets/110892742/0616beef-4fbb-46f3-8af3-eda56defc2cb)
Usecase Diagramm


## 2 Planen

| AP-№ | Frist      | Zuständig   | Beschreibung                  | geplante Zeit |
| ---- | ---------- | ----------- | ----------------------------- | ------------- |
|  1.A | 8.3.24     | Jeanneret   | Userstories schreiben         |  60 min       | 
|  2.A | 8.3.24     | Jeanneret   | Testfälle schreiben           |  60 min       | 
|  3.A | 15.3.24    | Jeanneret   | Planen schreiben              |  60 min       | 
|  4.A | 15.3.24    | Müller      | Html.index machen             |  60 min       | 
|  5.A | 15.3.24    | Müller      | CSS.style machen              |  120 min      | 
|  6.A | 15.3.24    | Müller/Jeanneret| BCD-Code.Js beginnen      |  120 min      | 
|  6.B | 22.3.24    | Müller/Jeanneret| BCD-Code.JS fertig machen |  120 min      | 
|  7.A | 22.3.24    | Müller/Jeanneret| ASCII-Code.Js beginnen    |  120 min      | 
|  7.B | 5.4.24     | Müller/Jeanneret| ASCII-Code.Js fertig machen| 120 min      | 
|  8.A | 5.4.24     | Müller      | Code Überprüfen               |  60 min       |
|  9.A | 5.4.24     | Jeanneret   | Kontrollieren schreiben       |  60 min       |


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
 

