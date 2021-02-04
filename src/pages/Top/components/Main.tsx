import * as React from 'react';
import { useState, Dispatch, SetStateAction } from 'react';

type TimeLineData = {
  img: string,
  user: string,
  user_id: string,
  text: string,
  time_stamp: string
}

const getBodyListElms = (timeLineDataLists: Record<string, TimeLineData>[]): JSX.Element[] => {
  return timeLineDataLists.map((timeLineDataList, key) => (
    <li key={key}>
      <div>
        <div>
          <img src={timeLineDataList[key].img} alt="" />
        </div>
        <strong>
          {timeLineDataList[key].user}
          <br />
          {timeLineDataList[key].user_id}
        </strong>
      </div>
      <div>
        <p>{timeLineDataList[key].text}</p>
        <span>
          <small>{timeLineDataList[key].time_stamp}</small>
        </span>
      </div>
    </li>
  ));
};

const Main = (): JSX.Element => {
  const [update, updateState]: [number, Dispatch<SetStateAction<number>>] = useState(0);
  const stateValueUpdate = (): void => {
    if (update) {
      updateState(0);
    } else {
      updateState(1);
    }
  };
  return (
    <main>
      <ul>{getBodyListElms([])}</ul>
    </main>
  );
};

export { Main };
