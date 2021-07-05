import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useEffect } from "react";

const Card = () => {
  let dispatch = useDispatch();
  let state = useSelector((state) => state);
  const updateData = () => {
    axios
      .get(`https://api.covidtracking.com/v1/states/current.json`)
      .then((data) => {
        const res = data.data;
        dispatch({ type: "updatecoviddata", Data: res });
      });
  };
  useEffect(updateData, []);
  return (
    <>
      <h2 className="mainheading">Covid Cases Counter</h2>
      <div className="mainback">
        {state.covidData.map((v, i) => {
          return (
            <>
              <div className="maindiv">
                <h2 className="heading">
                  Covid Case in <b>{v.state}</b>
                </h2>
                <p className="date">Last Updated Date {v.checkTimeEt}</p>
                <button type="button" class="m-2 btn btn-danger btn-sm">
                  Total Deaths = {v.death}
                </button>

                <button type="button" class="m-2 btn btn-warning btn-sm">
                  Total Positve = {v.positive}
                </button>

                <button type="button" class="m-2 btn btn-dark btn-sm">
                  Total Cases = {v.total}
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
    // </div>
  );
};
export default Card;
