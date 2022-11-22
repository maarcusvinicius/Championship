import { Center, Text, Pressable, IPressableProps } from 'native-base';

interface Props extends IPressableProps {
  title: string;
  isSelected: boolean;
}

export function Option({ title, isSelected = false, ...rest }: Props) {
  return (
    <Pressable flex={1} h={7} maxH={7} {...rest}>
      <Center h="full" w="full" bgColor={isSelected ? "gray.400" : "transparent"} rounded="sm" >
        <Text color="blue.90" fontFamily="heading" fontSize="xs">
          {title}
        </Text>
      </Center>
    </Pressable>
  );
}