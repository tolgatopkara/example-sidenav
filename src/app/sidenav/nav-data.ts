import { INavbarData } from './helper';
export const navbarData :INavbarData[] = [

  {
    routeLink: 'dashboard',
    icon: 'home',
    label: 'Dashboard'
  },
  {
    routeLink: 'products',
    icon: 'precision_manufacturing',
    label: 'Products'
  },
  {
    routeLink: 'media',
    icon: 'media_link',
    label: 'Media'
  },
  {
    routeLink: 'coupens',
    icon: 'confirmation_number',
    label: 'Coupens',
    items :[
        {
          routeLink :'coupens/list',
          label : 'List Coupens',
        },
        {
          routeLink :'coupens/create',
          label : 'Create Coupens'
        }
    ]
  },
  {
    routeLink: 'pages',
    icon: 'auto_stories',
    label: 'Pages'
  },
  {
    routeLink: 'statistics',
    icon: 'insights',
    label: 'Statistics'
  },
  {
    routeLink: 'settings',
    icon: 'settings',
    label: 'Settings'
  },

];
