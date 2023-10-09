import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Mostrar from '../Componentes/Mostrar'
import Detalle from '../Componentes/Detalle'
import Borrar from '../Componentes/Borrar'
import Alta from '../Componentes/Alta'
import Editar from '../Componentes/Editar'
//import Error from '../Componentes/Error'

export default function router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Mostrar}/>
                <Route exact path="/detalle" component={Detalle}/>
                <Route exact path="/borrar" component={Borrar}/>
                <Route exact path="/alta" component={Alta}/>
                <Route exact path="/editar" component={Editar}/>
            </Switch>
        </BrowserRouter>
    )
}