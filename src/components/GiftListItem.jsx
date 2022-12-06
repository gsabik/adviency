import { useContext } from "react"
import { GiftsContext } from "../context/GiftContext"
import { Avatar, HStack, IconButton, Text, VStack } from "@chakra-ui/react"
import { DeleteIcon } from "@chakra-ui/icons";

const GiftItem = ({ description, addressee, imageUrl, id }) => {
	const { deleteGift } = useContext(GiftsContext);

	return (
		<HStack
			justifyContent="space-between" 
			spacing={4}
			w="full"
		>
			<HStack>
				<Avatar
					src={imageUrl}
				/>
				<VStack 
					alignItems="flex-start"
					spacing={0}
				>
					<Text fontWeight="semibold" fontSize="lg">{description}</Text>
					<Text>{addressee}</Text>
				</VStack>
			</HStack>
			<IconButton
				icon={<DeleteIcon/>}
				onClick={() => deleteGift(id)}
			/>
		</HStack>
	);
}

export default GiftItem