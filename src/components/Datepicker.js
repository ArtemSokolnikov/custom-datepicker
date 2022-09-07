import { START_DATE, useDatepicker } from "@datepicker-react/hooks";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import style from '../modules/datepicker.module.css';
import DatepickerContext from "./datepickerContext";
import Month from "./Month";

function Datepicker() {
  let nameOfCurrentMonth = new Date().getMonth();
  const [currentMonth, setCurrentMonth] = useState(nameOfCurrentMonth);
  const [state, setState] = useState({
    startDate: null,
    endDate: null,
    focusedInput: START_DATE
  });
  const {
    firstDayOfWeek,
    activeMonths,
    numberOfMonths,
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
    goToNextMonths,
    onResetDates,
    minBookingDate, disabledDate
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
        onDateHover,
        onResetDates,
        goToPreviousMonths,
        goToNextMonths,
        numberOfMonths,
        minBookingDate,
        currentMonth, setCurrentMonth, disabledDate, nameOfCurrentMonth
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
      <div className={style.activeMonths}>
        <div> <CloseIcon onClick={onResetDates} sx={{ cursor: 'pointer' }} /></div>
        <div className={style.title}>
          <div>
            <strong>תאריך יציאה </strong>
          </div>
          <div>
            <strong>תאריך חזרה </strong>
          </div>
        </div>
        <div className={style.twoMonths}>
          <div className={style.lineOfMonth}></div>
          {activeMonths.map(month => (
            <Month
              key={`${month.year}-${month.month}`}
              year={month.year}
              month={month.month}
              firstDayOfWeek={firstDayOfWeek}
              numberOfMonth={`${month.month}`}
            />
          ))}
        </div>
      </div>
    </DatepickerContext.Provider>
  );
}

export default Datepicker;
