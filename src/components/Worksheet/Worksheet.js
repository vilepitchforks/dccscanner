import React from "react";
import ReactDataSheet from "react-datasheet";

class Worksheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: []
      //   grid: [
      //     [{ value: 1 }, { value: 3 }],
      //     [{ value: 2 }, { value: 4 }]
      //   ]
    };
  }

  render() {
    return (
      <ReactDataSheet
        data={this.props.data}
        valueRenderer={cell => cell.value}
        onCellsChanged={changes => {
          const grid = this.props.data.map(row => [...row]);
          changes.forEach(({ cell, row, col, value }) => {
            grid[row][col] = { ...grid[row][col], value };
          });
          this.setState({ grid });
        }}
      />
    );
  }
}
export default Worksheet;
