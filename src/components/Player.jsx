import { 
	useEffect, 
	useState, 
	useRef 
} from "react";
import { IconButton } from "@chakra-ui/react";
import { BiVolumeFull, BiVolumeMute } from "react-icons/bi";
import url from "../assets/jinglebells.mp3";

const Player = () => {
	const [playing, setPlaying] = useState(false);
	const audio = useRef(new Audio(url));

	const toggle = () => setPlaying(!playing);

	useEffect(() => {
		audio.current.volume = 0.2;
	}, []);

	useEffect(() => {
		playing ? audio.current.play() : audio.current.pause();
	}, [playing]);

	return (
		<IconButton
			icon={playing ? <BiVolumeMute/> : <BiVolumeFull/>}
			onClick={toggle}
		/>
	);
}

export default Player