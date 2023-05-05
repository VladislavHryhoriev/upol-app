import Card from "@/components/awards/card";
import s from "@/styles/awards.module.scss";


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
	const res = await fetch("http://localhost:3000/api/awards");
	const data = await res.json();

	return {
		props: {
			data
		}
	}
}