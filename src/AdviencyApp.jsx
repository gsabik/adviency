import { GiftsProvider } from "./context/GiftContext";
import AdviencyLayout from "./layouts/AdviencyLayout";

const AdviencyApp = () => {
	return (
		<GiftsProvider>
			<AdviencyLayout/>
		</GiftsProvider>
	);
}

export default AdviencyApp