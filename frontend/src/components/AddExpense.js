import React from "react";
import form from "react-forms-materialize-css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { AttachMoney, Assignment, More } from "@material-ui/icons";
import useAutocomplete from "@material-ui/lab/useAutocomplete";
import TextField from "@material-ui/core/TextField";
import "./css/AddExpense.css";

class addExpense extends React.Component {
  state = {
    redirect: false,
  };

  formError = (expenseName, price, category) => {
    const expenseError = document.getElementById("expenseNameError");
    const priceError = document.getElementById("priceError");
    const categoryError = document.getElementById("categoryError");
    expenseError.textContent = "";
    priceError.textContent = "";
    categoryError.textContent = "";

    let errors = false;

    if (expenseName === "") {
      errors = true;
      expenseError.textContent = "Missing Value!";
    }
    if (price === "") {
      errors = true;
      priceError.textContent = "Missing Value!";
    }
    if (category === "") {
      errors = true;
      categoryError.textContent = "Missing Value!";
    }

    return errors;
  };

  submitForm = async (event) => {
    const expenseName = document.getElementById("expenseTextField").value;
    const price = document.getElementById("priceTextField").value;
    const category = document.getElementById("categoryTextField").value;
    console.log("rse30" + expenseName);
    //do error checking later
    let errors = this.formError(expenseName, price, category);

    if (!errors) {
      const expenseData = {
        expenseName: expenseName,
        price: price,
        category: category,
      };
      let response = await fetch("/", {
        headers: {
          Accept: "application/json, text/plain, /",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(expenseData),
      });

      if (response.status === 200) {
        document.getElementById("expenseTextField").value = "";
        document.getElementById("priceTextField").value = "";
        document.getElementById("categoryTextField").value = "";

        window.location.reload(false);
      }
    }
  };

  render() {
    let buttonstyle = {
      color: "white",
      backgroundColor: "green",
      paddingRight: "30px",
      paddingLeft: "30px",
      paddingTop: "10px",
      paddingBottom: "10px",
      fontSize: "25px",
    };
    const { classes } = this.props;
    return (
      <div className="addExpenseContainer">
        <div className="inputContainer">
          <div className="addExpenseHeadingContainer">
            <h2>Add Expense</h2>
          </div>
          <form
            className="expenseForm"
            id="addExpense"
            noValidate
            autoComplete="off"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="expenseFormItem">
              <div className="labelTextBox">Expense:</div>
              <p id="expenseNameError" className="error"></p>

              <TextField
                required
                id="expenseTextField"
                label="Expense Name:"
                placeholder="Expense Name"
                variant="outlined"
                icon={Assignment}
                name="expenseName"
                className="BGChangeWhite"
              />
            </div>
            <div className="expenseFormItem">
              <div className="labelTextBox">Price:</div>
              <p id="priceError" className="error"></p>

              <TextField
                required
                id="priceTextField"
                label="Price: "
                variant="outlined"
                name="price"
                type="number"
                icon="AttachMoney"
                className="BGChangeWhite"
                step=".01"
                min="0"
              />
              <br />
            </div>{" "}
            <div className="expenseFormItem">
              <div className="labelTextBox">Category:</div>
              <p id="categoryError" className="error"></p>
              <TextField
                required
                id="categoryTextField"
                label="Category: "
                variant="outlined"
                type="category"
                icon={More}
                name="category"
                placeholder="Enter the Category"
                className="BGChangeWhite"
              />
            </div>
          </form>

          <div className="buttonContainer">
            <Button
              type="submit"
              onClick={this.submitForm}
              form="expenseForm"
              style={buttonstyle}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default addExpense;
