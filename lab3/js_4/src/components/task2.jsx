import React, { useState, useRef, useEffect } from "react";

function delay(n) {
  return new Promise((resolve) => {
    setTimeout(resolve, n * 1000);
  });
}

async function getFirstRepoName(username) {
  const userResponse = await fetch(`https://api.github.com/users/${username}`, {
    headers: { "User-Agent": "vite-app" },
  });

  if (!userResponse.ok) {
    throw new Error("User not found");
  }

  const userData = await userResponse.json();

  const reposResponse = await fetch(userData.repos_url);
  if (!reposResponse.ok) {
    throw new Error("Repos not found");
  }

  const repos = await reposResponse.json();

  if (repos.length === 0) {
    return "No repositories";
  }

  return repos[0].name;
}

export default function task2() {
  const [value, setValue] = useState(0);
  const [running, setRunning] = useState(false);
  const stopRef = useRef(false);

  const [repoName, setRepoName] = useState("");
  const [error, setError] = useState("");

  const start = async (n) => {
    if (running) return;

    setRunning(true);
    stopRef.current = false;

    for (let i = n; i >= 0; i--) {
      if (stopRef.current) break;
      setValue(i);
      await delay(1);
    }

    setRunning(false);
  };

  const stop = () => {
    stopRef.current = true;
    setRunning(false);
  };

  useEffect(() => {
    getFirstRepoName("tyqFaradey")
      .then((name) => {
        setRepoName(name);
        setError("");
      })
      .catch(() => {
        setError("Произошла ошибка");
        setRepoName("");
      });
  }, []);

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => start(10)}>Start</button>
      <button onClick={stop}>Stop</button>
      {error ? <p>{error}</p> : <p>{repoName}</p>}
    </div>
  );
}
