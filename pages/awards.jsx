import Card from "@/components/awards/card";
import s from "@/scss/pages/awards.module.scss";


export default function Awards({ data }) {
	return (
		<section className={s.awards + ' dark'}>
			<div className="container">
				<h3 className="section-title">Awards</h3>
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
	const data = await res.json().then(data => data[0].awardsData);

	return {
		props: {
			data
		}
	}
}