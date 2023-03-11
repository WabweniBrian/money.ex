import { Component } from "react";
import ReactApexChart from "react-apexcharts";

class ExchangeRates extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: [],
      chartOptions: {},
    };
  }

  componentDidMount() {
    this.setState({
      chartData: this.props.chartData,
      chartOptions: this.props.chartOptions,
    });
  }
  render() {
    return (
      <div className="card">
        <div className="mb-4">
          <h1 className="text-2xl font-semibold">
            We use the real exchange rates
          </h1>
          <div className="flex-center-between flex-col sm:flex-row gap-4">
            <p className="mt-2 opacity-60">
              As of 1 min ago 1GBP - 1.16293 EUR
            </p>
            <select
              name=""
              id=""
              className="py-2 px-4 w-full sm:w-fit  border dark:border-hover-color-dark outline-none bg-white rounded-full dark:bg-card-dark drop-shadow-md"
            >
              <option value="24-hours">24 hours</option>
              <option value="1-week">1 week</option>
              <option value="1-month">1 Month</option>
              <option value="6-months">6 Months</option>
              <option value="1-year">1 Year</option>
              <option value="5-years">5 Years</option>
            </select>
          </div>
        </div>
        <ReactApexChart
          options={this.state.chartOptions}
          series={this.state.chartData}
          type="line"
          width="100%"
          height="250"
        />
      </div>
    );
  }
}

export default ExchangeRates;
