import Card from "@/components/experience/card";
import s from "@/scss/pages/experience.module.scss";

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
	const res = await fetch("https://6456240f5f9a4f23613bb1fe.mockapi.io/mock-data");
	const data = await res.json().then(data => data[0].experienceData);

	return {
		props: {
			data
		}
	}
}