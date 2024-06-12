const Dropdown = ({ text, options, selectedOption, onOptionChange }) => {

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    onOptionChange(selectedValue);
  };

  return (
    <div className="flex justify-between">
      <div>
        <select
          value={selectedOption}
          onChange={handleSelectChange}
          className="p-2 border rounded-md"
        >
          <option key={'texto'} value={''}>{text}</option>
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
