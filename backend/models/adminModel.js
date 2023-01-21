const mongoose = require("mongoose");

const adminSchema = mongoose.Schema(
  {
    adminName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "admin" },
  },
  {
    versionKey: false,
  }
);

const AdminModel = mongoose.model("admin", adminSchema);

module.exports = { AdminModel };
