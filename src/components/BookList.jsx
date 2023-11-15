import { Link } from "react-router-dom";

export function BookList() {
	return (
		<>
			<h1
				className="v"
				style={{ fontWeight: "bold", fontSize: 50, padding: "1rem" }}>
				Book List Numbers
			</h1>

			<Link to="/books/1">
				<h1 style={{ fontSize: 50 }}>Book 1</h1>
			</Link>
			<Link to="/books/2">
				<h1 style={{ fontSize: 50 }}>Book 2</h1>
			</Link>
		</>
	);
}
