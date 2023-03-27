import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { ImageWithDefectiveTrianglePart } from '../../components';
import { BoxWithTitleAndDescription } from '../../components/BoxWithTitleAndDescription';
import { STORAGE_PREFIX } from '../../constant';
import { DefectivePositionType, ProjectApiType } from '../../libs';

type ProjectItemProps = {
  isLastest?: boolean;
  defectivePosition: DefectivePositionType;
  project: ProjectApiType;
};

export const ProjectItem = (props: ProjectItemProps) => {
  const { project, defectivePosition, isLastest = false } = props;
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleNavigate: any = () => {
    navigate(project.slug);
  };

  return (
    <Grid container flexDirection={defectivePosition === 'left' ? 'row-reverse' : 'row'}>
      <Grid item xs={isLastest ? 12 : 6} sm={6}>
        <ImageWithDefectiveTrianglePart
          height={isMobile ? (isLastest ? 460 : 230) : isLastest ? 920 : 460}
          image={`${STORAGE_PREFIX}/${project.thumb}`}
          defectivePosition={isMobile && isLastest ? 'bottom' : defectivePosition}
          onNavigate={handleNavigate}
        />
      </Grid>
      <Grid item xs={isLastest ? 12 : 6} sm={6}>
        <BoxWithTitleAndDescription
          title={project.name}
          tag={'project.tag'}
          description={project.summary}
          showAllInfo={isLastest}
          onNavigate={handleNavigate}
        />
      </Grid>
    </Grid>
  );
};
