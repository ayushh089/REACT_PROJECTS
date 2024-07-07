import React, { useState } from "react";

function Folder({ handleInsertNode, explorer }) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });
  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder: isFolder,
    });
  };
  const addNewFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };
  if (explorer.isFolder) {
    return (
      <div className="m-3">
        <div
          onClick={() => setExpand(!expand)}
          className="w-72 bg-cyan-100 flex items-center justify-between px-4 py-2 rounded cursor-pointer"
        >
          <span className="flex items-center">
            📂<span className="ml-2">{explorer.name}</span>
          </span>
          <div className="flex">
            <button
              onClick={(e) => handleNewFolder(e, true)}
              className=" bg-white "
            >
              Folder +
            </button>
            <button
              onClick={(e) => handleNewFolder(e, false)}
              className="  bg-white"
            >
              File +
            </button>
          </div>
        </div>
        <div className={expand ? "block pl-6" : "hidden"}>
          {showInput.visible && (
            <div>
              <span>{showInput.isFolder ? "📂" : "🗄️"}</span>
              <input
                onKeyDown={addNewFolder}
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                autoFocus
                type="text"
              ></input>
            </div>
          )}
          {explorer.items.map((item, index) => (
            <Folder  handleInsertNode={handleInsertNode} explorer={item}  key={index} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="m-3">
        <span className="pl-3 block">🗄️{explorer.name}</span>
      </div>
    );
  }
}

export default Folder;
