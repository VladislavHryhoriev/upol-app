import Feedback from "@/components/contacts/feedback";
import Info from "@/components/contacts/info";
import Map from "@/components/contacts/map";
import s from "@/scss/pages/contacts.module.scss";

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
	const res = await fetch("https://6456240f5f9a4f23613bb1fe.mockapi.io/mock-data");
	const data = await res.json().then(data => data[0].contactsData);

	return {
		props: {
			data
		}
	}
}