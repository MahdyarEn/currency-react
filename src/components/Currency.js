import React from "react";
// style
import styles from "./Currency.module.css"


const Currency = ({name,change,price,changeRate,least,highest,time}) => {
  return (
    // Rows contains currency
    <tr>
      <th>{name}</th>
      <td>{price}</td>
      <td className={change === "high" ? styles.increase : styles.decrease}>{changeRate}</td>
      <td>{least}</td>
      <td>{highest}</td>
      <td>{time}</td>
    </tr>
  );
};

export default Currency;
