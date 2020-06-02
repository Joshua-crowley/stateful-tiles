import React from 'react';

class Tile extends React.Component {
  state = {
    bgColor: this.props.primary,
  }

  toggleBgColor= () => {
    const {primary, secondary, onTileFlip } = this.props;
    const newBg = this.state.bgColor === primary ? secondary : primary;

    this.setState({ bgColor: newBg});
    if (onTileFlip){
      onTileFlip();
    }

  }

  render() {
    const style = {
      backgroundColor: this.state.bgColor,
    };
    return <div className="tile" style={style} onClick={this.toggleBgColor}></div>;
  }
}

Tile.defaultProps = {
  primary: 'red',
  secondary: 'blue',
}
 
 
export default Tile;