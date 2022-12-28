import { useContext } from "react";
import { GiftsContext } from "../context/GiftContext";
import { 
    Box, 
    Button, 
    Divider, 
    Heading, 
	HStack, 
	Text, 
    VStack 
} from "@chakra-ui/react";
import Snowfall from "react-snowfall";
import { AddGiftModal } from "../components/ModalForm/index";
import GiftList from "../components/GiftList";
import NoGifts from "../components/NoGifts";
import giftWallpaper from "../assets/giftWallpaper.jpg";
import Preview from "../components/Preview";
import Player from "../components/Player";

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
			<Snowfall
				speed={[0.5, 5]}
				wind={[2.5, 3.5]}
			/>
			<VStack
				bgColor="white"
				borderRadius="md"
				p={4}
				spacing={4}
				w="25rem"
			>
				<HStack justifyContent="space-between" w="full" >
					<Heading>Regalos</Heading>
					<Player/>
				</HStack>
				<AddGiftModal/>
				{
					gifts.length === 0
					? <NoGifts/>
					: <GiftList/>
				}
				<Divider/>
				{
					gifts.length > 0
					&&
					<Text fontWeight="semibold">Total: ${totalPrice()}</Text>
				}
				<VStack w="full">
					{
						gifts.length > 0 
						&& 
						<Button 
							colorScheme="red"
							onClick={() => deleteAllGifts()}
							w="full"
						>Borrar todos
						</Button>
					}
					<Preview/>
				</VStack>
			</VStack>
        </Box>
    );
}

export default AdviencyLayout