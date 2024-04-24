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

	try{
		let num = await pro;
		op.innerText = `Result: ${num}`;
		// step 3
		pro = new Promise((rs,rj)=>{
			setTimeout(()=>{
				rs(num);
			},2000);
		});
		num = await pro;
		op.innerText = `Result: ${num}`;

		// step 4
		pro = new Promise((rs,rj)=>{
			setTimeout(()=>{
				rs(num*2);
			},1000);
		});
		num = await pro;
		op.innerText = `Result: ${num}`;

		// step 5
		pro = new Promise((rs,rj)=>{
			setTimeout(()=>{
				rs(num-3);
			},1000);
		});
		num = await pro;
		op.innerText = `Result: ${num}`;

		// step 6
		pro = new Promise((rs,rj)=>{
			setTimeout(()=>{
				rs(num/2);
			},1000);
		});
		num = await pro;
		op.innerText = `Result: ${num}`;

		// step 7
		pro = new Promise((rs,rj)=>{
			setTimeout(()=>{
				rs(num+10);
			},1000);
		});
		num = await pro;
		op.innerText = `Result: ${num}`;

		op.innerText = `Final Result: ${num}`;
	}catch(err){
		console.log(err.message);
	}
});