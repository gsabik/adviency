import { useContext, useState } from "react";
import { GiftsContext } from "../context/GiftContext";
import { 
	Button,
	FormControl, 
	Input, 
	Stack 
} from "@chakra-ui/react";
import { v4 as uuid } from "uuid";


const GiftInputs = () => {
	const [gift, setGift] = useState({
		description: "",
		imageUrl: "", 
		quantity: 1,
		id: ""
	});

	const { addGift, deleteAllGifts } = useContext(GiftsContext);

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
		
		setGift({
			description: "",
			imageUrl: "",
			quantity: 1,
			id: ""
		});
	}

	return (
		<Stack as="form" onSubmit={handleSubmit}>
			<FormControl>
				<Input
					name="description"
					type="text"
					onChange={handleInputChange}
					variant="filled"
					value={gift.description}
				/>
			</FormControl>
			<FormControl>
				<Input
					name="imageUrl"
					type="text"
					onChange={handleInputChange}
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
			<Button type="submit">Agregar</Button>
			<Button onClick={()=>deleteAllGifts()}>Borrar todos</Button>
		</Stack>
	);	
}

export default GiftInputs