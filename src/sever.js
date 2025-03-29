const http =  require('http')
//const https =  require('https')
//----------------------------------------------------
const PORT = 9799
//----------------------------------------------------
function onClientreq(req,resp)
{
    resp.writeHead( 200 )

    resp.write( 'Hello Kub : 2210511105004 ')

    resp.end()
}
//----------------------------------------------------
const sever = http.createServer( onClientreq )
console.log ('Server is runing at'+ PORT)
sever.listen( PORT  )