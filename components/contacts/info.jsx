import s from "@/styles/contacts.module.scss";
import Address from "./address";

const Info = ({ title, description, links }) => {
	return (
		<div className={s.info}>
			<h4 className={s.title + ' title-size'}>{title}</h4>
			<p className={s.description}>
				{description}
			</p>
			<div>
				{links.map(link => (
					<Address key={link.id} {...link} />
				))}
			</div>
		</div>
	);
};

export default Info;