import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';
import { Stack } from '@mui/system';
import {palette} from '../../theme/theme';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import { t } from 'i18next';
import { Typography } from '@mui/material';
import { keyframes } from '@mui/system';

const ringAnimation = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
  100% { transform: rotate(0deg); }
`;

function Media() {
  return (
    <Card sx={{ width: { xs: '75vw', sm: '40vw', md: '26vw', lg: '22vw', }, height: 350, borderRadius: '5%' }}>
      <Stack sx={{ backgroundColor: palette.shadow }}>
        <CardHeader
          avatar={<Skeleton variant="circular" width={40} height={40} />}
          title={<Skeleton height={10} width="80%" sx={{ marginBottom: 1 }} />}
          subheader={<Skeleton height={10} width="40%" />}
        />
      </Stack>
      <Stack
        sx={{
          backgroundColor: palette.shadow,
          height: 220,
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}
      >
        <Skeleton
          sx={{
            height: '100%',
            width: '100%'
          }}
          variant="rectangular"
        />
        <AlarmOnIcon
          sx={{
            position: 'absolute',
            color: palette.primary,
            fontSize: 150,
            animation: `${ringAnimation} 0.5s infinite`,
          }}
        />
      </Stack>
      <Stack sx={{ pt: 2, backgroundColor: palette.shadow }}>
        <Typography
          variant="h4"
          sx={{
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 'normal',
            color: palette.primary,
            fontSize: { xs: '1.5em', sm: '1.5rem', md: '1.5rem' },
            display: 'flex',
            m: 'auto'
          }}
        >
          {t('projects.comingSoon')}
        </Typography>
      </Stack>
      <Stack sx={{ backgroundColor: palette.shadow }}>
        <CardContent>
          <React.Fragment>
            <Skeleton height={10} sx={{ marginBottom: 1 }} />
            <Skeleton height={10} width="80%" />
          </React.Fragment>
        </CardContent>
      </Stack>
    </Card>
  );
}

export default function SkeletonCard() {
  return (
    <Stack>
      <Media />
    </Stack>
  );
}
