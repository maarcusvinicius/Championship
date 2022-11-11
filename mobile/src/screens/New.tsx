import { Heading, VStack } from "native-base";

import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

import Logo from '../assets/logo.svg';

export function New() {
  return (
    <VStack flex={1} bgColor="white.10">
      <Header
        title="Criar novo bolão"
      />

      <VStack mt={10} mx={4} alignItems="center">

        <Logo />

        <Heading fontFamily="heading" color="blue.90" fontSize="xl" my={8} textAlign="center">
          Crie seu próprio bolão da NBA{'\n'}
          e compartilhe entre amigos!
        </Heading>

        <Input  
          mb={2}
          placeholder="Qual nome do seu bolão?"
        />

        <Button
          title="CRIAR MEU BOLÃO"
        />

      </VStack>

    </VStack>
  )
}