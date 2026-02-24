import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [name, setName] = useState("");
  const [date, setDate] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!name || !date) {
      setMessage("⚠ Please fill all fields.");
      return;
    }

    setMessage(`🎉 Reservation Confirmed!
Name: ${name}
Date: ${date.toDateString()}`);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        fontFamily: "Segoe UI, sans-serif"
      }}
    >
      <div
        style={{
          backdropFilter: "blur(15px)",
          background: "rgba(255,255,255,0.1)",
          padding: "50px",
          borderRadius: "20px",
          width: "100%",
          maxWidth: "420px",
          boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
          color: "white",
          transition: "0.3s",
        }}
      >
        <h2 style={{ marginBottom: "10px", fontSize: "26px" }}>
          Reservation Form
        </h2>
        <p style={{ marginBottom: "25px", opacity: 0.8 }}>
          Book your slot with style ✨
        </p>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
            fontSize: "14px"
          }}
        />

        <div style={{ marginBottom: "20px" }}>
          <DatePicker
            selected={date}
            onChange={(d) => setDate(d)}
            placeholderText="Select Date"
            minDate={new Date()}
            dateFormat="dd/MM/yyyy"
          />
        </div>

        <button
          onClick={handleSubmit}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            border: "none",
            fontWeight: "bold",
            fontSize: "15px",
            background:
              "linear-gradient(135deg, #ff512f, #dd2476)",
            color: "white",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 8px 20px rgba(0,0,0,0.3)"
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow =
              "0 12px 25px rgba(0,0,0,0.5)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow =
              "0 8px 20px rgba(0,0,0,0.3)";
          }}
        >
          Continue 
        </button>

        {message && (
          <div
            style={{
              marginTop: "25px",
              padding: "15px",
              background: "rgba(255,255,255,0.2)",
              borderRadius: "10px",
              whiteSpace: "pre-line"
            }}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;