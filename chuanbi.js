"use strict";
//Tính đa hình (Polymorphism):
//    - Tính đa hình cho phép đối tượng có thể hiện thực hành các phương thức khác nhau dựa trên loại của chúng hoặc các tham số được chuyền vào.
//    - Tính đa hình thường được thực hiện thông qua cơ chế như kế thừa, ghi đè phương thức và quan hệ hợp thành.
class b {
    move() {
        console.log("1111");
    }
}
class c {
    move() {
        console.log("2222");
    }
}
// Tính đa hình: 
function movea(a) {
    a.move();
}
let d = new b();
let e = new c();
movea(d);
movea(e);
