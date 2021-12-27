import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://pbs.twimg.com/profile_banners/1370282851254603779/1636574065/1500x500"
        profileSrc="https://avatars.githubusercontent.com/u/80510809?s=400&u=063ca87f7f618d24562293d3da7fa7d0fa587ce6&v=4"
        title="Lucas Becker"
      />
      <Story
        image="https://images.pexels.com/photos/10529582/pexels-photo-10529582.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        profileSrc="https://images.pexels.com/photos/5436771/pexels-photo-5436771.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Famous Person"
      />
      <Story
        image="https://images.pexels.com/photos/3098597/pexels-photo-3098597.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        profileSrc="https://images.pexels.com/photos/53159/man-old-fisherman-portrait-53159.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        title="Your Dad"
      />
      <Story
        image="https://images.pexels.com/photos/3444345/pexels-photo-3444345.png?auto=compress&cs=tinysrgb&h=750&w=1260"
        profileSrc="https://images.pexels.com/photos/716658/pexels-photo-716658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Santa Claus"
      />
      <Story
        image="https://images.pexels.com/photos/6052776/pexels-photo-6052776.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        profileSrc="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        title="Some Guy"
      />
    </div>
  );
}

export default StoryReel;
