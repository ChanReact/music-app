import {Flex,Text,Box,Icon, HStack, Spacer} from '@chakra-ui/react'
import { MdAddBox } from "react-icons/md";
import { RiFileAddFill } from "react-icons/ri";


const imagestyles = {
    bgColor: "white",
    backgroundColor: "#EDF2F7",
    rounded: "14",
    h:"14",
    w:"14"
}

const Playlist = () => {
    return (
        <HStack px={4} mb="4" w="full" spacing="2">
          <Box  {...imagestyles}>
           
           <Flex h="full" flexDir="column" alignContent="center" alignItems="center" justifyContent="center">
           <Icon color="#687980" h="6" w="6" as={RiFileAddFill} />
           </Flex>
          
       </Box>
       <Box pl="2" >
       <Text fontSize=".9em" color="#4A5568" fontWeight="extrabold" mb={2}>Playlist Added</Text>
       <Text color="#A0AEC0" letterSpacing="widest" fontWeight="extrabold" fontSize="12px">106 Songs</Text>

       </Box>
       <Spacer/>
       <Text color="#A0AEC0" fontWeight="bold" fontSize=".9em">2 mins</Text>
      
      </HStack>
    )
}

export default Playlist
