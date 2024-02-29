import { useEffect, useRef } from "react";
import trailer from "../../assets/WerbeVideo_Lingua.mp4"
import './homepage.scss'

const HomePage = () => {
	
	const videoRef = useRef(null);

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.volume = 0.1;
		}
	}, []);

	return (
		<div className={`main-wrapper home-wrapper`}>
			<div className='video-wrapper'>
				<video controls controlsList="nodownload noremoteplayback noplaybackrate" ref={videoRef}>
					<source id="kompTrailer" src={trailer} type="video/mp4"/>
				</video>
			</div>
			<div className='info-wrapper'>
				<h2>Lingua Mortis</h2>
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat inventore illum laborum delectus, cum ex id culpa quasi magni, officiis incidunt et nesciunt numquam quaerat minus itaque iure fugit, harum dolor corporis dolore nobis? Obcaecati alias doloribus repudiandae pariatur! Suscipit maxime repudiandae quae dolor illum neque dicta repellendus vitae enim?</p>
			</div>
		</div>
	)
}

export default HomePage