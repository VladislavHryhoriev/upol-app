import s from "@/styles/what-i-do.module.scss";
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
	const res = await fetch("http://localhost:3000/api/what-i-do");
	const data = await res.json();

	return {
		props: {
			data
		}
	}
}