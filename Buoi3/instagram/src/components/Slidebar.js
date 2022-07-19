import React from 'react'
import doremon from '../assets/imgs/doraemon.png'


function Slidebar() {
  return (
    <div className="right-side">
                <div className="profile-title">

                    <div className="profile-left">
                        <img src={doremon} alt="doraemon" width="56" height="56" />
                    </div>

                    <div className="details">
                        <p className="name">_ngotai_</p>
                        <p className="surname">Thế Tài</p>
                    </div>

                    <div className="profile-right">
                        <p>Switch</p>
                    </div>
                </div>

                <div className="suggestions">
                    <p style={{opacity: 0.6}}>Suggestions for you</p>
                    <p>See All</p>
                </div>
                <div className="suggestion-title">
                    <div className="suggestion-left">
                        <div className="image">
                            <img src={doremon} alt="doraemon" height="32" width="32" />
                        </div>
                        <div className="details">
                            <p className="name">doraemon</p>
                            <p className="location">VietNam</p>
                        </div>
                    </div>
                    <div className="suggestion-right">
                        <p>Follow</p>
                    </div>
                </div>
                <div className="suggestion-title">
                    <div className="suggestion-left">
                        <div className="image">
                            <img src={doremon} alt="doraemon" height="32" width="32" />
                        </div>
                        <div className="details">
                            <p className="name">doraemon</p>
                            <p className="location">VietNam</p>
                        </div>
                    </div>
                    <div className="suggestion-right">
                        <p>Follow</p>
                    </div>
                </div>
                <div className="suggestion-title">
                    <div className="suggestion-left">
                        <div className="image">
                            <img src={doremon} alt="doraemon" height="32" width="32" />
                        </div>
                        <div className="details">
                            <p className="name">doraemon</p>
                            <p className="location">VietNam</p>
                        </div>
                    </div>
                    <div className="suggestion-right">
                        <p>Follow</p>
                    </div>
                </div>
            </div>
  )
}

export default Slidebar