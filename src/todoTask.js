import { format, formatDistance, formatRelative, subDays } from 'date-fns'

export class TodoTasks {
    constructor(id, title, description, dueDate, note) {
        this.id = id
        this.title = title;
        this.description = description;
        this.dueDate = format(new Date(dueDate), 'MM/dd/yyyy')
        this.addNote(note);
        this.timeRemaining = formatDistance(new Date(), this.dueDate);
    }

    #notesArr = []

    addNote(note) {
        this.#notesArr.push(note);
    }
    
    removeNote(note) {
        for (let i = 0; i < this.#notesArr.length; i++) {
            if (note == this.#notesArr[i]) {
                this.#notesArr.splice(i, 1);
            }
            else {
                return "Note not found";
            }
        }
    }

    getRemainingTime() {
        return this.timeRemaining;
    }
}