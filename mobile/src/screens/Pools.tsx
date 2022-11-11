import { VStack, Icon } from "native-base";
import { Octicons } from "@expo/vector-icons";

import { Button } from "../components/Button";
import { Header } from "../components/Header";

export function Pools() {

  return (
    <VStack flex={1} bgColor="white.10">
      <Header title="Meus bolões" />

      <VStack mt={6} mx={5} borderBottomWidth={1} borderBottomColor="blue.90" pb={4} mb={4}>
        <Button
        title="BUSCAR BOLÃO POR CÓDIGO"
        leftIcon={<Icon as={Octicons} name="search" color="lightText" size="md" />}
        />
      </VStack>
    </VStack>
  )
}