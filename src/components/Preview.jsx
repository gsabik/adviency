import { 
	Avatar,
	Button, 
	HStack, 
	ListItem, 
	Modal, 
	ModalBody, 
	ModalContent, 
	ModalFooter, 
	ModalHeader, 
	ModalOverlay,
	Text,
	UnorderedList,
	useDisclosure,
	VStack
} from "@chakra-ui/react";
import { useContext } from "react";
import { GiftsContext } from "../context/GiftContext";

const Preview = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const { gifts } = useContext(GiftsContext);

	return (
		<>
			<Button
				onClick={onOpen}
				w="full"
			>Previsualizar
			</Button>
			<Modal
				isOpen={isOpen}
				isCentered
				onClose={onClose}
			>
				<ModalOverlay/>
				<ModalContent>
					<ModalHeader>Comprar</ModalHeader>
					<ModalBody>
						<UnorderedList listStyleType="none" w="full">
							{
								gifts.map(({ id, description, imageUrl, addressee, quantity }) => (
									<ListItem key={id} w="full">
										<HStack>
											<Avatar
												src={imageUrl}
											/>
											<VStack alignItems="flex-start" spacing={0}>
												<Text fontWeight="semibold" fontSize="lg">{description} ({quantity})</Text>
												<Text>{addressee}</Text>
											</VStack>
										</HStack>
									</ListItem>
								))
							}
						</UnorderedList>
					</ModalBody>
					<ModalFooter>
						<Button 
							colorScheme="green" 
							onClick={() => window.print()}
						>Imprimir
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>		
		</>
	);
}

export default Preview