export default Settings = ({ data, setData }) => {
  const { theme } = data;
  const handleDataChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      theme: e.target.name,
    }));
  };

  return (
    <div>
      <div>
        <label>
          <input
            type={"checkbox"}
            name="dark"
            checked={theme === "dark"}
            onClick={(e) => {
              handleDataChange(e);
            }}
          />
          Dark
        </label>
      </div>
      <div>
        <label>
          <input
            type={"checkbox"}
            name="light"
            checked={theme === "light"}
            onClick={(e) => {
              handleDataChange(e);
            }}
          />
          Light
        </label>
      </div>
    </div>
  );
};
