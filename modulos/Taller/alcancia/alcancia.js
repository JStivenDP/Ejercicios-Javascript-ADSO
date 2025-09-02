export default class alcancia{
    constructor(){
        this.moneda200=0;
        this.moneda500=0;
        this.moneda1000=0;
    }
    agregarmoneda200(){
        this.moneda200++;
    }
    agregarmoneda500(){
        this.moneda500++;
    }
    agregarmoneda1000(){
        this.moneda1000++;
    }

    /**
     * 
     * @returns el total ahorrado en la alcancia
     */

    calculartotalahorrado(){
        const total=this.moneda200*200+
        this.moneda500*500+
        this.moneda1000*1000;
        return total;
    }
}