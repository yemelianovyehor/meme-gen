import * as React from 'react';
import './Meme.css'
import {minMemeData} from "src/MemesAPIHandler"

interface MemeProps {
    meme: minMemeData
}
interface MemeState {
    
}
 
class Meme extends React.Component<MemeProps, MemeState> {
    // state = { :  }
    render() { 
        return ( 
            <div className='meme-container'>
            <img src={this.props.meme.url} alt={this.props.meme.name} className='meme-img'/>
            </div>
         );
    }
}
 
export default Meme;