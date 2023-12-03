const mongoose = require('mongoose');

const cvDataSchema = mongoose.Schema({
        name: {
          type: String,
          required: [true, "Please add the contact name"],
        },
      },
      {
        timestamps: true,
      }
)

module.exports = mongoose.model("CVData", cvDataSchema);