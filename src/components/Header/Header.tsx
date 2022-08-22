import * as React from "react";
import "./Header.css";

/* eslint-disable @typescript-eslint/no-empty-interface */
interface HeaderProps {
	
}

interface HeaderState {
	
}
/* eslint-enable @typescript-eslint/no-empty-interface */

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