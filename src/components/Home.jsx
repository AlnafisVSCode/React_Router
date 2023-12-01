import { useState } from "react";

export function Home() {
	const [randomNumber, setRandomNumber] = useState(0);
	const [randomQuote, setRandomQuote] = useState("");

	const generateRandomNumber = () => {
		const number = Math.floor(Math.random() * 100) + 1;
		setRandomNumber(number);
	};

	const generateRandomQuote = () => {
		const quotes = [
			"Be the change you wish to see in the world.",
			"Strive not to be a success, but rather to be of value.",
			"You miss 100% of the shots you don’t take.",
			"Believe you can and you're halfway there.",
			"Life is 10% what happens to you and 90% how you react to it.",
			"Education is the most powerful weapon which you can use to change the world.",
			"Success is not final, failure is not fatal: It is the courage to continue that counts.",
			"Your time is limited, don't waste it living someone else's life.",
			"Imagination is more important than knowledge.",
			"If you can dream it, you can achieve it.",
		];
		const quote = quotes[Math.floor(Math.random() * quotes.length)];
		setRandomQuote(quote);
	};

	return (
		<div
			style={{
				padding: "1rem",
				backgroundColor: "#f5f5f5",
				fontFamily: "Arial",
			}}>
			<h1
				className="e"
				style={{
					fontWeight: "bold",
					fontSize: 50,
					padding: "1rem",
					color: "#007bff",
				}}>
				Home
			</h1>
			<button
				style={{
					padding: "1rem",
					backgroundColor: "#007bff",
					color: "#fff",
					border: "none",
					borderRadius: "5px",
					cursor: "pointer",
				}}
				onClick={generateRandomNumber}>
				Generate Random Number
			</button>
			<p style={{ padding: "0.5rem", color: "#333" }}>
				Random Number: {randomNumber}
			</p>
			<button
				style={{
					padding: "1rem",
					backgroundColor: "#007bff",
					color: "#fff",
					border: "none",
					borderRadius: "5px",
					cursor: "pointer",
				}}
				onClick={generateRandomQuote}>
				Generate Random Quote
			</button>
			<p style={{ padding: "0.5rem", color: "#333" }}>
				Random Quote: {randomQuote}
			</p>
		</div>
	);
}
