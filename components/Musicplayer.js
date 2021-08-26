import { VStack,Image,Text, Box, HStack,Flex,Icon } from "@chakra-ui/react"
import { BsFillPlayFill,
    BsArrowRepeat,
    BsSkipStartFill,
    BsFillSkipEndFill,
    BsShuffle
    } from "react-icons/bs"

export const Controls = ({icon,border=false}) =>{
    return (
    <Box    h="12" w="12">
           
    <Flex rounded={14} h="full" bg={border ? 'whiteAlpha.400' : null} flexDir="column" alignContent="center" alignItems="center" justifyContent="center">
    <Icon color="white" h="4" w="4" as={icon} />
    </Flex>
   
     </Box>

    )
}


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
               <Box w="180px" h=".3em" bg="whiteAlpha.400" >
                   <Box w="100px" h="100%" bg="white" position="relative">
                       <Box border="4px solid white" mt="-5px" ml="-10px" w="14px" h="14px" position="absolute" right="0" bgColor="blackAlpha.700"  rounded="100%" zIndex="10"></Box>
                   </Box>
               </Box>
               <Text color="gray.50">3:45</Text>
           </HStack>
           <HStack>
             <Controls icon={BsArrowRepeat}/>
             <Controls  icon={BsSkipStartFill}/>
             <Controls border={true} icon={BsFillPlayFill}/>
             <Controls icon={BsFillSkipEndFill}/>
             <Controls icon={BsShuffle}/> 
         

           </HStack>

        </VStack>
    )
}

export default Musicplayer
