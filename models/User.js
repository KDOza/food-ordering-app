import { model, models, Schema } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
      validate: (pass) => {
        if (pass?.length == 0 || pass.length < 5) {
          new Error("Password must be atleast 5 characters !");
        }
      },
    },
    image: { type: String },
  },
  { timestamps: true }
);

UserSchema.post("validate", function (user) {
  const pass = user.password;
  const salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(pass, salt);
});

export const User = models?.User || model("User", UserSchema);
