import ImgBlock from "@/components/biography/imgBlock";
import Info from "@/components/biography/info";
import s from "@/scss/pages/biography.module.scss";

export default function Biography({ data }) {
	return (
		<section className={s.biography + ' dark'}>
			<div className="container">
				<div className={s.biographyInner}>
					<ImgBlock {...data} />
					<Info text={data.text} />
				</div>
			</div>
		</section>
	);
};

export async function getStaticProps() {
	const res = await fetch("https://6456240f5f9a4f23613bb1fe.mockapi.io/mock-data");
	const data = await res.json().then(data => data[0].biographyData);

	return {
		props: {
			data
		}
	}
}