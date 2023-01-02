// Import stylesheets
import { Child } from './child';
import { Parent } from './parent';
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const some = new Parent();

const abc = new Child();
