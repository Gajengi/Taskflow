import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((r) => r.json())
      .then(setData)
      .catch((e) => setErr(String(e)));
  }, []);

  return (
    <div style={{ fontFamily: "Times New Roman", padding: 20 }}>
      <h1>TaskFlow</h1>
      <p>Frontend running ✅</p>

      <h2>API Health</h2>
      {err && <p style={{ color: "red" }}>{err}</p>}
      {!data && !err && <p>Loading...</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}