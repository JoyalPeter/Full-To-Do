import { useState } from "react";
import styles from "./currentList.module.css";
export default function CurrentList(props) {
  const [flag, setFlag] = useState(false);
  const [itemId, setItemId] = useState("");
  const [itemName, setItemName] = useState("");
  const [edittedName, setEdittedName] = useState("");

  async function deleteItem(itemId) {
    const response = await fetch("/todo/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: itemId }),
    });
      const data = await response.json();
      props.setItems(data);
    
  }

  async function editItem(id, name) {
    setItemId(id);
    setItemName(name);
    setFlag(!flag);
  }

  async function applyEdit() {
    if (edittedName) {
      const response = await fetch("/todo/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: itemId, name: edittedName }),
      });
      const data = await response.json();
      props.setItems(data);
      setFlag(!flag);
    } else {
      alert("Input Field Empty");
    }
  }

  return (
    <>
      {flag && (
        <div>
          Enter Edited Name{" "}
          <input
            placeholder={itemName}
            onChange={(e) => setEdittedName(e.target.value)}
          />
          <button className={styles.bt} onClick={applyEdit}>
            Submit
          </button>
        </div>
      )}
      <h3>Current List</h3>
      {props.items.map((item, index) => (
        <div className={styles.dispDiv}>
          <span className={styles.dispLine}>{index + 1})</span>
          <span className={styles.dispLine}>{item.names}</span>
          <button
            className={styles.bt}
            onClick={() => editItem(item.id, item.names)}
          >
            Edit
          </button>
          <button
            className={styles.bt}
            onClick={() => {
              deleteItem(item.id);
            }}
            disabled={flag}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}
