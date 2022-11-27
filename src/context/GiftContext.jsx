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

	return (
		<GiftsContext.Provider value={{
			gifts,
			addGift, 
			deleteGift
		}}
		>{children}
		</GiftsContext.Provider>
	);

}