import { Card, Text } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import { useHooks } from "./hooks";
import { MenuItemsCard } from "@/components/niloJr/menuItemsCard";
import { PublicLinks } from "@/components/niloJr/publicLinks";

export const UserCardInfo = () => {
  const {
    active,
    userName,
    menuItems,
    isShowAvatar,
    userPosition,
    userDescription,
    onClickMenuItem,
  } = useHooks();

  return (
    <Card.Root {...customCardStyles}>
      <Card.Body
        gap="2"
        display="flex"
        flexDirection="column"
        alignItems="center"
        mb="30px"
      >
        {isShowAvatar && (
          <Avatar
            size="full"
            name="Nilo Jr"
            boxSize="170px"
            src={process.env.NEXT_PUBLIC_PROFILE_PIC_URL}
          />
        )}
        <Card.Title mt="2" whiteSpace="nowrap">
          <Text fontWeight="bold" textStyle="5xl">
            {userName}
          </Text>
          <Text {...commonCustomTextStyles} fontSize="20px" textAlign="left">
            {userPosition}
          </Text>
          <Text
            {...commonCustomTextStyles}
            fontSize="15px"
            color="white/50"
            textAlign="left"
          >
            {userDescription}
          </Text>
        </Card.Title>
        <Card.Body {...customBodyCardStyles}>
          <MenuItemsCard
            items={menuItems}
            onClick={onClickMenuItem}
            activeOption={active}
          />
        </Card.Body>
      </Card.Body>
      <Card.Footer justifyContent="right">
        <PublicLinks />
      </Card.Footer>
    </Card.Root>
  );
};

const customFontStyles = {
  color: "rgb(226 232 240)",
};
const customCardStyles = {
  ...customFontStyles,
  w: "fit-content",
  bg: "white/0",
  maxHeight: "fit-content",
  mt: "25px"
};
const customBodyCardStyles = {
  w: "100%",
  gap: "4",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};
const commonCustomTextStyles = {
  mb: "15px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
};
