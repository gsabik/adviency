import { 
	Button,
	FormControl, 
	IconButton, 
	Input,
	Stack, 
	HStack
} from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";

const Form = ({ handleSubmit, handleInputChange, generateRandomGift, gift }) => {

	return (
		<Stack 
			as="form" 
			onSubmit={handleSubmit}
			w="full"
		>
			<FormControl isRequired>
				<HStack>
					<Input
						defaultValue={gift.description}
						name="description"
						onChange={handleInputChange}
						placeholder="Descripción"
						type="text"
						variant="filled"
					/>
					{
						generateRandomGift
						&&
						<IconButton
							colorScheme="green"
							icon={<RepeatIcon/>}
							onClick={generateRandomGift}
						/>
					}
				</HStack>
			</FormControl>
			<FormControl isRequired>
				<Input
					defaultValue={gift.price}
					name="price"
					onChange={handleInputChange}
					placeholder="Precio"
					type="number"
					variant="filled"
				/>
			</FormControl>
			<FormControl isRequired>
				<Input
					defaultValue={gift.addressee}
					name="addressee"
					onChange={handleInputChange}
					placeholder="Destinatario"
					type="text"
					variant="filled"
				/>
			</FormControl>
			<FormControl>
				<Input
					defaultValue={gift.imageUrl}
					name="imageUrl"
					onChange={handleInputChange}
					placeholder="Imagen"
					type="text"
					variant="filled"
				/>
			</FormControl>
			<FormControl isRequired>
				<Input
					defaultValue={gift.quantity}
					name="quantity"
					onChange={handleInputChange}
					type="number"
					variant="filled"
				/>
			</FormControl>
			<Button colorScheme="green" type="submit">Agregar</Button>
		</Stack>
	);	
}

export default Form