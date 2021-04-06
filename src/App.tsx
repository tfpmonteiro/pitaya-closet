import BannerExtraLarge from "./components/banner/promoExtraLarge";
import Clothes from "./components/content/clothes";
import MenuHeader from "./components/menu/menuHeader";
import MenuLeft from "./components/menu/menuLeft";

import './css/app.css';

function App() {
  return (
    <div>
      <MenuHeader />
      <BannerExtraLarge />
      <div className="app-content">
        <MenuLeft />
        <Clothes />
      </div>

    </div>
  );
}

export default App;
