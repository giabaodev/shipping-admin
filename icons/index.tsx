import React from 'react';
import { IconBaseProps } from 'react-icons';
import {
  FaChartLine,
  FaChartSimple,
  FaCircleQuestion,
  FaGear,
  FaMagnifyingGlass,
  FaPeopleGroup,
  FaRightFromBracket,
  FaStore,
  FaSuitcase,
  FaTruck,
} from 'react-icons/fa6';

export const DashboardIcon: React.FC<IconBaseProps> = (props) => {
  return <FaChartSimple {...props} />;
};

export const ProductIcon: React.FC<IconBaseProps> = (props) => {
  return <FaStore {...props} />;
};

export const OrderIcon: React.FC<IconBaseProps> = (props) => {
  return <FaTruck {...props} />;
};

export const RevenueIcon: React.FC<IconBaseProps> = (props) => {
  return <FaSuitcase {...props} />;
};

export const ReportsIcon: React.FC<IconBaseProps> = (props) => {
  return <FaChartLine {...props} />;
};

export const TeamsIcon: React.FC<IconBaseProps> = (props) => {
  return <FaPeopleGroup {...props} />;
};

export const SettingsIcon: React.FC<IconBaseProps> = (props) => {
  return <FaGear {...props} />;
};

export const HelpIcon: React.FC<IconBaseProps> = (props) => {
  return <FaCircleQuestion {...props} />;
};

export const LogoutIcon: React.FC<IconBaseProps> = (props) => {
  return <FaRightFromBracket {...props} />;
};

export const SearchIcon: React.FC<IconBaseProps> = (props) => {
  return <FaMagnifyingGlass className="rotate-45" {...props} />;
};
