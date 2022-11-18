import React, { Component, useState } from "react";

type AddTodoProps = { name: string };


class AddTodo extends Component<AddTodoProps> {
  addSomething() {

  }

  saveButtonClicked() {}

  public render(): React.ReactNode {
    return (
      <div className="font-bold mt-6 border-3-pink-100 border rounded-md space-y-2 py-2 mx-2">
        <div className="mx-2">
          <h1>Create a Todo</h1>
          <input
          value={this.temprary}
            onChange={this.addSomething}
            placeholder="Write an article about XState"
            className="p-2 rounded-md max-w-xl w-full text-gray-600 border-2 border-green-500"
          />
          <div className="space-x-2 space-y-2">
            <button
              onClick={this.saveButtonClicked}
              className="bg-green-500 text-white font-bold p-2 rounded-md"
            >
              Save
            </button>
            <button className="bg-yellow-500 text-white font-bold p-2 rounded-md">
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddTodo;
