import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };

    console.log("child constructor");
  }

  async componentDidMount() {
    console.log("child componentDidMount");
    const data = await fetch("https://api.github.com/users/sreevani10");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("component Did update");
  }

  componentWillUnmount() {
    console.log("component will unmouting");
  }
  render() {
    console.log("child render");
    const { name, location } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name:{name}</h2>
        <h3>Location : {location}</h3>
      </div>
    );
  }
}

export default UserClass;

/*****
 * ----MOUTING----
 *
 *
 * constrcutor (dummy)
 * render (Dummy)
 * <html dummy>
 * component did mount
 * <api call>
 * <this.setstate)--->state var will update
 *
 *
 * ---UPDATE
 *
 * render(api data)
 * html(new api data)
 * component Did update
 *
 * ----UNMOUNTING
 *
 * navigate to new page like present were gone
 */
