import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

interface Props {
  strategies: string[];
  selectedDate: string;
}

const StrategyCards: React.FC<Props> = ({ strategies, selectedDate }) => {
  const strategyCounts = strategies.reduce(
    (acc: Record<string, number>, strategy: string) => {
      acc[strategy] = (acc[strategy] || 0) + 1;
      return acc;
    },
    {}
  );

  if (strategies.length === 0) {
    return (
      <div className="no-strategies">
        <p>No strategies available for</p>
        <p>
          <b>{selectedDate}</b>
        </p>
      </div>
    );
  }

  return (
    <div className="startegy-container">
      {Object.entries(strategyCounts).map(([strategy, count]) => (
        <div key={strategy} className="strategy-card">
          <p>
            <b>{strategy}</b>
          </p>
          <p className="grey-text">
            <FontAwesomeIcon icon={faCircle} className={"dot"} /> {count}{" "}
            {count > 1 ? "Strategies" : "Strategy"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StrategyCards;
