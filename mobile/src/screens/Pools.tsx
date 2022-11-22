import { useState, useCallback } from 'react';
import { VStack, Icon, useToast, FlatList } from "native-base";
import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useFocusEffect } from "@react-navigation/native";

import { api } from "../services/api";

import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Loading } from '../components/Loading';
import { PoolCard, PoolCardProps } from '../components/PoolCard';
import { EmptyPoolList } from '../components/EmptyPoolList';


export function Pools() {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ pools, setPools ] = useState<PoolCardProps[]>([]);
  
  const { navigate } = useNavigation();
  const toast = useToast();

  async function fetchPools() {
    try {
      setIsLoading(true)

      const response = await api.get('/pools')
      setPools(response.data.pools)

    } catch (error) {
      console.log(error)

      toast.show({
        title: 'Não foi possivel carregar os botões',
        placement: 'top',
        bgColor: 'red.50',
      })

    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(useCallback(() => {
    fetchPools();
  }, []))

  return (
    <VStack flex={1} bgColor="white.10">
      <Header title="Meus bolões" />

      <VStack mt={6} mx={5} borderBottomWidth={1} borderBottomColor="blue.90" pb={4} mb={4}>
        <Button
        title="BUSCAR BOLÃO POR CÓDIGO"
        leftIcon={<Icon as={Octicons} name="search" color="lightText" size="md" />}
        onPress= {() => navigate('find')}
        />
      </VStack>

    {
      isLoading ?  <Loading /> :
        <FlatList
          data={pools}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <PoolCard
              data={item}
              onPress={() => navigate('details', { id: item.id })}
            />
          )}
          ListEmptyComponent={() => <EmptyPoolList />}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{pb: 10}}
          px={5}
        />
    }
    </VStack>
  )
}