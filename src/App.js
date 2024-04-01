// importações DOM
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// importações Components
import PaginaPadrao from "./Pages/PaginaPadrao/PaginaPadrao";
import Home from "./Pages/Home/Home";
import ErrorPage from "./Components/PaginaDeErro/PaginaDeErro";
import SobreNos from "./Pages/SobreNos/SobreNos";

// Paginação do site
// Todas as rotas das paginas vai nessas const(array)
const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaPadrao/>, // pagina principal que vai contar os elementos que serão reaproveitados
    errorElement: <ErrorPage/>, // pagina que vai ser renderizada quando ouver erro
    children: [ //paginas que terão o conteudo acrescentado de acordo com a rota acessada
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/sobrenos",
        element: <SobreNos />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
