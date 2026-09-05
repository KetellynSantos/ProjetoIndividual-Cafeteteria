import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header'
import Home from './pages/Home/Home'
import CadastroProduto from './pages/CadastroProdutos/CadastroProdutos';
import {Cardapio} from "./pages/Cardapio/Cardapio";

function App() {

  return (
    <>
    <BrowserRouter>
         <Header />
      <Routes>
         <Route path="/home" element={<Home />} />

                <Route
                    path="/cadastro-produto"
                    element={<CadastroProduto />}
                />

                <Route
                    path="/cardapio"
                    element={<Cardapio />}
                />
               
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
