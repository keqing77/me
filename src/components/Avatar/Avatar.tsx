import React from 'react'
import './Avatar.style.scss';

const Avatar = () => {
  return (
    <div className="container">
      <div className="box">
        <div className="profile">
          <img src="one-last-keqing.jpg" alt="" />
        </div>
        <div className="info">
          <h3>来自拉夫德鲁的码农</h3>
          <p>FE Developer</p>
          <div className="user-info">
            <div className="left">
              <div className="item">
                <div className="post-num">23</div>
                <div className="post">Posts</div>
              </div>
            </div>
            <div className="center">
              <div className="item">
                <div className="follows-num">99,999</div>
                <div className="follows">Follows</div>
              </div>
            </div>
            <div className="right">
              <div className="item">
                <div className="following-num">167</div>
                <div className="following">Following</div>
              </div>
            </div>
          </div>
          <div className="btn">
            <div className="btn-follow">Follow</div>
            <div className="btn-msg">Github</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Avatar;


