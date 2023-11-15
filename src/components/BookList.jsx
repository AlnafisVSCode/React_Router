import { Link } from "react-router-dom";

export function BookList() {
	return (
		<>
			<hr
				style={{
					margin: "50px 0",
					border: "none",
					borderTop: "1px solid #eee",
				}}
			/>
			<h1 className="v" style={{ fontWeight: "bold", fontSize: 50 }}>
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
