import { styled } from "styled-components";

export const Container = styled.div`
	border: 2px solid gray;
	padding: 5px;
	width: 100%;
	height: 200px;
	margin-top: 20px;
	box-sizing: border-box;
`;

export const SltContainer = styled.div`
	display: flex;
`;

export const SelectWrapper = styled.div`
	position: relative;
	width: 200px;
	padding: 8px;
	border-radius: 12px;
	background-color: #ffffff;
	align-self: center;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	cursor: pointer;
	&::before {
		content: "⌵";
		position: absolute;
		top: 1px;
		right: 8px;
		color: #91cde5;
		font-size: 20px;
	}
`;

export const Label = styled.div`
	font-size: 14px;
	margin-left: 4px;
	text-align: center;
`;

export const SelectOptions = styled.ul`
	position: absolute;
	list-style: none;
	top: 22px;
	left: 0;
	width: 100%;
	overflow: hidden;
	height: 90px;
	max-height: ${(props) => (props.open ? "none" : "0")};
	padding: 0;
	border-radius: 8px;
	background-color: #91cde594;
`;

export const Option = styled.li`
	font-size: 14px;
	padding: 6px 8px;
	transition: background-color 0.2s ease-in;
	&:hover {
		background-color: #595959;
		color: #ffffff;
	}
`;
