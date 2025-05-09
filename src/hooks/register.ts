import { CreateNode, route } from "../../lib/state";
import { About } from "../pages/about/about";
import { Documentation } from "../pages/documentation/docs";
import { GetStarted } from "../pages/get_started/start";
import { HomePage } from "../pages/homepage/home";
import { PlayGround } from "../pages/playground/playground";

const homePage = HomePage();
const getStarted = GetStarted();
const docs = Documentation();
const playground = PlayGround();
const about = About();

export const observeLinks = () => {
//history.pushState({},'','Homepage');
route.register('Homepage',homePage);
route.register('Documentation',docs);
route.register('Get-Started',getStarted);
route.register('Playground',playground);
route.register('About',about);
route.start();

}