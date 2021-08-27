import { Flex, Icon,Text,Link, useColorMode } from "@chakra-ui/react"
import { FiPlayCircle,
    FiHome,
    FiSearch,
    FiNavigation,FiLogOut,
    FiBookmark,
    FiSettings,
    FiUser,
    FiFileText } from "react-icons/fi";
import { AiOutlineClockCircle,AiTwotoneHeart,AiFillFolder,AiFillFolderAdd } from "react-icons/ai";
import '../styles/Sidebar.module.css';


export const Sidebar = () => {

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Flex 
        display={{base: 'none', sm:'block'}}
        w="15%" 
        flexDir="column"
        alignItems="center"
        borderRight="2px"
        borderRightColor={colorMode === 'light' ? 'gray.100':'whiteAlpha.300'}
       zIndex="90"
        pl={10}
        overflowY="auto"
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
            }}
            >
            <Flex flexDir="row"
            mt={5}
            mb={10}
            align="center"
            
            color={colorMode === 'light' ? "#2B2A35" : 'white'}
            w="100%">
                <Icon as={FiPlayCircle} fontWeight="bold" fontSize="2xl"/>
                <Text fontWeight="bold" fontSize="2xl" ml={4}>Rungon</Text>
            </Flex>

            <Flex flexDirection="column" align="flex-start" mb={8} justifyContent="center" w="100%">
                {/* menugroup */}
                
                    <Text textTransform="uppercase" fontWeight="bold" mb={5} fontSize="sm" color="#B2B1B9">
                        menu
                    </Text>
                <Flex w="100%" className="sidebar-items active-div" alignItems="center" color="#687980">
                    
                        <Link >
                            <Icon as={FiHome} fontSize="xl" className="active-icon" />
                        </Link>
                        <Link _hover={{textDecor : 'none'}}>
                            <Text  fontWeight="bold" ml={4} className="active">Home</Text>
                        </Link>
                    
                </Flex>   

                <Flex w="100%" className="sidebar-items"  color="#687980">
                   
                        <Link>
                            <Icon as={FiSearch} fontSize="xl" className="" />
                        </Link>
                        <Link _hover={{textDecor : 'none'}}>
                            <Text  fontWeight="bold" ml={4} className="">Search</Text>
                        </Link>
                   
                </Flex>  
                <Flex w="100%" className="sidebar-items"  color="#687980">
                   
                        <Link>
                            <Icon as={FiNavigation} fontSize="xl" className="" />
                        </Link>
                        <Link _hover={{textDecor : 'none'}}>
                            <Text  fontWeight="bold" ml={4} className="">Discover</Text>
                        </Link>
                   
                </Flex>  
                <Flex w="100%" className="sidebar-items"  color="#687980">
                   
                        <Link>
                            <Icon as={FiBookmark} fontSize="xl" className="" />
                        </Link>
                        <Link _hover={{textDecor : 'none'}}>
                            <Text  fontWeight="bold" ml={4} className="">Albums</Text>
                        </Link>
                   
                </Flex>  

               

                <Flex w="100%" className="sidebar-items"  color="#687980">
                   
                        <Link>
                            <Icon as={FiUser} fontSize="xl" className="" />
                        </Link>
                        <Link _hover={{textDecor : 'none'}}>
                            <Text  fontWeight="bold" ml={4} className="">Artists</Text>
                        </Link>
                   
                </Flex>  
            </Flex>

            <Flex flexDirection="column" align="flex-start" mb={8} justifyContent="center" w="100%">
                {/* menugroup */}
                
                    <Text textTransform="uppercase" fontWeight="bold" mb={5} fontSize="sm" color="#B2B1B9">
                        library
                    </Text>
                <Flex w="100%" className="sidebar-items" alignItems="center" color="#687980">
                    
                        <Link >
                            <Icon as={AiOutlineClockCircle} fontSize="xl" className="" />
                        </Link>
                        <Link _hover={{textDecor : 'none'}}>
                            <Text  fontWeight="bold" ml={4} className="">Recent</Text>
                        </Link>
                    
                </Flex>   

                <Flex w="100%" className="sidebar-items"  color="#687980">
                   
                        <Link>
                            <Icon as={AiTwotoneHeart} fontSize="xl" className="" />
                        </Link>
                        <Link _hover={{textDecor : 'none'}}>
                            <Text  fontWeight="bold" ml={4} className="">Favourites</Text>
                        </Link>
                   
                </Flex>  
                <Flex w="100%" className="sidebar-items"  color="#687980">
                   
                        <Link>
                            <Icon as={AiFillFolder} fontSize="xl" className="" />
                        </Link>
                        <Link _hover={{textDecor : 'none'}}>
                            <Text  fontWeight="bold" ml={4} className="">Local</Text>
                        </Link>
                   
                </Flex>  
            </Flex>

            {/*  */}
            <Flex flexDirection="column" align="flex-start" mb={8} justifyContent="center" w="100%">
                {/* menugroup */}
                
                    <Text textTransform="uppercase" fontWeight="bold" mb={5} fontSize="sm" color="#B2B1B9">
                        playlist
                    </Text>
                <Flex w="100%" className="sidebar-items" alignItems="center" color="#687980">
                    
                        <Link >
                            <Icon as={AiFillFolderAdd} fontSize="xl" className="" />
                        </Link>
                        <Link _hover={{textDecor : 'none'}}>
                            <Text  fontWeight="bold" ml={4} className="">Create New</Text>
                        </Link>
                    
                </Flex>   

                <Flex w="100%" className="sidebar-items"  color="#687980">
                   
                        <Link>
                            <Icon as={FiFileText} fontSize="xl" className="" />
                        </Link>
                        <Link _hover={{textDecor : 'none'}}>
                            <Text  fontWeight="bold" ml={4} className="">Pop Punk</Text>
                        </Link>
                   
                </Flex>  
                <Flex w="100%" className="sidebar-items"  color="#687980">
                   
                        <Link>
                            <Icon as={FiFileText} fontSize="xl" className="" />
                        </Link>
                        <Link _hover={{textDecor : 'none'}}>
                            <Text  fontWeight="bold" ml={4} className="">Rocks</Text>
                        </Link>
                   
                </Flex>  
            </Flex>


            <Flex flexDirection="column" align="flex-start" mb={8} justifyContent="center" w="100%">
                {/* menugroup */}
                
                    <Text textTransform="uppercase" fontWeight="bold" mb={5} fontSize="sm" color="#B2B1B9">
                        general
                    </Text>
                <Flex w="100%" className="sidebar-items" alignItems="center" color="#687980">
                    
                        <Link >
                            <Icon as={FiSettings} fontSize="xl" className="" />
                        </Link>
                        <Link _hover={{textDecor : 'none'}}>
                            <Text  fontWeight="bold" ml={4} className="">Settings</Text>
                        </Link>
                    
                </Flex>   

                <Flex w="100%" className="sidebar-items"  color="#687980">
                   
                        <Link>
                            <Icon as={FiLogOut} fontSize="xl" className="" />
                        </Link>
                        <Link _hover={{textDecor : 'none'}}>
                            <Text  fontWeight="bold" ml={4} className="">Logout</Text>
                        </Link>
                   
                </Flex>  
                
            </Flex>

            

        </Flex>
    )
}
