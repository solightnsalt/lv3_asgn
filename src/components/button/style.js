import { styled, css } from "styled-components";

export const color = {
	sky: "#91cde5",
	red: "#d33b23",
	yellow: "#f4cf12",
};

export const BtnContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 10px;
	place-items: center;
`;

const getStylesBySize = (size) => {
	switch (size) {
		case "large":
			return css`
				width: 400px;
				height: 50px;
			`;
		case "medium":
			return css`
				width: 300px;
				height: 50px;
			`;
		case "small":
			return css`
				width: 200px;
				height: 50px;
			`;
		default:
			return css`
				width: 150px;
				height: 50px;
				font-size: 16px;
			`;
	}
};

export const Button = styled.button`
	padding: 10px 20px;
	border: none;
	border-radius: 4px;
	cursor: pointer;

	/* 크기에 따른 스타일 */
	${({ size }) => getStylesBySize(size)}

	/* 버튼 유형에 따른 스타일 */
	${({ primary }) =>
		primary &&
		`
    background-color: ${color.sky};
    color: ${color.red};
    `}

	${({ negative }) =>
		negative &&
		`
    background-color: ${color.red};
    color: ${color.yellow};
    `}
`;
