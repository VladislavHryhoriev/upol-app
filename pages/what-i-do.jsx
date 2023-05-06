import s from "@/scss/pages/what-i-do.module.scss";
import Card from "../components/what-i-do/card";

export default function WhatIDo({ data }) {
	return (
		<section className={s.whatIDo + ' dark'}>
			<div className="container">
				<h3 className="section-title">What I do?</h3>
				<div className={s.cards}>
					{data.map((card) => (
						<Card key={card.id} {...card} />
					))}
				</div>
			</div>
		</section>
	);
};

export async function getStaticProps() {
	const res = await fetch("https://6456240f5f9a4f23613bb1fe.mockapi.io/mock-data");
	const data = await res.json().then(data => data[0].whatIDoData);

	return {
		props: {
			data
		}
	}
}