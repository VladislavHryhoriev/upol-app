import s from '@/scss/pages/header.module.scss'

const TitleBlock = () => {
	return (
		<div className={s.titleBlock}>
			<p className={s.preTitle}>Hello, My name is</p>
			<h1 className={s.nameBig}>Alex Smith</h1>
			<span className={s.postTitle}>Full-Stack Developer</span>
			<p className={s.titleDescription}>
				I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.
			</p>
		</div>
	);
};

export default TitleBlock;