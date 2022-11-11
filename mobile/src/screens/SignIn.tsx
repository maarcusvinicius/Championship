import { Center, Icon } from "native-base";
import { Fontisto } from '@expo/vector-icons';
import { useAuth } from '../hooks/useAuth';

import Logo from '../assets/logo.svg';

import { Button } from "../components/Button";

export function SignIn() {
  const { signIn, user } = useAuth()
  // console.log('Dados do usuario =>', user)

  return (
    <Center flex={1} bgColor="white.10" p={7} >

      <Logo width={160} height={80} />

      <Button
        title='ENTRAR COM GOOGLE'
        type="SECONDARY"
        leftIcon={<Icon as={Fontisto} name="google" color="white.10" size="md" />}
        mt={12}
        onPress={signIn}
      />

    </Center>
  )
}