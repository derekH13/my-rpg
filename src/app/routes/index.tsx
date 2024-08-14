import { BrowserRouter, Route, Routes as Switch, Navigate} from "react-router-dom"
import { Dashboard, Batalha } from "../pages";


//config do react route dom padrão

export const Routes = () => {

    return (
        <BrowserRouter>
         <Switch>

            {/* quando o navegador for pra rota '/pagina-inicial' vai para a pagina "Dashboard"  */}
            <Route path="/pagina-inicial" element={<Dashboard />} /> 
            <Route path="/Batalha" element={<Batalha />}></Route>



           {/* se a url não se encaixar com nenhuma a cima */}
           <Route path="*" element={<Navigate to="pagina-inicial" />}/>

         </Switch>
        </BrowserRouter>
    );
}