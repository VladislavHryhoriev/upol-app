import s from "@/scss/pages/awards.module.scss";
import Image from "next/image";

const Card = ({ icon, title }) => {
	return (
		<article className={s.card}>
			<Image
				src={"/media/" + icon}
				className={s.icon}
				width={32}
				height={32}
				alt='icon'
			/>
			<p className={s.title + ' title-size'}>{title}</p>
		</article>
	);
};

export default Card;