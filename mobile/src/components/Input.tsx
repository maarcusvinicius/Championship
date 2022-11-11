import { Input as NativeBaseInput, IInputProps } from 'native-base';

export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput
      bg="gray.20"
      h={14}
      px={4}
      fontSize="md"
      fontFamily="body"
      color="white"
      placeholderTextColor="blue.90"
      _focus={{
        bg: "gray.20",
        borderColor: "blue.90"
      }}
      {...rest}
    />
  );
}