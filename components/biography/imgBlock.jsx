import s from "@/styles/biography.module.scss";
import Image from 'next/image';

const ImgBlock = ({ avatarURL, username, position }) => {
	return (
		<div className={s.imgBlock}>
			<div className={s.imageWrapper}>
				<Image
					src={avatarURL}
					className={s.avatar}
					width={250}
					height={250}
					alt='avatar'
				/>
			</div>
			<h2 className={s.name}>{username}</h2>
			<p className={s.postTitle}>{position}</p>
		</div>
	);
};

export default ImgBlock;