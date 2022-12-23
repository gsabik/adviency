import { useState, useContext } from "react";
import { GiftsContext } from "../../context/GiftContext";
import { 
	Button, 
	IconButton, 
	Modal, 
	ModalBody, 
	ModalContent, 
	ModalHeader, 
	ModalOverlay, 
	useDisclosure 
} from "@chakra-ui/react";
import { CopyIcon, EditIcon } from "@chakra-ui/icons";
import { v4 as uuid } from "uuid";
import { RANDOM_GIFTS } from "../../utils/utils";
import Form from "./Form";

const AddGiftModal = () => {
	const [gift, setGift] = useState({
		description: "",
		price: 0,
		addressee: "",
		quantity: 1,
		imageUrl: "", 
		id: ""
	});

	const { isOpen, onOpen, onClose } = useDisclosure();
	
	const { addGift } = useContext(GiftsContext);
	
	const generateRandomGift = () => {
		const randomIndex = Math.floor(Math.random() * RANDOM_GIFTS.length);
		const randomGift = RANDOM_GIFTS[randomIndex];

		setGift({
			...gift,
			description: randomGift
		});
	}

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
			price: 0,
			imageUrl: "",
			quantity: 1,
			id: ""
		});
	}

	return (
		<>
			<Button
				colorScheme="green"
				onClick={onOpen}
				w="full"
			>Agregar regalo
			</Button>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
				isCentered
			>
				<ModalOverlay/>
				<ModalContent pb={4}>
					<ModalHeader>Agregar regalo</ModalHeader>
					<ModalBody>
						<Form
							handleSubmit={handleSubmit}
							handleInputChange={handleInputChange} 
							generateRandomGift={generateRandomGift}
							gift={gift}
						/>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}

const EditGiftModal = ({ gift }) => {
	const [editGift, setEditGift] = useState({
		description: gift.description,
		price: gift.price,
		addressee: gift.addressee,
		quantity: gift.quantity,
		imageUrl: gift.imageUrl, 
		id: gift.id
	});

	const { isOpen, onOpen, onClose } = useDisclosure();

	const { updateGift } = useContext(GiftsContext);

	const handleInputChange = (e) => {
		e.preventDefault();

		setEditGift({
			...editGift,
			[e.target.name]: e.target.value
		});
	}

	const handleSubmit = () => {
		updateGift(gift.id, editGift);
	}

	return (
		<>
			<IconButton
				icon={<EditIcon/>}
				onClick={onOpen}
			/>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
				isCentered
			>
				<ModalOverlay/>
				<ModalContent pb={4}>
					<ModalHeader>Editar regalo</ModalHeader>
					<ModalBody>
						<Form
							handleSubmit={handleSubmit}
							handleInputChange={handleInputChange} 
							gift={gift}
						/>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}

const DuplicateGiftModal = ({ gift }) => {
	const [duplicateGift, setDuplicateGift] = useState({
		description: gift.description,
		price: gift.price,
		addressee: gift.addressee,
		quantity: gift.quantity,
		imageUrl: gift.imageUrl, 
		id: ""
	});

	const { isOpen, onOpen, onClose } = useDisclosure();

	const { addGift } = useContext(GiftsContext);

	const handleInputChange = (e) => {
		setDuplicateGift({
			...duplicateGift, 
			[e.target.name]: e.target.value
		});
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		
		addGift({
			...duplicateGift,
			id: uuid()
		});

		onClose();
		
		setDuplicateGift({
			description: "",
			price: 0,
			imageUrl: "",
			quantity: 1,
			id: ""
		});
	}

	return (
		<>
			<IconButton
				icon={<CopyIcon/>}
				onClick={onOpen}
			/>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
				isCentered
			>
				<ModalOverlay/>
				<ModalContent pb={4}>
					<ModalHeader>Duplicar regalo</ModalHeader>
					<ModalBody>
						<Form
							handleSubmit={handleSubmit}
							handleInputChange={handleInputChange} 
							gift={gift}
						/>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}

export { AddGiftModal, EditGiftModal, DuplicateGiftModal };