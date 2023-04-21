import { Link } from "react-router-dom";

interface Settings {
  actions: {
    type: "copy" | "open";
    withTitle: Boolean;
  }[];
}

function Settings() {
  return (
    <div className="w-[500px] p-2">
      <Link to={"/"}>Home</Link>
      <h1 className="text-2xl font-bold">Settings</h1>
      <h2 className="text-xl">Actions</h2>
      <div className="flex flex-col">
        <button>Save</button>
      </div>
    </div>
  );
}

export default Settings;
