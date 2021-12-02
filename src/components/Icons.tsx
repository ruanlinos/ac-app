import React from 'react';
import { icons } from '../assets/icons';

interface Props {
  name: keyof typeof icons;
  color?: string;
}
type IconProps = React.SVGProps<SVGSVGElement> & Props;
const Icons: React.FC<IconProps> = ({ name, color = '#161C25', ...rest }) => {
  const SelectedIcon = icons[name];
  return <SelectedIcon {...rest} />;
};

export default Icons;