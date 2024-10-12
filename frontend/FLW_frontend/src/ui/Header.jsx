import styled from 'styled-components';

const StyledHeader = styled.header`
	background-color: var(--color-grey-0);
	padding: 1.2rem 4.8rem;
	border-bottom: 1px solid var(--color-grey-100);
`;

export default function Header() {
	return (
		<StyledHeader>
			<h1 className="text-6xl p-3 text-purple-500 font-bold">Indus Sehyog</h1>
		</StyledHeader>
	);
}
