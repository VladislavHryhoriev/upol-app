import { myPortfolioData } from "@/lib/my-portfolio";

export default function handler(req, res) {
	res.status(200).json(myPortfolioData)
}