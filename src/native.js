import { clsx } from 'clsx'
import { useEffect, useRef, useState } from "react";

function App() {


	const [state, setState] = useState(0);




  
	const [isTheme, setIsTheme] = useState(false);

	const counter = useRef(null);

  useEffect(()=>{
    counter.current.textContent = state;
  })

	function asyncHandle() {
		setTimeout(() => {
			setState(p => p + 1);
		}, 1000);
	}

	return (
		<div className={clsx('body',isTheme && 'dark' )}>
			<div className="container pt-5">
				<h1 className="heading">
					<span>Redux</span>
					<button onClick={()=>setIsTheme(p=>!p)}className="btn btn-info" id="theme">
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
							onClick={() => setState(p => p + 1)}
							className="btn btn-primary"
							id="add"
						>
							Добавить
						</button>
						<button
							onClick={() => setState(p => p - 1)}
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
