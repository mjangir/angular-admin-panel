export const navigation = [
  {
    title: true,
    name: 'Navigation'
  },
  {
    name: 'Dashboard',
    url: '/admin/dashboard',
    icon: 'icon-speedometer'
  },
  {
    name: 'Access Management',
    url: '#',
    icon: 'icon-lock',
    children: [
      {
        name: 'Manage Users',
        url: '/admin/access/user',
        icon: 'icon-user'
      },
      {
        name: 'Manage Roles',
        url: '/admin/access/role',
        icon: 'icon-tag'
      },
      {
        name: 'Manage Permissions',
        url: '/admin/access/permission',
        icon: 'icon-lock'
      }
    ]
  },
  {
    name: 'Modules',
    url: '/admin/modules',
    icon: 'icon-wrench'
  },
  {
    name: 'Menus',
    url: '/admin/menus',
    icon: 'icon-menu'
  },
  {
    name: 'Pages',
    url: '/admin/pages',
    icon: 'icon-doc'
  },
  {
    name: 'Email Templates',
    url: '/admin/modules',
    icon: 'icon-envelope'
  },
  {
    name: 'Settings',
    url: '/admin/modules',
    icon: 'icon-settings'
  },
  {
    name: 'Blog Management',
    url: '/admin/blog/categories',
    icon: 'icon-note',
    children: [
      {
        name: 'Categories',
        url: '/admin/blog/categories',
        icon: 'icon-settings'
      },
      {
        name: 'Tags',
        url: '/admin/blog/tags',
        icon: 'icon-tag'
      },
      {
        name: 'Blog Posts',
        url: '/admin/blog/posts',
        icon: 'icon-docs'
      }
    ]
  },
  {
    name: 'FAQ Management',
    url: '/admin/faq',
    icon: 'icon-question'
  },
];
