import React from 'react';
import Tile from './Tile';

class Tiles extends React.Component {
  onTileFlip = () => console.log('This is Working!');

  render() {
    return (
      <div className='tiles-component'>
        < Tile onTileFlip={this.onTileFlip} primary='yellow' secondary='purple'/>
        < Tile onTileFlip={this.onTileFlip} primary='orange' secondary='green'/>
        < Tile onTileFlip={this.onTileFlip} primary='black' secondary='grey'/>
        < Tile onTileFlip={this.onTileFlip}/>
      </div>
      
    );
  }
}

export default Tiles;