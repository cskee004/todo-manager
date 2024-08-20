export class Task {

    constructor(title, description, priority, status, note, dueDate) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.status = status;
        this.addNote(note);
        this.dueDate = dueDate;
        this.id = this.titleId(title);
        
    }

    #notesArr = [""];

    titleId(title) {
        
        let id = 0;
        for (let i = 0; i < title.length; i++) {
            const char = title.charCodeAt(i);
            // (id * 5 for each left shift) - id + char
            id = (id << 2) - id + char;
            id |= 0;
        }

        return id;
    }

    getId() {
        return this.id
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

const t0 = new Task("Take trash out", "The kitchen stinks", 2 , false, "dont forget the recycling", "00/00/00");
const t1 = new Task("Walk the dog", "Dogs need exercise", 3 ,false, "walk around the neighborhood", "00/00/00");
const t2 = new Task("Begin that one project", "description", 1 , false, "notes", "00/00/00");
const t3 = new Task("Fix clogged drain in upstairs bathroom", "why is there so much hair.", 1 , false, "notes", "00/00/00");


let tempId = t0.getId();
console.log({tempId});