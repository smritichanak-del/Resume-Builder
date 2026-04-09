function Form({ data, setData }) {
  return (
    <div style={{ width: "50%", padding: "20px", background: "#f2f2f2" }}>
      <h3>Enter Details</h3>

      <input
        type="text"
        placeholder="Name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />

      <input
        type="email"
        placeholder="Email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />

      <textarea
        placeholder="Skills"
        value={data.skills}
        onChange={(e) => setData({ ...data, skills: e.target.value })}
      ></textarea>
    </div>
  );
}

export default Form;