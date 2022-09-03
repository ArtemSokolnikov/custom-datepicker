import { useMonth } from "@datepicker-react/hooks";
import Day from "./Day";
import style from '../modules/month.module.css';

function Month({ year, month, firstDayOfWeek }) {
  const { days, weekdayLabels, monthLabel } = useMonth({
    year,
    month,
    firstDayOfWeek
  });

  return (
    <div>
      <div className={style.monthLabel}>
        <strong>{monthLabel}</strong>
      </div>
      <div
        className={style.weekdayLabel}
      >
        {weekdayLabels.map(dayLabel => (
          <div className={style.dayLabel} key={dayLabel}>
            {dayLabel}
          </div>
        ))}
      </div>
      <div
        className={style.days}
      >
        {days.map((day, index) => {
          if (typeof day === "object") {
            return (
              <Day
                date={day.date}
                key={day.date.toString()}
                dayLabel={day.dayLabel}
              />
            );
          }
          return <div key={index} />;
        })}
      </div>
    </div>
  );
}

export default Month;
