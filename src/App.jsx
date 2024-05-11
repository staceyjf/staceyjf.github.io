import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavigationContextProvider from "./context/NavigationContextProvider";

import MainPage from "./pages/MainPage/MainPage";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationContextProvider>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </NavigationContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
