import React, { Component } from "react";
import domtoimage from "dom-to-image";
import { generateUniqueID } from "../lib/helpers";

import Head from "next/head";
import Brand from "../components/index/Brand";
import Clock from "../components/index/Clock";
import Quotes from "../components/index/Quotes";
import Text from "../components/shared/Text";
import AddTextIcon from "../components/index/AddTextIcon";
import Footer from "../components/shared/Footer";

class Index extends Component {
  state = {
    timestring: "",
    gratitudes: {
      "gratitude-0": ""
    }
  };

  componentDidMount() {
    this.handleCreateTimeString();
    this.timer = setInterval(() => this.handleCreateTimeString(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleCreateTimeString() {
    const date = new Date();
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    const weekday = weekdays[date.getDay()];
    const month = months[date.getMonth()];
    const intDay = date.getDate();
    const year = date.getFullYear();
    const timestamp = date.toTimeString();
    const H = timestamp.substr(0, 2);
    const h = H % 12 || 12;
    const ampm = H < 12 || H === 24 ? " AM" : " PM";
    const time = h + timestamp.substr(2, 3) + ampm;
    const timestring = `${weekday}, ${month} ${intDay}, ${year}, ${time}`;

    this.setState({ timestring });
  }

  handleAddGratitude = () => {
    const gratitudeID = `gratitude-${generateUniqueID()}`;
    let gratitude = {};
    gratitude[gratitudeID] = "";
    const gratitudes = Object.assign({}, this.state.gratitudes, gratitude);
    this.setState({
      gratitudes
    });
  };

  handleRemoveGratitude = key => {
    if (key !== "gratitude-0") {
      const { gratitudes } = this.state;
      delete gratitudes[key];
      this.setState({
        gratitudes
      });
    }
  };

  handleSaveGratitude = e => {
    const { gratitudes } = this.state;
    const id = e.target.id;
    const gratitudeText = e.target.value;
    gratitudes[id] = gratitudeText;
    this.setState({
      gratitudes
    });
  };

  handleCreateImage = () => {
    const filter = node => {
      return node.title !== "domtoimage-ignore";
    };

    domtoimage
      .toJpeg(document.body, {
        filter
      })
      .then(dataUrl => {
        this.handleDownloadImage(dataUrl, "jpeg");
      })
      .catch(err => {
        alert("Sorry, there was an error with your file.");
      });
  };

  handleDownloadImage = (dataUrl, type) => {
    const { timestring } = this.state;

    const fileTimestamp = timestring.replace(/[ ,]/g, "_");
    const link = document.createElement("a");
    link.download = `Simple_Gratitudes_${fileTimestamp}.${type}`;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  render() {
    const { timestring, gratitudes } = this.state;

    const renderGratitudes = Object.keys(gratitudes).map((key, index) => (
      <Text
        key={index}
        id={key}
        text={gratitudes[key]}
        handleRemoveText={() => this.handleRemoveGratitude(key)}
        handleSaveText={this.handleSaveGratitude}
        label="gratitude"
      />
    ));

    return (
      <div id="index" className="page-wrapper">
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <title>Simple Gratitudes</title>
        </Head>
        <Brand />
        <Clock timestring={timestring} />
        <section className="gratitudes">
          {renderGratitudes}
          <AddTextIcon handleAdd={this.handleAddGratitude} />
        </section>
        <Footer handleCreate={() => this.handleCreateImage()} />
        <canvas
          id="gratitudeCanvas"
          title="domtoimage-ignore"
          className="hide"
        ></canvas>
        <style jsx global>{`
          @font-face {
            font-family: "Righteous";
            font-display: auto;
            src: url("/static/fonts/Righteous.woff") format("woff");
          }
          @font-face {
            font-family: "Snippet";
            src: url("/static/fonts/Snippet.woff") format("woff");
          }
          * {
            box-sizing: border-box;
          }
          html,
          body {
            margin: 0;
            padding: 0;
            overflow: scroll;
            margin-bottom: 6rem;
            background: #5190a5;
          }
          .absCenter {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          .inline {
            display: inline-block;
          }
          .hide {
            display: none;
          }
          .gratitudes {
            background: transparent;
            margin-top: 20px;
          }
          .action-button {
            font-family: Righteous, Sans-serif, Arial;
            color: white;
            font-size: 1.2rem;
            border: 2px solid white;
            padding: 0.5rem 1rem;
            border-radius: 2rem;
          }
        `}</style>
      </div>
    );
  }
}

export default Index;
