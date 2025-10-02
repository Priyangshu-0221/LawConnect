import "dotenv/config";
import express from "express";
import routes from "./Routes/index.js";
import cors from "cors";
import connectCloduinary from "./DATABASE/cloudinary.config.js";
import { clerkMiddleware } from '@clerk/express'
import { clerkClient, requireAuth, getAuth } from '@clerk/express'
const app = express();
connectCloduinary();
const port = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware())
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => res.send("Welcome to LawConnect"));
app.use(routes);

app.get('/suku', requireAuth(), async (req, res) => {
        // Use `getAuth()` to get the user's `userId`
        const auth = getAuth(req);
        console.log('Auth object:', auth);
        
        const { userId } = getAuth(req)
        console.log('User ID:', userId)
        if (!auth.userId) {
                return res.status(401).json({ error: 'Unauthorized' });
              }
            
      
        // Use Clerk's JavaScript Backend SDK to get the user's User object
        const user = await clerkClient.users.getUser(userId)
      
        return res.json({ user })
      })
app.listen(port, () => console.log(`Server started on port ${port}!`));

