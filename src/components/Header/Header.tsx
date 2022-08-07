import * as React from 'react';
import './Header.css'

interface HeaderProps {

}

interface HeaderState {

}

class Header extends React.Component<HeaderProps, HeaderState> {
    // state = { :  }
    render() {
        return (
            <header>
                <div className="logo">
                    <img src="/src/assets/img/logo.svg" alt="Trollface" className='logo-img' />
                    Meme Generator
                </div>
                <div className="title">
                    React Course - Project 3
                </div>
            </header>
        );
    }
}

export default Header;