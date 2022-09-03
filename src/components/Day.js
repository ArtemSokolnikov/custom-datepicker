
import { useDay } from "@datepicker-react/hooks";
import { useContext, useRef } from "react";
import getColor from "../utils/getColor";
import DatepickerContext from "./datepickerContext";
import style from '../modules/day.module.css';

function Day({ dayLabel, date }) {
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
    onDateHover
  } = useContext(DatepickerContext);
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

  switch (getColorFn) {
    case 'selectedFirstOrLastColor':
      return (
        <button
          className={style.dayLabelSelectedFirstOrLastColor}
          onClick={onClick}
          onKeyDown={onKeyDown}
          onMouseEnter={onMouseEnter}
          tabIndex={tabIndex}
          type="button"
          ref={dayRef}
        >
          {dayLabel}
        </button>
      )
    case 'normalColor':
      return (
        <button
          className={style.dayLabelNormalColor}
          onClick={onClick}
          onKeyDown={onKeyDown}
          onMouseEnter={onMouseEnter}
          tabIndex={tabIndex}
          type="button"
          ref={dayRef}
        >
          {dayLabel}
        </button>
      )
    case 'selectedColor':
      return (
        <button
          className={style.dayLabelSelectedColor}
          onClick={onClick}
          onKeyDown={onKeyDown}
          onMouseEnter={onMouseEnter}
          tabIndex={tabIndex}
          type="button"
          ref={dayRef}
        >
          {dayLabel}
        </button>
      )
    case 'rangeHoverColor':
      return (
        <button
          className={style.dayLabelRangeHoverColor}
          onClick={onClick}
          onKeyDown={onKeyDown}
          onMouseEnter={onMouseEnter}
          tabIndex={tabIndex}
          type="button"
          ref={dayRef}
        >
          {dayLabel}
        </button>
      )
    case 'disabledColor':
      return (
        <button
          className={style.dayLabelDisabledColor}
          onClick={onClick}
          onKeyDown={onKeyDown}
          onMouseEnter={onMouseEnter}
          tabIndex={tabIndex}
          type="button"
          ref={dayRef}
        >
          {dayLabel}
        </button>
      )
    default:
      return (
        <button
          className={style.dayLabelDisabledColor}
          onClick={onClick}
          onKeyDown={onKeyDown}
          onMouseEnter={onMouseEnter}
          tabIndex={tabIndex}
          type="button"
          ref={dayRef}
        >
          {dayLabel}
        </button>
      )
  }
}

export default Day;