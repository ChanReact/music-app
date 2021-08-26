import { Flex,Text,Link,Icon,Box, Spacer } from "@chakra-ui/react"
import { BsDot } from "react-icons/bs";

const headerStyle = {
   
   
    bgColor:"white",
    flexDirection:"row",
    h:"70px",
    w:"full",
    paddingRight: "5",
    marginBottom: "2",
    alignItems:"center",
    justifyContent:"space-between"
}

const Header = ({title}) => {
    return (
        
<Flex {...headerStyle} >

<Flex flexDir="row"  className="header-links" w="100%" pl={6} >
    <Link _hover={{color: '#2b2a35', textDecor: 'none'}} >
        <Text className="link_active">{title}</Text>
    </Link>
    
    


</Flex>
<Icon color="#687980" fontWeight="bold" fontSize="sm" as={BsDot}/>
<Icon color="#687980" fontWeight="bold" fontSize="sm" as={BsDot}/>

 

</Flex>
    )
}

export default Header
