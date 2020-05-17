import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';   // 7aja bin react wl bootstrap

// container 3adia kima col , kima row..
//rest : Sidebar, footer,nav...etc :  Dynamic Loading
import {
  AppAside,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';


// sidebar nav config  nrmlnt l partie elli a gauche
import navigation from '../../_nav';
// routes config
import routes from '../../routes'; //fiha les routes des composant w les path lkol kima li fl app.js

const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));











class DefaultLayout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>



  signOut(e) {
    e.preventDefault()
    this.props.history.push('/login')
  }





  render() {
    return (
      <div className="app">
{/*header */}
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <DefaultHeader onLogout={e => this.signOut(e)} />  
          </Suspense>
        </AppHeader>



{/* Boady */}
        <div className="app-body">
{/*AppSidebar */}  {/*sta3mal : navigation */} 
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
              <AppSidebarNav className="bg-G" navConfig={navigation} {...this.props} router={router} />
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>

{/* Container */}  {/*sta3mal : routes */}
          <main className="main">  {/* l contenu mta3na lkol */}
            <AppBreadcrumb appRoutes={routes} router={router} />
            <Container fluid>  {/*Barre latérale BootStrap à largeur fixe (adaptative) */}
              <Suspense fallback={this.loading()}>

                <Switch>
                  {/*bch yparkouri les routes lkol , chaque route idha 7achtna bih "?" y'affichih */}
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}

                  <Redirect from="/" to="/dashboardAdmin" /> {/*redirected , thezek automatiquement ml path li nty fih ll path e5er */}
                </Switch>

              </Suspense>
            </Container>
          </main>


{/*sta3mal : DefaultAside */}
          <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <DefaultAside />
            </Suspense>
          </AppAside>
          
        </div>

{/*sta3mal : DefaultFooter */}
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>

      </div>
    );
  }
}

export default DefaultLayout;


//recap :
//AppFooter , AppAside ,...etc : elli importéhom from '@coreui/react';    lkolhom esta3malhom ll forme exactement like : Suspense , Switch , .... 7kéyét fer8a
// li fih l 5edma c a d ena chnrakkaz 3lih howa : les 4 import  wl import  "routes"
//navigation : nav  : partie menu a droite li en gris 
//DefaultFooter : footer
//DefaultHeader : header
//DefaultAside : hia l menu elli yo5rej asside ki tenzel 3la 3 - a droite
//routes : container l contenu lkol ; fiha les composants elli fl menu 

//PS :
//les cmntr fou9 l class  w ta7tou : //.......... ; w wst l classe : {/* .....*/}