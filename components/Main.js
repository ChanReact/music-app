import { Flex, Icon,Text,Link, Box, Spacer } from "@chakra-ui/react";
import { AiOutlineEllipsis } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { Songcard } from "./Songcard";

const Main = () => {
    return (
        <Flex flexDir="column" w="63%" alignItems="center" paddingX={10}>
            {/* Header */}

            <Flex flexDir="row" h="70px" w="100%" alignItems="center" justifyContent="space-between">

                <Flex flexDir="row" className="header-links" w="100%" >
                    <Link _hover={{color: '#2b2a35', textDecor: 'none'}} >
                        <Text className="link_active">Music</Text>
                    </Link>
                    <Link _hover={{color: '#2b2a35', textDecor: 'none'}} >
                        <Text>Podcast</Text>
                    </Link>
                    <Link _hover={{color: '#2b2a35', textDecor: 'none'}} >
                        <Text>Live</Text>
                    </Link>
                    <Link _hover={{color: '#2b2a35', textDecor: 'none'}} >
                        <Text>Radio</Text>
                    </Link >



                </Flex>
                <Icon color="#687980" fontWeight="bold" fontSize="sm" as={BsDot}/>
                <Icon color="#687980" fontWeight="bold" fontSize="sm" as={BsDot}/>
               
                 

            </Flex>

            <Flex flexDir="column" w="full" border="1px solid #EEEEEE" rounded={2} p={2}>
                    <Flex flexDir="row" w="full" p={4} alignItems="center" justifyContent="space-between">
                        <Text fontSize="md" fontWeight="bold">Global Top 50</Text>
                        <Spacer/>
                        <Text fontSize="md" color="#bdc7c9" fontWeight="bold">See All</Text>
                    </Flex>

                    <Flex flexDir="row" w="full" p={4} alignItems="center" justifyContent="space-between">
                        {/* Music Card */}
                        <Songcard/>
                        <Songcard/>
                        <Songcard/>
                        <Songcard/>
                    </Flex>


            </Flex>



        </Flex>
    )
}

export default Main
