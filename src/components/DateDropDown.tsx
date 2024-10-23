import { useState } from "react";
import { dateArray } from "../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface Props {
  selectedDate: string;
  onChangeDate: React.Dispatch<React.SetStateAction<string>>;
}

const DateDropDown: React.FC<Props> = ({ selectedDate, onChangeDate }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDateChange = (date: string) => {
    onChangeDate(date);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-toggle" onClick={toggleDropdown}>
        <div className="dropdown-top">
          <p>{selectedDate}</p>

          <FontAwesomeIcon
            icon={faChevronDown}
            className={`arrow ${isOpen ? "rotate" : ""}`}
          />
        </div>

        {isOpen && (
          <div className="dropdown-menu">
            {dateArray.map((date) => (
              <div
                key={date}
                className={`dropdown-item ${
                  selectedDate === date ? "selected" : ""
                }`}
                onClick={() => handleDateChange(date)}
              >
                {date}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DateDropDown;
