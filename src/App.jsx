import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { InicioPage, NoticiasPage, CalculadoraPage, CompuestosPage } from "./pages";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<InicioPage />} />
          <Route path="/noticias" element={<NoticiasPage />} />
          <Route path="/calculadora" element={<CalculadoraPage />} />
          <Route path="/compuestos" element={<CompuestosPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
