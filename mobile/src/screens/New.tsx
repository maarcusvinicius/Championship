import { useState } from "react";
import { Heading, VStack, useToast } from "native-base";

import { api } from "../services/api";

import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

import Logo from '../assets/logo.svg';

export function New() {
  const [title, setTitle] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const toast = useToast();
  
  async function handlePoolCreate(){ 
    if(!title.trim()){
      return toast.show({
        title: 'Informe um título para seu bolão',
        placement: 'top',
        bgColor: 'red.50'
      })
    } 

    try {
      setIsLoading(true)

      await api.post('/pools', { title: title })

      toast.show({
        title: 'Bolão criado com sucesso!',
        placement: 'top',
        bgColor: 'green.500'
      })

    } catch (error){
      console.log(error)

      toast.show({
        title: 'Não foi possível criar um bolão',
        placement: 'top',
        bgColor: 'red.50'
      })
    } finally {
      setIsLoading(false)
    }

  }

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
          onChangeText={setTitle}
          value={title}
        />

        <Button
          title="CRIAR MEU BOLÃO"
          onPress={handlePoolCreate}
          isLoading={isLoading}
        />

      </VStack>

    </VStack>
  )
}