import { Grid, useMediaQuery, useTheme } from '@mui/material';
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
} & ProjectType;

export const ProjectItem = (props: ProjectItemProps) => {
  const {
    thumb,
    project_name,
    tag,
    description,
    project_images,
    defectivePosition,
    isLastest = false,
  } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container flexDirection={defectivePosition === 'left' ? 'row-reverse' : 'row'}>
      <Grid item xs={isLastest ? 12 : 6} sm={6}>
        <ImageWithDefectiveTrianglePart
          height={isLastest ? 920 : 460}
          image={thumb}
          defectivePosition={isMobile && isLastest ? 'bottom' : defectivePosition}
        />
      </Grid>
      <Grid item xs={isLastest ? 12 : 6} sm={6}>
        <BoxWithTitleAndDescription
          title={project_name}
          tag={tag}
          description={description}
          showAllInfo={isLastest}
        />
      </Grid>
    </Grid>
  );
};
