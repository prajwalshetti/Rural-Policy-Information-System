import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router';

const Main = styled.main`
	padding: 4rem 4.8rem 6.4rem;
	background-color: var(--color-grey-50);
	overflow: scroll;
`;

const StyledAppLayout = styled.div`
	display: grid;
	grid-template-columns: 26rem 1fr;
	grid-template-rows: auto 1fr;
	height: 100vh;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3.2rem;
	max-width: 120rem;
	margin: 0 auto;
`;

export default function AppLayout() {
	return (
		<StyledAppLayout>
			<Header />
			<Sidebar />
			<Main>
				<Container>
					<Outlet />
				</Container>
			</Main>
		</StyledAppLayout>
	);
}
