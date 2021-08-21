import { Flex,Text,Spacer } from "@chakra-ui/layout"


const Recentlyplayed = () => {
    return (
        <Flex flexDir="column" boxShadow="md" w="full" mb={4} border="1px solid #EEEEEE" rounded={8} p={2}>
        <Flex flexDir="row" w="full" p={4} alignItems="center" justifyContent="space-between">
            <Text fontSize="md" fontWeight="bold">Recently Played</Text>
            <Spacer/>
            <Text fontSize="md" color="#bdc7c9" fontWeight="bold">See All</Text>
        </Flex>

        <Flex flexDir="row" w="full" p={4} alignItems="center" justifyContent="space-between">
            {/* Music Card */}

           
           
        </Flex>


     </Flex>
    )
}

export default Recentlyplayed
