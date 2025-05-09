import {App} from "../app.js";
import {render} from "../lib/state.js";
import '../lib/style.css';
import '../global.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';

const rootElement = document.getElementById('app');

render(App,rootElement);

