const Counter = ({ count, decrement, increment }) => {
	return (
		<div className="counter-container">
			<p className="counter-value">{count}</p>
			
      {/* <input
				type="text"
				onChange={(e) => {
					handleInput(e)
				}}
			/> */}
			{/* <input type="text" onChange={handleInput} /> */}

			<button className="counter-button" onClick={decrement}>
				-
			</button>
			<button
				className="counter-button"
				onClick={() => {
					increment()
				}}>
				+
			</button>
		</div>
	)
}

export default Counter
