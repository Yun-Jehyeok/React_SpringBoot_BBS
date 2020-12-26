import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom"
import { connect } from 'react-redux';

class BbsItem extends Component {
    static defaultProps = {
        name: 'noName',
        date: 'noDate',
        category: 'noCategory',
        writer: 'noWriter',
        views: 'noViews',
        content: 'noContent'
    }

    render() {
        const { title, date, category, writer, views, content } = this.props;

        return (
            <div className="item1">
                <div className="top-left1">
                    <Link to="/item" className="title1">
                        {title}
                    </Link>
                    <div className="date1">
                        {date}
                    </div>
                </div>
                <div className="top-right1">
                    <div className="writer1">
                        {writer}
                    </div>
                    <div className="views1">
                        {views}
                    </div>
                </div>
                <div className="bottom1">
                    <div className="category1">
                        {category}
                    </div>
                    <div className="content1">
                        <b>Lorem ipsum</b>{content.slice(0, 180)}...
                    </div>
                </div>
            </div>
        );
    }
}

BbsItem.propTypes = {
    title: PropTypes.string.isRequired, 
    date: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired, 
    writer: PropTypes.string.isRequired, 
    views: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default connect()(BbsItem);