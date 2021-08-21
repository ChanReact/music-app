import { Flex,Text,Spacer } from "@chakra-ui/layout"
import { Songcard } from "./Songcard"

const Songwidget = ({title, songs}) => {
    return (
        <Flex flexDir="column" boxShadow="md" w="full" mb={4} border="1px solid #EEEEEE" rounded={8} p={2}>
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
