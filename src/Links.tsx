import { Link } from "react-router-dom";
import { useChromeStorageSync } from "use-chrome-storage";

interface SavedLinks {
  page: String;
  links: {
    text: String;
    link: String;
  };
}

function Links() {
  const [value, setValue, isPersistent] =
    useChromeStorageSync<SavedLinks[]>("data");

  console.log(value);
  return (
    <>
      <h1>Links Page</h1>
      <Link to={"settings"}>Settings</Link>
      {/* {value &&
        value.map((savedLink) => {
          return <p>{savedLink.page}</p>;
        })} */}
    </>
  );
}

export default Links;
