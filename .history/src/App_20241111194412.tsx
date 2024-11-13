import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Kanbas/store"; // import your store
import Labs from "./Labs";
import Kanbas from "./Kanbas";

export default function App() {
  return (
    <HashRouter>
      <Provider store={store}> {/* Wrap with Provider and pass the store */}
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Kanbas" />} />
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
          </Routes>
        </div>
      </Provider>
    </HashRouter>
  );
}
