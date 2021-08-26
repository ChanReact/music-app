import { VStack,Image,Text, Box, HStack,Flex } from "@chakra-ui/react"


const Musicplayer = () => {
    return (
        <VStack paddingY={8} spacing={4} mt={4} w="300px" h="400px" rounded="18px"  backgroundColor="#108690">
           <Text fontWeight="medium" color="white" fontSize="lg">Now Playing</Text>
           
           <Image rounded="xl" w="230px" h="130px" src="/images/nature.jpg"/>
           <Flex flexDirection="column" alignItems="center" pt={4}>
               <Text color="white">The Adventure</Text>
               <Text color="gray.50">Angles & Airwaves</Text>
           </Flex>
           <HStack spacing={2} w="200px">
               <Text color="gray.50">2:40</Text>
               <Box w="180px" h=".3em" bg="rgba(255,0,0,0.1)"></Box>
               <Text color="gray.50">3:45</Text>
           </HStack>
           <HStack>


           </HStack>

        </VStack>
    )
}

export default Musicplayer
