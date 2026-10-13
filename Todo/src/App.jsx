import { useState } from "react";
import "./App.css";
import FoodContainer from "./FoodContainer";

function App() {
  const [isRed, setIsRed] = useState(false);

  const [inputText, setInputText] = useState("Hello world");
  const [selectedColor, setSelectedColor] = useState("#ff007f");
  const [text, setText] = useState("Hello world");
  const [textColor, setTextColor] = useState("#ff007f");

  const [count, setCount] = useState(1);

  const handleApply = () => {
    setText(inputText);
    setTextColor(selectedColor);
  };

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "sans-serif",
        display: "flex",
        flexDirection: "column",
        gap: "40px",
      }}
    >
      <section>
        <h3>1. เปลี่ยนสี button และข้อความเมื่อกดปุ่ม</h3>
        <button
          onClick={() => setIsRed(!isRed)}
          style={{
            backgroundColor: isRed ? "red" : "blue",
            color: "black",
            fontSize: "28px",
            padding: "12px 24px",
            border: "4px solid #7f7f7f",
            cursor: "pointer",
            minWidth: "160px",
          }}
        >
          {isRed ? "Go Blue" : "Go Red"}
        </button>
      </section>

      <section>
        <h3>2. แสดงข้อความและสีตามที่กำหนด (onChange)</h3>
        <h2
          style={{ color: textColor, margin: "0 0 15px 0", fontSize: "26px" }}
        >
          {text}
        </h2>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            style={{ fontSize: "18px", padding: "6px 10px", width: "220px" }}
          />

          <input
            type="color"
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            style={{
              width: "50px",
              height: "35px",
              padding: "2px",
              border: "2px solid #ccc",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          />

          <button
            onClick={handleApply}
            style={{ padding: "6px 14px", fontSize: "16px", cursor: "pointer" }}
          >
            Click
          </button>
        </div>
      </section>

      <section>
        <h3>3. แสดงตัวเลข เพิ่ม / ลด ตามการกดปุ่ม</h3>
        <h1 style={{ fontSize: "36px", margin: "0 0 15px 0" }}>{count}</h1>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={() => setCount(count + 1)}
            style={{ padding: "8px 16px", fontSize: "16px", cursor: "pointer" }}
          >
            Count Up
          </button>
          <button
            onClick={() => setCount(count - 1)}
            style={{ padding: "8px 16px", fontSize: "16px", cursor: "pointer" }}
          >
            Count Down
          </button>
        </div>
      </section>

      <hr />

      <section>
        <FoodContainer />
      </section>
    </div>
  );
}

export default App;
