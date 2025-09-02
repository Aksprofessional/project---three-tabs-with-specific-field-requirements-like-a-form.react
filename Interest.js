export default Interest = ({ data, setData }) => {
  const { interest } = data;
  const handleDataChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      interest: e.target.name,
    }));
  };

  return (
    <div>
      <div>
        <label>
          <input
            type={"checkbox"}
            name="cooking"
            checked={interest.includes("cooking")}
            onChange={(e) => handleDataChange()}
          />
          Cooking
        </label>
      </div>

      <div>
        <label>
          <input
            type={"checkbox"}
            name="music"
            checked={interest.includes("music")}
          />
          Music
        </label>
      </div>
    </div>
  );
};
