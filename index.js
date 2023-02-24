const express =require("express")
const mongoose=require("mongoose")
const axios =require("axios")
const time=require("./model/structure")
const app =express()

app.use(express.json())


app.get("/get", async (req, res) => {
	try {
		const response = await axios({
			url: "https://jsonplaceholder.typicode.com/posts",
			method: "get",
            
		});
		res.status(200).json(response.data);
	} catch (err) {
		res.status(500).json({ message: err });
	}
});



app.post("/post",async(req,res)=>{
    try {
    const response = await axios({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "get",
    });
    await time.insertMany(response.data)
    res.status(200).json("its done");
    }catch (err) {
		res.status(500).json({ message: err });
    }
})
        


const uri ="mongodb+srv://vikram24:YiFret2Glb1KapXQ@cluster0.pwfx8lq.mongodb.net/test";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})



const port = process.env.PORT || 4000;
app.listen(port, () => console.log("port is connected"));
