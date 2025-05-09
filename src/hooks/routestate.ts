import { WatchFunction } from "./watch";

const [currentPageIndex,setCurrentPageIndex,observe1] = WatchFunction<number>(0);
export {currentPageIndex,setCurrentPageIndex,observe1};