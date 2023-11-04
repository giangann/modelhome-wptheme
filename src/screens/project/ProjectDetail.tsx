import { Box, Container, Grid } from '@mui/material';
import { useAtomValue } from 'jotai';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { EmptyContent, FadeInSection, Line } from '@/components';
import { postsAtom } from '@/libs/atom/data';

import { convertSlugToName } from '../../constant';
import { grey, orange, ProjectApiType } from '../../libs';
import {
  GridCenter,
  MontserratTypo,
  OswaldTypo,
  OswaldTypoHeaddingContent,
} from '../../styled';
import { Content } from './content';

export const ProjectDetail = () => {
  const params = useParams();
  const { t } = useTranslation();
  const listPosts = useAtomValue(postsAtom);

  const projectSummary = ['location', 'customer_name', 'square', 'finish_in'];

  const { data: projectData, isLoading: isLoading } = useQuery<ProjectApiType>(
    `projects/get-by-slug/${params.slug}`,
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 console.log('projectData?.content', projectData?.content)
  return (
    // Part 1: Project summary <Name of project, Size, Customer, Location, Year >
    // Part 2: Blocks of content, each block contain Images (admin choose how many image) and Text

    <Box mt={10}>
      {/* test get tag */}

      {/* Part 1 */}
      <Grid container mb={6}>
        <GridCenter container item xs={12} sm={6}>
          <Box mb={5} px={{ xs: 2, sm: 0 }}>
            <Box mb={3}>
              <FadeInSection fade="fade-in-right">
                <OswaldTypo sx={{ fontSize: 14, mb: 1 }}>CHI TIẾT DỰ ÁN</OswaldTypo>
              </FadeInSection>
              <FadeInSection fade="fade-in-left">
                <OswaldTypoHeaddingContent mb={2} letterSpacing={`${0.5}px !important`}>
                  {projectData?.name}
                </OswaldTypoHeaddingContent>
              </FadeInSection>
              <FadeInSection fade="fade-in-right">
                <Line width="10%" color={orange['400']} />
              </FadeInSection>
            </Box>

            <Grid container spacing={1}>
              {projectSummary.map((key, index) => (
                <Grid item xs={6} key={index}>
                  <Box>
                    <OswaldTypo letterSpacing={1.5}>{t(`project.${key}`)}</OswaldTypo>
                  </Box>
                  <Box>
                    <MontserratTypo>
                      {projectData ? projectData[key as keyof ProjectApiType] : ''}
                    </MontserratTypo>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </GridCenter>
      </Grid>

      {/* Part 2 */}
      {projectData?.post_id ? (
        !projectData?.content ? (
          <EmptyContent />
        ) : (
          <Content content={projectData.content} />
        )
      ) : (
        <EmptyContent />
      )}
    </Box>
  );
};
