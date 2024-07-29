import React from "react";
import "./profile.scss"
import Card from "../../card/Card";

function Profile() {
  return (
    <div className="profile">
      <h3>Profile</h3>
      <Card cardClass={"card"}>
        <form>
          <p>
            <label>Name:</label>
            <input 
            type="text" 
            name="name"
            placeholder="Name" 
            value={""}
            onChange={()=>console.log("name")}
            />
          </p>

          <p>
            <label>Email:</label>
            <input 
            type="email" 
            name="email"
            placeholder="Email" 
            />
          </p>

          <button className="--btn --btn-primary --btn-block">
            Update Profile
          </button>
        </form>
      </Card>
    </div>
  );
}

export default Profile;
