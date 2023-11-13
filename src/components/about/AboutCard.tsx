import { Box, Card, Stack, Typography } from '@mui/material';
import palette from '../../theme/theme';
import { useState } from 'react';

type Props = {
  title: string;
  pathIcon: string;
  backContent: { description: string; imageContent: string };
};

export default function AboutCard({ title, pathIcon, backContent }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Card
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        backgroundColor: palette.primary,
        borderRadius: 3,
        p: 5,
        height: 1,
        minHeight: '300px',
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        transform: isHovered ? 'rotateY(180deg)' : 'rotateY(0)',
        transition: 'transform 0.5s',
      }}
    >
      <Box
        component="img"
        alt="character"
        src={pathIcon}
        sx={{
          height: 'auto',
          mb: 3,
          width: { xs: '120px', sm: '150px', md: '180px', lg: '200px' },
          display: isHovered ? 'none' : 'inline',
          backfaceVisibility: 'hidden',
        }}
      />
      <Stack>
        <Typography
          variant="h5"
          sx={{
            color: palette.white,
            fontStyle: 'normal',
            fontWeight: 700,
            textTransform: 'uppercase',
            display: isHovered ? 'none' : 'inline',
          }}
        >
          {title}
        </Typography>
      </Stack>
      {isHovered && (
        <Stack
          sx={{
            transform: isHovered ? 'rotateY(180deg)' : 'rotateY(0)',
          }}
        >
          <Typography
            sx={{
              color: palette.white,
              textTransform: 'uppercase',
            }}
          >
            {backContent.description}
          </Typography>
          <Box component="img" alt="skills" src={backContent.imageContent} />
        </Stack>
      )}
    </Card>
  );
}
