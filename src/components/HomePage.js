import React from 'react';

function HomePage() {
  return (
    <div className='container'>
      <div className='homepage'>
        <div className='homepagetext'>
          <p>
            Welcome to Kanji Info!
            <br /><br />Enter a single Kanji character in the search bar to retrieve information about it.
            <br /><br />Please note that the database is incomplete. It currently contains only 1,235 Jōyō Kanji.
            <br /><br />Here are some Kanji you can search:
          </p>
          
          <div className="homepagekanji">
            <p className="homepagekanji">
              <br/>年 新 後 雨 水
              <br/>会 体 安 飯 度
              <br/>時 回 間 猫 方
              <br/>野 心 家 山 定
              <br/>代 開 動 表 主
            </p>
          </div>
        </div>

        <img src="https://www.fluentu.com/blog/japanese/wp-content/uploads/sites/6/2014/05/how-to-learn-kanji.jpg" alt="https://via.placeholder.com/300" />
      
      </div>
    </div>
  );
}

export default HomePage;
