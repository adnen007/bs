const YearSelect = ({ start, onChange }) => {
  const generateYears = (startYear, endYear) => {
    let years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    return years;
  };

  const yearOptions = generateYears(start, new Date().getFullYear());

  return (
    <select onChange={onChange} defaultValue={new Date().getFullYear()}>
      <option value="" disabled>
        Select a year
      </option>
      {yearOptions.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
};

export default YearSelect;
