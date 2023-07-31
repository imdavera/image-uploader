import Home from './view/Home';

function App() {
  const mainWrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  return (
    <main style={mainWrapperStyle}>
      <Home />
    </main>
  );
}

export default App;
