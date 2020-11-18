import React, { Component } from 'react';
import './movieContent.scss';
import CastingList from './CastingList/CastingList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';

class MovieContent extends Component {
  constructor() {
    super();
    this.state = {
      castingList: [],
    }
  }

  componentDidMount() {
    fetch("/Data/castingdata.json", {
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        castingList: res.data,
      })
    })
  }

  render() {
    const { castingList } = this.state;
    return (
        <div className='MovieContent'>
          {/* 얘는 별점줄때 display가 보이도록 설정*/}
          <div className='hiddenComment'>
            <div className='commentSuggestion'>대단한 작품이군요! 김태현태김 님의 감동을 글로 남겨보세요</div>
            <button>코멘트 남기기</button>
          </div>
          <div className='movieContentBox'>
            <div className='predictStar'>
              <div className='predictHeading'>내 예상별점</div>
              <div className='predictContent'><p>재밌게 본 비슷한 작품</p><div>사랑에 대한 모든 것<img src='/images/vanilaSkyPoster.jpeg' alt='예상별점 아이콘'></img></div></div>
            </div>
            <div className='normalInfo'>
              <div className='infoHeading'>기본 정보<span>더보기</span></div>
              <div className='infoContent'>
                <div className='contentHeading'>Radioactive</div>
                <div className='contentInfo'>2019 · 영국 · 드라마</div>
                <div className='contentTime'>1시간 43분</div>
                <div className='detailContent'>새로운 세상을 만든 천재 과학자 그녀의 빛나는 도전과 숨겨진 이야기! 뛰어난 연구 실적에도 불구하고 거침없는 성격 때문에 연구실에서 쫓겨난 과학자 ‘마리’. 평소 그녀의 연구를 눈여겨본 ‘피에르’는 공동 연구를 제안하고, 두 사람은 자연스럽게 사랑...</div>
              </div>
            </div>
            <div className='castingWrapper'>                                                                                                                   
              <div className='castingHeading'>출연/제작</div>
              <div className='castingContent'>
                {castingList && <CastingList castingList={castingList}/>}
              </div>
            </div>
            <div className='commentWrapper'>
              <div className='commentHeading'>
                <div className='headingLeft'>
                  코멘트 <span>10+</span>
                </div> 
                <span>더보기</span>
              </div>
              <div className='commentBoxWrapper'>
                <div className='commentBox'>
                  <div className='commentTitle'>
                    <div className='titleLeft'>
                      <img src='/images/chorong2.png' alt='작성자아이콘'></img>
                      <div className='writerId'>김태현태김
                        <div className='writerIcon'></div>
                      </div>
                    </div>
                    <div className='titleRight'>
                      <FontAwesomeIcon className='writerStar' icon={faStar} />
                      5.0
                    </div>
                  </div>
                  <div className='commentContent'>
                    <p>
                      상처는 잠시 감출 수 있다.
                      그렇지만 현실도피로는 치유될 수 없고, 그것을 인정하고 받아드려야한다.
                      모든 것은 선택에서 '시작'되고, 그 기회는 언제나 나의 몫.
                    </p>
                  </div>
                  <div className='commentIcons'>
                    <div className='thumbsUpWrapper'>
                      <FontAwesomeIcon className='thumsUpIcon' icon={faThumbsUp} />
                      14
                    </div>
                    <div className='commentWrapper'>
                      <FontAwesomeIcon className='commentIcon' icon={faComment} />
                      0
                    </div>
                  </div>
                  <div className='like'>좋아요</div>
              </div>
                <div className='commentBox'>
                  <div className='commentTitle'>
                    <div className='titleLeft'>
                      <img src='/images/chorong2.png' alt='작성자아이콘'></img>
                      <div className='writerId'>김태현태김
                        <div className='writerIcon'></div>
                      </div>
                    </div>
                    <div className='titleRight'>
                      <FontAwesomeIcon className='writerStar' icon={faStar} />
                      5.0
                    </div>
                  </div>
                  <div className='commentContent'>
                    <p>
                      상처는 잠시 감출 수 있다.
                      그렇지만 현실도피로는 치유될 수 없고, 그것을 인정하고 받아드려야한다.
                      모든 것은 선택에서 '시작'되고, 그 기회는 언제나 나의 몫.
                    </p>
                  </div>
                  <div className='commentIcons'>
                    <div className='thumbsUpWrapper'>
                      <FontAwesomeIcon className='thumsUpIcon' icon={faThumbsUp} />
                      14
                    </div>
                    <div className='commentWrapper'>
                      <FontAwesomeIcon className='commentIcon' icon={faComment} />
                      0
                    </div>
                  </div>
                  <div className='like'>좋아요</div>
              </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default MovieContent;
