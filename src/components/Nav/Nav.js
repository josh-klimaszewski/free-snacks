import React, {
    Component
} from 'react';
import {
    toElement as scrollToElement
} from '../../utils/scroll';
import './style.css';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            isSticky: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        if (window.pageYOffset > this.nav.offsetTop) {
            this.setState({
                isSticky: true
            });
        } else {
            this.setState({
                isSticky: false
            });
        }
    }

    scrollToPage(pageSelector) {
        const nextPage = document.querySelector(pageSelector);
        scrollToElement(nextPage);
    }
    render() {
        const stickyClass = this.state.isSticky ? 'sticky' : '';
        return (
            <nav
              className={stickyClass}
              ref={(elem) => {
                this.nav = elem;
              }}
            >
               
                <div className="menu">
                <p
                    className="menu__item active"
                    onClick={(e) => this.scrollToPage('.index-page')}
                    >
                    Home
                    </p>
                    <p
                    className="menu__item active"
                    onClick={(e) => this.scrollToPage('.about-page')}
                    >
                    About
                    </p>
                    <p
                    className="menu__item"
                    onClick={(e) => this.scrollToPage('.contact-page')}
                    >
                    Contact
                    </p>
                    <p
                    className="menu__item"
                    onClick={(e) => this.scrollToPage('.updates-page')}
                    >
                    Updates
                    </p>
                    
                    
                </div>
                <div className="menu-border"></div>
            </nav>
          );

    }
}
export default Nav;