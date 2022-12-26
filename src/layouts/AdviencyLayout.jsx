import { useContext } from "react";
import { GiftsContext } from "../context/GiftContext";
import { 
    Box, 
    Button, 
    Divider, 
    Heading, 
	Text, 
    VStack 
} from "@chakra-ui/react";
import GiftList from "../components/GiftList";
import NoGifts from "../components/NoGifts";
import giftWallpaper from "../assets/giftWallpaper.jpg";
import { AddGiftModal } from "../components/ModalForm/index";
import Preview from "../components/Preview";

const AdviencyLayout = () => {
	const { gifts, deleteAllGifts, totalPrice } = useContext(GiftsContext);

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
				spacing={4}
				w="25rem"
			>
				<Heading>Regalos</Heading>
				<AddGiftModal/>
				{
					gifts.length === 0
					? <NoGifts/>
					: <GiftList/>
				}
				<Divider/>
				<Text fontWeight="semibold">Total: ${totalPrice()}</Text>
				<VStack w="full">
					{
						gifts.length > 0 
						&& 
						<Button 
							colorScheme="red"
							onClick={() => deleteAllGifts()}
							w="full"
						>Borrar todos</Button>
					}
					<Preview/>
				</VStack>
			</VStack>
        </Box>
    );
}

export default AdviencyLayout
