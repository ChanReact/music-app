import { Flex,Image,Text,Box,Icon  } from "@chakra-ui/react"  
import { BsFillPlayFill } from "react-icons/bs";

export const Songcard = ({image,title,artist}) => {
    return (
       <Flex boxShadow="md" border="1px solid #EEEEEE" rounded={12} p={3} position="relative" flexDir="column" w="180px" h="210px" alignItems="center">
           <Image
           boxShadow="md"
            src={image}
            rounded={12}
            w="150px"
            h="150px"
           />
           <Box className="float_box" bgColor="white" rounded={15} h="12" w="12"    position="absolute" top="20" right="7">
               <Flex h="full" flexDir="column" alignContent="center" alignItems="center" justifyContent="center">
               <Icon as={BsFillPlayFill} />

               </Flex>
              
           </Box>
        <Flex p={2} w="full" flexDir="column" justifyContent="center">
        <Text fontSize="sm" color="#2b2a35" fontWeight="bold">{title}</Text>
           <Text fontSize="xs" color="#bdc7c9" fontWeight="bold">{artist}</Text>

        </Flex>
          
       </Flex>
    )
}
