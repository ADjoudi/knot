import "../assets/css/SettingsWindow.css";

function SettingsWindow({ closeSettingsWindow }) {
  return (
    <div
      id="windowContainer"
      className="window-container"
      onClick={closeSettingsWindow}
    >
      <div className="settings-container"></div>
    </div>
  );
}

export default SettingsWindow;
