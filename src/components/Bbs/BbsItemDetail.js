import React, { Component } from 'react';
import './Detail.css';
import Header from '../Header/Header';
import { Link } from "react-router-dom"

class BbsItemDetail extends Component {
    state = {
        item: [
            {
                id: 0,
                title: "TITLE-TITLE-TITLE-TITLE-TITLE-TITLE-TITLE-TITLE",
                name: "닉네임",
                date: "2020년 09월 1일 00:00",
                category: "카테고리, 카테고리, 카테고리, 카테고리",
                writer: "작성자 |",
                views: "조회수",
                content: ", or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is..."
            }
        ]
    }

    render() {
        const { item } = this.state;
        
        return (
            <>
            <Header />
            <div className="item2">
                <div className="top2">
                    <div className="title2">
                        {item[0].title}
                    </div>
                    <div>
                        <div className="name2">
                            {item[0].name}
                        </div>
                        <div className="date2">
                            {item[0].date}
                        </div>
                        <div className="right2">
                            <div className="views2">
                                {item[0].views}
                            </div>
                            <div className="wc2">
                                | 즐겨찾기
                            </div>
                        </div>
                    </div>
                    <hr/>
                </div>
                <div className="section2">
                    <div>
                        크고 작고 간에 이상이 있음으로써 용감하고 굳세게 살 수 있는 것이다 석가는 무엇을 위하여 설산에서 고행을<br/><br/>

                        밥을 위하여서 옷을 위하여서 미인을 구하기 위하여서 그리하였는가? 아니다 그들은 커다란 이상 곧 만천하의 대중을 품에 안고 그들에게 밝은 길을 찾아 주며 그들을 행복스럽고 평화스러운 곳으로 인도하겠다는 커다란 이상을 품었기 때문이다 그러므로 그들은 길지 아니한 목숨을 사는가 싶이 살았으며 그들의 그림자는 천고에<br/><br/>

                        찬미를 듣는다 그것은 웅대한 관현악이며 미묘한 교향악이다 뼈 끝에 스며들어 가는 열락의 소리다이것은 피어나기 전인 유소년에게서 구하지 못할 바이며 시들어 가는 노년에게서 구하지 못할 바이며 오직 우리 청춘에서만<br/><br/>
                        크고 작고 간에 이상이 있음으로써 용감하고 굳세게 살 수 있는 것이다 석가는 무엇을 위하여 설산에서 고행을<br/><br/>

                        밥을 위하여서 옷을 위하여서 미인을 구하기 위하여서 그리하였는가? 아니다 그들은 커다란 이상 곧 만천하의 대중을 품에 안고 그들에게 밝은 길을 찾아 주며 그들을 행복스럽고 평화스러운 곳으로 인도하겠다는 커다란 이상을 품었기 때문이다 그러므로 그들은 길지 아니한 목숨을 사는가 싶이 살았으며 그들의 그림자는 천고에<br/><br/>

                        찬미를 듣는다 그것은 웅대한 관현악이며 미묘한 교향악이다 뼈 끝에 스며들어 가는 열락의 소리다이것은 피어나기 전인 유소년에게서 구하지 못할 바이며 시들어 가는 노년에게서 구하지 못할 바이며 오직 우리 청춘에서만<br/><br/>
                        크고 작고 간에 이상이 있음으로써 용감하고 굳세게 살 수 있는 것이다 석가는 무엇을 위하여 설산에서 고행을<br/><br/>

                        밥을 위하여서 옷을 위하여서 미인을 구하기 위하여서 그리하였는가? 아니다 그들은 커다란 이상 곧 만천하의 대중을 품에 안고 그들에게 밝은 길을 찾아 주며 그들을 행복스럽고 평화스러운 곳으로 인도하겠다는 커다란 이상을 품었기 때문이다 그러므로 그들은 길지 아니한 목숨을 사는가 싶이 살았으며 그들의 그림자는 천고에<br/><br/>

                        찬미를 듣는다 그것은 웅대한 관현악이며 미묘한 교향악이다 뼈 끝에 스며들어 가는 열락의 소리다이것은 피어나기 전인 유소년에게서 구하지 못할 바이며 시들어 가는 노년에게서 구하지 못할 바이며 오직 우리 청춘에서만
                    </div>
                    <div className="sectionRight2">
                        <Link to="/modified" className="modified2">수정</Link>
                        <div className="delete2">삭제</div>
                    </div>
                </div>
                <div className="bottom2">
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default BbsItemDetail;