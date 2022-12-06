import { 
	Button, 
	Modal, 
	ModalBody, 
	ModalContent, 
	ModalFooter, 
	ModalHeader, 
	ModalOverlay, 
	useDisclosure
} from "@chakra-ui/react"
import Form from "./Form";

const ModalForm = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Button 
				colorScheme="green" 
				onClick={onOpen}
				w="full"
			>Agregar regalo</Button>
			<Modal 
				isOpen={isOpen} 
				onClose={onClose}
				isCentered
			>
				<ModalOverlay/>
				<ModalContent pb={4}>
					<ModalHeader>Agregar regalo</ModalHeader>
					<ModalBody>
						<Form onClose={onClose}/>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}

export default ModalForm