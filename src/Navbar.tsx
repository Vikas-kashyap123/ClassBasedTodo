import React, { Component } from "react";

type NavbarProps = { Completed: number; Incompleted: number };

class Navbar extends Component<NavbarProps> {
  render(): React.ReactNode {
    return (
      <div className="font-bold space-y-2 mx-4 border-b-2 border-white">
        <div className="flex justify-between">
          <h2>Vikas's Todo</h2>
          <div className="">
            <h3 className="text-red-600">
              Incompleted {this.props.Incompleted}{" "}
            </h3>
            <h3 className="text-green-800">
              Completed {this.props.Completed}{" "}
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
