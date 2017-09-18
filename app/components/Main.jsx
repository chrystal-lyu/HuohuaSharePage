import React from 'react';

export class Main extends React.Component {
  render () {
    return (
      <div id="wrapper">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        
        <div id="header">
          <nav>
            <div className="header-left">
              <div className="header-left-1">
                <div id="app-icon"><img id="app-icon" src="http://i1.mobile-dad.com/uploads/201707/510046_1_1501155121MEUH.png" alt="app-icon"/></div>
              </div>
              <div className="header-left-2">
                <div id="title">全职高手</div>
                <div id="title-description">火花社</div>
              </div>

            </div>
            <div className="header-right">
              <a href="/"><span className="fa">&#xf10b;</span> 下载APP</a>
            </div>
          </nav>
        </div>

        <div id="body">
          {React.cloneElement(this.props.children, this.props)}
        </div>

        <div id="footer">
          <strong>全职高手x火花社 © 2017</strong>
        </div>
      </div>
    )
  };
};

export default Main;