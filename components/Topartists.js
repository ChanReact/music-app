import { Flex,Box, Grid, Image,Text } from "@chakra-ui/react"
import Header from "./Header"

export const Artistcard = ({image,artist}) =>{
    return (
      <Flex justifyContent="space-between" alignItems="center"  flexDir="column" w="90px" h="100px">
        <Image
         src={image}
         w="80px"
         h="80px"
         rounded="20px"
        />
        <Text fontSize="sm" fontWeight="bold">
            {artist}
        </Text>

      </Flex>
    )
}

const Topartists = () => {
    return (
       <>
            <Header title="Top Artists"/>
            <Grid w="full" templateColumns="repeat(3,1fr)" gap={2}>
             <Artistcard image="/images/nature.jpg" artist="Blink 182"/>
             <Artistcard image="/images/nature2.jpg" artist="Blink 182"/>
             <Artistcard image="/images/nature3.jpg" artist="Blink 182"/>
             <Artistcard image="/images/nature2.jpg" artist="Blink 182"/>
             <Artistcard image="/images/nature3.jpg" artist="Blink 182"/>
             <Artistcard image="/images/nature.jpg" artist="Blink 182"/>


            </Grid>
            
        </>
    )
}

export default Topartists
