import { Box, chakra, Icon, SystemStyleObject } from "@chakra-ui/react";
import { ReactNode } from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  icon?: IconType;
  sx?: SystemStyleObject;
  iconSx?: SystemStyleObject;
}

export const CustomButton = ({ children, ...props }: ButtonProps) => {
  const { icon, sx, iconSx } = props;

  return (
    <chakra.button
      bg="blue.500"
      color="white"
      py="2"
      px="2"
      rounded="md"
      _hover={{ bg: "blue.600" }}
      _active={{ bg: "blue.700" }}
      transition="background 0.2s ease-in-out"
      {...sx}
      {...props}
    >
      <Box display="flex" gap="2">
        {icon && <Icon as={icon} boxSize={6} color="white" {...iconSx} />}
        {children}
      </Box>
    </chakra.button>
  );
};
