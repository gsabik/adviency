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
import ModalFormn from "../components/ModalForm";

const AdviencyLayout = () => {
	const { gifts, deleteAllGifts } = useContext(GiftsContext);

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
				<ModalFormn/>
				{
					gifts.length === 0
					? <NoGifts/>
					: <GiftList/>
				}
				<Divider/>
				<Text fontWeight="semibold">Total: ${}</Text>
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
					<Button 
						w="full"
					>Previsualizar</Button>
				</VStack>
			</VStack>
        </Box>
    );
}

export default AdviencyLayout
