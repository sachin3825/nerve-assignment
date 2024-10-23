import { useMemo, useState } from "react";
import { dateArray, strategyArray } from "./data/data";
import ToggleView from "./components/ToggleView";
import DateDropDown from "./components/DateDropDown";
import StrategyCards from "./components/StrategyCards";
import "./App.css";

const App: React.FC = () => {
  const [selectedView, setSelectView] = useState<string>("Bullish");
  const [selectedDate, setSelectedDate] = useState<string>(dateArray[0]);

  const strategies = useMemo(
    () => getStrategiesForDate(selectedView, selectedDate),
    [selectedDate, selectedView]
  );

  function getStrategiesForDate(view: string, date: string) {
    const viewData = strategyArray.find((item) => item.View === view);
    const strategiesForDate = viewData?.Value as
      | { [key: string]: string[] }
      | undefined;
    return strategiesForDate?.[date] || [];
  }

  return (
    <main className="main-container">
      <ToggleView selectedView={selectedView} onChangeView={setSelectView} />
      <DateDropDown
        selectedDate={selectedDate}
        onChangeDate={setSelectedDate}
      />
      <StrategyCards strategies={strategies} selectedDate={selectedDate} />
    </main>
  );
};

export default App;
