import React, { useEffect } from "react";
import styles from "./Greeting.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchNewGreeting } from "../../store/action";

const Greeting = () => {
  const greeting = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNewGreeting());
  } ,[]);

  return (
    <div className={styles.Greeting}>
      <h2>{ greeting } </h2>
    </div>  
  );
};

export default Greeting;
