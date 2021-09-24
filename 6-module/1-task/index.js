/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.elem = document.createElement('table');
    
    const removeButton = `<button class="remove-button">[x]</button>`;
    this.elem.addEventListener ('click', (event) => this.onClick(event));
    
    const tableHead = this.elem.insertAdjacentHTML ('afterbegin', `
    <thead>
          <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
          </tr>
        </thead>
        `)
    
    for (let data of rows) {
      this.elem.insertAdjacentHTML('afterbegin', `
        <tr>
          <td>${data.name}</td>
          <td>${data.age}</td>
          <td>${data.salary}</td>
          <td>${data.city}</td>
          <td>${removeButton}</td>
        </tr>
        `);
     }
     
    }
    onClick(event){
      if (event.target.className != "remove-button")
        return;
        
        let row  = event.target.closest('tr');
        row.remove();
    }
  }