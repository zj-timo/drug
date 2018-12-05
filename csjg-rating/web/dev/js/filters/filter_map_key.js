export default function (val,types){
	let value = '';

    for(let i=0; i < types.length; i++){
        if (types[i].id == val) {
            value = types[i].name;
        }
    }

    return value;
}
