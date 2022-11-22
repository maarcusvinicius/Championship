import { Heading, HStack, Text, VStack } from 'native-base';

import { PoolCardProps } from './PoolCard';
import { Participants } from './Participants';

interface Props {
  data: PoolCardProps;
}

export function PoolHeader({ data }: Props) {
  return (
    <HStack
      w="full"
      h={20}
      bgColor="transparent"
      borderBottomWidth={1}
      borderBottomColor="blue.90"
      justifyContent="space-between"
      alignItems="center"
      mb={3}
      p={4}
    >
      <VStack>
        <Heading color="blue.90" fontSize="md" fontFamily="heading">
          {data.title}
        </Heading>

        <HStack>
          <Text color="blue.90" fontSize="xs" mr={1}>
            Código:
          </Text>

          <Text color="blue.90" fontSize="xs" fontFamily="heading">
            {data.code}
          </Text>
        </HStack>
      </VStack>

      <Participants
        count={data._count?.participants}
        participants={data.participants}
      />
    </HStack>
  );
}