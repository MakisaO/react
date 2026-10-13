import FoodItem from "./FoodItem";

const FoodList = ({ food, deleteItem, isAdmin }) => {
  return (
    <div>
      <ul className="food-list">
        {food.map((item, index) => (
          <FoodItem
            key={index}
            index={index}
            item={item}
            deleteItem={deleteItem}
            isAdmin={isAdmin}
          />
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
