import { useState } from "react";
import { useDatepicker, START_DATE } from "@datepicker-react/hooks";
import Month from "./Month";
import NavButton from "./NavButton";
import DatepickerContext from "./datepickerContext";
import style from '../modules/datepicker.module.css';
import CloseIcon from '@mui/icons-material/Close';

function Datepicker() {
  const [state, setState] = useState({
    startDate: null,
    endDate: null,
    focusedInput: START_DATE
  });
  const {
    firstDayOfWeek,
    activeMonths,
    isDateSelected,
    isDateHovered,
    isFirstOrLastSelectedDate,
    isDateBlocked,
    isDateFocused,
    focusedDate,
    onDateHover,
    onDateSelect,
    onDateFocus,
    goToPreviousMonths,
    goToNextMonths
  } = useDatepicker({
    startDate: state.startDate,
    endDate: state.endDate,
    focusedInput: state.focusedInput,
    onDatesChange: handleDateChange
  });

  function handleDateChange(data) {
    if (!data.focusedInput) {
      setState({ ...data, focusedInput: START_DATE });
    } else {
      setState(data);
    }
  }

  return (
    <DatepickerContext.Provider
      value={{
        focusedDate,
        isDateFocused,
        isDateSelected,
        isDateHovered,
        isDateBlocked,
        isFirstOrLastSelectedDate,
        onDateSelect,
        onDateFocus,
        onDateHover
      }}
    >
      <div>
        <strong>Focused input: </strong>
        {state.focusedInput}
      </div>
      <div>
        <strong>Start date: </strong>
        {state.startDate && state.startDate.toLocaleString()}
      </div>
      <div>
        <strong>End date: </strong>
        {state.endDate && state.endDate.toLocaleString()}
      </div>

      <NavButton onClick={goToPreviousMonths}>Previous</NavButton>
      <NavButton onClick={goToNextMonths}>Next</NavButton>

      <div className={style.activeMonths}>
        <div> <CloseIcon /></div>
        <div className={style.twoMonths}>
          <div className={style.lineOfMonth}></div>
          {activeMonths.map(month => (

            <Month
              key={`${month.year}-${month.month}`}
              year={month.year}
              month={month.month}
              firstDayOfWeek={firstDayOfWeek}
            />

          ))}
        </div>
      </div>
    </DatepickerContext.Provider>
  );
}

export default Datepicker;
