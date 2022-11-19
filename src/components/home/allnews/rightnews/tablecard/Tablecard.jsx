import React, {useState} from "react";
import RightIcon from "../../../svg/Vector (Stroke) (3).svg";
import tabLogo from "../../../svg/FC_Barcelona_(crest) 1.svg";

import "./Tablecard.css";

export default function Tablecard() {
    const [tabClub] = useState([
        {
            num: 12,
            val: true
        },
        {
            num: 12,
            val: false
        },
        {
            num: 12,
            val: true
        },
        {
            num: 12,
            val: false
        },
        {
            num: 12,
            val: true
        },
        {
            num: 12,
            val: false
        },
        {
            num: 12,
            val: true
        },
        {
            num: 12,
            val: false
        },
        {
            num: 12,
            val: true
        },
        {
            num: 12,
            val: false
        },
        {
            num: 12,
            val: true
        },
        {
            num: 12,
            val: false
        },
        {
            num: 12,
            val: true
        },
        {
            num: 12,
            val: false
        },
        {
            num: 12,
            val: true
        },
        {
            num: 12,
            val: false
        },
        {
            num: 12,
            val: true
        },
        {
            num: 12,
            val: false
        },
        {
            num: 12,
            val: true
        },
        {
            num: 12,
            val: false
        },
        {
            num: 12,
            val: true
        },
        {
            num: 12,
            val: false
        },
    ])
  return (
    <div className="tablePage">
      <div className="tableTitleCard">
        <h1 className="tableTitle">o‘yin jadvali</h1>
        {/* <a href="" className="tabBarchaUrl">
          Batafsil
          <img src={RightIcon} alt="" />
        </a> */}
      </div>
      {/* <div className="tableSelect">
        <select
          className="tabSelect"
          defaultValue={10}
        >
          <option value={10}>Angliya</option>
          <option value={20}>Two</option>
          <option value="">Three</option>
          <option value="">Four</option>
          <option value="">Five</option>
          <option value="">Six</option>
          <option value="">Seven</option>
          <option value="">Eight</option>
          <option value="">Nine</option>
          <option value="">Ten</option>
        </select>
        <select
          className="tabSelect"
          defaultValue={10}
        >
          <option value={10}>Primyer liga</option>
          <option value={20}>Two</option>
          <option value="">Three</option>
          <option value="">Four</option>
          <option value="">Five</option>
          <option value="">Six</option>
          <option value="">Seven</option>
          <option value="">Eight</option>
          <option value="">Nine</option>
          <option value="">Ten</option>
        </select>
        <div className="tables">
          <table>
            <thead>
                <tr>
                    <th width={40}>No.</th>
                    <th width={35}></th>
                    <th width={35}>Klub</th>
                    <th width={120}></th>
                    <th width={30}>O‘</th>
                    <th width={30}>G‘</th>
                    <th width={30}>D</th>
                    <th width={30}>M</th>
                    <th width={30}>O</th>
                </tr>
            </thead>
            <tbody>
                {
                    tabClub.map((item, id) => (
                        <tr key={id}>
                        <td width={15}>{id +1}</td>
                        <td width={25}>
                          <i class={item.val ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-up clubBuy"}></i>
                        </td>
                        <td width={30}>
                          <img src={tabLogo} alt="" />
                        </td>
                        <td width={160}>Манчестер Сити</td>
                        <td width={30}>{item.num}</td>
                        <td width={30}>36</td>
                        <td width={30}>35</td>
                        <td width={30}>10</td>
                        <td width={30}>102</td>
                      </tr>
                    ))
                }
            </tbody>
          </table>
        </div>
      </div> */}
      <h1>Tez Kunda</h1>
    </div>
  );
}
