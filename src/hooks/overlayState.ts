// overlayState.ts
import { WatchFunction } from "../hooks/watch";

const [isOn, setIsOn, observeIsOn] = WatchFunction<boolean>(false);

export { isOn, setIsOn, observeIsOn };
