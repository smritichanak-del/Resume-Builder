function Preview({ data }) {
  return (
    <div style={{ width: "50%", padding: "20px" }}>
      <h2>{data.name || "Your Name"}</h2>
      <p>{data.email || "your@email.com"}</p>

      <h3>Skills</h3>
      <p>{data.skills || "Your skills will show here"}</p>
    </div>
  );
}

export default Preview; 