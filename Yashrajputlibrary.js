function objectTouching(object1, object2) {
    if(object1.x-object2.x<=object1.width/2+object2.width/2&& 
      object1.x-object2.x<=object1.width/2+object2.width/2 &&
      object2.y-object1.y<=object1.height/2+object2.height/2&& 
      object1.y-object2.y<=object1.height/2+object2.height/2){
        object2.shapeColor="red";
        music.play();
  return true;
  
      
    }
    else{ movingSq.shapeColor="green"; 
    return false;
  }
  
  }


  function objectTouching2(fixedSq2, movingSq2) {
    if(fixedSq2.x-movingSq2.x<=fixedSq2.width/2+movingSq2.width/2&& 
        fixedSq2.x-movingSq2.x<=fixedSq2.width/2+movingSq2.width/2 &&
        movingSq2.y-fixedSq2.y<=fixedSq2.height/2+movingSq2.height/2&& 
      fixedSq2.y-movingSq2.y<=fixedSq2.height/2+movingSq2.height/2){
        movingSq2.shapeColor="red";
        music.play();
  return true;
  
      
    }
    else{ movingSq2.shapeColor="green"; 
    return false;
  }
  
  }