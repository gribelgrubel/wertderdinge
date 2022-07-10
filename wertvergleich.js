let dinge = []; // Array (CSV/Json Datenbank?) für die Werte und Wertaufschlüsselung aller Dinge
let dingObject; // HTML-Objekt mit verschachtelten Subobjekten, wird nachher übers JS ins HTML reingepackt (damit alles live veränderbar bleibt)


// Setup and DOM Filling

for (i = 0; i<dinge.length; i++) {
    // create the HTML tree for every object, after that, add it into the DOM
}


// Update Loop
// code here ...


// FUNCTIONS

function createDingHTML(dingDetails) {
    //from https://stackoverflow.com/questions/5536596/dynamically-creating-html-elements-using-javascript/5536800#5536800
    var tree = document.createDocumentFragment();

    var div = document.createElement("section");
    div.setAttribute("class", "ding_detailansicht");
    var divContent = document.createElement("h1");
    divContent.appendChild(document.createTextNode("dingDetails.name"));
    div.appendChild(divContent);
}


function checkVisibilityStatus() {
    // Check whether the option is below the viewport (yet to scroll into view, or already scrolled past – in that case, call addToQuickList() )
}


function addToQuickList(ding) {
    // Add ding to righthand comparison quickchart once it has been scrolled past
}


// from https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}


const box = document.querySelector('#freundschaft');
const message = document.querySelector('#message');

document.addEventListener('scroll', function () {
    const messageText = isInViewport(box) ?
        'The box is visible in the viewport' :
        'The box is not visible in the viewport';

    message.textContent = messageText;

}, {
    passive: true
});


// CLASSES

class ding {

    constructor(dingName, dingGeldwert, dingWertberechnung) {
        this.name = dingName;   // Name für Überschrift und sichtbare Beschreibung im HTML-Objekt
        this.wertinfo = dingWertberechnung;   // irgendwie logische Aufschlüsselung der verwendeten Werte
    
        this.HTML_obj = this.createTile(this.name, this.wertinfo);
    
    }

    // HTML-Objekt wird erstellt und befüllt
    createDingHTML = function(name, wertinfo) {

    }

}

