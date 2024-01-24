/* eslint-disable react/prop-types */
export default function Stats({ items }) {
  //if there are no items
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your packingList</em>
      </p>
    );
  //derived state
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentagePacked = Math.round(+(numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentagePacked === 100
          ? "You are ready to go ✈"
          : `You have ${numItems} items on your list, and you have packed ${numPacked}
          (${percentagePacked}%)`}
      </em>
    </footer>
  );
}
