import { 
    Box, 
    Heading, 
    VStack 
} from "@chakra-ui/react";
import GiftInputs from "../components/GiftInputs";
import GiftList from "../components/GiftList";

const AdviencyLayout = () => {
	
    return (
        <Box
            alignItems="center"
            // bgImage={giftWallpaper}
            display="flex"
            h="100vh"
            justifyContent="center"
        >
			<VStack
				bgColor="white"
				w="25rem"
			>
				<Heading>Regalos</Heading>
            	<GiftInputs/>
				<GiftList/>
			</VStack>
        </Box>
    );
}

export default AdviencyLayout;