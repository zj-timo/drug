export default function (val,types,defaultVal){
	let value = '';
		if(!val){
			val = defaultVal
		}
		
    for(let i=0; i < types.length; i++){
        if (types[i].id  && types[i].id == val) {
            value = types[i].name;
        }
       
       if (types[i].code  && types[i].code == val) {
            value = types[i].name;
        }
        
    }

    return value;
}
