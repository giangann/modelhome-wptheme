import { baseStorage, baseURL, DefectivePositionType } from '../libs';

export const generateDefectiveTriangleByPosition = (
  defectivePosition: DefectivePositionType,
) => {
  //   const positionSuffix = capatializeTransform(defectivePosition);
  //   const style = {
  //    "border"+positionSuffix:"1.46rem solid transparent"
  //   };
  switch (defectivePosition) {
    case 'top': {
      return {
        borderTopColor: 'white',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
      };
    }
    case 'right': {
      return {
        borderRightColor: 'white',
        top: '50%',
        right: 0,
        transform: 'translateY(-50%)',
      };
    }
    case 'bottom': {
      return {
        borderBottomColor: 'white',
        bottom: 0,
        right: '50%',
        transform: 'translateX(50%)',
      };
    }
    case 'left': {
      return {
        borderLeftColor: 'white',
        top: '50%',
        left: 0,
        transform: 'translateY(-50%)',
      };
    }
    default:
      return { borderRightColor: 'white' };
  }
};

export const capatializeTransform = (str: string) => {
  const newStr = str.replace(str[0], str[0].toUpperCase());
  return newStr;
};

export const convertSlugToName = (slug: string | undefined) => {
  if (!slug) return 'PROJECT';
  const name = slug.replace('-', ' ').toUpperCase();
  return name;
};

export const convertRelatePathImage = (relativePath: string) => {
  return `${STORAGE_PREFIX}/${relativePath}`;
};

export const API_PREFIX = baseURL;
export const STORAGE_PREFIX = baseStorage;
export const IMAGE_FOLDER_PATH = '/images';
export const ZALO_LINK = 'https://zalo.me/0979828688';
// export const PHONE_NUMBER = 0979828688;

export const MODEL_TYPE = {
  PROJECT: 'Project',
  BLOG: 'Blog',
};

export const SERVICE_TYPE = {
  DESIGN_ARCHITECT: 1,
  BUILD_ROUGH_PART: 2,
  UPDATE_REPAIR: 3,
};

export const NUM_OF_PROJECT_SERVICE = 6;
