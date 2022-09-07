
import { useDay } from "@datepicker-react/hooks";
import { useEffect, useState } from "react";
import { useContext, useRef } from "react";
import style from '../modules/day.module.css';
import getColor from "../utils/getColor";
import DatepickerContext from "./datepickerContext";

function Day({ dayLabel, date }) {
  const [isBtn, setIsBtn] = useState(false);
  const dayRef = useRef(null);
  const {
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateSelect,
    onDateFocus,
    onDateHover, numberOfCurrentDay} = useContext(DatepickerContext);
  useEffect(() => {
    if (dayLabel > numberOfCurrentDay) {
      setIsBtn(true);
    }
  }, [dayLabel])
  const {
    isSelected,
    isSelectedStartOrEnd,
    isWithinHoverRange,
    disabledDate,
    onClick,
    onKeyDown,
    onMouseEnter,
    tabIndex
  } = useDay({
    date,
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateFocus,
    onDateSelect,
    onDateHover,
    dayRef
  });

  if (!dayLabel) {
    return <div />;
  }

  const getColorFn = getColor(
    isSelected,
    isSelectedStartOrEnd,
    isWithinHoverRange,
    disabledDate
  );

  const handleCheckDate = () => {
    onClick();
    // minBookingDate(true);
  };
  switch (getColorFn) {
    case 'selectedFirstOrLastColor':
      return (
        <button
          className={style.dayLabelSelectedFirstOrLastColor}
          onClick={handleCheckDate}
          onKeyDown={onKeyDown}
          onMouseEnter={onMouseEnter}
          tabIndex={tabIndex}
          type="button"
          ref={dayRef}
          disabled={isBtn}
        >
          {dayLabel}
        </button>
      )
    case 'normalColor':
      return (
        <button
          className={style.dayLabelNormalColor}
          onClick={handleCheckDate}
          onKeyDown={onKeyDown}
          onMouseEnter={onMouseEnter}
          tabIndex={tabIndex}
          type="button"
          ref={dayRef}
          disabled={isBtn}
        >
          {dayLabel}
        </button>
      )
    case 'selectedColor':
      return (
        <button
          className={style.dayLabelSelectedColor}
          onClick={handleCheckDate}
          onKeyDown={onKeyDown}
          onMouseEnter={onMouseEnter}
          tabIndex={tabIndex}
          type="button"
          ref={dayRef}
          disabled={isBtn}
        >
          {dayLabel}
        </button>
      )
    case 'rangeHoverColor':
      return (
        <button
          className={style.dayLabelRangeHoverColor}
          onClick={handleCheckDate}
          onKeyDown={onKeyDown}
          onMouseEnter={onMouseEnter}
          tabIndex={tabIndex}
          type="button"
          ref={dayRef}
          disabled={isBtn}
        >
          {dayLabel}
        </button>
      )
    case 'disabledColor':
      return (
        <button
          className={style.dayLabelDisabledColor}
          onClick={handleCheckDate}
          onKeyDown={onKeyDown}
          onMouseEnter={onMouseEnter}
          tabIndex={tabIndex}
          type="button"
          ref={dayRef}
          disabled={isBtn}
        >
          {dayLabel}
        </button>
      )
    default:
      return (
        <button
          className={style.dayLabelDisabledColor}
          onClick={handleCheckDate}
          onKeyDown={onKeyDown}
          onMouseEnter={onMouseEnter}
          tabIndex={tabIndex}
          type="button"
          ref={dayRef}
          disabled={isBtn}
        >
          {dayLabel}
        </button>
      )
  }
}

export default Day;