import { WatchFunction } from "./watch";

const [isMenuClicked, setMenuClicked, observeMenu] = WatchFunction<boolean>(false);
export {isMenuClicked,setMenuClicked,observeMenu};