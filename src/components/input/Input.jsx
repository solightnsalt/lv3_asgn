import React from "react";
import { useState } from "react";
import * as S from "./style";
import { Button } from "../modal/style";

function Input() {
	// State
	const [user, setUser] = useState({
		name: "",
		price: "",
	});

	const { name, price } = user;

	const onChangeHandler = (event) => {
		const { name, value } = event.target;
		if (name === "price") {
			const numOnly = value.replace(/[^0-9]/g, "");
			let commaseparatedNum = numOnly.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

			setUser({
				...user,
				[name]: commaseparatedNum,
			});
		} else {
			setUser({
				...user,
				[name]: value,
			});
		}
	};

	const onClickHandler = (e) => {
		e.preventDefault();
		user.name !== ""
			? alert(`이름: ${name} 가격: ${price.replace(/,/g, "")}`)
			: alert(`값을 모두 입력하세요`);
	};
	return (
		<>
			<h1>input</h1>
			<S.Form onSubmit={onClickHandler}>
				<label>이름</label>
				<input type="text" name="name" value={user.name} onChange={onChangeHandler} />
				<label>가격</label>
				<input
					type="text"
					name="price"
					value={user.price}
					onChange={onChangeHandler}
					placeholder="0"
				/>
				<Button type="submit">저장</Button>
			</S.Form>
		</>
	);
}

export default Input;
