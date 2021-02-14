import React from "react";

export default function SearchScreen() {
  return (
    <div className="user_container">
      <div className="user_box">
        <img src="https://bambiniphoto.sg/wp-content/uploads/family-photography-bambini-025.jpg" alt="user_photo"></img>
      </div>

      <div className="user_box_img">
        <h2>Parent's name</h2>
        <br></br>
        <p># of children</p>
        <p>genders</p>
        <p>ages</p>
        <p>cooking for family</p>
        <p>accepting children</p>
        <input type="button" value="Connect"></input>
      </div>
    </div>
  );

}
