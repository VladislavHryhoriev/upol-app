import s from '@/scss/pages/header.module.scss';
import Image from 'next/image';
import Menu from './menu';
import TitleBlock from './titleBlock';

const Header = () => {
	return (
		<header className={s.header}>
			<div className="container">
				<div className={s.profileBox}>
					<div>
						<TitleBlock />
						<nav>
							<Menu />
						</nav>
					</div>
					<Image
						src="/media/avatar.svg"
						className={s.avatar}
						width={400}
						height={400}
						alt='avatar'
						priority
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;