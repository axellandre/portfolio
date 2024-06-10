import { Grid, Stack, Typography, Container, Divider } from "@mui/material";
import SkeletonCard from "../components/about/SkeletonCard";
import palette from "../theme/theme";
import { useTranslation } from "react-i18next";
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import { keyframes } from '@mui/system';
import { useState, useEffect } from 'react';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  } 
`;

export default function ProjectsPage() {
    const { t } = useTranslation();
    const skeletonCards = [1, 2, 3];
    const [isTop, setIsTop] = useState(true); 

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTop((prev) => !prev); 
        }, 2000); 
        return () => clearInterval(interval);
    }, []);

    return (
        <Container
            sx={{
                height: '100vh',
                overflowY: 'auto',
                position: 'relative',
            }}
        >
            <Grid container spacing={3}>
                <Grid item xs={12} mt={8}>
                    <Stack>
                        <Typography
                            variant="h4"
                            sx={{
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: 'normal',
                                color: palette.secondary,
                                m: 1,
                            }}
                        >
                            {t('projects.label')}
                        </Typography>
                        <Stack m={'auto'}>
                            <Divider
                                sx={{
                                    width: '5vw',
                                    color: palette.secondary,
                                    border: '2px solid',
                                }}
                            />
                        </Stack>
                        <Stack direction="row" justifyContent="center" alignItems="center" mt={4}>
                            <Grid container spacing={2} justifyContent="center" alignItems="center">
                                {skeletonCards.map((_, index) => (
                                    <Grid item key={index} xs={12} sm={6} md={4}>
                                        <SkeletonCard />
                                    </Grid>
                                ))}
                            </Grid>
                        </Stack>
                        <Stack direction="row" justifyContent="center" alignItems="center" mt={6}>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    lineHeight: 'normal',
                                    color: palette.primary,
                                    fontSize: { xs: '1.5em', sm: '1.5rem', md: '2rem' },
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                {t('projects.comingSoon')}
                                {isTop ? (
                                    <HourglassTopIcon
                                        sx={{
                                            ml: 1,
                                            width: 34,
                                            height: 34,
                                            animation: `${rotate} 2s linear`,
                                        }}
                                    />
                                ) : (
                                    <HourglassBottomIcon
                                        sx={{
                                            ml: 1,
                                            width: 34,
                                            height: 34,
                                            animation: `${rotate} 2s linear`,
                                        }}
                                    />
                                )}
                            </Typography>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
}

