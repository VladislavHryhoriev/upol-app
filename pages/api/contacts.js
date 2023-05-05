import { contactsData } from "@/lib/contacts";

export default function handler(req, res) {
	res.status(200).json(contactsData)
}