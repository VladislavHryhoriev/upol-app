import s from "@/styles/contacts.module.scss";
import Form from "./form";

const Feedback = () => {
	return (
		<div className={s.feedback}>
			<h4 className={s.title + ' title-size'}>Say Something</h4>
			<Form />
		</div>
	);
};

export default Feedback;