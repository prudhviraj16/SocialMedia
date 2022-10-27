import React from 'react';
import './rightbar.css'
import { useSelector } from 'react-redux';
import modeReducer from './../../redux/Darkmode/reducer';
const Rightbar = () => {

    const mode = useSelector((state)=>state.modeReducer.mode)

    return ( 
        <div className={ mode ? 'rightbar dark' : 'rightbar'}>
            <div className="container">
                <div className="item">
                    <span>Suggestion For You</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif" alt="" />
                            <span>Jane Doe</span>
                        </div>

                        <div className="buttons">
                            <button>Follow</button>
                            <button>Dismiss</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif" alt="" />
                            <span>Jane Doe</span>
                        </div>

                        <div className="buttons">
                            <button>Follow</button>
                            <button>Dismiss</button>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <span>Latest Activities</span>
                    <div className="user">
                        <div className="userInfo">
                        <img src="https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif" alt="" />
                           <p>
                               <span>Jane Doe</span><span style={{color : 'gray',fontWeight:'400'}}> changed their profile picture</span>
                           </p>
                        </div>

                        <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                        <img src="https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif" alt="" />
                           <p>
                               <span>Jane Doe</span> <span style={{color : 'gray',fontWeight:'400'}}> changed their profile picture</span>
                           </p>
                        </div>

                        <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                        <img src="https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif" alt="" />
                           <p>
                               <span>Jane Doe</span> <span style={{color : 'gray',fontWeight:'400'}}> changed their profile picture</span>
                           </p>
                        </div>

                        <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                        <img src="https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif" alt="" />
                           <p>
                               <span>Jane Doe</span> <span style={{color : 'gray',fontWeight:'400'}}> changed their profile picture</span>
                           </p>
                        </div>

                        <span>1 min ago</span>
                    </div>
                </div>

                <div className="item">
                    <span>Online Friends</span>
                    <div className="user">
                        <div className="userInfo">
                        <img src="https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif" alt="" />

                        <div className="online">

                        </div>
                        <span>John Doe</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                        <img src="https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif" alt="" />

                        <div className="online">
                            
                        </div>
                        <span>John Doe</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                        <img src="https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif" alt="" />

                        <div className="online">
                            
                        </div>
                        <span>John Doe</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                        <img src="https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif" alt="" />

                        <div className="online">
                            
                        </div>
                        <span>John Doe</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                        <img src="https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif" alt="" />

                        <div className="online">
                            
                        </div>
                        <span>John Doe</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                        <img src="https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif" alt="" />

                        <div className="online">
                            
                        </div>
                        <span>John Doe</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                        <img src="https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif" alt="" />

                        <div className="online">
                            
                        </div>
                        <span>John Doe</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rightbar; 