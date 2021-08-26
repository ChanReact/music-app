import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/Main'
import { Sidebar} from '../components/Sidebar'
import { Rightbar } from '../components/Rightbar'



export default function Home() {
  return (
   <Flex flexDir="row" h="100vh" maxW="2000px">
     {/* SIdebar */}
    <Sidebar/>
    {/* Main */}
    <Main/>

    {/* Rightbar */}
     <Rightbar /> 

   </Flex>
      
   
  )
}
