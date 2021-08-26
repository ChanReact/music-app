import { Flex,Text,Spacer,Image, Box,Icon, HStack } from "@chakra-ui/react"
import nature from '../public/images/nature.jpg'
import { BsFillPlayFill } from "react-icons/bs"

const Recentcard = () => {
    return (
        <Flex flexDir="row" w="full" p={4} alignItems="center" justifyContent="space-between">
        {/* Music Card */}
        
    <HStack spacing="6">
       <Text color="#bdc7c9" fontWeight="bold">01</Text>
     <Image  src="/images/nature.jpg" h={10} w={10} rounded={12} />
     <Box>
         <Text fontWeight="bold" fontSize="sm">I Miss You</Text>
         <Text fontWeight="bold" color="#bdc7c9" fontSize="small" >Blink 182</Text>
     </Box>
     </HStack>
     <Spacer/>
     <HStack spacing={5}>
     <Text>3:51</Text>
     <Box  bgColor="white" border="1px solid #bdc7c9" rounded={10} h="10" w="10">
           
           <Flex h="full" flexDir="column" alignContent="center" alignItems="center" justifyContent="center">
           <Icon h="6" w="6" as={BsFillPlayFill} />
           </Flex>
          
       </Box>

       <Box  bgColor="white" border="1px solid #bdc7c9" rounded={10} h="10" w="10">
           
           <Flex h="full" flexDir="column" alignContent="center" alignItems="center" justifyContent="center">
           <Icon h="6" w="6" as={BsFillPlayFill} />
           </Flex>
          
       </Box>
       </HStack>
       
    </Flex>

    )
}

export default Recentcard
