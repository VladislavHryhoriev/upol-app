import s from "@/styles/my-portfolio.module.scss";
import Image from "next/image";

const Card = ({ imageURL, title, date, description }) => {
	return (
		<article className={s.card}>
			<Image
				src={imageURL}
				className={s.image}
				width={640}
				height={360}
				alt='card'
			/>
			<div className={s.textBox}>
				<h4 className={s.title + ' title-size'}>{title}</h4>
				<span className={s.date}>{date}</span>
				<p className={s.description}>{description}</p>
			</div>
		</article>
	);
};

export default Card;