import React from 'react';

import Sidebar from 'Sidebar';

export class UserPage extends React.Component {
  render() {
    return (
			<div className="row">
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <div className="small-12 medium-8 large-8 columns">
          <div className="user-page">
            <div className="user-info">
              <div className="user-cover">
                <img className="user-cover-img" src="https://1.bp.blogspot.com/-W6usU6rTHNg/WUfhr9ZsACI/AAAAAAAACJE/15jRNUBQdZYJTVfYbYWsbnBhi9OAedUIACPcBGAYYCw/s1600/JLJK.jpg"/>
                <div className="layer"></div>
              </div>
              <div className="user-profile">
                <div className="user-icon">
                  <img className="avatar" src="http://img.ecyss.com/medium/172/172609/dc852b721bc841da.gif"/>
                </div>
                <div className="user-name">糖糖</div>
                <div className="membership">火花社成员</div>
                <div className="since-date">2016年10月入社 (290天)</div>
              </div>
              <div className="counter-info">
                <div className="counter-rep">
                  <div className="number">289</div>
                  <div className="counter-label">声望</div>
                </div>
                <div className="counter-followers">
                  <div className="number">3450</div>
                  <div className="counter-label">粉丝</div>
                </div>
                <div className="counter-following">
                  <div className="number">1802</div>
                  <div className="counter-label">关注</div>
                </div>
              </div>
            </div>
            <div className="member-container">
              <div className="section-header">近期粉丝</div>
              <ul className="members">
                <li><a><img className="avatar" src="http://orig09.deviantart.net/9665/f/2013/182/c/f/jay_chou___big_ben_mv_by_fierlovesjay-d6bkb9c.gif"/></a></li>
                <li><a><img className="avatar" src="https://s-media-cache-ak0.pinimg.com/originals/2f/87/85/2f878550077af0f839dcca4b598bcd6f.gif"/></a></li>
                <li><a><img className="avatar" src="https://media.giphy.com/media/MQ8kAiQ2yZM1a/giphy.gif"/></a></li>
                <li><a><img className="avatar" src="https://media.giphy.com/media/TmYaN4mWVLIcg/giphy.gif"/></a></li>
                <li><a><img className="avatar" src="http://bestanimations.com/Animals/Mammals/Cats/cats/cute-kitty-animated-gif-45.gif"/></a></li>
                <li><a><img className="avatar" src="https://media.giphy.com/media/Zqy8kRlwfwFnq/giphy.gif"/></a></li>
                <li><a><img className="avatar" src="http://ignitestudentlife.com/wp-content/uploads/2016/11/dogswalking.gif"/></a></li>
                <li><a><img className="avatar" src="https://gifimage.net/wp-content/uploads/2017/07/anime-cute-gif-11.gif"/></a></li>
                <li><a><img className="avatar" src="https://media.giphy.com/media/16bJmyPvRbCDu/giphy.gif"/></a></li>
                <li><a><img className="avatar" src="https://media.giphy.com/media/EGauSkKQZuXxS/giphy.gif"/></a></li>
                <li><a><img className="avatar" src="https://media.giphy.com/media/6zI0KUEik37Jm/giphy.gif"/></a></li>
                <li><a><img className="avatar" src="https://media.giphy.com/media/ME0yWj7sRqgPC/giphy.gif"/></a></li>
                <li><a><img className="avatar" src="https://media.giphy.com/media/3o6gE5BJU53nMI0U4E/giphy.gif"/></a></li>
                <li><a><img className="avatar" src="https://media.giphy.com/media/X2QBmjCQAHtle/giphy.gif"/></a></li>
                <li><a><img className="avatar" src="https://s-media-cache-ak0.pinimg.com/originals/2f/87/85/2f878550077af0f839dcca4b598bcd6f.gif"/></a></li>
              </ul>
            </div>

            <div className="section-header">个人介绍</div>

            <div className="user-bio">我是一枚小透明</div>

            <div className="section-header">糖糖的帖子</div>

            <div className="user-post-wrapper">

              <a className="user-post">
                <div className="user-post-content">
                  <div className="post-image">
                    <image className="gallery" src="https://farm6.staticflickr.com/5278/14365150535_6556a083d8_o.jpg"/>
                  </div>
                  <div className="post-text">
                    <h5>第一百五十二章 龍套變關鍵</h5>
                    <p>他來前已經是做好心理準備的，畢竟是能踩著大公會刷記錄的隊伍，那水平還用說嗎？楓樺一點也不懷疑...</p>
                  </div>
                  <div className="post-info">
                    <span className="num-comments"><span className="fa">&#xf0e5;</span> 43</span>
                    <span className="num-likes"><span className="fa">&#xf08a;</span> 1234</span>
                  </div>
                </div>
              </a>

              <a className="user-post">
                <div className="user-post-content">
                  <div className="post-image">
                    <image className="gallery" src="http://livedoor.blogimg.jp/onecall_dazeee/imgs/7/e/7e9c5507.png"/>
                  </div>
                  <div className="post-text">
                    <h5>第一百五十六章 包圍之勢</h5>
                    <p>“哈哈哈，菜鳥不要這么緊張啊這才打了多一會，你老是OTOT的叫個不停，難道你是OTMAN嗎？”包子入侵又是大笑飄過...</p>
                  </div>
                  <div className="post-info">
                    <span className="num-comments"><span className="fa">&#xf0e5;</span> 43</span>
                    <span className="num-likes"><span className="fa">&#xf08a;</span> 1234</span>
                  </div>
                </div>
              </a>

              <a className="user-post">
                <div className="user-post-content">
                  <div className="post-image">
                    <image className="gallery" src="https://i.pinimg.com/originals/44/cd/64/44cd641e49e62fe584807c24dbfa39aa.png"/>
                  </div>
                  <div className="post-text">
                    <h5>第一百六十章 技多不壓身</h5>
                    <p>在公會里，他是老大，他是頭。下副本他是領導，他是指揮，他說東就沒人敢向西...</p>
                  </div>
                  <div className="post-info">
                    <span className="num-comments"><span className="fa">&#xf0e5;</span> 43</span>
                    <span className="num-likes"><span className="fa">&#xf08a;</span> 1234</span>
                  </div>
                </div>
              </a>

            </div>

          </div>


        </div>


        <Sidebar />

			</div>
		)
  }
}

export default UserPage;