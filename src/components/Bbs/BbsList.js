import React, { Component } from 'react';
import Header from '../Header/Header';
import BbsItem from './BbsItem';
import './BbsList.css';
import { connect } from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';

class BbsList extends Component {
    render() {
        const { boards } = this.props;
        
        const itemList = boards.map(
            info => (<BbsItem 
                key={info.id}
                title={info.title}
                date={info.date}
                category={info.category}
                writer={info.writer}
                views={info.views}
                content={info.content}
            />)
        )

        return (
            <div>
                <Header />
                {itemList}
                <Pagination count={10} variant="outlined" color="primary" className="pagination" />
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        boards: state.boards
    };
}

export default connect(mapStateToProps)(BbsList);