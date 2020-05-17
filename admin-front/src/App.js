import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';



const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;
{/* O : définition d'une fonction loading returned le msg "loading..." avec le clessename="..." */}



{/* O : la fonction React.lazy vous permet d’afficher un composant importé dynamiquement 
comme n’importe quel autre composant. */}

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));
{/* O : définition d'un variable DefaultLayout =  () => import('./containers/DefaultLayout') */}
// l'import dynamique bl react.lazy() : ysir wst variable (component) w tsir fou9 l class ya3ni fi partie l import
//aussi les fcts wl les variable yjiw fou9 l class ??

// Pages
//5dem 5edma avancé : var= valeur (fct ma5douma en mm ligne)
const Login = React.lazy(() => import('./views/Pages/Login'));
const Register = React.lazy(() => import('./views/Pages/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));

//recap syntaxe : 
//déf d'une short fct : 
//const nomDeFonction = () => valeur de retour ;
//déf d'un variable :
//const NonVar = valeur;



//-------------------------
//recap page :
// importation dynamique :
// 1 . DefaultLayout  :page  index
// 2.  Login
// 3. Register
// 4. Page404
// 5. Page500

// un route dynamique 3andou comme paramtr :
//<Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
//aprè a7na na3tiwh l props : fiha l donéé mta3 l cnx....etc

class App extends Component {

  render() {
    return (
      <HashRouter> {/* O : ta7t router ya3ml sychronisation 7aja kima browse router */}
          <React.Suspense fallback={loading()}>   {/* O : Suspense pour le chargement de données (expérimental) */}
            <Switch>
              {/* exact path : l router y5addam par défaut awl route fih exact path */}
              {/*fl cas d'un admin => page login/register : first ; au contraire UI page Accueil first */}
              <Route ecaxt path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} /> {/*not found */}
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} /> {/*temporarily unavailable */}
              <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
              {/* ki n7eb twalli l login hia loula nrodha "/" w inna7ilha l exact wl home nbadalah "/home" w nzidha exact */}
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;

//can help me : 
//Layout meaning : the way in which text or pictures are set out on a page.
//https://stackoverflow.com/questions/56878147/how-to-make-route-private-in-coreui-react-dashboard
//RQ :
//famma 7aja esmha route dynamique : t7tha fi variable w tnédilha b fct react.lazy() w fm route tnédilhom bl props 
// 5alli  nzid nfhemhom ki nkammal l partie index : DefaultLayout
