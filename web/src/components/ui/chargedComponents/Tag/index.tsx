import { For, HStack, Tag } from "@chakra-ui/react";

type Props = {
  tags: string[];
};
export const ChargedTag = ({ tags }: Props) => {
  return (
    <HStack flexWrap="wrap">
      <For each={tags}>
        {(label, idx) => (
          <Tag.Root
            key={idx}
            rounded="full"
            size="lg"
            borderRadius="full"
            bg="rgba(2, 202, 202, 0.1)"
            color="cyan.600"
            fontWeight="bold"
            px={4}
            py={1}
            boxShadow="none"
          >
            <Tag.Label minWidth="fit-content">{label}</Tag.Label>
          </Tag.Root>
        )}
      </For>
    </HStack>
  );
};
