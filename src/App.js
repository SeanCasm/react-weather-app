import { Home } from "./Components/Home";
import "./styles/main.scss";
import "./styles/config.scss";
import { Footer } from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Search } from "./Components/Search/Search";
import { Logo } from "./Components/Logo";
import { Weather } from "./Components/Weather";
import { ButtonScrollTop } from "./Components/FloatButton/ButtonScrollTop";
export function App() {
  return (
    <BrowserRouter>
      <section className="navbar">
        <div className="container d-flex flex-column flex-md-row">
          <Logo />
          <section className="last-content">
            <Search />
          </section>
        </div>
      </section>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/weather/:lat/:lon" element={<Weather />} />
        <Route path="*" element={<Home />}></Route>
      </Routes>
      <ButtonScrollTop />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
