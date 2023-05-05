import s from "@/styles/contacts.module.scss";

const Form = () => {
	return (
		<form className={s.form}>
			<input type="text" className={s.name} placeholder="Full name" />
			<input type="text" className={s.email} placeholder="Email address" />
			<input type="text" className={s.subject} placeholder="Subject" />
			<textarea className={s.comment} placeholder="Type comment" />
			<button className={s.send}>Send Massage</button>
		</form>
	);
};

export default Form;