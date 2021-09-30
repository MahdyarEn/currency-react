import React, { useState, useEffect } from "react";
// API
import { getCurrency } from "../services/api";
// styles
import styles from "./Landing.module.css";
const Landing = () => {
  const [coin, setCoin] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const data = await getCurrency();
      setCoin(data);
    };
    fetchApi();
  }, []);

  return (
    <>
      <input type="text" className={`${styles.input} shadow`} placeholder="برای جستجو بین ارز ها، نام ارز را وارد کنید"/>
      <div>{coin.currency ? coin.currency.map((currency) => <p key={currency.id}>{currency.name}</p>) : <h3>sdhfg</h3>}</div>
    </>
  );
};

export default Landing;
