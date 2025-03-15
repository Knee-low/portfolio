import {
  Stack,
  Text,
  Highlight,
  Box,
  Center,
  GridItem,
  Grid,
  Heading,
} from "@chakra-ui/react";
import { useHooks } from "./hooks";
import { GoArrowUpRight } from "react-icons/go";
import { ChargedTag } from "@/components/ui/chargedComponents/Tag";

export const UserFeed = () => {
  const { aboutRef, experienceRef, aboutInfos, experienceInfos } = useHooks();
  return (
    <>
      <Stack>
        <Box ref={aboutRef}>
          <Stack mt="20px">
            {aboutInfos.map(({ description, highLights }) => (
              <Text {...headerStyle} px="10">
                <Highlight
                  query={highLights}
                  styles={{ color: "white/80", fontWeight: "bold" }}
                >
                  {description}
                </Highlight>
              </Text>
            ))}
          </Stack>
        </Box>

        <Box ref={experienceRef} mt="70px">
          <Stack mt="20px">
            {experienceInfos.map(
              ({
                company,
                startYear,
                endYear,
                position,
                description,
                url,
                tags,
              }) => {
                return (
                  <Center
                    role="group"
                    _hover={{
                      bg: "white/10",
                      borderRadius: "5px",
                    }}
                    onClick={() => window.open(url, "_blank")}
                    cursor="pointer"
                  >
                    <Grid templateColumns="repeat(4, 1fr)" gap="6" w="100%">
                      <GridItem colSpan={1}>
                        <Box
                          fontSize="sm"
                          display="flex"
                          alignItems="center"
                          color="white/50"
                          fontWeight="bold"
                          p="3"
                        >
                          <Text>{startYear}</Text>
                          <Box w={"10px"} mx="2" h="1px" bg={"gray.500"} />{" "}
                          <Text>{endYear ?? "PRESENT"}</Text>
                        </Box>
                      </GridItem>
                      <GridItem colSpan={3}>
                        <Box p="3">
                          <Heading
                            fontSize="3xl"
                            display="flex"
                            gap="3"
                            fontWeight="bold"
                          >
                            {company}{" "}
                            <Box
                              as="span"
                              display="inline-flex"
                              transition="transform 0.2s ease-in-out"
                              _groupHover={{ transform: "scale(1.5)" }} // Only the icon grows
                            >
                              <GoArrowUpRight />
                            </Box>
                          </Heading>
                          <Text
                            fontSize="l"
                            display="flex"
                            alignItems="center"
                            color="white/40"
                            fontWeight="semibold"
                          >
                            {position}
                          </Text>
                          <Text
                            fontSize="l"
                            display="flex"
                            alignItems="center"
                            color="white/70"
                            fontWeight="semibold"
                            mt="2"
                          >
                            {description}
                          </Text>
                          <Box mt="20px">
                            <ChargedTag tags={tags} />
                          </Box>
                        </Box>
                      </GridItem>
                    </Grid>
                  </Center>
                );
              },
            )}
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

const headerStyle = {
  fontSize: "1.5rem",
  fontWeight: "light",
  color: "white/45",
  fontFamily: "Lato",
};
