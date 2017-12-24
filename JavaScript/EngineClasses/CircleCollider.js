class CircleCollider extends Collider{
    constructor(gameObject,position,radius){
        super(gameObject,position);
        this.offset.CopyVector2(Vector2.zero);
        this.radius = radius;
    }
}