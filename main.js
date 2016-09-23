function findall(a, x){
var results =[];
 len = a.length;
 pos =0;
 while(pos < len){
	 pos = a.index0f(x, pos);
	 if (pos === -1)break;
	 results.push(pos);
	 pos = pos + 1;
 }
 return results;
 }
 
 
	


	
	

	
	
	
	
