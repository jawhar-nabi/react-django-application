import React from 'react';

///added by me
//_Nav :
const DashboardAdmin = React.lazy(() => import('./views/Pages/DashboardAdmin'));

//Manage : 
const ManageBooks = React.lazy(() => import('./views/Pages/ManageBooks'));
const ManageAdmins = React.lazy(() => import('./views/Pages/ManageAdmins'));
const ManageUsers = React.lazy(() => import('./views/Pages/ManageUsers'));
const ManageContacts = React.lazy(() => import('./views/Pages/ManageContacts'));

// Statistic Détails :
const UsersVisitors = React.lazy(() => import('./views/Pages/UsersVisitors'));
const StatisticsBySexPage = React.lazy(() => import('./views/Pages/StatisticsBySexPage'));
const StatisticsByAgePage = React.lazy(() => import('./views/Pages/StatisticsByAgePage'));
const StatisticsByUserPage = React.lazy(() => import('./views/Pages/StatisticsByUserPage'));

  //Others :
  const Files = React.lazy(() => import('./views/Pages/Files'));
  const Notes = React.lazy(() => import('./views/Pages/Notes'));
  const Settings = React.lazy(() => import('./views/Pages/Settings'));





const routes = [
  { path: '/', exact: true, name: 'Home' },
  ///added by me

  //_Nav : 
  { path: '/dashboardAdmin', name: 'DashboardAdmin', component: DashboardAdmin },

  //Manage :
  { path: '/ManageBooks', name: 'ManageBooks', component: ManageBooks },
  { path: '/ManageAdmins', name: 'ManageAdmins', component: ManageAdmins },
  { path: '/ManageUsers', name: 'ManageUsers', component: ManageUsers },
  { path: '/ManageContacts', name: 'ManageContacts', component: ManageContacts },

  //statistic détails : pages 
  { path: '/static-Details/UsersVisitors', name: 'UsersVisitors', component: UsersVisitors },
  { path: '/StatisticsBySexPage', name: 'StatisticsBySexPage', component: StatisticsBySexPage },
  { path: '/StatisticsByAgePage', name: 'StatisticsByAgePage', component: StatisticsByAgePage },
  { path: '/StatisticsByUserPage', name: 'StatisticsByUserPage', component: StatisticsByUserPage},

  //Others :
  { path: '/Files', name: 'Files', component: Files},
  { path: '/Notes', name: 'Notes', component: Notes},
  { path: '/Settings', name: ' Settings', component:  Settings},

];


export default routes;
