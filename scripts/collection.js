class videoGame {
    //attributes
    title;
    developer;
    genre;
    #releaseYear;
    thumbnail;
    credits;

    //constructor
    constructor (titleOrOptions, developer, genre, releaseYear, thumbnail){
        if (titleOrOptions && typeof titleOrOptions === 'object' && !Array.isArray(titleOrOptions)) {
            const opts = titleOrOptions;
            this.title = opts.title
            this.developer = opts.developer
            this.genre = opts.genre
            this.#releaseYear = opts.releaseYear ? Number(opts.releaseYear) : null;
            this.thumbnail = opts.thumbnail
            this.credits = opts.credits
        } else {
            this.title = titleOrOptions
            this.developer = developer
            this.genre = genre
            this.#releaseYear = releaseYear ? Number(releaseYear) : null;
            this.thumbnail = thumbnail;
            this.credits = credits
        }
    }
    
    //methods
    logDev(){
        console.log(this.title + " was created by " + this.developer + ".");
    }

    displayElement(){
        // Create elements
        const displayTitle = document.createElement("h2");
        const displayDev = document.createElement("h3");
        const displayThumb = document.createElement("img");
        const displayGenre = document.createElement("p");
        const displayYear = document.createElement("p");
        const pageBreak = document.createElement("br");
        const pageLine = document.createElement("hr");

        // Populate elements with data
        displayTitle.textContent = this.title;
        displayDev.textContent = "Developer: " + this.developer;
        displayThumb.src = this.thumbnail;
        displayThumb.alt = this.title + ", image provided by " + this.credits;
        displayGenre.textContent = "Genre: " + this.genre;
        displayYear.textContent = "Release Year: " + this.#releaseYear;

        // Append to the page (assuming a container with id="game-container" exists in HTML)
        const container = document.getElementById("game-container");
        if (container) {
            container.appendChild(displayTitle);
            container.appendChild(displayThumb);
            container.appendChild(displayDev);
            container.appendChild(displayGenre);
            container.appendChild(displayYear);
            container.appendChild(pageBreak);
            container.appendChild(pageLine);
        } else {
            console.log("No #game-container found. Elements created but not appended.");
        }
    }


    //getters
    get ReleaseYear(){
        return this.#releaseYear;
    }

    //setters

    set releaseYear(newReleaseYear){
        const validYear = "1958"; //The year that the first ever video game was created. If you pass a year before this, i will run "sudo rm -rf /*" on your console and explode your hard drive.
        const yearNum = Number(newReleaseYear);
        
        if (Number.isNaN(yearNum)) {
            throw new TypeError('releaseYear must be a number or numeric string');
        }
        
        if (yearNum < validYear){
            return `Error: ${this.#releaseYear} is an invalid release year for a video game. The first video game ever created was in 1958.`
        } 
        this.#releaseYear = yearNum;
    }
}

//predefined objects
const ARCRaidersJSON = {
    "title": "ARC Raiders", 
    "developer": "Embark Studios", 
    "genre": "TPS", 
    "releaseYear": "2025",
    "thumbnail": "../mediaCollection/ARCraidersThumb.jpg",
    "credits": "gamersbase.store"
};

const HadesJSON = {
    "title": "Hades",
    "developer": "Supergiant Games",
    "genre": "Roguelike",
    "releaseYear": "2019",
    "thumbnail": "../mediaCollection/HadesThumb.jpg",
    "credits": "howlongtobeat.com"
};

const CelesteJSON = {
    "title": "Celeste",
    "developer": "Maddy Makes Games",
    "genre": "Platformer",
    "releaseYear": "2018",
    "thumbnail": "../mediaCollection/CelesteThumb.jpg",
    "credits": "ninten-switch.com"
};

let ARCRaiders = new videoGame(ARCRaidersJSON)
let Hades = new videoGame(HadesJSON);
let Celeste = new videoGame(CelesteJSON); 

Celeste.logDev();

document.addEventListener('DOMContentLoaded', function () {
    Celeste.displayElement();
    Hades.displayElement();
    ARCRaiders.displayElement();
});