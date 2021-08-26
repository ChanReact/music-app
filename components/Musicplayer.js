import { VStack,Image,Text, Box, HStack } from "@chakra-ui/react"


const Musicplayer = () => {
    return (
        <VStack mt={4} w="300px" h="400px" rounded="18px"  backgroundColor="#108690">
           <Text>Music Player</Text>
           
           <Image w="200px" src="/images/nature.jpg"/>
           <Box>
               <Text>The Adventure</Text>
               <Text>Angles & Airwaves</Text>
           </Box>
           <HStack>
               <Text>2:40</Text>
               <Text>3:45</Text>
           </HStack>
           <HStack>
               

           </HStack>

        </VStack>
    )
}

export default Musicplayer
