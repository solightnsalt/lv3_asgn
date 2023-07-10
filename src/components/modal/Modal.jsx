import { useState } from "react";
import React from "react";
import * as S from "./style";

function Modal() {
	// State
	const [modalOne, setModalOne] = useState(false);
	const [modalTwo, setModalTwo] = useState(false);

	// Handler
	const toggleModalOne = () => {
		setModalOne(!modalOne);
	};
	const toggleModalTwo = () => {
		setModalTwo(!modalTwo);
	};

	return (
		<S.Section>
			<h1>modal</h1>
			<S.Wrapper>
				<S.ModalBtn onClick={toggleModalOne}>open modal</S.ModalBtn>
				{modalOne ? (
					<S.Container>
						<S.Modal>
							<p>
								닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지
								않아요.
							</p>
							<S.Buttons>
								<S.Button
									onClick={toggleModalOne}
									fontColor="rgb(214, 48, 49)"
									bgColor="rgb(250, 177, 160)">
									닫기
								</S.Button>
								<S.Button>확인</S.Button>
							</S.Buttons>
						</S.Modal>
					</S.Container>
				) : null}
				<S.ModalBtn
					onClick={toggleModalTwo}
					width="200px"
					height="50px"
					border="3px solid rgb(250, 177, 160)"
					fontColor="rgb(214, 48, 49)"
					bgColor="rgb(255, 255, 255)">
					open modal
				</S.ModalBtn>
				{modalTwo && (
					<S.Container onClick={toggleModalTwo}>
						<S.Modal
							onClick={(event) => event.stopPropagation()} // 이벤트 버블링 방지
							width="300px"
							height="200px">
							<p>
								닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지
								않아요.
							</p>
							<S.CloseBtn onClick={toggleModalTwo}>✖️</S.CloseBtn>
						</S.Modal>
					</S.Container>
				)}
			</S.Wrapper>
		</S.Section>
	);
}

export default Modal;
