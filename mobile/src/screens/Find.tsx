import { Heading, VStack } from "native-base";

import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function Find() {
  return (
    <VStack flex={1} bgColor="white.10">
      <Header
        title="Buscar por código"
        showBackButton
      />

      <VStack mt={8} mx={4} alignItems="center">

        <Heading fontFamily="heading" color="blue.90" fontSize="xl" mb={8} textAlign="center">
          Encontre um bolão através de{'\n'}
          seu código único
        </Heading>

        <Input  
          mb={2}
          placeholder="Qual o código do bolão?"
        />

        <Button
          title="BUSCAR BOLÃO"
        />

      </VStack>

    </VStack>
  )
}