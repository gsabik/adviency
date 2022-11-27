import { Button, HStack, Text } from "@chakra-ui/react"
import { useContext } from "react"
import { GiftsContext } from "../context/GiftContext"

const GiftItem = ({ description, imageUrl, quantity, id }) => {
	const { deleteGift } = useContext(GiftsContext);

	return (
		<HStack spacing={4}>
			<Text>{description}</Text>
			<Text>{imageUrl}</Text>
			<Text>{quantity}</Text>
			<Button size="md" onClick={() => deleteGift(id)}>Delete</Button>
		</HStack>
	);
}

export default GiftItem