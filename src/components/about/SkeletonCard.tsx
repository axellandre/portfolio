import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';
import { Stack } from '@mui/system';
import palette from '../../theme/theme';

function Media() {
  return (
    <Card sx={{ width: 350, height: 350, m: 2, borderRadius: '5%'}}>
      <Stack sx={{ backgroundColor: palette.shadow }}>
        <CardHeader
          avatar={<Skeleton animation="wave" variant="circular" width={40} height={40} />}
          title={<Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />}
          subheader={<Skeleton animation="wave" height={10} width="40%" />}
        />
      </Stack>
      <Stack sx={{ backgroundColor: palette.shadow, opacity: 1 }}>
        <Skeleton sx={{ height: 220 }} animation="wave" variant="rectangular" />
      </Stack>
      <Stack sx={{ backgroundColor: palette.shadow }}>
        <CardContent>
          <React.Fragment>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        </CardContent>
      </Stack>
    </Card>
  );
}

export default function SkeletonCard() {
  return (
    <div>
      <Media />
    </div>
  );
}
