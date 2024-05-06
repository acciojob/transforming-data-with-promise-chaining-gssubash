//your JS code here. If required.
const button = document.querySelector('#btn');
const input = document.querySelector('#ip');
const op = document.querySelector('#output');

button.addEventListener('click',async (e)=>{
	const val = Number(input.value);

	// step 2
	let pro = new Promise((rs,rj)=>{
		setTimeout(()=>{
			rs(val); 
		},2000);
	});
pro.then((val)=>{
	op.innerText = `Result: ${val}`;
	// step 3
	return new Promise((rs,rj)=>{
		setTimeout(()=>{
			rs(val); 
		},2000);
		
	});
}).then((val)=>{
	op.innerText = `Result: ${val}`;
	// step 4
	return new Promise((rs,rj)=>{
		setTimeout(()=>{
			rs(val*2); 
		},1000);
		
	});
	
}).then((val)=>{
	op.innerText = `Result: ${val}`;
	// step 5
	return new Promise((rs,rj)=>{
		setTimeout(()=>{
			rs(val-3); 
		},1000);
		
	});
	
}).then((val)=>{
	op.innerText = `Result: ${val}`;
	// step 6
	return new Promise((rs,rj)=>{
		setTimeout(()=>{
			rs(val/2); 
		},1000);
		
	});
	
}).then((val)=>{
	op.innerText = `Result: ${val}`;
	// step 7
	return new Promise((rs,rj)=>{
		setTimeout(()=>{
			rs(val+10); 
		},1000);
		
	});
	
}).then((val)=>{ 
	op.innerText = `Result: ${val}`;
	// step 8
	return new Promise((rs,rj)=>{
			rs(val); 
	});
	
}).then((val)=>{
	op.textContent = `Final Result: ${val}`;

	
}).catch((err)=>{
	console.log(err.message);
});
	
}); 