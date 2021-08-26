import { Flex,Text,Link,Icon,Box, Spacer } from "@chakra-ui/react"
import Musicplayer from "./Musicplayer"
import Notifications from "./Notifications"
import Topartists from "./Topartists"
const rightStyle = {
    flexDir:"column", 
    w:"20%",
    h:"100vh",
    px:"4",
    alignItems:"center", 
    paddingRight:'4',
   
    
}

export const Rightbar = () => {

    return (
        <Flex {...rightStyle}
        >
        <Notifications/>
        <Topartists/>
        <Musicplayer/>
        </Flex>
    )
}
