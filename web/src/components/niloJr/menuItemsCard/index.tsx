import { Box, Text } from "@chakra-ui/react";

interface Items {
  id: string;
  label: string;
}

interface Props {
  items: Items[];
  onClick: (id: string) => void;
  activeOption: string;
}

export const MenuItemsCard = (props: Props) => {
  const { items, onClick, activeOption } = props;
  return items.map((item) => (
    <Box
      key={item.id}
      display="flex"
      alignItems="center"
      gap={2}
      cursor="pointer"
      onClick={() => onClick(item.id)}
    >
      <Box
        w={activeOption === item.id ? "30px" : "20px"}
        h="1px"
        bg={activeOption === item.id ? "white" : "gray.500"}
        transition="all 0.3s ease-in-out"
      />
      <Text
        fontSize="sm"
        fontWeight={activeOption === item.id ? "bold" : "normal"}
        color={activeOption === item.id ? "white" : "gray.500"}
        textTransform="uppercase"
        transition="color 0.3s ease-in-out"
        _hover={{ fontWeight: "bold", color: "white" }}
      >
        {item.label}
      </Text>
    </Box>
  ));
};
