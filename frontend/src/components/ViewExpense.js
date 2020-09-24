import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./css/ViewExpense.css";
import Select from "react-dropdown-select";

// component for inner table match history
let Row = (props) => {
  const { row } = props;

  return (
    <React.Fragment>
      <TableRow>
        <TableCell component="th" scope="row">
          {row.Name}
        </TableCell>
        <TableCell>{row.Price}</TableCell>
        <TableCell>{row.Category}</TableCell>
        <TableCell>{row.Date}</TableCell>
      </TableRow>
    </React.Fragment>
  );
};
export default class ViewExpense extends Component {
  state = {
    expenseDataDate: [],
    expenseDataPrice: [],
    expenseDataCategory: [],
    expenseDataAlphabet: [],
    selection: "orderByDate",
  };
  constructor(props) {
    super(props);
    this.deleteExpense = this.deleteExpense.bind(this);
  }
  async componentDidMount() {
    let expenseResponse = await fetch("/ViewExpense");
    let expenseData = await expenseResponse.json();
    await this.setState({ expenseDataDate: expenseData.orderByDate });
    await this.setState({ expenseDataPrice: expenseData.orderByPrice });
    await this.setState({ expenseDataCategory: expenseData.orderByCategory });
    await this.setState({ expenseDataAlphabet: expenseData.orderByAlphabet });

    //this.setInitialBoardState();
  }
  deleteItem = async (event) => {};
  handleChange = (event) => {
    this.setState({ selection: event[0].value });
  };
  deleteExpense = async (event) => {
    let value = { ID: event };
    let valueString = "" + value;
    console.log("value STring" + event);
    let cell = document.getElementById(event);
    cell.style.display = "none";
    let response = await fetch("/delete", {
      headers: {
        Accept: "application/json, text/plain, /",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(value),
    });
  };
  render() {
    const optionList = [
      { label: "Date", value: "orderByDate" },
      { label: "Alphabetical", value: "orderByAlphabet" },
      { label: "Price", value: "orderByPrice" },
      { label: "Category", value: "orderByCategory" },
    ];

    let tableMap = [];
    switch (this.state.selection) {
      case "orderByDate":
        console.log("1");
        tableMap = this.state.expenseDataDate;
        break;
      case "orderByPrice":
        console.log("2");

        tableMap = this.state.expenseDataPrice;
        break;
      case "orderByAlphabet":
        console.log("3");

        tableMap = this.state.expenseDataAlphabet;
        break;
      case "orderByCategory":
        console.log("4");

        tableMap = this.state.expenseDataCategory;
        break;
      default:
        tableMap = this.state.expenseDataDate;
        break;
    }
    let buttonstyle = {
      color: "white",
      backgroundColor: "red",
      paddingRight: "40px",
      paddingLeft: "40px",
      paddingTop: "10px",
      paddingBottom: "10px",
      fontSize: "15px",
    };
    let selectStyle = {
      width: "200px",
    };
    let tableContainer = {
      width: "800px",
      backgroundColor: "white",
    };

    return (
      <div className="historyContainer">
        <div className="historyHeading">
          <h2>History</h2>

          <Select
            onChange={this.handleChange.bind(this)}
            options={optionList}
            placeholder="Order By"
            style={selectStyle}
          ></Select>
        </div>
        <Table id="boardContainer" style={tableContainer}>
          <TableHead id="table-header">
            <TableRow>
              <TableCell id="rank">Name</TableCell>
              <TableCell id="rank">Price</TableCell>
              <TableCell id="rank">Category</TableCell>
              <TableCell id="rank">Date</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          {tableMap.map((value, index) => (
            <TableRow id={"" + value.ID}>
              <TableCell component="th" scope="row">
                {value.Name}
              </TableCell>
              <TableCell>{value.Price}</TableCell>
              <TableCell>{value.Category}</TableCell>
              <TableCell>{value.Date}</TableCell>
              <TableCell>
                <Button
                  onClick={() => this.deleteExpense(value.ID)}
                  style={buttonstyle}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </div>
    );
  }
}
/**
 * {this.state.expenseData.map((value, index) => (
          <Row key={index} row={value} />
        ))}

 */
