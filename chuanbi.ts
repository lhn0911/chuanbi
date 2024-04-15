
//Tính đa hình (Polymorphism):
//    - Tính đa hình cho phép đối tượng có thể hiện thực hành các phương thức khác nhau dựa trên loại của chúng hoặc các tham số được chuyền vào.
//    - Tính đa hình thường được thực hiện thông qua cơ chế như kế thừa, ghi đè phương thức và quan hệ hợp thành.


//Tính trừu tượng (Abstraction):
//    - Tính trừu tượng là việc che dấu các chi tiết cụ thể và chỉ tập trung vào các khái niệm quan trọng để giảm sự phức tạp và tăng tính linh hoạt.
//    -Tính trừu tượng thường được thực hiện thông qua các lớp trừu tượng hoặc giao diện, mà chỉ định các phương thức mà các lớp con cần triển khai mà không cung cấp triển khai cụ thể.

//vd:
// Tính trừu tượng: 
interface a {
    move(): void;
}


class b implements a {
    move(): void {
        console.log("1111");
    }
}


class c implements a {
    move(): void {
        console.log("2222");
    }
}

// Tính đa hình: 
function movea(a: a): void {
    a.move();
}

let d = new b();
let e = new c();

movea(d); 
movea(e); 
