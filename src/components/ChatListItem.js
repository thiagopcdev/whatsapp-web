import React from 'react';
import './ChatListItem.css';

export default function ChatListItem() {
  return (
    <div className="chatListItem">
      <img className="chatListItem--avatar" alt="avatar" src="man.png" />
      <div className="chatListItem--lines">
        <div className="chatListItem--line">
          <div className="chatListItem--name"> Biuder </div>
          <div className="chatlistItem--date"> 19:42 </div>
        </div>
        <div className="chatListItem--line">
          <div className="chatListItem--LastMsg">
            <p>Oi, tudo bem?</p>
          </div>
        </div>
      </div>
    </div>
  );
}