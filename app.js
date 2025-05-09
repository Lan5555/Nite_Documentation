import {AlertDialog, applyState, Column, createClass, FutureCreator, print, removeClass, Row, Watch} from "./lib/state.js";
import {renderBody} from "./lib/state.js";
import {setChild} from "./lib/state.js";
import {Style} from "./lib/state.js";
import {createNode,route,vanilla,setInner} from "./lib/state.js";
import {listenForEvent} from "./lib/state.js";
import {nJFloatingActionButton as FAB} from "./lib/main.js";
import {Text} from "./lib/state.js";
import { SwitchBar } from "./lib/state.js";
import myImage from './public/dark.jpg'
import {HomePage} from './src/pages/homepage/home.ts'
import {observeLinks} from './src/hooks/register.ts';


export const App = () => {
  renderBody(HomePage());
  observeLinks()
}