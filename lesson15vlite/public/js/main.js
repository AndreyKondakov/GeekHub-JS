var dbDishes;

// Получение всех пользователей
function GetDishes() {
  $.ajax({
    url: "/api/dishes",
    type: "GET",
    contentType: "application/json",
    success: function (dishes) {
      dbDishes = dishes;
      var rows = "";
      // console.log(dishes);
      $.each(dishes, function (index, dish) {
        // добавляем полученные элементы в таблицу
        rows += row(dish);
      });
      $("table.result tbody").append(rows);
    }
  });
  return dbDishes
}
// Получение одного пользователя
function GetDish(id) {
  $.ajax({
    url: "/api/dishes/"+id,
    type: "GET",
    contentType: "application/json",
    success: function (dish) {
      var form = document.forms["dishForm"];
      form.elements["id"].value = dish._id;
      form.elements["name"].value = dish.name;
      form.elements["calories"].value = dish.calories;
    }
  });
}
// Добавление пользователя
function CreateDish(dishName, dishCalories) {
  $.ajax({
    url: "api/dishes",
    contentType: "application/json",
    method: "POST",
    data: JSON.stringify({
      name: dishName,
      calories: dishCalories
    }),
    success: function (dish) {
      reset();
      $("table tbody").append(row(dish));
    }
  })
}
// Изменение пользователя
function EditDish(dishId, dishName, dishCalories) {
  $.ajax({
    url: "api/dishes",
    contentType: "application/json",
    method: "PUT",
    data: JSON.stringify({
      id: dishId,
      name: dishName,
      calories: dishCalories
    }),
    success: function (dish) {
      reset();
      console.log(dish);
      $("tr[data-rowid='" + dish._id + "']").replaceWith(row(dish));
    }
  })
}

// сброс формы
function reset() {
  var form = document.forms["dishForm"];
  form.reset();
  form.elements["id"].value = 0;
}

// Удаление пользователя
function DeleteDish(id) {
  $.ajax({
    url: "api/dishes/"+id,
    contentType: "application/json",
    method: "DELETE",
    success: function (dish) {
      console.log(dish);
      $("tr[data-rowid='" + dish._id + "']").remove();
    }
  })
}
// создание строки для таблицы
var row = function (dish) {
  return "<tr data-rowid='" + dish._id + "'><td>" + dish._id + "</td>" +
    "<td>" + dish.name + "</td> <td>" + dish.calories + "</td>" +
    "<td><a class='editLink' data-id='" + dish._id + "'>Изменить</a> | " +
    "<a class='removeLink' data-id='" + dish._id + "'>Удалить</a></td></tr>";
};
// сброс значений формы
$("#reset").click(function (e) {

  e.preventDefault();
  reset();
});

// отправка формы
$("form[name=\'dishForm\']").submit(function (e) {
  e.preventDefault();
  var id = this.elements["id"].value;
  var name = this.elements["name"].value;
  var calories = this.elements["calories"].value;
  if (id == 0)
    CreateDish(name, calories);
  else
    EditDish(id, name, calories);
});

// нажимаем на ссылку Изменить
$("body").on("click", ".editLink", function () {
  var id = $(this).data("id");
  GetDish(id);
});
// нажимаем на ссылку Удалить
$("body").on("click", ".removeLink", function () {
  var id = $(this).data("id");
  DeleteDish(id);
});

// загрузка пользователей
GetDishes();

console.log('Users: ', dbDishes);

$("form[name=\'dayFood\']").submit(function (e) {
  e.preventDefault();

  console.log('success', dbDishes);



});