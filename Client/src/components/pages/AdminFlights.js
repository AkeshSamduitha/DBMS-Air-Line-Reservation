import React from "react";
import "../../App.css";
import "./Admin.css";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import AdminNavbar from "../AdminNavbar";
import axios from "axios";
import { useToken } from "./token";

export default function AdminFlights() {

  const [token, setToken] = useToken();

  return (
    <>
      {token ? (
        <div>
          <AdminNavbar />
          <div className="container">
            <Link to="/admin-home">
              <Button
                className="find-a-flight-btn"
                buttonStyle="btn--black"
                buttonSize="btn--black_size"
              >
                Home
              </Button>
            </Link>
            <Link to="/admin-passengers">
              <Button
                className="find-a-flight-btn"
                buttonStyle="btn--black"
                buttonSize="btn--black_size"
              >
                Passengers
              </Button>
            </Link>
          </div>
          <div className="container">
            <h1 className="topic">Booked Flights</h1>
            <br />
            <table id="flight-table">
              <tbody>
                <tr>
                  <th>Flight Number</th>
                  <th>Departure City</th>
                  <th>Arrival City</th>
                  <th>date</th>
                  <th>Departure Time</th>
                  <th>Arrival Time</th>
                  <th>Actions</th>
                </tr>
                <tr>
                  <td>A12345</td>
                  <td>Colombo</td>
                  <td>London</td>
                  <td>2000-01-01</td>
                  <td>12:00</td>
                  <td>18:00</td>
                  <td>
                    <button className="edit-button">Edit</button>
                    <button className="delete-button">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
          </div>
        </div>
      ) : (
        <div className="container">
          <h1>පලයන් යන්න</h1>
        </div>
      )}
    </>
  );
}
