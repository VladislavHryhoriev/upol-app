import { awardsData } from "@/lib/awards";

export default function handler(req, res) {
	res.status(200).json(awardsData)
}