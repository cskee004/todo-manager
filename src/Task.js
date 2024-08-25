import { format, formatDistance, formatRelative, subDays } from 'date-fns'



export class Task {

    constructor(title, description, priority, status, note, date) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.status = status;
        this.addNote(note);
        this.date = format(new Date(date), 'MM/dd/yyyy')
        //this.date = date;
        this.id = this.getTitleId();
       
    }

    #notesArr = [];

    getTitleId() {
        
        let id = 0;
        for (let i = 0; i < this.title.length; i++) {
            const char = this.title.charCodeAt(i);
            id = (id << 2) - id + char;
            id |= 0;
        }

        return id;
    }

    getTitle() {
        return this.title;
    }

    getDate() {
        return this.date;
    }

    getId() {
        return this.id
    }

    timeRemaining() {
        return formatDistance(new Date(), this.date);
    }

    addNote(p) {
        this.#notesArr.push(p);
    }

    removeNote(p) {
        this.#notesArr.splice(p, 1);
    }

    getNotes() {
        return this.#notesArr;
    }
}

function TaskTest() {
// Constructor test
const t0 = new Task("Take trash out", "The kitchen stinks", 2 , false, "dont forget the recycling", "08/29/2024");
const t1 = new Task("Walk the dog", "Dogs need exercise", 3 ,false, "walk around the neighborhood", "08/30/2024");
const t2 = new Task("Begin that one project", "description", 1 , false, "notes", "09/17/2024");
const t3 = new Task("Fix clogged drain in upstairs bathroom", "why is there so much hair.", 1 , false, "notes", "06/14/2025");

let t0title = t0.getTitle();
let t0Date = t0.getDate();
let t0Id = t0.getId();
let t0Notes = t0.getNotes();
console.log({t0title} ,{t0Date}, {t0Id}, {t0Notes});

// timeRemain
let t0Remain = t0.timeRemaining();
console.log({t0Remain});

// addNote
let newNote = "This is a test to add a note to a task";
t0.addNote(newNote);

// getNotes
let testAddNote = t0.getNotes();
console.log({testAddNote});

// removeNote
t1.addNote(newNote);
t1.removeNote(0);
let testRemoveNote = t1.getNotes()
console.log({testRemoveNote});
}