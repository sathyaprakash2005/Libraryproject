const express = require('express');
const router = express.Router();
const Member = require('../Model/Member');

// Register
router.post('/member', async (req, res) => {
  const { membername, contactnumber, email, memberid, gender } = req.body;
  try {
    if (!membername || !contactnumber || !email || !memberid || !gender) {
      return res.status(400).json({ error: "Details are required" });
    }

    const userByEmail = await Member.findOne({ email });
    if (userByEmail) {
      return res.status(409).json({ error: "Email already exists" });
    }

    const userById = await Member.findOne({ memberid });
    if (userById) {
      return res.status(409).json({ error: "MemberID already exists" });
    }

    let profilePic = gender === "female" 
      ? "avatars/girls/women.png" 
      : "avatars/boys/man.png";

    const newUser = new Member({ membername, contactnumber, email, memberid, gender, profilePic });
    await newUser.save();

    res.json({ message: "User registered successfully", Member: newUser });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, memberid } = req.body; // login using email + memberid
    if (!email || !memberid) {
      return res.status(400).json({ error: "Email and MemberID are required" });
    }

    const member = await Member.findOne({ email, memberid });
    if (!member) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    res.json(member);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.delete('/delete', async (req, res) => {
  try {
    const { membername, memberid } = req.body;
    if (!membername || !memberid) {
      return res.status(400).json({ message: 'membername and memberid required' });
    }

    const deleted = await Member.findOneAndDelete({ membername, memberid });

    if (!deleted) {
      return res.status(404).json({ message: 'Member not found' });
    }

    res.status(200).json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



module.exports = router;
