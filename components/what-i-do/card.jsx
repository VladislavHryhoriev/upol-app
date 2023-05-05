import s from "@/styles/what-i-do.module.scss";
import Image from "next/image";

const Card = ({ icon, title, description }) => {
	return (
		<article className={s.card}>
			<div className={s.svgWrapper}>
				<Image
					src={'/media/' + icon}
					className={s.icon}
					width={250}
					height={250}
					alt='avatar'
				/>
			</div>
			<h4 className={s.title + ' title-size'}>{title}</h4>
			<p className={s.description}>{description}</p>
		</article>
	);
};

export default Card;