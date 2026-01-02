import { TextField } from '@mui/material';

interface Props {
  label: string;
  type?: string;
}

export const TextInput = ({ label, type = 'text' }: Props) => (
  <TextField
    fullWidth
    size="small"
    label={label}
    type={type}
    variant="outlined"
  />
);



