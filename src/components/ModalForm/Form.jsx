import { 
	Button,
	FormControl, 
	Input,
	Stack, 
} from "@chakra-ui/react";

const Form = ({ handleSubmit, handleInputChange, gift }) => {

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
					defaultValue={gift.description}
				/>
			</FormControl>
			<FormControl>
				<Input
					name="addressee"
					type="text"
					onChange={handleInputChange}
					placeholder="Para Jorge"
					variant="filled"
					defaultValue={gift.addressee}
				/>
			</FormControl>
			<FormControl>
				<Input
					name="imageUrl"
					type="text"
					onChange={handleInputChange}
					placeholder="https://image.com"
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