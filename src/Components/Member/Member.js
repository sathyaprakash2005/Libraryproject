import React, { useEffect, useState } from "react";
import back10 from "../../Assets/back10.jpg";
import loupe from "../../Assets/loupe.png";
import book1 from "../../Assets/book1.webp";
import contact from "../../Assets/contact.png";
import contact1 from "../../Assets/contact1.png";
import "./Member.css";

const Member = () => {
  const [query, setQuery] = useState("");
  const [dateTime, setDateTime] = useState(new Date());
  const [active, setActive] = useState("add");

  const [membername, setMembername] = useState("");
  const [contactnumber, setContactnumber] = useState("");
  const [email, setEmail] = useState("");
  const [memberid, setMemberid] = useState("");
  const [gender, setGender] = useState("");

  // live clock
  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const dayName = dateTime.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  const handleSearch = () => {
    alert(`Searching for: ${query}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/member/member", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          membername,
          contactnumber,
          email,
          memberid,
          gender,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("✅ Updated Successfully!");
        // reset form
        setMembername("");
        setContactnumber("");
        setEmail("");
        setMemberid("");
        setGender("");
      } else {
        alert(`❌ Error: ${data.error}`);
      }
    } catch (err) {
      console.error("❌ Fetch Error:", err.message);
      alert("❌ Failed to connect to server");
    }
  };

  return (
    <div className="member-container">
      <div className="member-container1">
        <img src={back10} alt="" />
        <h1>Library Add</h1>
        <h2>Member</h2>
      </div>

      <div className="member-container2">
        <form onSubmit={(e) => e.preventDefault()}>
          <img src={loupe} alt="" onClick={handleSearch} />
          <input
            type="text"
            placeholder="Search your books"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </div>

      <div className="day-count">
        <p>{dayName}</p>
        <p>{dateTime.toLocaleTimeString()}</p>
      </div>

      <div className="member-container3">
        <img src={book1} alt="" />
      </div>

      <div className="member-container4">
        <div className="member-btn">
          <img
            className={active === "add" ? "active" : ""}
            src={contact}
            alt=""
            onClick={() => setActive("add")}
          />
          <img
            className={active === "remove" ? "active" : ""}
            src={contact1}
            alt=""
            onClick={() => setActive("remove")}
          />
        </div>

        {active === "add" ? (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Member Name"
              value={membername}
              onChange={(e) => setMembername(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Contact Number"
              value={contactnumber}
              onChange={(e) => setContactnumber(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Member ID"
              value={memberid}
              onChange={(e) => setMemberid(e.target.value)}
              required
            />

            <div className="check-cont">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                  required
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Female
              </label>
            </div>

            <button type="submit" className="add-btn">
              Save
            </button>
          </form>
        ) : (
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Member Name" />
            <input type="number" placeholder="Member ID" />
            <button className="rem-btn">Delete</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Member;
