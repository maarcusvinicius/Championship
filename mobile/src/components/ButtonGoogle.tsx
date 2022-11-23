import { Button as ButtonNativeBase } from 'native-base';

export function ButtonGoogle({ ...rest }) {

  return (
    <ButtonNativeBase
      h={20}
      w={20}
      rounded="full"
      fontSize="md"
      textTransform="uppercase"
      bg="red.70"
      _pressed={{
        bg:"red.90"
      }}
      _loading={{
        _spinner: {color: 'red.90'}
      }}
      {...rest}
    />
  )
}