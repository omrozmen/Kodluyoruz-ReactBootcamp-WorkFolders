renderHeader();

const todosUrl = "https://jsonplaceholder.typicode.com/todos";
const root = document.querySelector("#root");
const editModal = document.querySelector("#editModal");
let todos = [];
let todo;
let currentPage = 1;
let rows = 30;


//#region HtmlTable
const renderTodos = (page = 1) => {
	root.innerHTML = "";
	// todoları listele
	const table = document.createElement("table");
	table.setAttribute("class", "table table-hover");

	const thead = document.createElement("thead");

	// Sıralama için title-sorting
	thead.innerHTML = `
    <tr>
      <th scope="col">id</th>
      <th scope="col" id="title-sorting"> Başlık <button class="btnd">&darr;</button> <button class="btna">&uarr;</button></th>
      <th scope="col" id="userid-sorting">Kullanıcı Id <button class="btnd">&darr;</button> <button class="btna">&uarr;</button></th>
      <th scope="col" id="status-sorting">Durum <button class="btnd">&darr;</button> <button class="btna">&uarr;</button></th>
      <th scope="col"></th>
    </tr>
  `;
	table.appendChild(thead);

	const tbody = document.createElement("tbody");
	const renderItem = (item) => {
		const tr = document.createElement("tr");
		tr.innerHTML = `
      <td>${item.id}</td>
      <td>${item.title}</td>
      <td>${item.userId}</td>
      <td>${item.completed ? "Tamamlandı" : "Yapılacak"}</td>
      <td>
        <button class="btn btn-xs btn-danger remove" data-id=${item.id
			}>Sil</button>
        <button class="btn btn-xs btn-warning edit" data-id=${item.id
			}>Düzenle</button>
      </td>
    `;
		tbody.appendChild(tr);
	};
	//#endregion
	page--;

	let start = rows * page;
	let end = start + rows;
	let paginatedItems = todos.slice(start, end);

	paginatedItems.forEach((item) => {
		renderItem(item);
	});
	table.appendChild(tbody);
	root.append(table);

	//#region RemoveMethod
	document.querySelectorAll(".remove").forEach((button) => {
		button.addEventListener("click", (e) => {
			const id = Number(e.currentTarget.getAttribute("data-id"));
			if (confirm("kaydı silmek istediğinize emin misiniz?")) {
				todos = todos.filter((x) => x.id !== id);
				renderTodos(currentPage);
			}
		});
	});
	//#endregion
	//#region Edit
	document.querySelectorAll(".edit").forEach((button) => {
		button.addEventListener("click", (e) => {
			const id = Number(e.currentTarget.getAttribute("data-id"));
			todo = todos.find((todo) => todo.id == id);
			editModal.querySelector("#title").value = todo.title;
			editModal.querySelector("#completed").checked = todo.completed;
			editModal.style.display = "block";
			editModal.classList.add("show");
		});
	});
	//#endregion
	// console.log(typeof ("#title-sorting"))

	//#region With TitleSorting
	document.querySelector('#title-sorting .btnd').addEventListener('click', () => {
		todos.sort((a, b) => {
			const nameA = a.title.toUpperCase();
			const nameB = b.title.toUpperCase();
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}
			return 0;
		});
		renderTodos(currentPage);
	})

	document.querySelector('#title-sorting .btna').addEventListener('click', () => {
		todos.sort((a, b) => {
			const nameA = a.title.toUpperCase();
			const nameB = b.title.toUpperCase();
			if (nameA > nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}
			return 0;
		});
		renderTodos(currentPage);
	})
	//#endregion
	//#region With Status
	document.querySelector('#status-sorting .btnd').addEventListener('click', () => {
		todos.sort((a, b) => {
			const nameA = a.completed;
			const nameB = b.completed;
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}
			return 0;
		});
		renderTodos(currentPage);
	})
	document.querySelector('#status-sorting .btna').addEventListener('click', () => {
		todos.sort((a, b) => {
			const nameA = a.completed;
			const nameB = b.completed;
			if (nameA > nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}
			return 0;
		});
		renderTodos(currentPage);
	})
	//#endregion
	//#region  With UserId
	document.querySelector('#userid-sorting .btna').addEventListener('click', () => {
		todos.sort((a, b) => {
			const nameA = a.userId;
			const nameB = b.userId;
			if (nameA > nameB) {
				return -1;
			}
			if (nameA < nameB) {
				return 1;
			}
			return 0;
		});
		renderTodos(currentPage);
	})

	document.querySelector('#userid-sorting .btnd').addEventListener('click', () => {
		todos.sort((a, b) => {
			const nameA = a.userId;
			const nameB = b.userId;
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}
			return 0;
		});
		renderTodos(currentPage);
	})
	//#endregion
};


//#region Html Add Pagination
document.querySelectorAll(".page-link").forEach((btn) => {
	btn.addEventListener('click', () => {
		let data_id = btn.getAttribute('data-id');
		currentPage = Number(data_id);
		renderTodos(currentPage);
	});
});
//#endregion
//#region ModalSaveMethod

editModal.querySelector("#save").addEventListener("click", () => {
	todo.title = editModal.querySelector("#title").value;
	todo.completed = editModal.querySelector("#completed").checked;
	const index = todos.findIndex((t) => t.id == todo.id);
	todos[index] = todo;
	renderTodos();
	editModal.style.display = "none";
	editModal.classList.remove("show");
});
//#endregion
//#region ModalClose
editModal.querySelectorAll(".close").forEach((button) => {
	button.addEventListener("click", () => {
		editModal.style.display = "none";
		editModal.classList.remove("show");
	});
});
//#endregion
//#region Fetch API
fetch(todosUrl)
	.then((resp) => resp.json())
	.then((data = []) => {
		todos = data;
		renderTodos();
	})
	.catch((error) => {
		errorLogger(error);
	});
		//#endregion
//#region Ödev +++
// sıralama ödevi algoritması +++
// table thead kısmındaki sıralama yapılacak kolonlara event listener eklenecek. ++
// event listener hangi kolon için tıklanıyorsa ++
// sort metodu kullanılarak sıralama yapılacak
// sıralanmış todos'todus içerisine atılacak
// renderTodos metodu çalıştırılacak.
//#endregion