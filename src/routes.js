import Home from "./pages/Home";
import Sign from "./pages/Sign";
import Forgot from "./pages/Forgot";

export const routes = [
  { path: '', name: 'Home', component: Home },
  { path: '/sign', name: 'Sign', component: Sign },
  { path: '/forgot', name: 'Forgot', component: Forgot },
];