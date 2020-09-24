import React, { Component } from "react"; // component for inner table match history
import AddExpense from "./AddExpense";
import ViewExpense from "./ViewExpense";
import "./css/IndexPage.css";
export default class IndexPage extends Component {
  async componentDidMount() {
    await this.setState({ expenseData: this.props.why });

    console.log("?" + Array.isArray(this.props.why));
  }

  render() {
    return (
      <div className="wholeWidthContainer">
        <h1>Expense Application</h1>
        <AddExpense />
        <br></br>
        <ViewExpense />
      </div>
    );
  }
}
