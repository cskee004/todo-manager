import { format, formatDistance, formatRelative, subDays } from 'date-fns'



export class Task {

    constructor(title, description, priority, status, note, date) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.status = status;
        this.addNote(note);
        this.date = format(new Date(date), 'MM/dd/yyyy')
        this.id = this.titleId(title);
    }

    #notesArr = [""];

    titleId(title) {
        
        let id = 0;
        for (let i = 0; i < title.length; i++) {
            const char = title.charCodeAt(i);
            id = (id << 2) - id + char;
            id |= 0;
        }

        return id;
    }

    getDate() {
        return this.date;
    }

    getId() {
        return this.id
    }

    timeRemain() {
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

const t0 = new Task("Take trash out", "The kitchen stinks", 2 , false, "dont forget the recycling", "08/22/24");
const t1 = new Task("Walk the dog", "Dogs need exercise", 3 ,false, "walk around the neighborhood", "08/30/24");
const t2 = new Task("Begin that one project", "description", 1 , false, "notes", "09/17/24");
const t3 = new Task("Fix clogged drain in upstairs bathroom", "why is there so much hair.", 1 , false, "notes", "06/14/25");


let tempId = t0.getId();
console.log({tempId});

const t0Date = t0.getDate()
const t0remainder = t0.timeRemain();
console.log(t0Date)
console.log(t0remainder);