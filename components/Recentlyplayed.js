import { Flex,Text,Spacer,Image, Box,Icon, HStack } from "@chakra-ui/react"
import nature from '../public/images/nature.jpg'
import { BsFillPlayFill } from "react-icons/bs"
import { MdAddBox } from "react-icons/md";
import { cardData } from "../data";

const imagestyles = {
    bgColor: "white",
    border:"1px solid #bdc7c9",
    rounded: "10",
    h:"10",
    w:"10"
}

const card_style = {
    flexDir:"row",
    w:"full",
    p: "4",
    alignItems:"center",
    justifyContent:"space-between"
}

export const Recentcard = ({num,image,title,artist,duration}) => {
    return (
        <Flex {...card_style}>
        {/* Music Card */}
        
    <HStack spacing="6">
       <Text color="#bdc7c9" fontWeight="bold">{num}</Text>
     <Image  src={image} h={10} w={10} rounded={12} />
     <Box>
         <Text fontWeight="bold" fontSize="sm">{title}</Text>
         <Text fontWeight="bold" color="#bdc7c9" fontSize="small" >{artist}</Text>
     </Box>
     </HStack>
     <Spacer/>
     <HStack spacing={5}>
     <Text  color="#687980" fontWeight="extrabold" fontSize="sm">{duration}</Text>
     <Box  {...imagestyles}>
           
           <Flex h="full" flexDir="column" alignContent="center" alignItems="center" justifyContent="center">
           <Icon color="#e1701a" h="6" w="6" as={BsFillPlayFill} />
           </Flex>
          
       </Box>

       <Box  {...imagestyles}>
           
           <Flex h="full" flexDir="column" alignContent="center" alignItems="center" justifyContent="center">
           <Icon color="#687980" h="5" w="5" as={MdAddBox} />
           </Flex>
          
       </Box>
       </HStack>
       
    </Flex>

    )
}


const Recentlyplayed = () => {
    return (
        <Flex flexDir="column" boxShadow="md" w="full" mb={4} border="1px solid #EEEEEE" rounded={8} p={2}>
        <Flex flexDir="row" w="full" p={4} alignItems="center" justifyContent="space-between">
            <Text fontSize="md" fontWeight="bold">Recently Played</Text>
            <Spacer/>
            <Text fontSize="md" color="#bdc7c9" fontWeight="bold">See All</Text>
        </Flex>

      {cardData.map((card,i)=>(
          <Recentcard key={i} {...card}/>
 
      ))
      }

     </Flex>
    )
}

export default Recentlyplayed
