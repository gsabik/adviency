import { useContext } from "react";
import { GiftsContext } from "../context/GiftContext";
import { 
    Box, 
    Heading, 
    VStack 
} from "@chakra-ui/react";
import GiftInputs from "../components/GiftInputs";
import GiftList from "../components/GiftList";
import NoGifts from "../components/NoGifts";
import giftWallpaper from "../assets/giftWallpaper.jpg";

const AdviencyLayout = () => {
	const { gifts } = useContext(GiftsContext);

    return (
        <Box
            alignItems="center"
            bgImage={giftWallpaper}
            display="flex"
            h="100vh"
            justifyContent="center"
        >
			<VStack
				bgColor="white"
				borderRadius="md"
				p={4}
				w="25rem"
			>
				<Heading>Regalos</Heading>
            	<GiftInputs/>
				{
					gifts.length === 0
					? <NoGifts/>
					: <GiftList/>
				}
			</VStack>
        </Box>
    );
}

export default AdviencyLayout
