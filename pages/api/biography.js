import { biographyData } from "@/lib/biography";

export default function handler(req, res) {
	res.status(200).json(biographyData)
}