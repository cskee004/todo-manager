import { format, formatDistance, formatRelative, subDays } from 'date-fns'

export class Lists {
    constructor (idTag, title) {
        this.idTag = idTag;
        this.title = title;
    }

    getIdTag() {
        return this.idTag;
    }
}