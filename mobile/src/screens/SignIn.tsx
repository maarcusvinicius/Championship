import { Center, Icon } from "native-base";
import { Fontisto } from '@expo/vector-icons';
import { useAuth } from '../hooks/useAuth';

import Logo from '../assets/logo.svg';

import { ButtonGoogle } from "../components/ButtonGoogle";

export function SignIn() {
  const { signIn, isUserLoading } = useAuth()
  // console.log('Dados do usuario =>', user)

  return (
    <Center flex={1} bgColor="white.10" p={7} >

      <Logo width={160} height={80} />

      <ButtonGoogle
        leftIcon={<Icon as={Fontisto} name="google" color="white.10" size="2xl" />}
        mt={12}
        onPress={signIn}
        isLoading={isUserLoading}
        _loading={{ _spinner: { color: '#DB4437' } }}
      />

    </Center>
  )
}