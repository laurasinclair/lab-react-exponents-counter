const Exponent = ({ num, exponent }) => (
	<div className="exponent-counter-container">
		<p className="exponent-label">
			{num}
			<sup>
				<small>{exponent}</small>
			</sup>
		</p>
		<p className="exponent-result">
        {num}
			{Array.apply(null, { length: exponent - 1 }).map(() => (
                ` * ${num}`
			))} 
            <span> = </span>

			<span className="total">{num * exponent}</span>
		</p>
	</div>
)

export default Exponent
