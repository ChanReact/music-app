import { Flex, Icon,Text,Link, Box, Spacer } from "@chakra-ui/react";
import { AiOutlineEllipsis } from "react-icons/ai";
import { BsDot } from "react-icons/bs";

import {songData} from "../data"
import Recentlyplayed from "./Recentlyplayed";
import Songwidget from "./Songwidget";

const Main = () => {

    return (

        <Flex flexDir="column" 
        w="55%" h="full" alignItems="center" 
        paddingX={10}
        overflowY="auto"
        position="relative"
        zIndex={0}
       
        css={{
            '&::-webkit-scrollbar': {
            width: '4px',
            visibility: 'hidden'
            },
            '&::-webkit-scrollbar-track': {
            width: '6px',
            visibility: 'hidden'
            },
            '&::-webkit-scrollbar-thumb': {
            background: '#B2B1B9',
            borderRadius: '24px',
            visibility: 'hidden'
            },
        }}>
            {/* Header */}

            <Flex  zIndex={10}  overflow="hidden" top={0}  bgColor="white" flexDir="row" h="70px" w="54%"  position="fixed" alignItems="center" justifyContent="space-between">

                <Flex flexDir="row"  className="header-links" w="100%" pl={6} >
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

            <Flex marginTop={100} w="full" flexDir="column" alignItems="center">
            {songData.map(({title,songs},i)=>(
                
                <Songwidget key={i}  title={title} songs={songs} />

            ))
            }

            {/* Recently Played */}
            <Recentlyplayed/>

            </Flex>

           
            
        

        </Flex>
    )
}

export default Main
