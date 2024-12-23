import "./styles.css";

export default function App() {
  const onClickFull = () => {
    document.documentElement.requestFullscreen();
  };

  const onClickExit = () => {
    document.exitFullscreen();
  };

  return (
    <div className="App">
      <div className="Fullscreen">
        <button onClick={onClickFull}>Run Full Screen Frame</button>
        <button onClick={onClickExit}>Exit Full Screen Frame</button>
      </div>
      <div className="Frame"></div>
    </div>
  );
}
