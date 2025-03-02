import { Center, GridItem, HStack, SimpleGrid } from "@chakra-ui/react";
import { useHooks } from "./hooks";
import { UserCardInfo } from "./userCard";

export const NiloJrPage = () => {
  const {} = useHooks();
  return (
    <HStack {...customHStackStyles}>
      <SimpleGrid {...customSimpleGridStyles}>
        <GridItem colSpan={{ base: 2, md: 3 }}>
          <Center {...customCenterStyles}>
            <UserCardInfo />
          </Center>
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 3 }}>
          <Center {...customCenterStyles} breakBefore="page">
            Feed will be added here
          </Center>
        </GridItem>
      </SimpleGrid>
    </HStack>
  );
};

const commonStyles = {
  align: "center",
  justify: "center",
};

const customHStackStyles = {
  ...commonStyles,
};

const customSimpleGridStyles = {
  ...commonStyles,
  mt: "25px",
  columns: { base: 2, md: 6 },
  gap: { base: "24px", md: "40px" },
  w: "90%",
};

const customCenterStyles = {
  ...commonStyles,
  h: "fit-content",
  borderRadius: "md",
  borderColor: "red.400",
  color: "white",
};
