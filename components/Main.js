import { Flex, Icon,Text,Link, Box, Spacer, useColorMode,useColorModeValue } from "@chakra-ui/react";
import { AiOutlineEllipsis } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { useState,useEffect } from "react";
import {songData} from "../data"
import Recentlyplayed from "./Recentlyplayed";
import Songwidget from "./Songwidget";
import { BsMoon,BsSun } from "react-icons/bs";

const headerStyle = {
    zIndex:"10",
    overflow:"hidden",
    paddingX:'10',
    top:"0",
    
    flexDir:"row",
    h:"70px",
    w:"65%",
    position:"fixed",
    
    alignItems:"center",
    justifyContent:"space-between"
}

const mainStyle = {
    flexDir:"column", 
    w:"65%",
    h:"100vh",
    alignItems:"center", 
    paddingX:'10',
    overflowY:"auto",
    position:"relative",
    zIndex:'0',
    borderRight:"2px",
    
}

const Main = () => {

    const [scroll, setScrolled] = useState(false)
    const { colorMode, toggleColorMode } = useColorMode()
    const fontcolor = useColorModeValue("#2b2a35", "white")
    const bg = useColorModeValue("white", "gray.800")

    const onScroll = ()=>{
        const scrollY = window.scrollY
        console.log(scrollY)
    }

    return (

        <Flex onScroll={onScroll}  
          {...mainStyle } 
          borderRightColor= {colorMode === 'light' ? 'gray.100':'whiteAlpha.300'}
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

            <Flex {...headerStyle} bg={bg} boxShadow={scroll ? 'sm' : 'none'}>

                <Flex flexDir="row"  className="header-links" w="100%" pl={6} >
                    <Link _active={{color: fontcolor}} _hover={{color: fontcolor,textDecor: 'none'}} >
                        <Text className={colorMode === 'light' ? "link_active":'dark-link_active'}>Music</Text>
                    </Link>
                    <Link _hover={{color: fontcolor, textDecor: 'none'}} >
                        <Text>Podcast</Text>
                    </Link>
                    <Link _hover={{color: fontcolor, textDecor: 'none'}} >
                        <Text>Live</Text>
                    </Link>
                    <Link _hover={{color: fontcolor, textDecor: 'none'}} >
                        <Text>Radio</Text>
                    </Link >



                </Flex>
                <Icon cursor="pointer" onClick={toggleColorMode} boxSize="6" color="#687980" mr="4" as={colorMode === 'light' ? BsMoon : BsSun} />
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
