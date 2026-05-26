import { useEffect, useState } from "react";
//import { WEATHER_CODES } from "./Codes";

const WEATHER_CODES = {
  0: "Солнечно",
  1: "Преимущественно солнечно",
  2: "Переменная облачность",
  3: "Облачно",
  45: "Туман",
  48: "Изморозевый туман",
  51: "Лёгкая морось",
  53: "Морось",
  55: "Сильная морось",
  56: "Лёгкая ледяная морось",
  57: "Ледяная морось",
  61: "Небольшой дождь",
  63: "Дождь",
  65: "Сильный дождь",
  66: "Лёгкий ледяной дождь",
  67: "Ледяной дождь",
  71: "Небольшой снег",
  73: "Снег",
  75: "Сильный снег",
  77: "Снежные зёрна",
  80: "Небольшие ливни",
  81: "Ливни",
  82: "Сильные ливни",
  85: "Небольшие снежные заряды",
  86: "Снежные заряды",
  95: "Гроза",
  96: "Небольшая гроза с градом",
  99: "Гроза с градом",
};
export default function Weather() {
  const [weather, setWeather] = useState([]);
  const [currentDay, setCurrentDay] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWeather(lat, lon) {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`,
        );

        const data = await response.json();

        console.log(data);

        const formatted = data.daily.time.map((date, index) => ({
          date,
          weatherCode: data.daily.weather_code[index],
          tempMax: data.daily.temperature_2m_max[index],
          tempMin: data.daily.temperature_2m_min[index],
        }));

        setWeather(formatted);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        fetchWeather(lat, lon);
      },
      () => {
        fetchWeather(55.7522, 37.6156);
      },
    );
  }, []);

  function nextDay() {
    setCurrentDay((prev) => (prev === weather.length - 1 ? 0 : prev + 1));
  }

  function prevDay() {
    setCurrentDay((prev) => (prev === 0 ? weather.length - 1 : prev - 1));
  }

  if (loading) {
    return <div style={styles.wrapper}>Загрузка...</div>;
  }

  if (!weather.length) {
    return <div style={styles.wrapper}>Нет данных о погоде</div>;
  }

  const day = weather[currentDay];

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.date}>{formatDate(day.date)}</h2>

        <p style={styles.status}>
          {WEATHER_CODES[day.weatherCode] || "Неизвестно"}
        </p>

        <div>
          <div>↑ {Math.round(day.tempMax)}°C</div>
          <div>↓ {Math.round(day.tempMin)}°C</div>
        </div>

        <div>
          <button onClick={prevDay} style={styles.button}>
            ←
          </button>

          <button onClick={nextDay} style={styles.button}>
            →
          </button>
        </div>

        <div style={styles.indicators}>
          {weather.map((_, index) => (
            <div
              key={index}
              style={{
                ...styles.dot,
                ...(index === currentDay ? styles.activeDot : {}),
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("ru-RU", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

const styles = {
  wrapper: {
    width: "100%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: "250px",
    padding: "10px",
    borderRadius: "10px",

    textAlign: "center",

    background: "#ed9049",
    color: "white",
  },

  date: {
    margin: "0px",
  },
  status: {
    margin: "0px",
  },

  indicators: {
    marginTop: "10px",

    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },

  dot: {
    width: "12px",
    height: "12px",
    borderRadius: "4px",
    background: "#d18042",
  },

  activeDot: {
    background: "#f9bd8e",
  },
};
