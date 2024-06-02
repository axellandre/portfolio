import { useTranslation } from 'react-i18next'; // Importez useTranslation
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';
import useResponsive from '../../hooks/useResponsive';

export default function Header() {
  const { t } = useTranslation(); // Utilisez useTranslation
  
  const isDesktop = useResponsive('up', 'md');

  if (!isDesktop) {
    return <MobileHeader t={t} />;
  }

  return <DesktopHeader t={t} />;
}
