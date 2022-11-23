## Sıralama ödevi algoritması
##### todos.js dosyası içerisinde düzenlenecek.
table thead kısmındaki sıralama yapılacak kolonlara event listener eklenecek.
event listener hangi kolon için tıklanıyorsa sort metodu kullanılarak sıralama yapılacak.
sıralanmış todos'todus içerisine atılacak.
renderTodos metodu çalıştırılacak.


## HTTP - Fetch Api Ödevi

##### README.md dosyası, txt, js dosyası açarak yapılabilir.

* HTTP Status'ün 
  * Görevleri nelerdir? Bu görevlerin anlamlarını açıklayınız.
   
* HTTP Request'in metodlari  nelerdir? 
  
*  Fetch API'nin metodlari ile örnekleri

-------------------------------------------------------------------------------

# Http Status Codes;

## 1XX: Bilgi
   #### 100 Continue
   #### 101 Switching Protocols
   #### 102 Processing
   #### 103 Check Point
   #### 122 Request - URI too long

## 2xx: Başarı
  #### 200 OK
  #### 201 Created
  #### 202 Accepted
  #### 203 Non-Authoritative Information
  #### 204 No Content	
  #### 205 Reset Content	
  #### 206 Partial Content	
  #### 207 Multi-Status
  #### 210 Content Different	
  #### 226 IM Used (RFC 3229)

## 3XX: Yönlendirme
   #### 300 Multiple Choices	
   #### 301 Moved Permanently	
   #### 302 Found	
   #### 303 See Other	
   #### 304 Not Modified	
   #### 305 Use Proxy	
   #### 306 Switch Proxy	
   #### 307 Temporary Redirect	
   #### 308 Resume Incomplete	


## 4XX: Tarayıcı Hatası
  #### 400 Bad Request
  #### 401 Unauthorized	
  #### 402 Payment Required
  #### 403 Forbidden	
  #### 404 Not Found	
  #### 405 Method Not Allowed	
  #### 406 Not Acceptable	
  #### 407 Proxy Authentication Required	Proxy
  #### 408 Request Timeout
  #### 409 Conflict	
  #### 410 Gone
  #### 411 Length Required	
  #### 412 Precondition Failed	
  #### 413 Request Entity Too Large	
  #### 414 Request-URI Too Long	
  #### 415 Unsupported Media Type	
  #### 416 Requested Range Not Satisfiable	
  #### 417 Expectation Failed	
  #### 418 I’m a teapot (RFC 2324)	
  #### 422 Unprocessable entity	
  #### 423 Locked	
  #### 424 Method Failure
  #### 451 Unavailable For Legal Reasons
  #### 425 Unordered Collection (RFC 3648)	
  #### 426 Upgrade Required (RFC 2817)	
  #### 428 Precondition Required	
  #### 429 Too Many Requests	
  #### 431 Request Header Fields Too Large	MDN
  #### 444 No Response	
  #### 449 Retry With	
  #### 450 Blocked by Windows Parental Controls	
  #### 499 Client Closed Request


## 5XX: Sunucu Hatası
  #### 500 Internal Server Error	
  #### 501 Not Implemented	
  #### 502 Bad Gateway
  #### 503 Service Unavailable	
  #### 504 Gateway Timeout	
  #### 505 HTTP Version Not Supported	
  #### 506 Variant Also Negotiates (RFC 2295)	
  #### 507 Insufficient storage	
  #### 509 Bandwidth Limit Exceeded (Apache bw/limited extension)	
  #### 510 Not Extended (RFC 2774)	
  #### 511 Network Authentication Required	
  #### 598 (Informal convention) network read timeout error	
  #### 599 (Informal convention) network connect timeout error	

## ## ## ## ## ## ## ## # ## #
--------------------------------------------------------------------------

# Fetch API Example: 
## örneklem ilgili dosya içerisinde yapılmıştır.
[doc](js/Week2-Assignment.js)



## ## ## ## ## ## ## ## # ## #
--------------------------------------------------------
# Props Ve State
Stateler ve propslar, proje içerisinde "componentleri" kontrol etmeye yaramaktadır.
## Props:
Propslar componentler arası veri aktarımı yapmayı sağlamaktadırlar("read-only").
Ebeveyn componentlerden çocuk - alt componentlere aktarımlarda veri değişimi veya bozulumu olmayacaktır.
Kısacası parametre olarak gönderilen verileri componentin içerisie ekleyebilmek için kullanılmaktadır.

## State:
Bir componentin o anki durumunu gösteren ve farklı property'lerden oluşan bir js objesidir. 
Javascript tarafındaki değer saklamak için kullanılan, let-const-var tanımlarının React karşılığıdır.