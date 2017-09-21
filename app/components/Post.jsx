import React from 'react';
import moment from 'moment';

export class Post extends React.Component {
  render () {
		const renderPopularAbstract = () => {
			let popularAbstract = "Aenean ultricies turpis est, non elementum mauris porttitor vel. Cras pellentesque lobortis odio a ultrices. Vestibulum mattis lacus id mauris dictum, non faucibus libero iaculis. ";			
			if (popularAbstract.length > 100) {
				return popularAbstract = popularAbstract.substring(0, 100) + "...";
				console.log(popularAbstract);
			}
		}
    return (
      <div className="row">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <div className="column1 small-12 medium-8 large-8 columns">
					<div className="user">
						<div className="user-icon"><a href="#"><img className="avatar" src="http://img.ecyss.com/medium/172/172609/dc852b721bc841da.gif"/></a></div>
						<div className="user-info">	
							<div className="user-name"><a href="#">糖糖</a></div>
							<div className="user-rep">9999 声望</div>
						</div>
						<div className="post-info">
							<div className="post-date">8天前</div>
							<div className="post-likes"><span className="fa">&#xf004;</span>167</div>
						</div>
					</div>

          <div className="post-body">
						<div className="post-title">【all喻】神烦x喻文州</div>
						<p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
            <div className="img-container">
              <img src="https://i.imgur.com/e9RQROx.jpg" />
            </div>
						<p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
            <div  className="img-container">
              <img src="http://img1.tbcdn.cn/tfscom/i1/TB1r_bsGpXXXXaOXpXXXXXXXXXX_!!0-item_pic.jpg" />
            </div>
						<p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
					</div>

          <div className="post-comments">
						<div className="section-header"><span className="fa">&#xf0e5;</span> 5 评论</div>
						<ul>
							<li className="comment">
								<div className="comment-avatar"><img className="avatar" src='http://imgcache.qq.com/music/photo/album_300/17/300_albumpic_8217_0.jpg'/></div>
								<div className="comment-body">	
									<div className="comment-header">
										<a className="user-link">I'm Nick Name</a>
										<div className="comment-info"><span className="comment-date">5 分钟前</span><span className="comment-likes"><span className="fa">&#xf08a;</span> 3</span></div>
									</div>
									<div className="comment-content">老板娘生日快乐！</div>
									<div className="sub-comments-wrapper">
										<div className="sub-comments">
											<ul>
												<li className="comment">
													<div className="comment-avatar"><img className="avatar" src='https://media.tenor.com/images/b3570952aaae135cb2acafe68d03e276/tenor.gif'/></div>
													<div className="comment-body">	
														<div className="comment-header">
															<a className="user-link">Jay</a>
															<div className="comment-info"><span className="comment-date">3 分钟前</span><span className="comment-likes"><span className="fa">&#xf08a;</span> 1</span></div>
														</div>
														<div className="comment-content">祝祝祝！！！</div>
													</div>
												</li>
												<li className="comment">
													<div className="comment-avatar"><img className="avatar" src='https://365cpop.files.wordpress.com/2013/03/jay-chou-opus-12-shou-yu.jpg'/></div>
													<div className="comment-body">	
														<div className="comment-header">
															<a className="user-link">Crystal</a>
															<div className="comment-info"><span className="comment-date">1 分钟前</span><span className="comment-likes"><span className="fa">&#xf08a;</span> 0</span></div>
														</div>
														<div className="comment-content">Vestibulum mattis lacus id mauris dictum, non faucibus libero iaculis. </div>
													</div>
												</li>												
											</ul>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>

          <div className="featured-pages">
						<div className="section-header">&#9733; Popular Pages</div>

						<a className="featured-page">
							<div className="featured-page-content">
								<div className="page-image">
									<image className="gallery" src="http://www.todayonline.com/sites/default/files/styles/photo_gallery_image_lightbox/public/photos/43_images/photo-128.jpg?itok=gKroWfhI"/>
									<image className="avatar" src="http://imgcache.qq.com/music/photo/album_300/17/300_albumpic_8217_0.jpg"/>
								</div>
								<div className="featured-text">
									<h5>Switch you fav color with Smiley</h5><br/>
									<p>{renderPopularAbstract()}</p>
								</div>
								<div className="post-info">
									<span className="num-comments"><span className="fa">&#xf0e5;</span> 43</span><span className="num-likes"><span className="fa">&#xf08a;</span> 1234</span>
								</div>
							</div>
						</a>

						<a className="featured-page">
							<div className="featured-page-content">
								<div className="page-image">
									<image className="gallery" src="http://www.straitstimes.com/sites/default/files/styles/x_large/public/articles/2015/11/07/jay.jpg?itok=RdYlAr65"/>
									<image className="avatar" src="https://media.tenor.com/images/b3570952aaae135cb2acafe68d03e276/tenor.gif"/>
								</div>
								<div className="featured-text">
									<h5>My Trip to Chinatown</h5><br/>
									<p>Vestibulum mattis lacus id mauris dictum, non faucibus libero iaculis. </p>
								</div>
								<div className="post-info">
									<span className="num-comments"><span className="fa">&#xf0e5;</span> 198</span><span className="num-likes"><span className="fa">&#xf08a;</span> 367</span>
								</div>
							</div>
						</a>

						<a className="featured-page">
							<div className="featured-page-content">
								<div className="page-image">
									<image className="gallery" src="http://68.media.tumblr.com/7325898993f698f79a0f09a2e6ce0bfa/tumblr_mhuuzkYFNO1s3pcluo1_400.gif"/>
									<image className="avatar" src="https://365cpop.files.wordpress.com/2013/03/jay-chou-opus-12-shou-yu.jpg"/>
								</div>
								<div className="featured-text">
									<h5>Secret</h5><br/>
									<p>Cras pellentesque lobortis odio a ultrices. Vestibulum mattis lacus id mauris dictum, non faucibus libero iaculis.</p>
								</div>
								<div className="post-info">
									<span className="num-comments"><span className="fa">&#xf0e5;</span> 345</span><span className="num-likes"><span className="fa">&#xf08a;</span> 200</span>
								</div>
							</div>
						</a>

						<a className="featured-page">
							<div className="featured-page-content">
								<div className="page-image">
									<image className="gallery" src="http://himg2.huanqiu.com/attachment2010/2015/0119/20150119022840676.jpeg"/>
									<image className="avatar" src="http://orig09.deviantart.net/9665/f/2013/182/c/f/jay_chou___big_ben_mv_by_fierlovesjay-d6bkb9c.gif"/>
								</div>
								<div className="featured-text">
									<h5>Fairytale-like wedding</h5><br/>
									<p>{renderPopularAbstract()}</p>
								</div>
								<div className="post-info">
									<span className="num-comments"><span className="fa">&#xf0e5;</span> 163</span><span className="num-likes"><span className="fa">&#xf08a;</span> 1034</span>
								</div>
							</div>
						</a>

					</div>


        </div>
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
      </div>
    )
  };
};

export default Post;