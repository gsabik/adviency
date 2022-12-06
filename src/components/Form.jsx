import { useContext, useState } from "react";
import { GiftsContext } from "../context/GiftContext";
import { 
	Button,
	FormControl, 
	Input,
	Stack, 
} from "@chakra-ui/react";
import { v4 as uuid } from "uuid";

const Form = ({ onClose }) => {
	const [gift, setGift] = useState({
		description: "",
		addressee: "",
		quantity: 1,
		imageUrl: "", 
		id: ""
	});

	const { addGift } = useContext(GiftsContext);

	const handleInputChange = (e) => {
		setGift({
			...gift, 
			[e.target.name]: e.target.value
		});
	}
	
	const handleSubmit = (e) => {
		e.preventDefault();

		addGift({
			...gift,
			id: uuid()
		});

		// onClose from useDisclosure
		onClose();

		setGift({
			description: "",
			imageUrl: "",
			quantity: 1,
			id: ""
		});
	}

	return (
		<Stack 
			as="form" 
			onSubmit={handleSubmit}
			w="full"
		>
			<FormControl isRequired>
				<Input
					name="description"
					type="text"
					onChange={handleInputChange}
					placeholder="Descripción"
					variant="filled"
					value={gift.description}
				/>
			</FormControl>
			<FormControl>
				<Input
					name="addressee"
					type="text"
					onChange={handleInputChange}
					placeholder="Para Jorge"
					variant="filled"
					value={gift.addressee}
				/>
			</FormControl>
			<FormControl>
				<Input
					name="imageUrl"
					type="text"
					onChange={handleInputChange}
					placeholder="https://image.com"
					variant="filled"
					value={gift.imageUrl}
				/>
			</FormControl>
			<FormControl>
				<Input
					name="quantity"
					type="number"
					onChange={handleInputChange}
					variant="filled"
					value={gift.quantity}
				/>
			</FormControl>
			<Button
				// disabled={gift.description === ""} 
				colorScheme="green"
				type="submit"
			>Agregar</Button>
		</Stack>
	);	
}

export default Form