import { useParams } from "react-router-dom";

export function Book() {
	const { id } = useParams();
	return (
		<>
			<h1 style={{ fontSize: 50 }}>Book {id}</h1>

			<p style={{ fontFamily: "Courier New", fontSize: 30, paddingTop: 20 }}>
				{generateQuote()}
			</p>
		</>
	);
}
const quotes = [
	"The best way to predict the future is to invent it. - Alan Kay",
	"It always seems impossible until it's done. - Nelson Mandela",
	"Believe you can and you're halfway there. - Theodore Roosevelt",
	"Strive not to be a success, but rather to be of value. - Albert Einstein",
	"The only way to do great work is to love what you do. - Steve Jobs",
	"You miss 100% of the shots you don't take. - Wayne Gretzky",
	"I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
	"If you want to lift yourself up, lift up someone else. - Booker T. Washington",
	"Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
	"The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
	"hi this is just a test",
];

function generateQuote() {
	const randomIndex = Math.floor(Math.random() * quotes.length);
	return quotes[randomIndex];
}

export default generateQuote;
