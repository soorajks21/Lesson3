module objects{
    export class Button extends createjs.Bitmap{

        //constructor
        constructor(assetmanager:createjs.LoadQueue,imageString:string, x : number =0, y:number =0){
            super(assetmanager.getResult(imageString));
            this.regX = this.getBounds().width*0.5;
            this.regY= this.getBounds().height*0.5;
            this.x =x;
            this.y=y;


            this.on("mouseover",this._mouserOver);
            this.on("mouseout",this._mouseOut);
        }

        //private

        private _mouserOver():void{
            this.alpha =0.7;
    }

    private _mouseOut():void{
        this.alpha = 1.0;
    }
    }
}