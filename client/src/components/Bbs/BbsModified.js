import React, { Component } from 'react';
import Header from '../Header/Header';
import './Modified.css';
import { Link } from "react-router-dom"

class BbsModified extends Component {
    render() {    
        return (
            <>
                <Header />
                <div className="modified">
                    <div className="inner">
                        <div className="write">
                            글쓰기
                        </div>
                        <div className="ctg">
                            카테고리
                        </div>
                        <input className="title-input" value="제목을 입력해주세요"/>
                        <input className="content-input" />
                        <div>
                            <div className="submit">등록</div>
                            <div className="cancel">취소</div>
                            <Link to="/" className="list">목록</Link>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default BbsModified;