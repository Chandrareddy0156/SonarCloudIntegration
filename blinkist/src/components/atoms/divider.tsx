import { Box, Divider, Typography } from '@mui/material';

export const DividerOr = () => (
  <Box display="flex" alignItems="center" gap={1}>
    <Divider flexItem />
    <Typography fontSize={12} color="text.secondary">
      or
    </Typography>
    <Divider flexItem />
  </Box>
);
