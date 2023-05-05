import Feedback from "@/components/contacts/feedback";
import Info from "@/components/contacts/info";
import Map from "@/components/contacts/map";
import s from "@/styles/contacts.module.scss";

export default function Contacts({ data }) {
	return (
		<section className={s.contact + ' dark'}>
			<div className="container">
				<h3 className="section-title">Contact</h3>
				<div className={s.inner}>
					<Info {...data} />
					<Feedback />
				</div>
				<Map />
			</div>
		</section>
	);
};

export async function getStaticProps() {
	const res = await fetch("http://localhost:3000/api/contacts");
	const data = await res.json();

	return {
		props: {
			data
		}
	}
}