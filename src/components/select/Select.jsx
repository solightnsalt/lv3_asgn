import React, { useState } from "react";
import * as S from "./style";

function Select() {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState("리액트");

	const skills = ["리액트", "자바", "스프링", "리엑트네이티브"];

	const selectHandler = (e) => {
		const { innerText } = e.target;
		setSelectedOption(innerText);
	};
	return (
		<S.Container>
			<h1>select</h1>
			<S.SltContainer>
				<S.SelectWrapper onClick={() => setIsOpen((prev) => !prev)}>
					<S.Label>{selectedOption}</S.Label>
					<S.SelectOptions open={isOpen}>
						{skills.map((skill) => (
							<S.Option key={skill} onClick={selectHandler}>
								{skill}
							</S.Option>
						))}
					</S.SelectOptions>
				</S.SelectWrapper>
			</S.SltContainer>
		</S.Container>
	);
}

export default Select;
