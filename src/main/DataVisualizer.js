import React, { Component } from 'react';
import * as d3 from 'd3';
import TodoList from 'main/test';

const style = {
  bar: {
    background: 'steelblue',
    color: 'white',
    textAlign: 'right',
    margin: 1,
    padding: 3,
  },
};

// const NatGasData = '/src/data/natgas.csv';

const data = [4, 8, 15, 16, 23, 42];

class DataVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
  }

  scale = d3.scaleLinear().domain([0, d3.max(data)]).range([0, 420]);

  renderBars = d => (
    <div>
      <div
        key={`bar${d}`}
        style={Object.assign({}, style.bar, { width: this.scale(d) })}
      >
        {d}
      </div>
    </div>
  );

  render() {
    return (
      <div>
        <div className="chart">
          {data.map(d => this.renderBars(d))}
        </div>
        <div>
          <TodoList />
        </div>
      </div>
    );
  }
}


export default DataVisualizer;
