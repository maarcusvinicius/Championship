import axios from 'axios';
import Image from 'next/image';
import { api } from '../lib/axios';
import { FormEvent, useState } from 'react';

import logoImg from '../assets/nba-logo.svg';
import checkIcon from '../assets/icon-check.svg';
import appPreviewImg from '../assets/bola-de-basquete-cartoon.png';

type HomeProps = {
  poolCount: number;
  guessesCount: number;
  usersCount: number;
}

export default function Home(props: HomeProps) {
  const [ poolTitle, setPoolTitle ] = useState('')

  async function createPool(event: FormEvent) {
    event.preventDefault()

    try {
      const response = await api.post('/pools', {
        title: poolTitle,
      });

      const { code } = response.data
      await navigator.clipboard.writeText(code)

      alert('Bolão criado com sucesso!')

      setPoolTitle('');
    } catch(err) {
      alert('Falha ao criar o bolão, tente novamente!')
    }
  }


  return (
    <div className='max-w-[1124px] h-screen mx-auto grid grid-cols-2 gap-28 items-center'>
      <main>
        <Image src={logoImg} alt="Logo NBA" />

        <h1 
          className='mt-14 text-blue-90 text-4xl font-bold leading-tight'
        >
          Crie seu próprio bolão do campeonato e compartilhe<br/> entre amigos!
        </h1>

        <div className='mt-10 flex items-center'>

          <strong className='text-blue-90 text-xl'>
            <span className='text-blue-40'>+{props.usersCount}</span> pessoas já estão usando
          </strong>
        </div>

        <form onSubmit={createPool} className='mt-10 flex gap-2'>
          <input
            className='text-blue-90 flex-1 px-6 py-4 rounded bg-gray-20 border border-stone-200 text-sm'
            type="text" 
            required
            placeholder='Qual nome do seu bolão?'
            onChange={event => setPoolTitle(event.target.value)}
            value={poolTitle}
          />
          <button
            className='bg-blue-70 px-6 py-4 rounded text-stone-200 font-bold text-sm uppercase hover:bg-blue-90'
            type="submit"
          >
            Criar meu bolão
          </button>
        </form>

        <p
        className='mt-4 text-sm text-gray-400 leading-relaxed'
        >
          Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀
        </p>

        <div className='mt-10 pt-10 border-t border-stone-200 flex items-center justify-between text-blue-90'>
          <div className='flex items-center gap-6'>
            <Image src={checkIcon} alt="" />
            <div className='flex flex-col'>
              <span className='font-bold text-2xl'>+{props.poolCount}</span>
              <span>Bolões criados</span> 
            </div>
          </div>

          <div className='w-px h-14 bg-stone-200'></div>

          <div className='flex items-center gap-6'>
            <Image src={checkIcon} alt="" />
            <div className='flex flex-col'>
              <span className='font-bold text-2xl'>+{props.guessesCount}</span>
              <span>Palpites enviados</span>
            </div>
          </div>
        </div>
      </main>

      <Image src={appPreviewImg} alt="Imagem preview app" quality={100} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const [ poolCountResponse, guessCountResponse, usersCountResponse ] = await Promise.all([
    api.get('/pools/count'),
    api.get('/guesses/count'),
    api.get('/users/count'),
  ])


  return {
    props: {
      poolCount: poolCountResponse.data.count,
      guessesCount: guessCountResponse.data.count,
      usersCount: usersCountResponse.data.count
    }
  }
}
