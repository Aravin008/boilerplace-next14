import styled from 'styled-components';
// import "@/styles/globals.css";

const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* color: ${({ theme }) => theme.colors.primary}; */
`;

const Home = () => (
  <Welcome>
    <h1>Welcome to My Next.js App!</h1>
    <p>This is a custom Next.js setup with Express, SSR, and styled-components.</p>
  </Welcome>
);

export default Home;
