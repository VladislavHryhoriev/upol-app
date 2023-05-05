import Card from "@/components/experience/card";
import s from "@/styles/experience.module.scss";

export default function Experience({ data }) {
	return (
		<section className={s.experience}>
			<div className="container">
				<h3 className="section-title">Experince</h3>
				<div className={s.cards}>
					{data.map(card => (
						<Card key={card.id} {...card} />
					))}
				</div>
			</div>
		</section>
	);
};

export async function getStaticProps() {
	const res = await fetch("http://localhost:3000/api/experience");
	const data = await res.json();

	return {
		props: {
			data
		}
	}
}