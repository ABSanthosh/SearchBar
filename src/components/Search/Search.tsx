import { useState } from "react";
import "./Search.scss";

function Search({
  options,
}: {
  options: {
    title: string;
    value: string;
  }[];
}) {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const [localSearchOptions, setLocalSearchOptions] = useState<typeof options>(
    []
  );

  return (
    <div className="Search">
      <input
        type="text"
        placeholder="Search"
        className="FancyInput"
        onFocus={() => setIsOptionsOpen(true)}
        onBlur={() => setIsOptionsOpen(false)}
        onChange={(e) => {
          const value = e.target.value;
          const newOptions = options.filter((option) =>
            option.title.toLowerCase().includes(value.toLowerCase())
          );
          setLocalSearchOptions(newOptions);
        }}
      />
      {isOptionsOpen && (
        <ul className="Search__OptionBox">
          {localSearchOptions.length === 0 && (
            <li className="Search__OptionBox--item">No results found</li>
          )}
          {localSearchOptions.map((option) => (
            <li className="Search__OptionBox--item">{option.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
