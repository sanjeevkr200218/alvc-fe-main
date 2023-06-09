function List({ items }) {
  return (
    <div className="flex-col flex space-y-2 sm:space-y-3 md:space-y-6 lg:space-y-8">
      {items.map((list, index) => (
        <div key={index} className="">
          <div className="flex items-center space-x-4">
            <img
              src="/check-mark.svg"
              className="w-8 h-8 object-contain"
              alt="checbox mark"
            />
            <p className="h3">{list.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
