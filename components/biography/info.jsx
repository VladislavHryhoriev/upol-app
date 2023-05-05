import s from "@/styles/biography.module.scss";

const Info = ({ text }) => {
	return (
		<div className={s.info}>
			<h3 className="section-title">Biography</h3>
			{text.map((p, id) => (
				<p key={id} className={s.infoDescription}>{p}</p>
			))}
		</div>
	);
};

export default Info;