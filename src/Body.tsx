import React, { ChangeEvent, Component, KeyboardEvent } from "react";
import Navbar from "./Navbar";
import { AiOutlineDelete } from "react-icons/ai";
import { FcLeftUp2, FcLeftDown2 } from "react-icons/fc";

type BodyProps = {};

type BodyStateTypes = {
  show: Boolean;
  todo: string[];
  gotItem: string[];
  task: string;
};

class Body extends Component<BodyProps, BodyStateTypes> {
  constructor(props: BodyProps) {
    super(props);

    this.state = {
      show: false,
      task: "",
      todo: [],
      gotItem: [],
    };
    this.handleAddSome = this.handleAddSome.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
    this.handleDoneClick = this.handleDoneClick.bind(this);
  }
  handleAddSome(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ task: event.target.value });
  }
  handleSaveClick(): void {
    this.setState({ show: false });
    if (this.state.task.trim() !== "") {
      this.setState({
        todo: [this.state.task, ...this.state.todo],
        task: "",
      });
    } else {
      alert("please Add something");
    }
  }
  handleKeyUp(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key == "Enter") {
      this.handleSaveClick();
    }
  }

  handleAddTodo(): void {
    this.setState({ show: true });
  }

  handleCancelClick(): void {
    this.setState({ show: false });
  }
  handleDoneClick(id: number): void {
    const deleted = this.state.todo.filter((element, key) => {
      return key !== id;
    });
    this.setState({ todo: [...deleted] });
    const deleted1 = this.state.todo.filter((element, key) => {
      return key === id;
    });
    this.setState({ gotItem: [...deleted1, ...this.state.gotItem] });
  }
  handleUpClicked(id: number): void {
    const upMove = this.state.gotItem.filter((element, key) => {
      return key !== id;
    });
    this.setState({ gotItem: [...upMove] });
    const upMove2 = this.state.gotItem.filter((element, key) => {
      return key === id;
    });
    this.setState({ todo: [...upMove2, ...this.state.todo] });
  }

  handleRemoveItem(id: number): void {
    const deleteFromUp = this.state.todo.filter((element, key) => {
      return key !== id;
    });
    this.setState({ todo: [...deleteFromUp] });
  }
  handleRemoveFromDown(id: number): void {
    const deleteFromDown = this.state.gotItem.filter((element, key) => {
      return key !== id;
    });
    this.setState({ gotItem: [...deleteFromDown] });
  }

  public render(): React.ReactNode {
    return (
      <div>
        <Navbar
          Completed={this.state.gotItem.length}
          Incompleted={this.state.todo.length}
        />
        <div className="mx-4 sm:mx-12">
          <h1 className="font-bold text-white foBodynt-2xl text-xl  mt-2">
            Things to get done !
          </h1>
          {this.state.todo.length == 0 && (
            <div className="font-bold text-red-500 ">Please Write a Todo</div>
          )}
          {this.state.todo && (
            <div className="flex flex-col">
              {this.state.todo.map((item, id) => {
                return (
                  <div
                    key={id}
                    className="text-xl items-center  flex font-bold py-2"
                  >
                    <FcLeftDown2 onClick={() => this.handleDoneClick(id)} />

                    <h1>{item}</h1>
                    <h2 className="text-red-400 hover:text-red-800">
                      <AiOutlineDelete
                        onClick={() => this.handleRemoveItem(id)}
                      />
                    </h2>
                  </div>
                );
              })}
            </div>
          )}

          {!this.state.show ? (
            <button
              onClick={this.handleAddTodo}
              className="bg-gradient-to-r from-cyan-300 to-gray-500 font-bold 
        rounded-full px-2 py-2 hover:scale-105"
            >
              Add a Todo
            </button>
          ) : (
            <div className="font-bold mt-6 border-3-pink-100 border rounded-md space-y-2 py-2">
              <div className="mx-2">
                <h1>Create a Todo</h1>
                <input
                  value={this.state.task}
                  onChange={this.handleAddSome}
                  onKeyUp={this.handleKeyUp}
                  placeholder="Write an article about XState"
                  className="p-2 rounded-md max-w-xl w-full text-gray-600 border-2 border-green-500"
                />
                <div className="space-x-2 space-y-2">
                  <button
                    onClick={this.handleSaveClick}
                    className="bg-green-500 text-white font-bold p-2 rounded-md"
                  >
                    Save
                  </button>
                  <button
                    onClick={this.handleCancelClick}
                    className="bg-yellow-500 text-white font-bold p-2 rounded-md"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
          <h1 className="font-bold text-white foBodynt-2xl text-xl  mt-2">
            Things done !
          </h1>
          {this.state.gotItem.length == 0 && (
            <div className="font-bold text-red-500 foBodynt-2xl mt-2">
              No Todo Done
            </div>
          )}
          {this.state.gotItem && (
            <div className=" flex flex-col">
              {this.state.gotItem.map((item, id) => {
                console.log("item", item);
                return (
                  <div
                    key={id}
                    className="text-md items-center flex font-bold py-2"
                  >
                    <FcLeftUp2 onClick={() => this.handleUpClicked(id)} />

                    <h1>{item}</h1>
                    <h2 className="text-red-400 hover:text-red-800">
                      <AiOutlineDelete
                        onClick={() => this.handleRemoveFromDown(id)}
                      />
                    </h2>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Body;
