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
						name="description"
						type="text"
						onChange={handleInputChange}
						placeholder="Descripción"
						variant="filled"
						defaultValue={gift.description}
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
			<FormControl>
				<Input
					name="price"
					type="number"
					onChange={handleInputChange}
					placeholder="Precio"
					variant="filled"
					defaultValue={gift.price}
				/>
			</FormControl>
			<FormControl>
				<Input
					name="addressee"
					type="text"
					onChange={handleInputChange}
					placeholder="Destinatario"
					variant="filled"
					defaultValue={gift.addressee}
				/>
			</FormControl>
			<FormControl>
				<Input
					name="imageUrl"
					type="text"
					onChange={handleInputChange}
					placeholder="Imagen"
					variant="filled"
					defaultValue={gift.imageUrl}
				/>
			</FormControl>
			<FormControl>
				<Input
					name="quantity"
					type="number"
					onChange={handleInputChange}
					variant="filled"
					defaultValue={gift.quantity}
				/>
			</FormControl>
			<Button
				colorScheme="green"
				type="submit"
			>Agregar</Button>
		</Stack>
	);	
}

export default Form