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
                <div
                    className="item1 active"
                    onClick={(e) => this.scrollToPage('.index-page')}
                    >
                    Home
                    </div>
                    <div
                    className="item2 active"
                    onClick={(e) => this.scrollToPage('.about-page')}
                    >
                    About
                    </div>
                    <div
                    className="item3"
                    onClick={(e) => this.scrollToPage('.conversations-page')}
                    >
                    Conversations
                    </div>
                    <div
                    className="item4"
                    onClick={(e) => this.scrollToPage('.narrators-page')}
                    >
                    Narrators
                    </div>
                    <div
                    className="item5"
                    onClick={(e) => this.scrollToPage('.exhibit-page')}
                    >
                    Exhibit
                    </div>
                    <div
                    className="item6"
                    onClick={(e) => this.scrollToPage('.archive-page')}
                    >
                    Archive
                    </div>
                    
                    
                </div>
                <div className="menu-border"></div>
            </nav>
          );

    }
}
export default Nav;