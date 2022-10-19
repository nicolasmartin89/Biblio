import "reflect-metadata";
import { startServer } from "./sever";
import { createConnection } from "typeorm";
import { User } from "./entity/user.entity";

createConnection()
  .then(async (connection) => {
    const port: number = 4000;
    const app = await startServer();
    app.listen(port);
    console.log("Tamo activo");
    console.log("App runing on port", port);
  })
  .catch((error) => console.log(error));
  
