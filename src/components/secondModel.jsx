/*
@author: Eligijus Skersonas
*/

import axios from "axios";
import React, { Component } from "react";
import Features from './features.jsx'

class SecondModel extends Component {
  state = {
    yearBuilt: "1969",
    taxAmount: "4542.86",
    noOfBathrooms: "2",
    noOfBedrooms: "3",
    area: "1476",
    errors: {
      yearBuilt: [],
      taxAmount: [],
      noOfBathrooms: [],
      noOfBedrooms: [],
      area: []
    },
    errorQuantity: 0,
    predictData: {}
  };

  handlePredict = (data) => {
    // this is there the api data is fetched via axios
    const postData = {
      bathroomcnt: data.noOfBathrooms,
      bedroomcnt: data.noOfBedrooms,
      finishedsquarefeet12: data.area,
      taxamount: data.taxAmount,
      yearbuilt: data.yearBuilt
    }
    console.log("HandlePredict");
    // This is where the api call goes via axios.
    // axios.post("http://127.0.0.1:8000/", postData);
  }

  render() {
    return (
      <div style={{display: "flex", flexDirection: "column", "alignItems": "center"}}>
        <Features modelState={this.state} handlePredict={this.handlePredict} />
        <div style={{ width: 350, padding: 20, backgroundColor: "#212529", borderRadius: 20, color: "white" }}>
          <div style={{ marginBottom: 10 }}>Log error: {this.state.predictData["log error"] ? this.state.predictData["log error"] : null}</div>
          <div>Predicted house price: {this.state.predictData["Prididicted house price"] ? this.state.predictData["Prididicted house price"] : null}</div>
        </div>
      </div>
    )
  }
}

export default SecondModel;