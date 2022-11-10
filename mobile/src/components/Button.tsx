import { Button as ButtonNativeBase, Text, IButtonProps } from 'native-base';

interface Props extends IButtonProps {
  title: string;
  type?: 'PRIMARY' | 'SECONDARY';
}

export function Button({ title, type = 'PRIMARY', ...rest }: Props) {
  return (
    <ButtonNativeBase
      w="full"
      h={14}
      rounded="sm"
      fontSize="md"
      textTransform="uppercase"
      bg={ type === 'SECONDARY' ? "red.70" : "blue.70"}
      _pressed={{
        bg: type === 'SECONDARY' ? "red.90" : "blue.90"
      }}
      _loading={{
        _spinner: {color: 'red.90'}
      }}

      {...rest}
    >
      <Text
        fontSize="sm"
        fontFamily="heading"
        color="white.10"
      >
        {title}
      </Text>
    </ButtonNativeBase>
  )
}