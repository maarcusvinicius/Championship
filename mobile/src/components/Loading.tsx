import { Center, Spinner } from 'native-base';

export function Loading() {
  return (
    <Center flex={1} bg="white.10">
      <Spinner color="blue.90" />
    </Center>
  )
}
