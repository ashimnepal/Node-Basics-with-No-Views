	const express = require('express')
	const app = new express()
	//We need to builtin package path to handle the file paths
	const path = require('path')
	// To use public folder for all static resources use this line of code
	app.use(express.static('public'))
  
	


	const port = 4000 //Giving out the port number
	app.listen(port, ()=>{
	console.log(`App listening on port ${port}`)
	})

    app.get('/',(req,res)=>{
        res.send(`
    
    
        <h2 style='color: red; text-align:center;'>This is the route thingy. Lets see the live server</h2>
        
        
        
        `)
})


//Using Routes to the html pages in pages directory

app.get("/index",(req,res)=>
{
    console.log(path.join(process.cwd(),'public','pages','index.html'))
    res.sendFile(path.join(process.cwd(),'public','pages','index.html'))

})




//Using Routes to the html pages in pages directory

app.get("/contact",(req,res)=>
    {
        console.log(path.join(process.cwd(),'public','pages','contact.html'))
        res.sendFile(path.join(process.cwd(),'public','pages','contact.html'))
    
    })


//Using Routes to the html pages in pages directory

app.get("/about",(req,res)=>
    {
        console.log(path.join(process.cwd(),'public','pages','about.html'))
        res.sendFile(path.join(process.cwd(),'public','pages','about.html'))
    
    })


//Using Routes to the html pages in pages directory

app.get("/post",(req,res)=>
    {
        console.log(path.join(process.cwd(),'public','pages','post.html'))
        res.sendFile(path.join(process.cwd(),'public','pages','post.html'))
    
    })