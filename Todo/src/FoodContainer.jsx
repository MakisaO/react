import { useState } from "react";
import FoodList from "./FoodList";
import FoodForm from "./FoodForm";

const FoodContainer = () => {
  const initialFood = [
    { name: "cake", price: 35, isBestSeller: true },
    { name: "bread", price: 25, isBestSeller: false },
    { name: "milk", price: 15, isBestSeller: true },
    { name: "donut", price: 45, isBestSeller: false },
    { name: "cookie", price: 55, isBestSeller: true },
  ];

  const [food, setFood] = useState(initialFood);

  // ดึงค่าโหมดปัจจุบันจาก localStorage (ค่าเริ่มต้นคือ Admin Mode = true)
  const [isAdmin, setIsAdmin] = useState(() => {
    const savedMode = localStorage.getItem("userMode");
    return savedMode ? savedMode === "admin" : true;
  });

  // สลับโหมด User / Admin พร้อมบันทึกลง localStorage
  const toggleMode = () => {
    const nextIsAdmin = !isAdmin;
    setIsAdmin(nextIsAdmin);
    localStorage.setItem("userMode", nextIsAdmin ? "admin" : "user");
  };

  // ลบรายการอาหารตาม index
  const deleteItem = (index) => {
    const result = food.filter((_, i) => i !== index);
    setFood(result);
  };

  // เพิ่มรายการอาหารใหม่เข้า Array
  const addItem = (item) => {
    const result = [...food, item];
    setFood(result);
  };

  return (
    <div className="menu-container">
      <div className="mode-toggle">
        <span>{isAdmin ? "Admin Mode " : "User Mode "}</span>
        <button onClick={toggleMode}>{isAdmin ? "User" : "Admin"}</button>
      </div>

      <h3>Our Menu</h3>
      <FoodList food={food} deleteItem={deleteItem} isAdmin={isAdmin} />
      {isAdmin && <FoodForm addItem={addItem} />}
    </div>
  );
};

export default FoodContainer;
