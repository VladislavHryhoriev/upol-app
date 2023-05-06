import s from "@/scss/pages/my-portfolio.module.scss";
import Card from "../components/my-portfolio/card";

export default function MyPorftfolio({ data }) {
	return (
		<section className={s.myPotrfolio}>
			<div className="container">
				<h3 className="section-title">My Portfolio</h3>
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
	const data = await res.json().then(data => data[0].myPortfolioData);

	return {
		props: {
			data
		}
	}
}