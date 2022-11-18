import Body from "./Body";
import React, { Component } from "react";

type AppProps = { open: boolean };
type AppState = {};

class App extends Component<AppState, AppProps> {
  constructor(props: AppState) {
    super(props);

    this.state = {
      open: true,
    };
  }

  render(): React.ReactNode {
    return (
      <div className="bg-gradient-to-r  from-yellow-700 to-white w-full h-screen">
        {this.state.open ? (
          <div className="items-center justify-center flex ">
            <button
              onClick={() => this.setState({ open: false })}
              className="text-indigo-800 font-bold  text-2xl mb-4 sm:text-3xl"
            >
              ADVANCE TODO
            </button>
          </div>
        ) : (
          <div className="items-center justify-center flex ">
            <button
              onClick={() => this.setState({ open: true })}
              className="text-indigo-800 font-bold  text-2xl mb-4 sm:text-3xl"
            >
              ADVANCE TODO
            </button>
          </div>
        )}

        {this.state.open && <Body />}
      </div>
    );
  }
}
export default App;
