import { useContext } from "react"
import { GiftsContext } from "../context/GiftContext"
import { Button, HStack, IconButton, Text } from "@chakra-ui/react"
import { DeleteIcon } from "@chakra-ui/icons";

const GiftItem = ({ description, id }) => {
	const { deleteGift } = useContext(GiftsContext);

	return (
		<HStack
			justifyContent="space-between" 
			spacing={4}
			w="full"
		>
			<Text>{description}</Text>
			<IconButton
				icon={<DeleteIcon/>}
				onClick={() => deleteGift(id)}
			/>
		</HStack>
	);
}

export default GiftItem