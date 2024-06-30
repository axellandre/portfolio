import { Grid, Stack, Typography, Container, Divider } from "@mui/material";
import SkeletonCard from "../components/about/SkeletonCard";
import {palette} from "../theme/theme";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function ProjectsPage() {
    const { t } = useTranslation();
    const skeletonCards = [1];

   useEffect(() => {
        document.title = `${t('menu.projects')}`;
    }, [t]);

    return (
        <Container
            sx={{
                height: '100dvh',
                overflowY: 'auto',
                position: 'relative',
            }}
        >
            <Grid container>
        <Grid item xs={12} mt={{lg:10, md: '5vh', xs: 0, sm: 20}}>
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
                                    width: '10vw',
                                    color: palette.secondary,
                                    border: '2px solid',
                                }}
                            />
                        </Stack>
                        <Stack direction="row" justifyContent="center" alignItems="center" mt={{xs: 10, md: 4, lg:10}} pl={{ xs: "35px", lg: "0px"}}>
                            <Grid container spacing={2} justifyContent="center" alignItems="center">
                                {skeletonCards.map((_, index) => (
                                    <Grid item key={index} xs={12} sm={6} md={4} lg={0}>
                                        <SkeletonCard />
                                    </Grid>
                                ))}
                            </Grid>
                        </Stack>
                        <Stack direction="row" justifyContent="center">
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
                               
                            </Typography>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
}

