import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
// import './topics/01-basic-types';
// import './topics/02-object-interface.ts';
import "./topics/03-function.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  Hola mundo
`
console.log('Hola mundo');
// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
