import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { ImageWithDefectiveTrianglePart } from '../../components';
import {
  BoxWithTitleAndDescription,
  BoxWithTitleAndDescriptionProps,
} from '../../components/BoxWithTitleAndDescription';
import { DefectivePositionType, ProjectType, UnknownObj } from '../../libs';

// interface ProjectItemProps<T extends object> {
//   isLastest: any;
//   project_name: string;
//   tag: string;
//   thumb: string;
//   description: string;
//   project_images?: string[];
// }

type ProjectItemProps = {
  isLastest?: boolean;
  defectivePosition: DefectivePositionType;
  project: ProjectType;
};

export const ProjectItem = (props: ProjectItemProps) => {
  const { project, defectivePosition, isLastest = false } = props;
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleNavigate = () => {
    navigate(project.slug);
  };

  return (
    <Grid container flexDirection={defectivePosition === 'left' ? 'row-reverse' : 'row'}>
      <Grid item xs={isLastest ? 12 : 6} sm={6}>
        <ImageWithDefectiveTrianglePart
          height={isMobile ? (isLastest ? 460 : 230) : isLastest ? 920 : 460}
          image={project.thumb}
          defectivePosition={isMobile && isLastest ? 'bottom' : defectivePosition}
          onNavigate={handleNavigate}
        />
      </Grid>
      <Grid item xs={isLastest ? 12 : 6} sm={6}>
        <BoxWithTitleAndDescription
          title={project.project_name}
          tag={project.tag}
          description={project.description}
          showAllInfo={isLastest}
          onNavigate={handleNavigate}
        />
      </Grid>
    </Grid>
  );
};
