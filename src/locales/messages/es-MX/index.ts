// components
import Breadcrumbs from "./components/Breadcrumbs.i18n"
import SideBarMenu from "./components/SideBarMenu.i18n"

// pages
import Regions from "./pages/Regions.i18n"
import Login from "./pages/Login.i18n"

// shared
import General from "./shared/General.i18n"

export default {
  // components
  ...Breadcrumbs,
  ...SideBarMenu,
  
  // pages
  ...Regions,
  ...Login,
  ...General,
}
