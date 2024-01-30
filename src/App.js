import { clsx } from "clsx";
import { useEffect, useRef, useState } from "react";
import { createStore } from "redux";
import { rootReducer } from "./redux/rootReducer";
import { asyncInc, decrement, increment } from "./redux/actionst";

function App() {
	// const [state, setState] = useState(0);

	const [isTheme, setIsTheme] = useState(false);

	const store = createStore(rootReducer, 0);
	console.log("render");

	const counter = useRef(null);

	useEffect(() => {
		console.log("render1");
		counter.current.textContent = store.getState();
	});

	store.subscribe(() => {
		console.log("render1");
		counter.current.textContent = store.getState();
	});

	function asyncHandle() {
		store.dispatch(asyncInc());
	}

	return (
		<div className={clsx("body", isTheme && "dark")}>
			<div className="container pt-5">
				<h1 className="heading">
					<span>Redux</span>
					<button
						onClick={() => setIsTheme(p => !p)}
						className="btn btn-info"
						id="theme"
					>
						Сменить тему
					</button>
				</h1>

				<hr />

				<div className="card">
					<div className="card-body">
						<h5 className="card-title">
							Счетчик: <span ref={counter} id="counter"></span>
						</h5>
						<button
							onClick={() => store.dispatch(increment())}
							className="btn btn-primary"
							id="add"
						>
							Добавить
						</button>
						<button
							onClick={() => store.dispatch(decrement())}
							className="btn btn-danger"
							id="sub"
						>
							Убрать
						</button>
						<button
							onClick={asyncHandle}
							className="btn btn-success"
							id="async"
						>
							Async
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
