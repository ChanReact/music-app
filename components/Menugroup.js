import { Flex, Icon,Text,Link } from "@chakra-ui/react"
export const Menugroup = ({icon,text}) => {
    return (
        <Flex w="100%" className="sidebar-items" alignItems="center" color="#687980">
                    
                        <Link >
                            <Icon as={icon} fontSize="xl" className="" />
                        </Link>
                        <Link _hover={{textDecor : 'none'}}>
                            <Text  fontWeight="bold" ml={4} className="">{text}</Text>
                        </Link>
                    
        </Flex>  
    )
}
