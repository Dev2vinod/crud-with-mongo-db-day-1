import express, { query } from 'express';
import cors from "cors";
import path from "path";
import { nanoid, customAlphabet} from 'nanoid';





const __dirname = path.resolve();
const app = express();
app.use(express.json());// body parser
const PORT =process.env.PORT|| 3000


app.use(cors()) // this is for test 

const randomNumber = customAlphabet('1234567890abcdef', 10)
console.log(randomNumber(9))

app.get('/post/:id',(req,res)=>{
  const id =Number(req.params.id);
  console.log(id)
  res.send(posts[id]);
})
app.get('/posts',(req,res)=>{
  
  res.send(posts);
})

let posts =[
  { text:"read",
     id:randomNumber(9)},
  {text:"this is second text",
  id:randomNumber(9)
},
  {text:"this is third text",
   id:randomNumber(9)
}
]
app.post('/posts',(req,res)=>{
  posts.push(req.body);
  res.send(` your post saved ${posts.length} posts this is repalcing by me`);
})
app.put('/post/:id',(req,res)=>{
  const id =Number(req.params.id);
  posts[id] =req.body
  console.log(posts[id])
  res.send(posts[id]);
})
app.delete('/post/:id',(req,res)=>{
  const id =Number(req.params.id);

  delete posts[id]
  
  res.send(' i am deleted server point ');
})

 app.delete('/posts',(req,res)=>{
  posts =[]
  res.send("deleted everything ")
 })






console.log("hello") 





  app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/static', express.static(path.join(__dirname, 'static'))); 

app.listen(PORT, () => {
  console.log(`running in my terminal  ${PORT}`)
})