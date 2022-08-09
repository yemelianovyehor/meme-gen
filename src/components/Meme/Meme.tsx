import * as React from 'react';
import './Meme.css'

interface MemeProps {
    memeUrl: string,
    memeName: string
}
interface MemeState {
    
}
 
class Meme extends React.Component<MemeProps, MemeState> {
    // state = { :  }
    render() { 
        return ( 
            <div className='meme-container'>
            <img src={this.props.memeUrl} alt={this.props.memeName} className='meme-img'/>
            </div>
         );
    }
}
 
export default Meme;