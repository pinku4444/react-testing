import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.scss'

 class Headline extends Component {
     constructor(props) {
         super(props);
     }

    render() {
        const {header,desc} = this.props;
        if(!header) {
            return null
        }
        return (
            <div className="headline" data-test="headlineWrapper">
               <h1 data-test="header">{header}</h1> 
               <p data-test="desc">{desc}</p>
            </div>
        )
    }
}

Headline.propTypes = {
    header: PropTypes.string,
    desc : PropTypes.string
}

// Headline.defaultProps = {
//     header: 'Post'
//   };

export default Headline;
