import { Button, ButtonProps } from "@mui/material";
import { ReactNode } from "react";

interface PrimaryButtonProps extends ButtonProps {
  children: ReactNode;
}

export const PrimaryButton = ({
  children,
  ...props
}: PrimaryButtonProps) => {
  return (
    <Button
      fullWidth
      variant="contained"
      color="primary"
      {...props}
    >
      {children}
    </Button>
  );
};
