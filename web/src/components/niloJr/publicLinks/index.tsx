import { CustomButton } from "@/components/ui/chargedComponents/Button";
import { useHooks, UserLinks } from "./hooks";

export const PublicLinks = () => {
  const { userLinks } = useHooks();
  return (
    <>
      {userLinks.map(({ icon, url }: UserLinks) => (
        <CustomButton
          icon={icon}
          onClick={() => window.open(url, "_blank")}
          sx={{
            px: 1,
            bg: "white/0",
            _hover: { bg: "blue.600/0" },
          }}
          iconSx={{ color: "white/30", _hover: { color: "white" } }}
        ></CustomButton>
      ))}
    </>
  );
};
