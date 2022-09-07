import { useMonth } from "@datepicker-react/hooks";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Button, FormControl, InputLabel, NativeSelect } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import style from '../modules/month.module.css';
import datepickerContext from "./datepickerContext";
import Day from "./Day";

function Month({ year, month, firstDayOfWeek, numberOfMonth }) {
  const { goToPreviousMonths, goToNextMonths} = useContext(datepickerContext);
  const [disabledBefore, setDisabledBefore] = useState(false);
  const [disabledNext, setDisabledNext] = useState(false);
  let nameOfCurrentMonth = new Date().getMonth();
  const { days, weekdayLabels } = useMonth({
    year,
    month,
    firstDayOfWeek
  });

  useEffect(() => {
    if (Number(numberOfMonth)===Number(nameOfCurrentMonth)||Number(numberOfMonth)===Number(nameOfCurrentMonth+1)) {
      setDisabledBefore(true);
    }
    else if (Number(numberOfMonth)===6||Number(numberOfMonth)===7){
      setDisabledNext(true);
    } 
  }, [])

  return (
    <div>
      <div className={style.monthManager} >
        <Button disabled = {disabledBefore} sx={{ color: 'black',cursor: 'pointer'}}  ><NavigateBeforeIcon  onClick={goToPreviousMonths} sx={{ border: 1, borderColor: 'rgba(213, 208, 208, 0.79);', borderRadius: 1, marginTop: 3, fontSize: 30 }} /></Button>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">חודש</InputLabel>
          <NativeSelect
            defaultValue={numberOfMonth}
            inputProps={{
              name: 'age',
              id: 'uncontrolled-native',
            }}
          >
            <option value={8}>2022 ספטמבר</option>
            <option value={9}>אוקטובר 2022</option>
            <option value={10}>נובמבר 2022</option>
            <option value={11}>דצמבר 2022</option>
            <option value={0}>ינואר 2023</option>
            <option value={1}>פברואר 2023</option>
            <option value={2}>מרץ 2023</option>
            <option value={3}>אפריל 2023</option>
            <option value={4}> 2023מאי</option>
            <option value={5}>יוני 2023</option>
            <option value={6}>יולי 2023</option>
            <option value={7}>אוגוסט 2023</option>
          </NativeSelect>
        </FormControl>
        <Button disabled = {disabledNext} sx={{ color: 'black',cursor: 'pointer'}} ><NavigateNextIcon onClick={goToNextMonths} sx={{ border: 1, borderColor: 'rgba(213, 208, 208, 0.79);', borderRadius: 1, marginTop: 3, fontSize: 30 }} /></Button>
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
