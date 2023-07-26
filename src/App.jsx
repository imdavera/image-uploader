import Uploader from "./component/Uploader/Uploader";

function App() {
  const mainWrapperStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  return (
    <main style={mainWrapperStyle}>
      <Uploader />
    </main>
  );
}

export default App;
