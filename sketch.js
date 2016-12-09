var N = 150;
var B1;
var B2;

function setup() {
  createCanvas( windowWidth , windowHeight );
  
  B1 = new Array(N);
  B2 = new Array(N);
  for ( n = 0 ; n < N ; n++ ){
    B1[n] = new Ball();
    B2[n] = new Ball();
  }
}

function draw() {
  //frameRate(30);
  //background( 255 ,255 ,255 );
  
  for ( n = 0 ; n < N ; n++ ){
    B1[n].evolveDraw();
    B2[n].evolveDraw();
    line( B1[n].pos.x , B1[n].pos.y , B2[n].pos.x , B2[n].pos.y );
  }
}

//new function I created
var Ball = function(){
  this.pos = createVector( width/2 , height/2 );
  
  this.v = p5.Vector.random2D();
  this.v.mult( random( 1 , 5) );
  
  this.evolveDraw =function() {
    this.pos.add( this.v );
  
    if ( this.pos.x >= width || this.pos.x <= 0 ){
      this.v.x *=-1;
    }
  
    if ( this.pos.y >= height || this.pos.y <= 0 ){
      this.v.y *=-1;
    }
    
    fill( 237 , 2 , 2 );
    ellipse( this.pos.x , this.pos.y , 10 );
    
  }
  
};
