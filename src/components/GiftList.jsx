import { useContext } from "react";
import { GiftsContext } from "../context/GiftContext";
import { UnorderedList } from "@chakra-ui/react";
import GiftItem from "./GiftListItem";

const GiftList = () => {
	const { gifts } = useContext(GiftsContext);

	return (
		<UnorderedList 
			spacing={4}
			w="full"
		>
			{
				gifts.map(gift => (
					<GiftItem
						key={gift.id}
						gift={gift}
					/>
				))
			}
		</UnorderedList>
	);
}

export default GiftList