// Code your solution in this file!
function distanceFromHqInBlocks(block){
  
  if(block > 42)
  {
    return block-42;
  }
  else
  {
    return 42-block;
  }
}

function distanceFromHqInFeet(feet){
   
   return distanceFromHqInBlocks(feet) * 264;
}

function distanceTravelledInFeet(start,end){
       if (end > start)
       {
       	 return (end - start)*264
       }
       else
       {
       	return (start - end)*264
       }
}

function calculatesFarePrice(start,destination)
{
  let block= distanceTravelledInFeet(start,destination);
  if (block <= 400){
       return 0;
	}else if(block> 400 && block<= 2000){
		return  0.02 * (block- 400)
	}else if (block>2000 && block<= 2500){
		return 25 
	}else if(block> 2500){
		return 'cannot travel that far'
	}
}
