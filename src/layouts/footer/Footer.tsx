import { Stack, Box, Divider } from "@mui/material";
import { useState, useContext } from 'react';
import { LanguageContext } from '../../layouts/context/LanguageProvider';
import frFlagBW from '/src/assets/fr_flag_bw.svg';
import enFlagBW from '/src/assets/en_flag_bw.svg';
import frFlag from '/src/assets/fr_flag.svg';
import enFlag from '/src/assets/en_flag.svg';

export default function Footer() {
  const { currentLanguage, changeLanguage } = useContext(LanguageContext);
  const [isHoveredEn, setIsHoveredEn] = useState(false);
  const [isHoveredFr, setIsHoveredFr] = useState(true);

  const getFlagSrc = (language : string, isHovered : boolean) => {
    if (language === 'fr') {
      return isHovered || currentLanguage === 'fr' ? frFlag : frFlagBW;
    }
    return isHovered || currentLanguage === 'en' ? enFlag : enFlagBW;
  };

  return (
    <Stack flexWrap="wrap" direction="row" position="absolute" bottom="5%" right="3%" justifyContent="center">
      <Stack direction="row" alignItems="center" justifyContent="center" mt={2}>
        <Stack>
          <Box
            component="img"
            alt="fr_flag"
            src={getFlagSrc('fr', isHoveredFr)}
            loading='lazy'
            onClick={() => changeLanguage('fr')}
            sx={{ cursor: 'pointer', width: '40px', height: 'auto' }}
            onMouseEnter={() => setIsHoveredFr(true)} 
            onMouseLeave={() => setIsHoveredFr(false)}
          />
        </Stack>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            borderRightWidth: 2,
            height: 32,
            mx: 2,
          }}
        />
        <Stack>
          <Box
            component="img"
            alt="en_flag"
            src={getFlagSrc('en', isHoveredEn)}
            loading='lazy'
            onClick={() => changeLanguage('en')}
            sx={{ cursor: 'pointer', width: '40px', height: 'auto' }}
            onMouseEnter={() => setIsHoveredEn(true)} 
            onMouseLeave={() => setIsHoveredEn(false)}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
