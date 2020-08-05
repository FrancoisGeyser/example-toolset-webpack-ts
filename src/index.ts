import { ElementCreator } from './component/componentp';

const app: Element = document.querySelector('#app')!;
const element: HTMLElement = ElementCreator('p', 'Inserted from TS');

app.appendChild(element);
