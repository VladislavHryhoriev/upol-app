import { experienceData } from "@/lib/experience";

export default function handler(req, res) {
	res.status(200).json(experienceData)
}