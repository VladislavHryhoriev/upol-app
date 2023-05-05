import s from '@/styles/header.module.scss';
import Link from 'next/link';

const Menu = () => {
	return (
		<ul className={s.menu}>
			<li><Link href="/biography" className={s.link}>Biography</Link></li>
			<li><Link href="/what-i-do" className={s.link}>What I Do?</Link></li>
			<li><Link href="/awards" className={s.link}>Awards</Link></li>
			<li><Link href="/experience" className={s.link}>Experience</Link></li>
			<li><Link href="/my-portfolio" className={s.link}>My Portfolio</Link></li>
			<li><Link href="/contacts" className={s.link}>Contacts</Link></li>
		</ul>
	);
};

export default Menu;