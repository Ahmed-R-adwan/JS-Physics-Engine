class Transform {
    constructor(gameObject,position,rotaion,scalling){
        this.gameObject = gameObject;
        this.position.CopyVector2(position);
        this.rotaion.CopyVector2(position);
        this.scalling.CopyVector2(position);
    }
}