import { Row, Text, Pressable } from 'native-base';
import { Share } from 'react-native';

interface Props {
  code: string;
}

export function EmptyMyPoolList({ code }: Props) {

  async function handleCodeShare() {
    await Share.share({
      message: code
    });
  }

  return (
    <Row flexWrap="wrap" justifyContent="center" p={4} bgColor="gray.200" rounded="2xl">
      <Text color="blue.90" fontSize="sm">
        Esse bolão ainda não tem participantes, que tal
      </Text>

      <Pressable onPress={handleCodeShare}>
          <Text textDecorationLine="underline" color="blue.40" textDecoration="underline">
          compartilhar o código
          </Text>
      </Pressable>

      <Text color="blue.90" fontSize="sm" mx={1}>
        do bolão com alguém?
      </Text>

      <Text color="blue.90" mr={1}>
        Use o código
      </Text>
      
      <Text color="blue.90" fontSize="sm" textAlign="center" fontFamily="heading"> 
        {code}
      </Text>
    </Row>
  );
}