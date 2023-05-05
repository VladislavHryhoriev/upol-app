import ImgBlock from "@/components/biography/imgBlock";
import Info from "@/components/biography/info";
import s from "@/styles/biography.module.scss";

export default function Biography({ data }) {
	return (
		<section className={s.biography + ' dark'}>
			<div className="container">
				<div className={s.biographyInner}>
					<ImgBlock {...data} />
					<Info text={data.text} />
				</div>
				<div className={s.borderLine}></div>
			</div>
		</section>
	);
};

export async function getStaticProps() {
	const res = await fetch("http://localhost:3000/api/biography");
	const data = await res.json();

	return {
		props: {
			data
		}
	}
}