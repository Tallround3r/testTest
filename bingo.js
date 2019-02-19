let excuses = ['Die Security hat aber gesagt, dass ...', 'Die Fiducia & GAD ist noch nicht bereit dafür.', 'Bei uns' +
' im Norden/Süden haben wir aber gute Erfahrungen gemacht mit ...', 'Wenn einer mit einem Affe auf der Schulter die' +
' Tür rein kommt, dann sorge ich dafür, dass er ihn auch wieder mitnimmt.', 'Wir können den Internen Auftrag nicht annehmen.', 'Wir können den Internen Auftrag nicht in diesem Release umsetzen.',
	'Wir können für den Internen Auftrag keine Aufwandsschätzung durchführen.', 'Ich weiß wie es geht, kann dir aber nicht helfen, da ich keine Zeit habe, ich sende dir einen Link…',
	'Das klären wir im Nachgang', 'Das klären wir bilateral', 'Das nehmen wir mit und prüfen das', 'Ich kümmere mich im Nachgang um eine Lösung',
	'Mehr machen wir an dieser Stelle nicht. Alles andere ist Wunschkonzert und wird abgelehnt.', 'Das Thema ist komplex', 'Das Thema ist nicht trivial',
	'Das ist eine undurchsichtige Gemengelage', 'Das ist Projektgeschäft', 'Das ist Aufgabe des Produkthauses', 'Das ist ein ALP (Andere Leute Problem)',
	'Ihr müsst die richtigen Fragen stellen', 'Das ist Schmuck am Nachthemd', 'Dazu habe ich keine Berechtigung/Befugnis.', 'Da bin ich nicht der richtige Ansprechpartner, frag mal abc.',
	'Da müssen zuerst die Rahmenbedingungen bzw. Prozesse geändert werden, damit das funktioniert.', 'Wir müssen mehr in Prozessen denken.',
	'Gibts dafür \'ne Schulung?', 'Wir müssen tiefer in die Breite gehen!', 'Ich nehm\'s mal mit ins xxxx-Jour fixe.', 'Da müsste man erst einmal an anderer Stelle die entsprechenden Voraussetzungen schaffen',
	'Eigentlich müsste das hier genauso funktionieren, aber hier sind wir nunmal im U-Plex...', 'Wir kommen dann auf Sie zu.', 'Wie stellen Sie sich das vor? Wir machen schließlich IT für Banken.',
	'Wer muss jetzt etwas tun?', 'Was bedeutet das für uns?', 'Wenn wir das so machen, geht es an anderer Stelle nicht mehr.', 'Da muss erstmal die Zuständigkeit geregelt werden...',
	'Jetzt sofort? Nö, da müssen wir erst im Team abstimmen in welchen Sprint wir das überhaupt rein kriegen. ', 'Das muss ich erst noch mit x und y und z abstimmen.',
	'Ich bin doch nur ein kleines Licht, da muss man mal jemand über mir fragen.', 'Dafür brauchen wir einen Sonderfahrplan...', 'So ein großes Rad können wir zu dieser Zeit nicht drehen.',
	'Tut mir leid, ich darf das nicht mehr machen.', 'Das übergeben wir in die Linie', 'Das nehmen wir mal mit.', 'Aus technisch organisatorischen Gründen ...', 'Das fliegt uns alles um die Ohren.',
	'Dafür sind wir nicht aufgestellt', 'Das wichtigste ist, dass alles formal korrekt ist.', 'Was das genau bedeutet, weiß ich auch nicht, aber da hat sich bestimmt jemand vor 16 Jahren was bei gedacht. Also bleibt es so.',
	'Das ist jetzt echt zu kurzfristig.', 'Das müssen wir kommunikativ heilen.', 'Also in Produktion läuft das noch so! Obwohl wir das nicht mehr brauchen... trotzdem würde ich es lieber nicht abschalten wenn ich du wäre - wer weiß, was das für Auswirkungen hat? ¯\\_(ツ)_/¯',
	'Was, am Freitag nachmittag? Da ist hier keiner mehr...', 'Du stellst Dir das immer so einfach vor.', 'Jetzt haben wir schon so viel Zeit investiert, das müssen wir jetzt so zu Ende bringen. ',
	'Der Verbund will das nicht.', 'Steht das in der Arbeits- und Handlungsanweisung?', 'Das passt schon, wir sind ja jetzt agil :-()', 'Puh, da haben wir keine Aktien drin',
	'Meine Arme sind zu kurz dafür.', 'Das muss ich erst noch mit xyz (Anzahl beliebig ;-) abstimmen.', 'Statusbericht wurde nicht nach den Vorgaben erstellt.', 'Die operative Arbeitsgruppe muss sich frequentieren.',
	'Da entsteht nur virtueller Aufwand.', 'Wir haben Vorstandsrückenwind.', 'Wir machen nur Standard.', 'Das ist kein Standard!', 'Die BaFin will das so.', 'Wurde von der Bank ein Ticket erstellt?',
	'Nein, das sehe ich nicht so! Lass mich mal machen!', 'Das entwickeln wir im Rahmen eines Stufenkonzepts.', 'Gibt es dafür einen Prozess in der sfixO?',
	'Ich mach das jetzt schon seit 20 Jahren so.', 'Der Vorstand hat entschieden....', 'Das ist historisch so gewachsen.', 'Das würde zu viel MIPS kosten!',
	'Das ist viel zu einfach.', 'Das ist viel zu kompliziert.', 'Never change a running system.', 'Dafür benötigen wir' +
	' doch erst einmal eine agile Organisation und die Umsetzung der Holokratie.', 'Da erhoffe ich mir Lösungen aus dem Projekt.', 'Damit kenne ich mich nicht aus. ',
	'Dafür haben wir keine Zeit.', 'Das dauert viel zu lang.', 'Der Kunde soll das nicht machen.', 'Das geht nicht.', 'Das ist ein zu großes Rad.',
	'Dafür gibt es kein Budget.', 'Das muss erst noch mit xyz abgestimmt werden.', 'Das haben wir schon immer anders gemacht.', 'Dafür bin ich nicht zuständig.', 'Der Vorstand will das nicht.'];


function showMessage() {
	let random = parseInt(Math.random() * 91);
	document.querySelector('.excuseP').innerHTML = excuses[random];
}




