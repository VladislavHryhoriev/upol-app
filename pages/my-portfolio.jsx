import s from "@/styles/my-portfolio.module.scss";
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
	const res = await fetch("http://localhost:3000/api/my-portfolio");
	const data = await res.json();

	return {
		props: {
			data
		}
	}
}