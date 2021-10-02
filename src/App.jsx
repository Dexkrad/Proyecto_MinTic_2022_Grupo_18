import AuthLayout from 'layouts/AuthLayout';
import PrivateLayout from 'layouts/PrivateLayout';
import PublicLayout from 'layouts/PublicLayout';
import Admin from 'pages/Admin';
import Index from 'pages/Index';
import Login from 'pages/Login';
import Productos from 'pages/Productos';
import Registro from 'pages/Registro';
import Ventas from 'pages/Ventas';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={['/admin']}>
          <PrivateLayout>
            <Switch>
              <Route>
                <Admin />
              </Route>                
            </Switch>
          </PrivateLayout>
        </Route>        
        <Route path={['/login', '/registro']}>
          <AuthLayout>
            <Switch>
              <Route>
                <Login />
              </Route>
              <Route>
                <Registro />
              </Route>
            </Switch>
          </AuthLayout>
        </Route>
        <Route path={['/', '/productos', '/ventas']}>
          <PublicLayout>
            <Switch>
            <Route>
                <Index />
              </Route>
              <Route>
                <Productos />
              </Route>
              <Route>
                <Ventas />
              </Route>
            </Switch>
          </PublicLayout>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
