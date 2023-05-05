import s from "@/styles/experience.module.scss";

const Card = ({ date, schedule, title, description }) => {
	const condition = schedule == "Full Time" ? s.schedule : `${s.schedule} ${s.dark}`

	return (
		<article className={s.card + ' dark'}>
			<div className={s.time}>
				<span className={s.date}>{date}</span>
				<p className={condition}>{schedule}</p>
			</div>
			<div className={s.description}>
				<h3 className={s.title + ' title-size'}>{title}</h3>
				<p className={s.text}>{description}</p>
			</div>
		</article>
	);
};

export default Card;