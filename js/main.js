(() => {

    //make an AJAX request using the Fetch API 
    fetch('./data/classData.json')
    .then(res => res.json())
    .then(data => {

        // debugger;
        console.log(data);

        //handleDeta
        //here's where you would call the function that puts the pieces on the page
            const profText = document.querySelector('.profPanelText').children;
            //debugger;
            const span = profText[0].querySelector('span');

            span.textContent = data.coursecode;
            profText[0].textContent = `${data.coursename}-`;
            profText[0].appendChild(span);
            profText[1].textContent = `Professor - ${data.profname}`
            let lis = '';
            for (let i = 0; i < data.classtime.length; i++) {
                lis += '<li>' + data.classtime[i] + '</li>';  
            }
                profText[2].innerHTML = lis;


        const courseInfo = document.querySelector('.courseInfo').children;
            //debugger;
            courseInfo[0].textContent = `${data.coursename} - ${data.coursecode}`;
            courseInfo[3].textContent = data.coursedesc;

        
        // const textPrimary = document.querySelector('.text-primary');
        // textPrimary.textContent = data.coursecode;

        // const p2 = document.querySelector('.profPanel p:nth_child(2)');
        // p2.textContent = data.coursecode;

        // const ul = document.querySelector('.list-inline');
        // ul.innerHTML = '<li>' + data.coursecode + '</li>';
    })

    .catch((err) => {
        console.log(err);
        
        const profText = document.querySelector('.profPanelText');
        profText.textContent = `ERROR : something went wrong`
           
    })

})();
 