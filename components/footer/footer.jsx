import Image from "next/image";
import s from "@/scss/pages/footer.module.scss";

const Footer = () => {
	return (
		<footer className={s.footer}>
			<div className="container">
				<div className={s.inner}>
					<div className={s.links}>
						<Image
							src="/media/twitter-square-brands.svg"
							className={s.icon}
							width={40}
							height={40}
							alt='icon'
						/>
						<Image
							src="/media/facebook-square-brands.svg"
							className={s.icon}
							width={40}
							height={40}
							alt='icon'
						/>
					</div>
					<p className={s.copyright}>@ Lorem ipsum dolor sit amet 2022</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;