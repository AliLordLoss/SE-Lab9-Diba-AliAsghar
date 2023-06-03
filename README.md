# آزمایش نهم - آز نرم

در این آزمایش، دو سرویس بسیار ساده طراحی شدند که از طریق یک سرویس دیگر (nginx) به آنها می‌توان دسترسی پیدا کرد. سرویس چهارم نیز رابط کاربری (ui) برای دریافت و نمایش اطلاعات این سرویس‌ها است؛ در واقع front-end این پروژه است. از آنجا تمرکز این آزمایش بر روی معماری میکروسرویس و داکر است؛ از توضیحات اضافه برای هر سرویس پرهیز می‌کنیم و مراحل ساخت image و اجرای containerها برای هر پروژه را در زیر می‌آوریم:

---

### ۱. مرحله‌ی build کردن هر پروژه:

سرویس random api که یک عدد رندوم به ما می‌دهد:
![random-api-build](report-images/random-api-build.png)

سرویس time api که تاریخ و زمان را در قالب utc به ما می‌دهد:
![time-api-build](report-images/time-api-build.png)

سرویس nginx که برای دسترسی به دو سرویس قبل (reverse proxy) استفاده می‌شود:
![nginx-build](report-images/nginx-build.png)

و در نهایت، سرویس front که uiای برای دسترسی به سرویس‌های ساخته شده است:
![front-build](report-images/front-build.png)

---

### ۲. ساختن یک شبکه‌ی مجازی و اجرای هر سرویس در یک container:

ساخت شبکه‌ی مجازی (virtual network) و اجرای containerها:
![create-network-and-run](report-images/create-network-and-run.png)

همچنین یک فایل docker-compose نیز نوشته شد که می‌توان برای اجرا از آن استفاده کرد:
![docker-compose](report-images/docker-compose.png)

---

### ۳. خروجی دستورهای docker ps و docker image ls

خروجی این دستورات بعد از اجرا با دستورهای docker:
![commands](report-images/commands.png)

خروجی این دستورات بعد از اجرا به وسیله‌ی docker-compose (لازم به ذکر است که قبل از اجرا به وسیله‌ی docker-compose، تمامی containerهای پیشین متوقف و حذف شدند):
![commands-docker-compose](report-images/commands-docker-compose.png)

---

### ۴. اجرای موفق برنامه:

![run](report-images/run.png)
