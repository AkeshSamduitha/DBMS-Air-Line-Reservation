import React, { useState } from "react";
import "../../App.css";
import "./SeatReservation.css";
import { Link } from "react-router-dom";
import { Button, Button2 } from "../Button";

export default function SeatReservation() {
  const [btnState, setBtnState] = useState(false);

  function handleClick() {
    setBtnState((btnState) => !btnState);
  }

  let toggleClass = btnState ? "selected" : "not-selected";

  return (
    <div className="reserve-box">
      <div>
        <h2>
          <center>You are almost there! Reserve your seat.</center>
        </h2>
      </div>
      <br />
      <div className="Parent">
        <div className="child1">
          <label for="adults">Adults</label>
          <br />
          <select name="adults" className="input-box" id="adults">
            <option value="default">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="child2">
          <label for="children">Children</label>
          <br />
          <select name="children" className="input-box" id="children">
            <option value="default">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
      <div>
        <label for="class">Class</label>
        <br />
        <select
          id="class"
          className="input-box"
          name="class"
          placeholder="Class"
        >
          <option value="default">Select</option>
          <option value="economy">Economy</option>
          <option value="business">Business</option>
          <option value="first-class">Platinum</option>
        </select>
      </div>
      <br />
      <div>
        <h3>Select a desired seat.</h3>
      </div>
      <div className="table_container">
        <div className="table_align">
          <table>
            <tr>
              <td>
                <Button2
                  className="booking-table"
                  buttonStyle="btn--table"
                  buttonSize="btn--table_size"
                >
                  1
                </Button2>
              </td>
              <td>
                <Button2
                  className="booking-table"
                  buttonStyle="btn--table"
                  buttonSize="btn--table_size"
                >
                  2
                </Button2>
              </td>
              <td>
                <Button2
                  className="booking-table"
                  buttonStyle="btn--table"
                  buttonSize="btn--table_size"
                >
                  3
                </Button2>
              </td>
              <td>
                <Button2
                  className="booking-table"
                  buttonStyle="btn--table"
                  buttonSize="btn--table_size"
                >
                  4
                </Button2>
              </td>
              <td>
                <Button2
                  className="booking-table"
                  buttonStyle="btn--table"
                  buttonSize="btn--table_size"
                >
                  5
                </Button2>
              </td>
            </tr>
            <tr>
              <td>
                <Button2
                  className="booking-table"
                  buttonStyle="btn--table"
                  buttonSize="btn--table_size"
                >
                  6
                </Button2>
              </td>
              <td>
                <Button2
                  className="booking-table"
                  buttonStyle="btn--table"
                  buttonSize="btn--table_size"
                >
                  7
                </Button2>
              </td>
              <td>
                <Button2
                  className="booking-table"
                  buttonStyle="btn--table"
                  buttonSize="btn--table_size"
                >
                  8
                </Button2>
              </td>
              <td>
                <Button2
                  className="booking-table"
                  buttonStyle="btn--table"
                  buttonSize="btn--table_size"
                >
                  9
                </Button2>
              </td>
              <td>
                <Button2
                  className="booking-table"
                  buttonStyle="btn--table"
                  buttonSize="btn--table_size"
                >
                  10
                </Button2>
              </td>
            </tr>
            <tr>
              <td>
                <Button2
                  className="booking-table"
                  buttonStyle="btn--table"
                  buttonSize="btn--table_size"
                >
                  11
                </Button2>
              </td>
              <td>
                <Button2
                  className="booking-table"
                  buttonStyle="btn--table"
                  buttonSize="btn--table_size"
                >
                  12
                </Button2>
              </td>
              <td>
                <Button2
                  className="booking-table"
                  buttonStyle="btn--table"
                  buttonSize="btn--table_size"
                >
                  13
                </Button2>
              </td>
              <td>
                <Button2
                  className="booking-table"
                  buttonStyle="btn--table"
                  buttonSize="btn--table_size"
                >
                  14
                </Button2>
              </td>
              <td>
                <Button2
                  className="booking-table"
                  buttonStyle="btn--table"
                  buttonSize="btn--table_size"
                >
                  15
                </Button2>
              </td>
            </tr>
            <tr>
              <td>
                <Button2
                  className="booking-table"
                  buttonStyle="btn--table"
                  buttonSize="btn--table_size"
                >
                  16
                </Button2>
              </td>
              <td>
                <Button2
                  className="booking-table"
                  buttonStyle="btn--table"
                  buttonSize="btn--table_size"
                >
                  17
                </Button2>
              </td>
              <td>
                <Button2
                  className="booking-table"
                  buttonStyle="btn--table"
                  buttonSize="btn--table_size"
                >
                  18
                </Button2>
              </td>
              <td>
                <Button2
                  className="booking-table"
                  buttonStyle="btn--table"
                  buttonSize="btn--table_size"
                >
                  19
                </Button2>
              </td>
              <td>
                <Button2
                  className="booking-table"
                  buttonStyle="btn--table"
                  buttonSize="btn--table_size"
                >
                  20
                </Button2>
              </td>
            </tr>
            <tr>
              <td>
                <Button2
                  className="booking-table"
                  buttonStyle="btn--table"
                  buttonSize="btn--table_size"
                >
                  21
                </Button2>
              </td>
              <td>
                <Button2
                  className="booking-table"
                  buttonStyle="btn--table"
                  buttonSize="btn--table_size"
                >
                  22
                </Button2>
              </td>
              <td>
                <Button2
                  className="booking-table"
                  buttonStyle="btn--table"
                  buttonSize="btn--table_size"
                >
                  23
                </Button2>
              </td>
              <td>
                <Button2
                  className="booking-table"
                  buttonStyle="btn--table"
                  buttonSize="btn--table_size"
                >
                  24
                </Button2>
              </td>
              <td>
                <Button2
                  className="booking-table"
                  buttonStyle="btn--table"
                  buttonSize="btn--table_size"
                >
                  25
                </Button2>
              </td>
            </tr>
            <tr>
              <td>
                <Button2
                  className="booking-table"
                  buttonStyle="btn--table"
                  buttonSize="btn--table_size"
                >
                  26
                </Button2>
              </td>
              <td>
                <Button2
                  className="booking-table"
                  buttonStyle="btn--table"
                  buttonSize="btn--table_size"
                >
                  27
                </Button2>
              </td>
              <td>
                <Button2
                  className="booking-table"
                  buttonStyle="btn--table"
                  buttonSize="btn--table_size"
                >
                  28
                </Button2>
              </td>
              <td>
                <Button2
                  className="booking-table"
                  buttonStyle="btn--table"
                  buttonSize="btn--table_size"
                >
                  29
                </Button2>
              </td>
              <td>
                <Button2
                  className="booking-table"
                  buttonStyle="btn--table"
                  buttonSize="btn--table_size"
                >
                  30
                </Button2>
              </td>
            </tr>
            <tr>
              <td>
                <Button2
                  className="booking-table"
                  buttonStyle="btn--table"
                  buttonSize="btn--table_size"
                >
                  31
                </Button2>
              </td>
              <td>
                <Button2
                  className="booking-table"
                  buttonStyle="btn--table"
                  buttonSize="btn--table_size"
                >
                  32
                </Button2>
              </td>
              <td>
                <Button2
                  className="booking-table"
                  buttonStyle="btn--table"
                  buttonSize="btn--table_size"
                >
                  33
                </Button2>
              </td>
              <td>
                <Button2
                  className="booking-table"
                  buttonStyle="btn--table"
                  buttonSize="btn--table_size"
                >
                  34
                </Button2>
              </td>
              <td>
                <Button2
                  className="booking-table"
                  buttonStyle="btn--table"
                  buttonSize="btn--table_size"
                >
                  35
                </Button2>
              </td>
            </tr>
            <tr>
              <td>
                <Button2
                  className="booking-table"
                  buttonStyle="btn--table"
                  buttonSize="btn--table_size"
                >
                  36
                </Button2>
              </td>
              <td>
                <Button2
                  className="booking-table"
                  buttonStyle="btn--table"
                  buttonSize="btn--table_size"
                >
                  37
                </Button2>
              </td>
              <td>
                <Button2
                  className="booking-table"
                  buttonStyle="btn--table"
                  buttonSize="btn--table_size"
                >
                  38
                </Button2>
              </td>
              <td>
                <Button2
                  className="booking-table"
                  buttonStyle="btn--table"
                  buttonSize="btn--table_size"
                >
                  39
                </Button2>
              </td>
              <td>
                <Button2
                  className="booking-table"
                  buttonStyle="btn--table"
                  buttonSize="btn--table_size"
                >
                  40
                </Button2>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="booking-table-btn">
        <Link>
          <Button
            className="find-a-flight-btn"
            buttonStyle="btn--black"
            buttonSize="btn--black_size"
          >
            Proceed
          </Button>
        </Link>
      </div>
    </div>
  );
}