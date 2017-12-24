class GameObject{
    constructor(){
        this.transform = new Transform(Vector2.zero,Vector2.zero,Vector2.one);
        this.renderer = new Renderer();
        this.rigitbody = null;
        this.collider = null;
    }
}