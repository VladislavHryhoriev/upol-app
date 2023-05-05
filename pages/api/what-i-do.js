import { whatIDoData } from "@/lib/what-i-do";

export default function handler(req, res) {
	res.status(200).json(whatIDoData)
}