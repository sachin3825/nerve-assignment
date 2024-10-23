interface Props {
  selectedView: string;
  onChangeView: React.Dispatch<React.SetStateAction<string>>;
}

const VIEWS = ["Bullish", "Bearish", "RangeBound", "Volatile"];

const ToggleView: React.FC<Props> = ({ selectedView, onChangeView }) => {
  return (
    <div className="toggle-container">
      {VIEWS.map((view) => (
        <button
          key={view}
          onClick={() => onChangeView(view)}
          className={`${selectedView === view ? "select" : ""}`}
        >
          {view}
        </button>
      ))}
    </div>
  );
};

export default ToggleView;
