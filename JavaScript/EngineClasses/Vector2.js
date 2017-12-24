class Vector2{   
    //construct a vector2 from an x and y
    constructor (x,y){
        this.x = x;
        this.y = y;
    }
    //deap copying a vector2 
    CopyVector2 (vector2){
        this.x = vector2.x;
        this.y = vector2.y;
    }
    //scalling the vector
    Scale(scaler){
        this.x *= scaler;
        this.y *= scaler;
    }
    //return the scaled vector
    Scale(scaler){
        return new Vector2(this.x*scaler,this.y*scaler);
    }
    //return the magnotude of the vector
    Magnitude(){
        return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2));
    }
    //adding two vector and return a vector
    Add(sVector2){
        return new Vector2(this.x + sVector2.x , this.y + sVector2.y);
    }
    //adding a vector x by x and vector y by y and return vector
    AddXY(x,y){
        return new Vector2(this.x + x , this.y + y);
    }
    //sub the sec. vector from the first vector and return a vector
    Sub(sVector2){
        return new Vector2(this.x - sVector2.x , this.y - sVector2.y);
    }
    //sub the x from the vector x and sub the y from vector y and return vector
    SubXY(x,y){
        return new Vector2(this.x - x , this.y - y);
    }
    //return the dot product of two vectors
    DotProduct(sVector2){
        return ((this.x*sVector2.x)+(this.y*sVector2.y));
    }
    //return the radian angle betwean two vectors
    RadiansAngle(sVector2){
        return Math.acos((this.DotProduct(sVector2))/(this.Magnitude()+sVector2.Magnitude()));
    }
    //return the degree angle betwean two vectors
    DegreeAngle(sVector2){
        return (this.RadiansAngle(sVector2)/Math.PI)*180;
    }
    //debuging printing
    DebugLog(){
        console.log("x",this.x,"y",this.y);
    }
    
    //static constants
    
    static get zero() {
        return new Vector2(0,0);
    }
    
    static get one() {
        return new Vector2(1,1);
    }
    
    static get up() {
        return new Vector2(0,1);
    }
    
    static get right() {
        return new Vector2(1,0);
    }
}