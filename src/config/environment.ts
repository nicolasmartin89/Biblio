import dotenv from "dotenv";

dotenv.config();

export const environment = {
  JWT_SECRET: process.env.JWT_SECRET || "Default",
};
