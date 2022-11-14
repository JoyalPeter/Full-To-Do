import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CurrentList from "../currentList/currentList";
import styles from "./addItem.module.css";

export default function Additem() {
  const params = useParams();
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [inputs, setInput] = useState("");
  const [intialDispFlag, setFlag] = useState(1);

  async function intialDisplay() {
    const response = await fetch("/todo/display");
    const data = await response.json();
    setItems(data);
    console.log(data);
  }
  if (intialDispFlag) {
    intialDisplay();
    setFlag(0);
  }
  async function add() {
    if (inputs) {
      const response = await fetch("/todo/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: inputs }),
      });
      const data = await response.json();
      setItems(data);
    } else alert("Input Field Empty");
  }

  function logout() {
    localStorage.setItem("LoginToken", false);
    navigate("/");
  }

  function deleteAccount() {
    if (window.confirm("Do you want delete your account? ")) {
      localStorage.setItem("LoginToken", false);
      localStorage.removeItem(params.User);
      navigate("/");
    }
  }

  return (
    <>
      <div>
        <div>
          <div className={styles.UserName}>{params.User} Logged In</div>
          <div onClick={logout} className={styles.Logout}>
            Logout
          </div>
          <a onClick={deleteAccount} href="" className={styles.delAccnt}>
            De-activate Account
          </a>
        </div>
        <div>
          Add New Item <input onChange={(e) => setInput(e.target.value)} />
          <button className={styles.submitbutton} onClick={add}>
            Submit
          </button>
        </div>
      </div>
      <CurrentList items={items} setItems={setItems} />
    </>
  );
}
