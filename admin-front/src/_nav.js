export default {
  items: [

    //added by me : 
    // manage pages : 
    {
      name: 'Dashboard',
      url: '/dashboardAdmin',
      icon: 'cui-dashboard',

    },


    {
      name: 'Manage Admins',
      url: '/ManageAdmins',
      icon: 'fa fa-user-circle-o',
    },
    {
      name: 'Manage Users',
      url: '/ManageUsers',
      icon: 'fa fa-user-o',
    },
    {
      name: 'Manage Books',
      url: '/ManageBooks',
      icon: 'fa fa-book',
    },
    {
      name: 'Manage Contacts',
      url: '/ManageContacts',
      icon: 'fa fa-envelope-o',
    },

// statistics pages :

    {
      name: 'Static Details',
      url: '/staticDetails',
      icon: 'fa fa-line-chart',
      children: [

        {
          name: 'Users & Visitors',
          url: '/static-Details/UsersVisitors', 
          icon: 'icon-chart   ',
        },
        {
          name: 'Statistics By User',
          url: '/StatisticsByUserPage',
          icon: 'cui-people  ',
        },
        {
          name: 'Statistics By Age',
          url: '/StatisticsByAgePage',
          icon: 'fa fa-bar-chart',
        },
        {
          name: 'Statistics By Sex',
          url: '/StatisticsBySexPage',
          icon: 'fa fa-venus-mars ',

        },

      ],
    },

    {
      title: true,
      name: 'Other',
      wrapper: {
        element: '',
        attributes: {},
      },
    },

    {
      name: 'Files',
      url: '/Files',
      icon: 'fa fa-file-pdf-o',
    },

    {
      name: 'Notes',
      url: '/Notes',
      icon: 'fa fa-pencil-square-o',
    },
    {
      name: 'Settings',
      url: '/Settings',
      icon: 'icon-settings',
    },
    {
      name: 'Search      ',
      url: '',
      icon: 'fa fa-search',
    },
  ],

};
