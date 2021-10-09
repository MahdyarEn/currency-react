# وب سرویس دریافت قیمت و نمایش آن

این پروژه با [ریکت](https://github.com/facebook/create-react-app) نوشته شده است و برای ران کردن آن ابتدا آن را باید نصب کنید .

```
npm install -g create-react-app
```
سپس برای نصب پکیج های استفاده شده دستور زیر را وارد کنید

```
npm install
```

#### و برای ران کردن در آخر دستور زیر را بزنید

```
npm start
```

 قبل از استفاده فراموش نکنید که ادرس ای پی آی رو در فایل زیر تغییر دهید

```\src\services\api.js```

```javascript
const BASE_URL = "https://domain.ir/filder/api.php";
```
