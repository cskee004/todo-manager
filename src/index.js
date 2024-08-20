import './modern-normalize.css';
import './styles.css'
import { formatDistance, subDays} from "date-fns";
import {ToDo} from './toDo.js'

const obj = new ToDo("title", "description", "priority" ,"status", "notes", "due date");

console.log(obj);

const notesArray = obj.getNotes();

obj.removeNote(0);

console.log(notesArray);