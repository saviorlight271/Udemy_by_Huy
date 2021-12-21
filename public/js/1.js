window.addEventListener("DOMContentLoaded", (event) => {
  //TEST API
  let api = async () => {
    return await (await fetch("http://localhost:3000/")).json();
  };
  //TEST POST
  // let post = async (data) => {
  //   return await fetch('http://localhost:3000/api/post',{data});
  // }
  //LẤY DỮ LIỆU
  let usermail = document.getElementsByClassName("usermail");
  let userpassword = document.getElementsByClassName("userpassword");
  document.getElementById("dangnhap").onclick = function (e) {
    e.preventDefault();
    console.log(userpassword[0].value); //check log
    console.log(usermail[0].value); //check log
    localStorage.setItem(
      "user_key",
      JSON.stringify({
        mail: usermail[0].value,
        password: userpassword[0].value,
      })
    );

    //FUNCTION API
    // post(usermail[0].value).then((result) => {
    //   console.log(result);
    // }).catch((error) => {
    //   console.log(error);
    // })
  };
  //   console.log(window.localStorage.getItem('user_key'));

  //array.map
  let numbers = [1, 2, 3, 4];
  let squaredNumbers = numbers.map(function (x) {
    return x * x;
  });
  console.log(squaredNumbers);

  let rectangle = [
    { width: 10, height: 5 },
    { width: 10, height: 20 },
    { width: 4, height: 16 },
  ];
  let areaRectangle = rectangle.map(function (x) {
    return x.width * x.height;
  });
  console.log(areaRectangle);

  let numbers = [1, 2, 3, 4, 5, 8, 9];
  let sochan = numbers.find(function (x) {
    console.log(numbers);
    return x % 2 === 0;
  });
  console.log(sochan);

  let gioHang = [
    { name: "hang A", soluong: 3, gia: 30000 },
    { name: "hang B", soluong: 8, gia: 80000 },
    { name: "hang C", soluong: 5, gia: 50000 },
  ];
  // let gioHang1 = gioHang.map(function(x) {
  //   return x.soluong * x.gia;
  // });
  let thanhTien = gioHang.reduce(function (currentProduct, product) {
    return currentProduct + product.soluong * product.gia;
  }, 0);
  console.log(thanhTien);

  var items = ["Tom", "Bill", "Kim"];
  //cách 1 dùng  reduce()
  let stringReduce = items.reduce(function (itemCurrent, item) {
    return itemCurrent + "<" + item + ">";
  }, "");
  console.log(stringReduce);

  //cach 2 dùng map()
  let stringMap = items.map(function (item) {
    return "<" + item;
  });
  console.log(stringMap.join(">"));

  const months = ["March", "Jan", "Feb", "Dec"];
  months.sort();
  console.log(months);
});
