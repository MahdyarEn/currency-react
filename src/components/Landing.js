import React, { useState, useEffect } from "react";
// API
import { getCurrency } from "../services/api";
// styles
import styles from "./Landing.module.css";
// components
import Message from "./Message";
import Currency from "./Currency";

const Landing = () => {
  const [search, setSearch] = useState("");
  const [coin, setCoin] = useState({ currency: [] });

  useEffect(() => {
    const fetchApi = async () => {
      const data = await getCurrency();
      setCoin(data);
    };
    fetchApi();
  }, []);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const searchCurrency = coin.currency.filter((item) => item.name.includes(search));

  return (
    <>
      {coin.currency.length ? <input value={search} onChange={searchHandler} type="text" className={`${styles.input} shadow`} placeholder="برای جستجو بین ارز ها، نام ارز را وارد کنید" /> : undefined}
      {coin.currency.length ? (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>عنوان ارز</th>

              <th>قیمت</th>

              <th>میزان تغییر</th>

              <th>کمترین مقدار</th>

              <th>پیشترین مقدار</th>
              <th>زمان</th>
            </tr>
          </thead>
          <tbody>
            {searchCurrency.map((currency) => (
              <Currency key={currency.id} name={currency.name} price={currency.price} change={currency.change} changeRate={currency.changeRate} least={currency.least} highest={currency.highest} time={currency.time}>
                {currency.name}
              </Currency>
            ))}
          </tbody>
        </table>
      ) : (
        <Message text="درحال دریافت اطلاعات از سرور..." />
      )}
    </>
  );
};

export default Landing;
