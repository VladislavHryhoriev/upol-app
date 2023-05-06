import s from "@/scss/pages/contacts.module.scss";
import Image from "next/image";

const Address = ({ icon, address }) => {
	return (
		<address className={s.address}>
			<Image
				src={"/media/" + icon}
				className={s.icon}
				width={32}
				height={32}
				alt='icon'
			/>
			<h4 className={s.text}>{address}</h4>
		</address>
	);
};

export default Address;