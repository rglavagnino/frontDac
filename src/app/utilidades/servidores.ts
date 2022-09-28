export class servidores {
    
    // private servidorControl = '172.18.230.180'
    private servidorControl = 'localhost'
    private portControl = '5000'
    
    constructor() {

    }

    public obtenerVersionControl()
    {
        return `http://${this.servidorControl}:${this.portControl}`
    }

}