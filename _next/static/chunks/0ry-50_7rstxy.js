(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,32033,e=>{var n=e.i(43476),a=e.i(71645),i=e.i(31338);function t({id:e}){return(0,n.jsxs)("p",{id:e,className:"funktion-kopf",children:[(0,n.jsx)("span",{className:"funktion-marke",children:"Vorschau"}),"Oberfläche ohne Funktion, Eingaben werden nicht gesendet."]})}function s(e){return(0,n.jsxs)("div",{className:"funktion-feld",children:[(0,n.jsx)("label",{htmlFor:e.id,children:e.label}),(0,n.jsx)("input",{id:e.id,type:e.type,name:e.name,autoComplete:e.autoComplete,placeholder:e.platzhalter,spellCheck:"email"!==e.type&&void 0})]})}e.s(["Funktionsblock",0,function({art:e}){let[l,r]=(0,a.useState)(!1),o=(0,a.useId)(),c=e=>{e.preventDefault(),r(!0)},d=(0,n.jsx)("p",{className:"funktion-meldung",role:"status","aria-live":"polite",children:l?"Noch nicht angebunden: Diese Funktion braucht das Kleidio-Konto und ist in dieser Vorschau nicht verfügbar.":""});if("login"===e||"signup"===e){let a="signup"===e;return(0,n.jsxs)("form",{className:"funktion karte",onSubmit:c,"aria-describedby":`${o}-hinweis`,children:[(0,n.jsx)(t,{id:`${o}-hinweis`}),(0,n.jsxs)("div",{className:"funktion-anbieter",children:[(0,n.jsxs)("button",{type:"submit",className:"knopf knopf-zweit",children:["Mit Google ",a?"registrieren":"anmelden"]}),(0,n.jsxs)("button",{type:"submit",className:"knopf knopf-zweit",children:["Mit Discord ",a?"registrieren":"anmelden"]})]}),(0,n.jsx)("p",{className:"funktion-trenner",children:"oder mit E-Mail"}),(0,n.jsx)(s,{id:`${o}-mail`,label:"E-Mail",type:"email",name:"email",autoComplete:"email",platzhalter:"name@beispiel.de …"}),(0,n.jsx)(s,{id:`${o}-pw`,label:"Passwort",type:"password",name:"password",autoComplete:a?"new-password":"current-password",platzhalter:"Mindestens 8 Zeichen …"}),(0,n.jsx)("button",{type:"submit",className:"knopf knopf-haupt funktion-senden",children:a?"Konto erstellen":"Anmelden"}),d,(0,n.jsxs)("p",{className:"klein",children:[a?"Schon ein Konto? ":"Noch kein Konto? ",(0,n.jsx)("a",{className:"textlink",href:(0,i.k)(a?"/login":"/signup"),children:a?"Anmelden":"Registrieren"})]})]})}if("kuendigen"===e)return(0,n.jsxs)("form",{className:"funktion karte",onSubmit:c,"aria-describedby":`${o}-hinweis`,children:[(0,n.jsx)(t,{id:`${o}-hinweis`}),(0,n.jsx)(s,{id:`${o}-mail`,label:"E-Mail-Adresse deines Kontos",type:"email",name:"email",autoComplete:"email",platzhalter:"name@beispiel.de …"}),(0,n.jsx)(s,{id:`${o}-name`,label:"Name",type:"text",name:"name",autoComplete:"name",platzhalter:"Vor- und Nachname …"}),(0,n.jsxs)("label",{className:"funktion-haken",htmlFor:`${o}-ende`,children:[(0,n.jsx)("input",{id:`${o}-ende`,type:"checkbox",name:"naechstmoeglich",defaultChecked:!0}),(0,n.jsx)("span",{children:"Zum nächstmöglichen Zeitpunkt kündigen"})]}),(0,n.jsx)("button",{type:"submit",className:"knopf knopf-haupt funktion-senden",children:"Jetzt kündigen"}),d,l&&(0,n.jsxs)("p",{className:"klein",children:["Kündigen kannst du bis zur Anbindung formlos per Mail an"," ",(0,n.jsx)("a",{className:"textlink",href:"mailto:vintagelab@outlook.de",children:"vintagelab@outlook.de"}),"."]})]});if("abo"===e)return(0,n.jsxs)("div",{className:"funktion karte",children:[(0,n.jsx)(t,{id:`${o}-hinweis`}),(0,n.jsxs)("div",{className:"funktion-anbieter",children:[(0,n.jsx)("button",{type:"button",className:"knopf knopf-haupt",onClick:()=>r(!0),children:"Pro monatlich, 14,99 €"}),(0,n.jsx)("button",{type:"button",className:"knopf knopf-zweit",onClick:()=>r(!0),children:"Pro jährlich, 119 €"}),(0,n.jsx)("button",{type:"button",className:"knopf knopf-zweit",onClick:()=>r(!0),children:"Credits kaufen"})]}),d]});let h={"upload-listing":{label:"Bis zu 8 Fotos hochladen",mehrere:!0,knopf:"Listing erstellen",hilfe:"Front, Rück, Etikett und Detail zuerst."},"upload-studio":{label:"Foto von deinem Piece",mehrere:!1,knopf:"Studio-Bild erzeugen",hilfe:"Ein Foto reicht, liegend oder am Bügel."},"upload-check":{label:"Fotos vom Neck-Label hochladen",mehrere:!0,knopf:"Echtheit prüfen",hilfe:"Mehrere Fotos vom selben Piece sind sicherer."}}[e];return(0,n.jsxs)("form",{className:"funktion karte",onSubmit:c,"aria-describedby":`${o}-hinweis`,children:[(0,n.jsx)(t,{id:`${o}-hinweis`}),(0,n.jsxs)("label",{className:"funktion-upload",htmlFor:`${o}-datei`,children:[(0,n.jsx)("span",{className:"funktion-upload-titel",children:h.label}),(0,n.jsx)("span",{className:"fein",children:h.hilfe}),(0,n.jsx)("input",{id:`${o}-datei`,type:"file",name:"fotos",accept:"image/*",multiple:h.mehrere})]}),(0,n.jsx)("button",{type:"submit",className:"knopf knopf-haupt funktion-senden",children:h.knopf}),d]})}])},47556,e=>{var n=e.i(43476),a=e.i(25164),i=e.i(71645),t=e.i(31338);let s="Noch nicht angebunden: Diese Funktion braucht das Kleidio-Konto und ist in dieser Vorschau nicht verfügbar.",l=[{marke:"Stone Island",titel:"Stone Island Shadow Project Hoodie Schwarz Reflective Größe L",beschreibung:`✨ Stone Island Shadow Project Hoodie aus der SS22 Kollektion mit reflektierendem 3M-Detail.

Aus der hochbegehrten Shadow Project Linie, der technischen Sub-Brand von Stone Island. Charakteristisch: minimalistisches Design, taktische Details und Premium-Materialien Made in Italy.

━━━━━━━━━━━━━━━

📋 DETAILS
🏷️ Marke: Stone Island
👕 Modell: Shadow Project (SS22)
📏 Gr\xf6\xdfe: L
🧵 Material: 100% Baumwolle
🎨 Farbe: Schwarz
✨ Zustand: Sehr gut

📐 MA\xdfE (flach gemessen)
• Brustweite: [eintragen] cm
• L\xe4nge: [eintragen] cm
• \xc4rmell\xe4nge: [eintragen] cm

━━━━━━━━━━━━━━━

💬 \xdcBER DAS ST\xdcCK
3M-Reflective-Print am R\xfccken kommt im Dunkeln voll zur Geltung. Compass-Badge am linken \xc4rmel, original und makellos gestickt. Saubere Schnittf\xfchrung typisch f\xfcr die Shadow Project Linie.
✅ Originaler Tag mit 6-stelliger Artikel-Nr. vorhanden
✅ Authentizit\xe4t gepr\xfcft

━━━━━━━━━━━━━━━

📦 VERSAND & TRUST
✅ Versand mit DHL nach Zahlungseingang (1-3 Werktage)
✅ Sicher verpackt im Polybag/Karton
✅ Aus tierfreiem Nichtraucher-Haushalt
💬 Bei Fragen gerne anschreiben

━━━━━━━━━━━━━━━

#stoneisland #shadowproject #ss22 #stoneislandhoodie #archive #streetwear #italianmadeinitaly #reflective #vintedfinds #unisex`,schnell:"119,99",maximum:"319,99",einkauf:"70 €",warum:"Stone Island TOP-Tier · Shadow Project Hot-Piece · Sehr gut Zustand. SS22-Kollektion ist bei Sammlern stark gefragt.",masse:["Brustweite","Länge","Ärmellänge"]},{marke:"Carhartt",titel:"Carhartt Detroit Jacket Vintage 90s Workwear Braun Größe XL",beschreibung:`✨ Original Carhartt Detroit Jacket aus den 90ern, der Workwear-Klassiker schlechthin.

Heritage Workwear mit Patina und Charakter: Die Detroit Jacket ist das ikonische Carhartt-Modell mit Cord-Kragen und Blanket-Lining. Diese hier hat die typische 90er-Era-Schnittf\xfchrung mit boxy fit.

━━━━━━━━━━━━━━━

📋 DETAILS
🏷️ Marke: Carhartt
👕 Modell: Detroit Jacket (Heritage Workwear)
📏 Gr\xf6\xdfe: XL
🧵 Material: 12oz Duck Canvas (100% Baumwolle), Blanket-Lining
🎨 Farbe: Braun (Carhartt Brown)
✨ Zustand: Gut (mit Vintage-Patina)

📐 MA\xdfE (flach gemessen)
• Brustweite: [eintragen] cm
• L\xe4nge: [eintragen] cm
• \xc4rmell\xe4nge: [eintragen] cm
• Schulterbreite: [eintragen] cm

━━━━━━━━━━━━━━━

💬 \xdcBER DAS ST\xdcCK
C-Logo Patch am Brustkorb gerade aufgen\xe4ht, "Carhartt" Schriftzug klar lesbar. Cord-Kragen mit der typischen Workwear-Heritage. Patina an Saum und Manschetten geh\xf6rt zum Look, kein Mangel.

━━━━━━━━━━━━━━━

📦 VERSAND & TRUST
✅ Versand mit DHL nach Zahlungseingang (1-3 Werktage)
✅ Sicher verpackt im Polybag/Karton
✅ Aus tierfreiem Nichtraucher-Haushalt
💬 Bei Fragen gerne anschreiben

━━━━━━━━━━━━━━━

#carhartt #detroitjacket #carharttvintage #heritageworkwear #90svintage #workwear #vintagejacke #brownjacket #vintedfinds #unisex #archive`,schnell:"49,99",maximum:"199,99",einkauf:"30 €",warum:"Carhartt PREMIUM-Tier · Detroit Jacket Hot-Piece · 90s-Era treibt Sammler-Wert.",masse:["Brustweite","Länge","Ärmellänge","Schulterbreite"]},{marke:"Polo Ralph Lauren",titel:"Polo Ralph Lauren Big Pony Italia Polo Hemd Königsblau Größe M",beschreibung:`✨ Polo Ralph Lauren Big Pony Polo mit "Italia"-Stickung und gro\xdfer Nummer 5, die Sammler-Variante.

Aus der gefragten Big-Pony-Linie mit Country-Stickung. Diese Italia-Edition ist deutlich seltener als das Basic-Polo und hebt sich durch die Brust-Stickung in Gold deutlich ab.

━━━━━━━━━━━━━━━

📋 DETAILS
🏷️ Marke: Polo Ralph Lauren
👕 Modell: Big Pony "Italia" (mit Land-Stickung)
📏 Gr\xf6\xdfe: M
🧵 Material: 100% Baumwoll-Piqu\xe9
🎨 Farbe: K\xf6nigsblau
✨ Zustand: Sehr gut

📐 MA\xdfE (flach gemessen)
• Brustweite: [eintragen] cm
• L\xe4nge: [eintragen] cm
• \xc4rmell\xe4nge: [eintragen] cm

━━━━━━━━━━━━━━━

💬 \xdcBER DAS ST\xdcCK
Pony korrekt gestickt: Pferd nach links, klare Stickerei in Gold. "Italia"-Stickung \xfcber Brust prominent. Wei\xdfe Kn\xf6pfe ohne RL-Print typisch f\xfcr die Linie.
✅ Originaler "Polo by Ralph Lauren" Tag innen
✅ Authentizit\xe4t gepr\xfcft

━━━━━━━━━━━━━━━

📦 VERSAND & TRUST
✅ Versand mit DHL nach Zahlungseingang (1-3 Werktage)
✅ Sicher verpackt im Polybag/Karton
✅ Aus tierfreiem Nichtraucher-Haushalt
💬 Bei Fragen gerne anschreiben

━━━━━━━━━━━━━━━

#poloralphlauren #ralphlauren #bigpony #poloitalia #countrypony #ralphlaurenpolo #poloshirt #vintagepolo #vintedfinds #unisex`,schnell:"49,99",maximum:"74,99",einkauf:"16 €",warum:"Polo RL PREMIUM-Tier · Big Pony mit Land-Stickung verdoppelt Wert vs Basic-Polo · Sehr gut Zustand.",masse:["Brustweite","Länge","Ärmellänge"]}];e.s(["ListingBeispiel",0,function(){let[e,a]=(0,i.useState)(0),[t,s]=(0,i.useState)(l.map(e=>e.titel)),[r,o]=(0,i.useState)(l.map(e=>e.beschreibung)),c=l[e],d=r[e].split(/\s+/).filter(Boolean).length;return(0,n.jsxs)("div",{className:"beispiel karte","aria-label":"Live-Beispiel des Listing-Generators",children:[(0,n.jsxs)("div",{className:"beispiel-kopf",children:[(0,n.jsxs)("span",{className:"beispiel-marke",children:["Live-Beispiel · ",c.marke]}),(0,n.jsx)("div",{className:"beispiel-tabs",role:"group","aria-label":"Beispiel wählen",children:l.map((i,t)=>(0,n.jsx)("button",{type:"button","aria-pressed":t===e,"aria-label":`Demo ${t+1}: ${i.marke}`,onClick:()=>a(t),children:t+1},i.marke))})]}),(0,n.jsxs)("label",{className:"beispiel-feld",children:[(0,n.jsxs)("span",{className:"beispiel-label",children:["Titel · tippen zum Bearbeiten ",(0,n.jsxs)("span",{className:"zahlen",children:[t[e].length," / 100 Zeichen"]})]}),(0,n.jsx)("textarea",{rows:2,maxLength:100,value:t[e],onChange:n=>s(a=>a.map((a,i)=>i===e?n.target.value:a)),spellCheck:!1})]}),(0,n.jsxs)("label",{className:"beispiel-feld",children:[(0,n.jsxs)("span",{className:"beispiel-label",children:["Beschreibung · bearbeitbar ",(0,n.jsxs)("span",{className:"zahlen",children:[d," Wörter · fertig zum Einfügen"]})]}),(0,n.jsx)("textarea",{rows:7,value:r[e],onChange:n=>o(a=>a.map((a,i)=>i===e?n.target.value:a))})]}),(0,n.jsxs)("div",{className:"beispiel-masse",children:[(0,n.jsx)("span",{className:"beispiel-label",children:"Maße"}),(0,n.jsx)("ul",{children:c.masse.map(e=>(0,n.jsx)("li",{children:e},e))})]}),(0,n.jsxs)("div",{className:"beispiel-preise",children:[(0,n.jsx)("span",{className:"beispiel-label",children:"Verkaufspreis"}),(0,n.jsxs)("div",{className:"beispiel-preis-raster zahlen",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{children:"⚡ Schnell weg"}),(0,n.jsxs)("strong",{children:[c.schnell," €"]}),(0,n.jsx)("span",{className:"fein",children:"verkauft schnell"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{children:"💰 Maximum"}),(0,n.jsxs)("strong",{children:[c.maximum," €"]}),(0,n.jsx)("span",{className:"fein",children:"braucht Geduld"})]})]}),(0,n.jsxs)("p",{className:"klein zahlen",children:["Einkauf höchstens ",c.einkauf]}),(0,n.jsxs)("details",{className:"beispiel-warum",children:[(0,n.jsx)("summary",{children:"Warum dieser Preis?"}),(0,n.jsx)("p",{className:"klein",children:c.warum})]})]})]})},"ListingUpload",0,function(){let[e,a]=(0,i.useState)(!1);return(0,n.jsxs)("form",{id:"tool",className:"funktion karte",onSubmit:e=>{e.preventDefault(),a(!0)},children:[(0,n.jsxs)("p",{className:"funktion-kopf",children:[(0,n.jsx)("span",{className:"funktion-marke",children:"Vorschau"}),"Oberfläche ohne Funktion, Fotos werden nicht hochgeladen."]}),(0,n.jsxs)("label",{className:"funktion-upload",children:[(0,n.jsx)("span",{className:"funktion-upload-titel",children:"Bis zu 8 Fotos hochladen"}),(0,n.jsx)("span",{className:"fein",children:"oder per Drag & Drop · Strg+V einfügen"}),(0,n.jsx)("input",{type:"file",name:"fotos",accept:"image/*",multiple:!0})]}),(0,n.jsx)("p",{className:"fein",children:"Die KI liest die ersten 8 Fotos: Front, Rück, Etikett und Detail zuerst"}),(0,n.jsx)("p",{className:"fein",children:"Analyse-Fotos nicht dauerhaft gespeichert · DSGVO-konform"}),(0,n.jsxs)("details",{className:"funktion-vorab",children:[(0,n.jsx)("summary",{children:"Schon bekannt? Optional vorab ausfüllen"}),(0,n.jsxs)("div",{className:"funktion-feld",children:[(0,n.jsx)("label",{htmlFor:"vorab-modell",children:"Was ist es genau? (optional)"}),(0,n.jsx)("input",{id:"vorab-modell",name:"modell",autoComplete:"off",placeholder:"z. B. 700er Nuptse, Detroit Jacket, Big Pony …"}),(0,n.jsx)("span",{className:"fein",children:"Kennst du das Modell, schätzt die KI Titel und Preis danach."})]})]}),(0,n.jsx)("button",{type:"submit",className:"knopf knopf-haupt funktion-senden",children:"Listing erstellen"}),(0,n.jsx)("p",{className:"funktion-meldung",role:"status","aria-live":"polite",children:e?s:""}),(0,n.jsxs)("p",{className:"klein",children:["1800+ Reseller nutzen Kleidio. Preise aus 108 Marken. VintageLab-Member mit Pro oder Elite?"," ",(0,n.jsx)("a",{className:"textlink",href:(0,t.k)("/login"),children:"Mit Discord einloggen"})," ","und bis zu 30 Listings im Monat gratis statt 5."]})]})},"NichtAngebunden",0,function({children:e,className:a}){let[t,l]=(0,i.useState)(!1);return(0,n.jsxs)("span",{className:"nicht-angebunden",children:[(0,n.jsx)("button",{type:"button",className:a,"aria-expanded":t,onClick:()=>l(!0),children:e}),t&&(0,n.jsx)("span",{className:"nicht-angebunden-text",role:"status",children:s})]})},"StudioWerkzeuge",0,function(){let[e,a]=(0,i.useState)(0),[t,l]=(0,i.useState)(!1);return(0,n.jsxs)("form",{className:"funktion karte",onSubmit:e=>{e.preventDefault(),l(!0)},children:[(0,n.jsxs)("p",{className:"funktion-kopf",children:[(0,n.jsx)("span",{className:"funktion-marke",children:"Vorschau"}),"Oberfläche ohne Funktion, Fotos werden nicht hochgeladen."]}),(0,n.jsx)("div",{className:"studio-tabs",role:"group","aria-label":"Werkzeug",children:["Try-On","Flat-Lay","Bundle","Hintergrund","Eigene Anweisung"].map((i,t)=>(0,n.jsx)("button",{type:"button","aria-pressed":t===e,onClick:()=>a(t),children:i},i))}),(0,n.jsxs)("label",{className:"funktion-upload",children:[(0,n.jsx)("span",{className:"funktion-upload-titel",children:"Foto von deinem Piece hier ablegen"}),(0,n.jsx)("span",{className:"fein",children:"ziehen · klicken · Strg+V einfügen. Das Model wählst du danach."}),(0,n.jsx)("input",{type:"file",name:"foto",accept:"image/*"})]}),(0,n.jsx)("button",{type:"submit",className:"knopf knopf-haupt funktion-senden",children:"Bild auswählen und erzeugen"}),(0,n.jsx)("p",{className:"funktion-meldung",role:"status","aria-live":"polite",children:t?s:""})]})},"VorherNachher",0,function({vorher:e,nachher:t,vorherAlt:s,nachherAlt:l,vorherLabel:r="Vorher · dein Foto",nachherLabel:o}){let[c,d]=(0,i.useState)(50);return(0,n.jsxs)("div",{className:"vergleich",style:{"--x":`${c}%`},children:[(0,n.jsx)(a.default,{src:e,alt:s,width:720,height:900,sizes:"(min-width: 1024px) 34vw, 90vw"}),(0,n.jsx)(a.default,{className:"vergleich-nach",src:t,alt:l,width:720,height:900,sizes:"(min-width: 1024px) 34vw, 90vw"}),(0,n.jsx)("span",{className:"vergleich-griff","aria-hidden":"true"}),(0,n.jsx)("span",{className:"vergleich-l",children:r}),(0,n.jsx)("span",{className:"vergleich-r",children:o}),(0,n.jsx)("input",{className:"vergleich-regler",type:"range",min:0,max:100,value:c,onChange:e=>d(Number(e.target.value)),"aria-label":"Vergleich zwischen Vorher und Nachher"})]})}])}])})();