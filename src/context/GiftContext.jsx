import { createContext, useState } from "react";

export const GiftsContext = createContext([]);

export const GiftsProvider = ({ children }) => {
	const [gifts, setGifts] = useState([]);

	const addGift = (gift) => {
		setGifts([...gifts, gift]);
	}

	const deleteGift = (id) => {
		return setGifts(gifts.filter(gift => gift.id !== id));
	}

	const deleteAllGifts = () => {
		return setGifts([]);
	}

	return (
		<GiftsContext.Provider value={{
			gifts,
			addGift, 
			deleteGift,
			deleteAllGifts
		}}
		>{children}
		</GiftsContext.Provider>
	);

}