const Logo = ({ imageUrl, setDescription, description, title, dimensions }) => {
  return (
    <div
      onMouseEnter={() => {
        setDescription(description);
      }}
      onMouseLeave={() => {
        setDescription("");
      }}
    >
      <img
        src={imageUrl}
        className={`${dimensions} z-10  object-cover`}
        alt={title}
      />
    </div>
  );
};

export default Logo;
