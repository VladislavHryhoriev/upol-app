import s from "@/styles/contacts.module.scss";

const Map = () => {
	return (
		<div className={s.map}>
			<iframe className={s.frame}
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d646.563335389765!2d17.252855426920437!3d49.592971799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47124e8ad5edd541%3A0xb0c49f1a90ddd6c1!2sOlomouck%C3%A1%20citadela!5e0!3m2!1sru!2scz!4v1681799068386!5m2!1sru!2scz"
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"></iframe>
		</div>
	);
};

export default Map;