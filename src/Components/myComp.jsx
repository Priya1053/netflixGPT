import { useEffect, useState } from 'react';

const StopWatch = () => {
  const [Second, setSecond] = useState(0);
  const [Minute, setMinute] = useState(0);
  const [Hour, setHour] = useState(0);
  const [stopId, setStopId] = useState();
  const [History, setHistory] = useState([0, 0]);

  useEffect(() => {
    if (Second == 60) {
      setMinute((min) => min + 1);
      setSecond(0);
      setSecond((sec) => sec + 1);
    } else if (Minute == 60) {
      setHour((h) => h + 1);
      setMinute(0);
    }
  }, [Second, Minute]);

  // useEffect(() => {}, [Minute]);

  function handleStart() {
    let id = setInterval(() => {
      setSecond((sec) => sec + 1);
    }, 10);
    setStopId(id);
  }

  function handleStop() {
    console.log(Minute, Second);
    setHistory(([Minute, Second]) => Minute, Second);
    //setHistory((second) => second);
    console.log(History);
    clearInterval(stopId);
  }

  return (
    <>
      {Hour} : {Minute} : {Second}
      <br />
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <br />
      {/* {History.map((time, id) => {
        <label key={id}>{time.Minute}</label>;
      })} */}
    </>
  );
};
export default StopWatch;
