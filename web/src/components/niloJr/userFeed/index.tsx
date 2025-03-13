import { Stack, Text, Highlight, Box } from "@chakra-ui/react";
import { useHooks } from "./hooks";

export const UserFeed = () => {
  const { aboutInfos, experienceInfos } = useHooks();
  return (
    <>
      <Stack>
        <Box>
          <Stack mt="25px">
            {aboutInfos.map(({ description, highLights }) => (
              <Text {...headerStyle}>
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

        <Box>
          <Stack mt="100px">
            {experienceInfos.map(({ company }) => (
              <Text>{company}</Text>
            ))}
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
