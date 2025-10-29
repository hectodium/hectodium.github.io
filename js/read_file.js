fetch("/tables/foss-android/test.html")
        .then((res) => res.text())
        .then((text) => {
            const insert = text
            window.addEventListener('DOMContentLoaded', () => {
            let barnav = document.querySelector('div[role="table"]');
            barnav.innerHTML = insert;
            });
        })
        .catch((e) => console.error(e));

		// fetch("/tables/foss-android/test.txt")
		// 	.then((res) => res.text())
		// 	.then((text) => {
		// 		const insert = text;
				
		// 		window.addEventListener(
		// 			'DOMContentLoaded', 
		// 			() => {
		// 				let barnav = document.querySelector('div[role="insert"]');
		// 				barnav.innerHTML = text;
		// 				console.log(typeof text);
		// 				console.log(text);
		// 				}
		// 			);
				
		// 	})
		// 	.catch((e) => console.error(e));