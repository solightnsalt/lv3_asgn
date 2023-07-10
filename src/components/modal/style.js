import { styled } from "styled-components";

export const Section = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Wrapper = styled.div`
	display: flex;
	gap: 10px;
`;

export const ModalBtn = styled.button`
	width: ${(props) => props.width || "100px"};
	height: ${(props) => props.height || "40px"};
	border: ${(props) => props.border || "none"};
	border-radius: 8px;
	color: ${(props) => props.fontColor || "rgb(0, 0, 0)"};
	background-color: ${(props) => props.bgColor || "rgb(85, 239, 196)"};
	cursor: pointer;
`;

export const Container = styled.div`
	display: flex;
	position: fixed;
	top: 0;
	width: 100vw;
	height: 100vh;
	align-items: center;
	background-color: rgb(221, 221, 221, 0.6);
`;

export const Modal = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: ${(props) => props.width || "500px"};
	height: ${(props) => props.height || "300px"};
	margin: 0 auto;
	padding: 24px;
	box-sizing: border-box;
	border-radius: 12px;
	background-color: rgb(255, 255, 255);
	position: relative;
`;

export const Buttons = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 10px;
`;

export const Button = styled.button`
	width: 100px;
	height: 40px;
	border: none;
	border-radius: 8px;
	color: ${(props) => props.fontColor || "rgb(0, 0, 0)"};
	background-color: ${(props) => props.bgColor || "rgb(85, 239, 196)"};
`;

export const CloseBtn = styled.button`
	width: 50px;
	height: 50px;
	position: absolute;
	right: 5%;
	top: 5%;
	border-radius: 50%;
	border: none;
	background: none;
	cursor: pointer;
`;
