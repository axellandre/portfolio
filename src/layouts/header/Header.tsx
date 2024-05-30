import useResponsive from '../../hooks/useResponsive';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

export default function Header() {
  const isDesktop = useResponsive('up', 'md');

  if (!isDesktop) {
    return <MobileHeader />;
  }

  return <DesktopHeader />;
}
