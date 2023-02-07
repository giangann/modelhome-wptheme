import { TextField, TextFieldProps } from '@mui/material';

type TextFieldWithCustomFontProps = {
  fontName: string;
};
export const TextFieldWithCustomFont = (
  props: TextFieldWithCustomFontProps & TextFieldProps,
) => {
  const { fontName } = props;
  return (
    <TextField
      inputProps={{ style: { fontFamily: fontName } }}
      sx={{
        '& input::placeholder': {
          fontFamily: 'Montserrat',
          fontSize: 14,
        },
        '& textarea::placeholder': {
          fontFamily: 'Montserrat',
          fontSize: 14,
        },
      }}
      {...props}
    />
  );
};
