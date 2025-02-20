import { HStack } from "@chakra-ui/react";
import { useHooks } from "./hooks";
import { Button } from "@/components/ui/chargedComponents/Button";

export const NiloJrPage = () => {
  const { handleButtonClick } = useHooks();
  return (
    <HStack {...customStyles}>
      <Button onClick={handleButtonClick}>Click me!</Button>
    </HStack>
  );
};

const customStyles = {
  justify: "center",
  align: "center",
  height: "90vh",
};
