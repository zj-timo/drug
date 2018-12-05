export default function (val,types){
	let value = '';

    for(let i=0; i < types.length; i++){
        if (types[i].pk == val) {
            value = types[i].supplierName
        }
    }

    return value;
}
