if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', {
    scope: '/',
  });
}

import {html, render} from 'lit-html';
import './style.scss';

const app = html`<h1>Hello world</h1>`;

export const update = () => render(app, document.body);

update();
