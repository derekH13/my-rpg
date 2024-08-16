import { BrowserRouter, Route, Routes as Switch, Navigate} from "react-router-dom"
import { Dashboard, Batalha, PaginaInicio } from "../pages";


//config do react route dom padrão

export const Routes = () => {

    return (
        <BrowserRouter>
         <Switch>

            {/* quando o navegador for pra rota '/pagina-inicial' vai para a pagina "Dashboard"  */}
            <Route path="/Dashboard" element={<Dashboard />} /> 
            <Route path="/Batalha" element={<Batalha />}></Route>
            <Route path="/pagina-inicial" element={<PaginaInicio />} />


           {/* se a url não se encaixar com nenhuma a cima */}
           <Route path="*" element={<Navigate to="pagina-inicial" />}/>

         </Switch>
        </BrowserRouter>
    );
}