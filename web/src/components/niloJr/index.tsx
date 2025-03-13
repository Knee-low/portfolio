import { Center, GridItem, HStack, SimpleGrid } from "@chakra-ui/react";
import { useHooks } from "./hooks";
import { UserCardInfo } from "./userCard";
import { UserFeed } from "./userFeed";

export const NiloJrPage = () => {
  const {} = useHooks();
  return (
    <HStack {...customHStackStyles}>
      <SimpleGrid {...customSimpleGridStyles}>
        <GridItem colSpan={{ base: 2, md: 3 }}>
          <Center
            {...customCenterStyles}
            position="sticky"
            top="1px"
            left="1px"
            zIndex="1000"
          >
            <UserCardInfo />
          </Center>
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 3 }}>
          <Center {...customCenterStyles} breakBefore="page" mt="25px" w="40vw">
            <UserFeed />
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
