import {
  DashboardIcon,
  HelpIcon,
  LogoutIcon,
  OrderIcon,
  ProductIcon,
  ReportsIcon,
  RevenueIcon,
  SettingsIcon,
  TeamsIcon,
} from '@/icons';
import { FC } from 'react';
import { IconBaseProps } from 'react-icons';

export interface MenuItem {
  label: string;
  path: string;
  icon: FC<IconBaseProps>;
}

export interface MenuType {
  title: string;
  list: MenuItem[];
}

const MenuList: MenuType[] = [
  {
    title: 'Management',
    list: [
      {
        label: 'Dashboard',
        path: '/dashboard',
        icon: DashboardIcon,
      },
      {
        label: 'Products',
        path: '/product',
        icon: ProductIcon,
      },
      {
        label: 'Orders',
        path: '/order',
        icon: OrderIcon,
      },
    ],
  },
  {
    title: 'Analytics',
    list: [
      {
        label: 'Revenue',
        path: '/revenue',
        icon: RevenueIcon,
      },
      {
        label: 'Reports',
        path: '/report',
        icon: ReportsIcon,
      },
      {
        label: 'Teams',
        path: '/team',
        icon: TeamsIcon,
      },
    ],
  },
  {
    title: 'User',
    list: [
      {
        label: 'Settings',
        path: '/setting',
        icon: SettingsIcon,
      },
      {
        label: 'Help Center',
        path: '/help',
        icon: HelpIcon,
      },
      {
        label: 'Logout',
        path: '/logout',
        icon: LogoutIcon,
      },
    ],
  },
];

export default MenuList;
