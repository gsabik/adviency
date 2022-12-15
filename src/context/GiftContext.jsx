import { 
	createContext, 
	useEffect, 
	useState 
} from "react";

export const GiftsContext = createContext([]);

export const GiftsProvider = ({ children }) => {
	const [gifts, setGifts] = useState(() => {
		const localGifts = localStorage.getItem("gifts");
		return localGifts ? JSON.parse(localGifts) : [];
	});

	const addGift = (gift) => {
		setGifts([...gifts, gift]);
	}

	const deleteGift = (id) => {
		return setGifts(gifts.filter(gift => gift.id !== id));
	}

	const deleteAllGifts = () => {
		return setGifts([]);
	}

	const updateGift = (id, newValues) => {
		setGifts(gifts.map(gift => gift.id === id ? newValues : gift));
	}

	useEffect(() => {
		localStorage.setItem("gifts", JSON.stringify(gifts));
	}, [gifts]);

	return (
		<GiftsContext.Provider value={{
			gifts,
			addGift, 
			deleteGift,
			deleteAllGifts,
			updateGift
		}}
		>{children}
		</GiftsContext.Provider>
	);

}