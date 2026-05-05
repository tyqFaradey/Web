import React, { useState, useRef } from "react";

async function loadJson(url) {
  const response = await fetch(url);

  if (response.status === 200) {
    return await response.json();
  }

  throw new HttpError(response);
}

async function getGithubUser(name) {
  try {
    let user = await loadJson(`https://api.github.com/users/${name}`);
    return user;
  } catch (err) {
    throw err;
  }
}

export default function task3() {
  const [data, setData] = useState(null);

  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const handleLoad = async () => {
    try {
      const result = await getGithubUser(user);
      setData(result);
      setError("");
    } catch (e) {
      setData(null);
      setError("Пользователь не найден");
    }
  };

  return (
    <div>
      <input
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder="Введите логин"
      />

      <button onClick={handleLoad}>Загрузить</button>

      {error && <p>{error}</p>}
      {data && <p>{data.name}</p>}
    </div>
  );
}
