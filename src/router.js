import Home from "./components/Home";
import HomeEnglish from "./components/HomeEnglish";
import Projects from "./components/Projects";
import { routes } from "./config";

const publicRoutes = [
  { path: routes.home, component: Home },
  { path: routes.cvEnglish, component: HomeEnglish },
  { path: routes.projects, component: Projects },
];

export { publicRoutes };
