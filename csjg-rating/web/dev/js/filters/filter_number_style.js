
export default function (val,type){
	// debugger
	if(val == undefined) return
	var val=val.toString();
	if(type=='big'){
	    if(val.split('.')[0] && val.split('.')[0] != ''){
	      return val.split('.')[0];
	    }else{
	      return val
	    } 
	      
	}else{
	    if(val.split('.')[1] && val.split('.')[1] != ''){
	      return '.'+val.split('.')[1];
	    }else{
	       return '';
	    }        
	}
}
