import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { BookList } from "./components/BookList";
import { Book } from "./components/Book";

function App() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/books">Books</Link>
					</li>
				</ul>
			</nav>

			<hr
				style={{
					margin: "50px 0",
					border: "none",
					borderTop: "1px solid #eee",
				}}
			/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/books" element={<BookList />} />
				<Route path="/books/:id" element={<Book />} />
			</Routes>
		</>
	);
}

export default App;
