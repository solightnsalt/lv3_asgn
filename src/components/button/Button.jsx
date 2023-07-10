import React from "react";
import * as S from "./style";
import { FaChevronRight, FaBell } from "react-icons/fa";

function Button() {
	return (
		<>
			<h1>button</h1>
			<S.BtnContainer>
				<S.Button primary size="large">
					Large
					<FaChevronRight />
				</S.Button>
				<S.Button primary size="medium">
					Medium
				</S.Button>
				<S.Button primary size="small">
					Small
				</S.Button>
				<S.Button negative size="large">
					Large
					<FaBell />
				</S.Button>
				<S.Button negative size="medium">
					Medium
				</S.Button>
				<S.Button negative size="small">
					Small
				</S.Button>
			</S.BtnContainer>
		</>
	);
}

export default Button;
