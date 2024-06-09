import { Grid, Box, Stack, Typography } from "@mui/material";
import SkeletonCard from "../components/about/SkeletonCard";
import palette from "../theme/theme";
import { useTranslation } from "react-i18next";

export default function ProjectsPage() {
    const { t } = useTranslation();
  const skeletonCards = [1, 2, 3];

  return (
    <Stack>
    <Box
      sx={{
        display: 'flex',
          alignItems: 'center',
        height: '50vh', 
        mt: 15
      }}
    >
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        {skeletonCards.map((_, index) => (
          <Grid item key={index}>
            <SkeletonCard />
          </Grid>
        ))}
      </Grid>
    </Box>
            <Typography
              variant="h4"
              sx={{
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: 'normal',
                color: palette.primary,
                fontSize: { xs: '1.5em', sm: '1.5rem', md: '2rem' },
              }}>       {t('projects.comingSoon')}</Typography>
 
          </Stack>
  );
}
