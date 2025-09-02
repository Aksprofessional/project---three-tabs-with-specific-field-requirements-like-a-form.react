export default Profile = ({ data, setData }) => {
  const { name, age, email } = data;
  const handleDataChange = (e, item) => {
    setData((prevData) => ({
      ...prevData,
      [item]: e.target.value,
    }));
  };
  return (
    <div>
      <div>
        <label>NAME:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => handleDataChange(e, "name")}
        />
      </div>
      <div>
        <label>EMAIL:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => handleDataChange(e, "email")}
        />
      </div>
      <div>
        <label>AGE:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => handleDataChange(e, "age")}
        />
      </div>
    </div>
  );
};
