import BannerExtraLarge from "./components/banner/promoExtraLarge";
import MenuHeader from "./components/menu/menuHeader";
import MenuLeft from "./components/menu/menuLeft";

import './css/app.css';

function App() {
  return (
    <div>
      <MenuHeader />
      <BannerExtraLarge />
      <MenuLeft />
    </div>
  );
}

export default App;
