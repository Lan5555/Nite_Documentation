import {renderBody} from "./lib/state.js";
import {HomePage} from './src/pages/homepage/home.ts'
import {observeLinks} from './src/hooks/register.ts';


export const App = () => {
  renderBody(HomePage());
  observeLinks();
}


