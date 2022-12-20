import { useContext } from "react";
import { GiftsContext } from "../context/GiftContext";
import { Avatar, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { EditGiftModal } from "./ModalForm/index";

const GiftItem = ({ gift }) => {
	const { deleteGift } = useContext(GiftsContext);

	return (
		<HStack
			justifyContent="space-between" 
			spacing={4}
			w="full"
		>
			<HStack>
				<Avatar
					src={gift.imageUrl}
				/>
				<VStack 
					alignItems="flex-start"
					spacing={0}
				>
					<Text fontWeight="semibold" fontSize="lg">{gift.description} ({gift.quantity}) - ${(gift.quantity * gift.price).toFixed(2)}</Text>
					<Text>Para {gift.addressee}</Text>
				</VStack>
			</HStack>
			<HStack>
				<EditGiftModal gift={gift} />
				<IconButton
					icon={<DeleteIcon/>}
					onClick={() => deleteGift(gift.id)}
				/>
			</HStack>
		</HStack>
	);
}

export default GiftItem