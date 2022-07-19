import React from 'react'
import doremon from '../assets/imgs/doraemon.png'
import asus from '../assets/imgs/image_3.png'
import asus_logo from '../assets/imgs/asus.png'

function Body() {
  return (
    <div className="left-side">
        <div className="story">
            <div className="stories">
                <a href="#"><img src={doremon} width="60" height="60" alt="doraemon" /></a>
                <p>HIHIHI</p>
            </div>

            <div className="stories">
                <a href="#"><img src={doremon} width="60" height="60" alt="doraemon" /></a>
                <p>HIHIHI</p>
            </div>

            <div className="stories">
                <a href="#"><img src={doremon} width="60" height="60" alt="doraemon" /></a>
                <p>HIHIHI</p>
            </div>

            <div className="stories">
                <a href="#"><img src={doremon} width="60" height="60" alt="doraemon" /></a>
                <p>HIHIHIiiiiiiii2345ii</p>
            </div>
        </div>
        <div className="posts">
            <div className="post-title">
                <div className="post-left">
                    <div className="image">
                        <img src={asus_logo} alt="doraemon" width="32" height="32" />
                    </div>
                    <div className="details">
                        <p className="name">asus</p>
                    </div>
                </div>

                <div className="post-right">
                    <i className="fas fa-ellipsis-h"></i>
                </div>
            </div>

            <div className="post-content">
                <img src={asus} alt="asus laptop" height="600" width="600" />
            </div>
            <div className="post-footer">
                <div className="like-share-comment">
                    <i className="far fa-heart"></i>
                    <i className="far fa-comment"></i>
                    <i className="far fa-paper-plane"></i>
                </div>
                <div className="save">
                    <i className="far fa-bookmark"></i>
                </div>
            </div>

            <div className="post-footer-content">
                <p className="likes">999 likes</p>
                <p className="name">asus</p>
                <p className="comments">View all 101 commments</p>
                <p className="posting-time">2 HOURS AGO</p>
            </div>

            <div className="add-comment">
                <div className="left-side">
                    <i className="far fa-smile-beam"></i>
                    <input type="text" placeholder="Add a comment..." />
                </div>
                <div className="right-side-post">
                    <p className="post">Post</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Body