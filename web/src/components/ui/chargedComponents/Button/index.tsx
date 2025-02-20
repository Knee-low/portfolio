import { chakra } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export const Button = ({ children, ...props }: ButtonProps) => (
  <chakra.button
    bg="blue.500"
    color="white"
    py="2"
    px="4"
    rounded="md"
    _hover={{ bg: "blue.600" }}
    _active={{ bg: "blue.700" }}
    transition="background 0.2s ease-in-out"
    {...props}
  >
    {children}
  </chakra.button>
);
