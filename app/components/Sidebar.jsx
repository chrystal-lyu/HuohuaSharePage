import React from 'react';

export class Sidebar extends React.Component {
  render() {
    return (
      <div className="column1 small-12 medium-4 large-4 columns">
        <div className="post-list-sidebar">
          <img id="app-icon" src="http://i1.mobile-dad.com/uploads/201707/510046_1_1501155121MEUH.png" alt="app-icon"/>
          <div className="side-info">
            <div id="app-title">全职高手 x 火花社</div>
            <p id="app-description">纯净的高质量全职高手粉丝社区「漫画、插画、cos、游戏」以及大大原创全职高手漫画插画，每日更新，一次看个够</p>
            <p id="app-description">—十年荣耀，不忘初心—</p>
          </div>
          <a><img className="download-icon" src="http://www.ayoba.com/Content/images/theme/ayobadotcom_android.png" alt="android"/></a>
        </div> 
      </div>
    )
  }
}

export default Sidebar;