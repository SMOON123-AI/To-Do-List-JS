let arr=JSON.parse(localStorage.getItem('arrs')) || [];

    displayUI();

    const input = document.querySelector('.inp');
    const input_date = document.querySelector('.in_dat');

    function dee(ev){
      if(ev.key === 'Enter'){
        addtodo();
      }
    }

    function addtodo(){
      if(input.value.trim() === "") return;

      if(input_date.value === "") return;

      arr.push({name:input.value,
        date:input_date.value
      });

      input.value="";
      input_date.value="";

      input.focus();
      
      save();

      displayUI();
    }

    function reset(){
      arr=[];

      save();

      displayUI();
    }

    function displayUI(){
      let htmll='';
      
      arr.forEach((todoObject, i) => {
        const ev_nam=todoObject.name;
        const ev_dat=todoObject.date;

        const ht=`<div>
            <strong>${ev_nam}</strong>
          </div>
          <div>
            <span style="color:silver;margin-left:10px">${ev_dat}</span>
          </div>
          <div>
            <button class="ren-btn" onclick="rename(${i})">Rename</button>
            <button class="ren-btn" onclick="redate(${i})">Redate</button>
            <button class="del-btn" onclick="del(${i})">Delete</button>
          </div>`;
        htmll+=ht;
      });

      document.querySelector('.js-to-do').innerHTML=htmll;
    }

    function del(i){
      arr.splice(i,1);

      save();
      displayUI();

      input.focus();

    }

    function rename(i){
      const newValue = prompt("Enter new todo name:", arr[i].name);

      if(newValue === null) return;

      if(newValue.trim() === "") return;

      arr[i].name = newValue;

      save();
      displayUI();
    }


    function redate(i){
      const newDate = prompt("Enter new todo date:", arr[i].date)

      if(newDate === null) return;

      arr[i].date = newDate;

      save();
      displayUI();
    }

    function save(){
      localStorage.setItem('arrs', JSON.stringify(arr));
    }