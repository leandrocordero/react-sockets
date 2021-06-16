class Sockets {

    constructor( io ){
        this.io = io;
        this.socketEvents();
        
    }

    socketEvents(){
//on connection
        this.io.on('connection', socket => {
            //escuchar evento
            socket.emit('mensaje-bienvenida',{
                msg:'Bienvenido al server',
                date: new Date()
        })
        
            socket.on('mensaje-cliente',(payload)=>{
                console.log(payload)
                this.io.emit('respuesta-del-server', payload)
            })
        
        });
        
    }



}

module.exports = Sockets