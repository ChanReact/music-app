import { Flex,Text,Spacer,useColorModeValue } from "@chakra-ui/react"
import { Songcard } from "./Songcard"

const Songwidget = ({title, songs}) => {

   

    const color = useColorModeValue("white", "whiteAlpha.300")

    return (
        <Flex flexDir="column" boxShadow="md" w="full" mb={4} border="1px" borderColor={color} rounded={8} p={2}>
        <Flex flexDir="row" w="full" p={4} alignItems="center" justifyContent="space-between">
            <Text fontSize="md" fontWeight="bold">{title}</Text>
            <Spacer/>
            <Text fontSize="md" color="#bdc7c9" fontWeight="bold">See All</Text>
        </Flex>

        <Flex flexDir="row" w="full" p={4} alignItems="center" justifyContent="space-between">
            {/* Music Card */}

            {songs.map(({image,title,artist},i)=>(
                <Songcard key={i} image={image} title={title} artist = {artist} />

            ))}
           
        </Flex>


     </Flex>
    )
}

export default Songwidget
