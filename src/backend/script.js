
// JavaScript für Sortierung & Live-Suche

document.addEventListener("DOMContentLoaded", function () {

    const sortSelect = document.getElementById("sortSelect");

    //Suche ein <input>-Element, dessen id mit _search endet. z.B <input id="tankstellen_block_67be5de3ddced_search" ..
    const searchInput = document.querySelector("input[id$='_search']"); 

    // Suche ein <div>-Element, dessen id mit _list endet. z. B. tankstellen_block_xxxxx_list.
    // tankstellenList ist das Container-Element, das alle Tankstellen-Karten (.tankstellen-card) enthält.
    const tankstellenList = document.querySelector("div[id$='_list']");

    // Funktion zum Sortieren der Tankstellen
    function sortTankstellen(order) {
        // sucht alle tankstellen-card in diesem Container
        // und wandelt die NodeList in ein echtes Array um
        let cards = Array.from(tankstellenList.querySelectorAll(".tankstellen-card")); 
       
       
        // sortiert die cards (die .tankstellen-card-Elemente) alphabetisch anhand des Attributs data-street.
        cards.sort((a, b) => {
            let streetA = a.getAttribute("data-street");
            let streetB = b.getAttribute("data-street");

            return order === "asc" ? streetA.localeCompare(streetB) : streetB.localeCompare(streetA);
        });

        // Neu sortierte Elemente in das Container-Element einfügen
        tankstellenList.innerHTML = ""; // entfernt alle vorhandenen Elemente in tankstellenList, indem es den HTML-Inhalt auf einen leeren String setzt.
        cards.forEach(card => tankstellenList.appendChild(card)); // nimmt jede card aus cards (die vorher sortiert wurde) und fügt sie nacheinander in den Container tankstellenList ein.
    }

    // Event-Listener für die Sortierung
    //Sobald sich die Auswahl ändert, wird das change-Event ausgelöst.
    //Der neue Wert (asc oder desc) wird ausgelesen.
    sortSelect.addEventListener("change", function () {  
        sortTankstellen(this.value); // Holt den aktuellen Wert (asc oder desc)
    });

    // Suchfunktion
    searchInput.addEventListener("keyup", function () {
        let searchTerm = this.value.toLowerCase();
        let cards = tankstellenList.querySelectorAll(".tankstellen-card");

        cards.forEach(card => {
            let street = card.getAttribute("data-street");
            card.style.display = street.includes(searchTerm) ? "block" : "none";
        });
    });

    // Initiale Sortierung (entsprechend der Auswahl)
    sortTankstellen(sortSelect.value);
});
