import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Heading, useToast, VStack } from "native-base";

import { api } from "../services/api";

import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function Find() {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ code, setCode ] = useState('');

  const toast = useToast();
  const { navigate } = useNavigation();

  async function handleJoinPool() {
    try {
      setIsLoading(true);

      if(!code.trim()){
        return toast.show({
          title: 'Informe o código',
          placement: 'top',
          bgColor: 'red.50'
        })
      }

      await api.post('/pools/join', { code });

      toast.show({
        title: 'Você entrou no bolão com sucesso!',
        placement: 'top',
        bgColor: 'green.500'
      })

      navigate('pools')

    } catch (error) {
      console.log(error);
      setIsLoading(false);

      if(error.response?.data?.message === 'Pool nor found.'){
        return toast.show({
          title: 'Error ao encontrar o bolão!',
          placement: 'top',
          bgColor: 'red.50'
        })
      }

      if(error.response?.data?.message === 'You already joined this pool.'){
        return toast.show({
          title: 'Você já está neste bolão!',
          placement: 'top',
          bgColor: 'red.50'
        })
      }
    }
  }

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
          autoCapitalize="characters"
          onChangeText={setCode}
        />

        <Button
          title="BUSCAR BOLÃO"
          isLoading={isLoading}
          onPress={handleJoinPool}
        />

      </VStack>

    </VStack>
  )
}