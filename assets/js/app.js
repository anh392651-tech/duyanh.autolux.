const cars = [
 {id:1,brand:'Mercedes-Benz',name:'Mercedes-Benz E 200 Avantgarde',price:2189,year:2026,type:'Sedan',km:'Xe mới',engine:'2.0L',fuel:'Xăng',transmission:'Tự động',color:'Tùy chọn',badge:'CHÍNH HÃNG',source:'Mercedes-Benz Việt Nam',image:'assets/img/e200avt.jpg'},
 {id:2,brand:'Mercedes-Benz',name:'Mercedes-Benz GLC 200 4MATIC',price:2319,year:2026,type:'SUV',km:'Xe mới',engine:'2.0L Mild Hybrid',fuel:'Xăng',transmission:'Tự động',color:'Tùy chọn',badge:'SUV CAO CẤP',source:'Mercedes-Benz Việt Nam',image:'assets/img/glc2004mt.webp'},
 {id:3,brand:'BMW',name:'BMW X1',price:1689,year:2026,type:'SUV',km:'Xe mới',engine:'Xăng',fuel:'Xăng',transmission:'Tự động',color:'Tùy chọn',badge:'GIÁ TỐT',source:'BMW Việt Nam',image:'assets/img/bmwx1.jpg'},
 {id:4,brand:'BMW',name:'BMW 3 Series',price:1699,year:2026,type:'Sedan',km:'Xe mới',engine:'Xăng',fuel:'Xăng',transmission:'Tự động',color:'Tùy chọn',badge:'THỂ THAO',source:'BMW Việt Nam',image:'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=1100&q=85'},
 {id:5,brand:'BMW',name:'BMW 5 Series',price:1979,year:2026,type:'Sedan',km:'Xe mới',engine:'Xăng',fuel:'Xăng',transmission:'Tự động',color:'Tùy chọn',badge:'DOANH NHÂN',source:'BMW Việt Nam',image:'assets/img/bmw530.jpg'},
 {id:6,brand:'BMW',name:'BMW X5',price:4160,year:2026,type:'SUV',km:'Xe mới',engine:'3.0L',fuel:'Xăng',transmission:'Tự động',color:'Tùy chọn',badge:'XDRIVE',source:'BMW Việt Nam',image:'assets/img/bmwx5.jpg'},
 {id:7,brand:'BMW',name:'BMW 7 Series',price:5099,year:2026,type:'Sedan',km:'Xe mới',engine:'Xăng',fuel:'Xăng',transmission:'Tự động',color:'Tùy chọn',badge:'FLAGSHIP',source:'BMW Việt Nam',image:'assets/img/735i.jpg'},
 {id:8,brand:'Lexus',name:'Lexus ES 250',price:2360,year:2026,type:'Sedan',km:'Xe mới',engine:'2.5L',fuel:'Xăng',transmission:'Tự động',color:'Tùy chọn',badge:'ÊM ÁI',source:'Lexus Việt Nam',image:'assets/img/es250.jpg'},
 {id:9,brand:'Lexus',name:'Lexus NX 350h',price:3270,year:2026,type:'SUV',km:'Xe mới',engine:'2.5L Hybrid',fuel:'Hybrid',transmission:'E-CVT',color:'Tùy chọn',badge:'HYBRID',source:'Lexus Việt Nam',image:'assets/img/NX350h.webp'},
 {id:10,brand:'Lexus',name:'Lexus RX 350h Premium',price:3350,year:2026,type:'SUV',km:'Xe mới',engine:'2.5L Hybrid',fuel:'Hybrid',transmission:'E-CVT',color:'Tùy chọn',badge:'PREMIUM',source:'Lexus Việt Nam',image:'assets/img/rx350h.jpg'},
 {id:11,brand:'Lexus',name:'Lexus RX 500h F Sport Performance',price:4940,year:2026,type:'SUV',km:'Xe mới',engine:'Hybrid hiệu suất cao',fuel:'Hybrid',transmission:'Tự động',color:'Tùy chọn',badge:'F SPORT',source:'Lexus Việt Nam',image:'assets/img/rx500h.png'},
 {id:12,brand:'Lexus',name:'Lexus GX 550',price:6450,year:2026,type:'SUV',km:'Xe mới',engine:'3.4L Twin Turbo',fuel:'Xăng',transmission:'Tự động',color:'Tùy chọn',badge:'OFF-ROAD LUXURY',source:'Lexus Việt Nam',image:'assets/img/gx550.jpg'},
 {id:13,brand:'Lexus',name:'Lexus LX 600 Urban',price:8590,year:2026,type:'SUV',km:'Xe mới',engine:'3.4L Twin Turbo',fuel:'Xăng',transmission:'Tự động',color:'Tùy chọn',badge:'ULTRA LUXURY',source:'Lexus Việt Nam',image:'assets/img/lx600urban.jpg'},
 {id:14,brand:'Land Rover',name:'Range Rover Evoque',price:3049,year:2026,type:'SUV',km:'Xe mới',engine:'Xăng',fuel:'Xăng',transmission:'Tự động',color:'Tùy chọn',badge:'URBAN SUV',source:'Land Rover Việt Nam',image:'assets/img/evoque.jpg'},
 {id:15,brand:'Land Rover',name:'Range Rover Velar',price:4079,year:2026,type:'SUV',km:'Xe mới',engine:'Xăng',fuel:'Xăng',transmission:'Tự động',color:'Tùy chọn',badge:'DESIGN ICON',source:'Land Rover Việt Nam',image:'assets/img/velar.jpg'},
 {id:16,brand:'Land Rover',name:'Defender 110',price:4849,year:2026,type:'SUV',km:'Xe mới',engine:'Xăng',fuel:'Xăng',transmission:'Tự động',color:'Tùy chọn',badge:'ADVENTURE',source:'Land Rover Việt Nam',image:'assets/img/defender110.webp'},
 {id:17,brand:'Land Rover',name:'Range Rover Sport',price:7719,year:2026,type:'SUV',km:'Xe mới',engine:'Xăng',fuel:'Xăng',transmission:'Tự động',color:'Tùy chọn',badge:'PERFORMANCE',source:'Land Rover Việt Nam',image:'assets/img/RR-sport.jpg'},
 {id:18,brand:'Land Rover',name:'Range Rover',price:12679,year:2026,type:'SUV',km:'Xe mới',engine:'Xăng / Mild Hybrid',fuel:'Xăng',transmission:'Tự động',color:'Tùy chọn',badge:'FLAGSHIP SUV',source:'Land Rover Việt Nam',image:'assets/img/rr1.jpg'},
 {id:19,brand:'McLaren',name:'McLaren Senna',price:45000,year:2019,type:'Hypercar',km:'Xe cũ',engine:'4.0L V8 Twin-Turbo',fuel:'Xăng',transmission:'Ly hợp kép 7 cấp',color:'Tùy chọn',badge:'LIMITED EDITION',source:'Nhập khẩu tư nhân',image:'assets/img/senna.jpg'},
 {id:20,brand:'Lamborghini',name:'Revuelto',price:63500,year:2026,type:'supercar',km:'Xe mới',engine:'Xăng / Mild Hybrid',fuel:'Xăng',transmission:'Tự động',color:'Tùy chọn',badge:'SUPER CAR',source:'Lamborghini Việt Nam',image:'assets/img/revuelto.jpeg'},
];


// 125 xe bổ sung: 5 nhóm × 5 hãng × 5 mẫu xe.
// Giá dùng đơn vị triệu đồng, phù hợp với hàm money() hiện tại.
const additionalCars = [
  {"id":21,"brand":"Toyota","name":"Toyota Vios","price":545,"year":2026,"type":"Sedan","km":"Xe mới","engine":"1.5L","fuel":"Xăng","transmission":"CVT","color":"Tùy chọn","badge":"BÁN CHẠY","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/toyota-vios.jpg","category":"Phổ thông"},
  {"id":22,"brand":"Toyota","name":"Toyota Corolla Altis","price":780,"year":2026,"type":"Sedan","km":"Xe mới","engine":"1.8L","fuel":"Xăng","transmission":"CVT","color":"Tùy chọn","badge":"BỀN BỈ","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/toyota-corolla-altis.jpg","category":"Phổ thông"},
  {"id":23,"brand":"Toyota","name":"Toyota Corolla Cross HEV","price":905,"year":2026,"type":"SUV","km":"Xe mới","engine":"1.8L Hybrid","fuel":"Hybrid","transmission":"E-CVT","color":"Tùy chọn","badge":"HYBRID","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/toyota-corolla-cross-hev.jpg","category":"Phổ thông"},
  {"id":24,"brand":"Toyota","name":"Toyota Camry HEV","price":1530,"year":2026,"type":"Sedan","km":"Xe mới","engine":"2.5L Hybrid","fuel":"Hybrid","transmission":"E-CVT","color":"Tùy chọn","badge":"CAO CẤP","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/toyota-camry-hev.jpg","category":"Phổ thông"},
  {"id":25,"brand":"Toyota","name":"Toyota Fortuner Legender","price":1470,"year":2026,"type":"SUV","km":"Xe mới","engine":"2.8L Turbo Diesel","fuel":"Dầu","transmission":"Tự động 6 cấp","color":"Tùy chọn","badge":"7 CHỖ","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/toyota-fortuner-legender.jpg","category":"Phổ thông"},
  {"id":26,"brand":"Honda","name":"Honda City RS","price":569,"year":2026,"type":"Sedan","km":"Xe mới","engine":"1.5L","fuel":"Xăng","transmission":"CVT","color":"Tùy chọn","badge":"THỂ THAO","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/honda-city-rs.jpg","category":"Phổ thông"},
  {"id":27,"brand":"Honda","name":"Honda Civic RS","price":889,"year":2026,"type":"Sedan","km":"Xe mới","engine":"1.5L Turbo","fuel":"Xăng","transmission":"CVT","color":"Tùy chọn","badge":"SPORT SEDAN","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/honda-civic-rs.jpg","category":"Phổ thông"},
  {"id":28,"brand":"Honda","name":"Honda HR-V RS","price":871,"year":2026,"type":"SUV","km":"Xe mới","engine":"1.5L Turbo","fuel":"Xăng","transmission":"CVT","color":"Tùy chọn","badge":"URBAN SUV","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/honda-hr-v-rs.jpg","category":"Phổ thông"},
  {"id":29,"brand":"Honda","name":"Honda CR-V e:HEV RS","price":1260,"year":2026,"type":"SUV","km":"Xe mới","engine":"2.0L Hybrid","fuel":"Hybrid","transmission":"E-CVT","color":"Tùy chọn","badge":"HYBRID","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/honda-cr-v-e-hev-rs.jpg","category":"Phổ thông"},
  {"id":30,"brand":"Honda","name":"Honda Accord","price":1319,"year":2026,"type":"Sedan","km":"Xe mới","engine":"1.5L Turbo","fuel":"Xăng","transmission":"CVT","color":"Tùy chọn","badge":"EXECUTIVE","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/honda-accord.jpg","category":"Phổ thông"},
  {"id":31,"brand":"Hyundai","name":"Hyundai Accent","price":569,"year":2026,"type":"Sedan","km":"Xe mới","engine":"1.5L","fuel":"Xăng","transmission":"CVT","color":"Tùy chọn","badge":"GIÁ TỐT","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/hyundai-accent.jpg","category":"Phổ thông"},
  {"id":32,"brand":"Hyundai","name":"Hyundai Creta","price":699,"year":2026,"type":"SUV","km":"Xe mới","engine":"1.5L","fuel":"Xăng","transmission":"CVT","color":"Tùy chọn","badge":"ĐÔ THỊ","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/hyundai-creta.jpg","category":"Phổ thông"},
  {"id":33,"brand":"Hyundai","name":"Hyundai Tucson","price":989,"year":2026,"type":"SUV","km":"Xe mới","engine":"1.6L Turbo","fuel":"Xăng","transmission":"Ly hợp kép 7 cấp","color":"Tùy chọn","badge":"TURBO","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/hyundai-tucson.jpg","category":"Phổ thông"},
  {"id":34,"brand":"Hyundai","name":"Hyundai Santa Fe Calligraphy","price":1365,"year":2026,"type":"SUV","km":"Xe mới","engine":"2.5L Turbo","fuel":"Xăng","transmission":"Ly hợp kép 8 cấp","color":"Tùy chọn","badge":"CALLIGRAPHY","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/hyundai-santa-fe-calligraphy.jpg","category":"Phổ thông"},
  {"id":35,"brand":"Hyundai","name":"Hyundai Palisade Prestige","price":1589,"year":2026,"type":"SUV","km":"Xe mới","engine":"2.2L Diesel","fuel":"Dầu","transmission":"Tự động 8 cấp","color":"Tùy chọn","badge":"FLAGSHIP SUV","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/hyundai-palisade-prestige.jpg","category":"Phổ thông"},
  {"id":36,"brand":"Kia","name":"Kia K3","price":689,"year":2026,"type":"Sedan","km":"Xe mới","engine":"1.6L","fuel":"Xăng","transmission":"Tự động 6 cấp","color":"Tùy chọn","badge":"TRẺ TRUNG","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/kia-k3.jpg","category":"Phổ thông"},
  {"id":37,"brand":"Kia","name":"Kia Sonet","price":624,"year":2026,"type":"SUV","km":"Xe mới","engine":"1.5L","fuel":"Xăng","transmission":"CVT","color":"Tùy chọn","badge":"COMPACT SUV","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/kia-sonet.jpg","category":"Phổ thông"},
  {"id":38,"brand":"Kia","name":"Kia Seltos GT-Line","price":799,"year":2026,"type":"SUV","km":"Xe mới","engine":"1.5L Turbo","fuel":"Xăng","transmission":"Ly hợp kép 7 cấp","color":"Tùy chọn","badge":"GT-LINE","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/kia-seltos-gt-line.jpg","category":"Phổ thông"},
  {"id":39,"brand":"Kia","name":"Kia Sportage","price":999,"year":2026,"type":"SUV","km":"Xe mới","engine":"1.6L Turbo","fuel":"Xăng","transmission":"Ly hợp kép 7 cấp","color":"Tùy chọn","badge":"PREMIUM SUV","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/kia-sportage.jpg","category":"Phổ thông"},
  {"id":40,"brand":"Kia","name":"Kia Carnival Signature","price":1849,"year":2026,"type":"MPV","km":"Xe mới","engine":"2.2L Diesel","fuel":"Dầu","transmission":"Tự động 8 cấp","color":"Tùy chọn","badge":"LUXURY MPV","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/kia-carnival-signature.jpg","category":"Phổ thông"},
  {"id":41,"brand":"Ford","name":"Ford Territory Titanium X","price":889,"year":2026,"type":"SUV","km":"Xe mới","engine":"1.5L EcoBoost","fuel":"Xăng","transmission":"Ly hợp kép 7 cấp","color":"Tùy chọn","badge":"TITANIUM X","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/ford-territory-titanium-x.jpg","category":"Phổ thông"},
  {"id":42,"brand":"Ford","name":"Ford Ranger Wildtrak","price":1039,"year":2026,"type":"Bán tải","km":"Xe mới","engine":"2.0L Bi-Turbo","fuel":"Dầu","transmission":"Tự động 10 cấp","color":"Tùy chọn","badge":"WILDTRAK","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/ford-ranger-wildtrak.jpg","category":"Phổ thông"},
  {"id":43,"brand":"Ford","name":"Ford Ranger Raptor","price":1299,"year":2026,"type":"Bán tải","km":"Xe mới","engine":"2.0L Bi-Turbo","fuel":"Dầu","transmission":"Tự động 10 cấp","color":"Tùy chọn","badge":"RAPTOR","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/ford-ranger-raptor.jpg","category":"Phổ thông"},
  {"id":44,"brand":"Ford","name":"Ford Everest Platinum","price":1545,"year":2026,"type":"SUV","km":"Xe mới","engine":"2.0L Bi-Turbo","fuel":"Dầu","transmission":"Tự động 10 cấp","color":"Tùy chọn","badge":"PLATINUM","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/ford-everest-platinum.jpg","category":"Phổ thông"},
  {"id":45,"brand":"Ford","name":"Ford Explorer","price":2099,"year":2026,"type":"SUV","km":"Xe mới","engine":"2.3L EcoBoost","fuel":"Xăng","transmission":"Tự động 10 cấp","color":"Tùy chọn","badge":"FULL-SIZE SUV","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/ford-explorer.jpg","category":"Phổ thông"},
  {"id":46,"brand":"Ferrari","name":"Ferrari Roma Spider","price":23000,"year":2025,"type":"Supercar","km":"Xe mới","engine":"3.9L V8 Twin-Turbo","fuel":"Xăng","transmission":"Ly hợp kép 8 cấp","color":"Tùy chọn","badge":"GRAND TOURER","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/ferrari-roma-spider.jpg","category":"Siêu xe"},
  {"id":47,"brand":"Ferrari","name":"Ferrari 296 GTB","price":25000,"year":2025,"type":"Supercar","km":"Xe mới","engine":"3.0L V6 Plug-in Hybrid","fuel":"Plug-in Hybrid","transmission":"Ly hợp kép 8 cấp","color":"Tùy chọn","badge":"HYBRID V6","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/ferrari-296-gtb.jpg","category":"Siêu xe"},
  {"id":48,"brand":"Ferrari","name":"Ferrari SF90 Stradale","price":40000,"year":2025,"type":"Supercar","km":"Xe mới","engine":"4.0L V8 Plug-in Hybrid","fuel":"Plug-in Hybrid","transmission":"Ly hợp kép 8 cấp","color":"Tùy chọn","badge":"SF90","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/ferrari-sf90-stradale.jpg","category":"Siêu xe"},
  {"id":49,"brand":"Ferrari","name":"Ferrari 12Cilindri","price":32000,"year":2025,"type":"Supercar","km":"Xe mới","engine":"6.5L V12","fuel":"Xăng","transmission":"Ly hợp kép 8 cấp","color":"Tùy chọn","badge":"V12 ICON","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/ferrari-12cilindri.jpg","category":"Siêu xe"},
  {"id":50,"brand":"Ferrari","name":"Ferrari Purosangue","price":40000,"year":2025,"type":"SUV","km":"Xe mới","engine":"6.5L V12","fuel":"Xăng","transmission":"Ly hợp kép 8 cấp","color":"Tùy chọn","badge":"V12 SUV","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/ferrari-purosangue.jpg","category":"Siêu xe"},
  {"id":51,"brand":"Lamborghini","name":"Lamborghini Temerario","price":30000,"year":2026,"type":"Supercar","km":"Xe mới","engine":"4.0L V8 Plug-in Hybrid","fuel":"Plug-in Hybrid","transmission":"Ly hợp kép 8 cấp","color":"Tùy chọn","badge":"HPEV","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/lamborghini-temerario.jpg","category":"Siêu xe"},
  {"id":52,"brand":"Lamborghini","name":"Lamborghini Huracán Tecnica","price":22000,"year":2024,"type":"Supercar","km":"Xe mới","engine":"5.2L V10","fuel":"Xăng","transmission":"Ly hợp kép 7 cấp","color":"Tùy chọn","badge":"V10","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/lamborghini-huracan-tecnica.jpg","category":"Siêu xe"},
  {"id":53,"brand":"Lamborghini","name":"Lamborghini Aventador SVJ","price":55000,"year":2021,"type":"Supercar","km":"Xe sưu tầm","engine":"6.5L V12","fuel":"Xăng","transmission":"ISR 7 cấp","color":"Tùy chọn","badge":"SVJ","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/lamborghini-aventador-svj.jpg","category":"Siêu xe"},
  {"id":54,"brand":"Lamborghini","name":"Lamborghini Sián FKP 37","price":85000,"year":2021,"type":"Hypercar","km":"Xe sưu tầm","engine":"6.5L V12 Mild Hybrid","fuel":"Hybrid","transmission":"ISR 7 cấp","color":"Tùy chọn","badge":"LIMITED","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/lamborghini-sian-fkp-37.jpg","category":"Siêu xe"},
  {"id":55,"brand":"Lamborghini","name":"Lamborghini Urus SE","price":25000,"year":2026,"type":"SUV","km":"Xe mới","engine":"4.0L V8 Plug-in Hybrid","fuel":"Plug-in Hybrid","transmission":"Tự động 8 cấp","color":"Tùy chọn","badge":"SUPER SUV","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/lamborghini-urus-se.jpg","category":"Siêu xe"},
  {"id":56,"brand":"McLaren","name":"McLaren 750S","price":20000,"year":2025,"type":"Supercar","km":"Xe mới","engine":"4.0L V8 Twin-Turbo","fuel":"Xăng","transmission":"Ly hợp kép 7 cấp","color":"Tùy chọn","badge":"750S","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/mclaren-750s.jpg","category":"Siêu xe"},
  {"id":57,"brand":"McLaren","name":"McLaren Artura","price":16000,"year":2025,"type":"Supercar","km":"Xe mới","engine":"3.0L V6 Plug-in Hybrid","fuel":"Plug-in Hybrid","transmission":"Ly hợp kép 8 cấp","color":"Tùy chọn","badge":"HYBRID","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/artura.avif","category":"Siêu xe"},
  {"id":58,"brand":"McLaren","name":"McLaren P1","price":55000,"year":2015,"type":"Hypercar","km":"Xe sưu tầm","engine":"3.8L V8 Hybrid","fuel":"Hybrid","transmission":"Ly hợp kép 7 cấp","color":"Tùy chọn","badge":"ULTIMATE SERIES","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/mclaren-p1.jpg","category":"Siêu xe"},
  {"id":59,"brand":"McLaren","name":"McLaren Speedtail","price":90000,"year":2020,"type":"Hypercar","km":"Xe sưu tầm","engine":"4.0L V8 Hybrid","fuel":"Hybrid","transmission":"Ly hợp kép 7 cấp","color":"Tùy chọn","badge":"HYPER-GT","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/speedtail.webp","category":"Siêu xe"},
  {"id":60,"brand":"McLaren","name":"McLaren Elva","price":65000,"year":2021,"type":"Supercar","km":"Xe sưu tầm","engine":"4.0L V8 Twin-Turbo","fuel":"Xăng","transmission":"Ly hợp kép 7 cấp","color":"Tùy chọn","badge":"ROADSTER","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/mclaren-elva.jpg","category":"Siêu xe"},
  {"id":61,"brand":"Porsche","name":"Porsche 911 Carrera GTS","price":12000,"year":2026,"type":"Supercar","km":"Xe mới","engine":"3.6L T-Hybrid","fuel":"Hybrid","transmission":"PDK 8 cấp","color":"Tùy chọn","badge":"911 GTS","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/porsche-911-carrera-gts.jpg","category":"Siêu xe"},
  {"id":62,"brand":"Porsche","name":"Porsche 911 Turbo S","price":17000,"year":2025,"type":"Supercar","km":"Xe mới","engine":"3.8L Twin-Turbo","fuel":"Xăng","transmission":"PDK 8 cấp","color":"Tùy chọn","badge":"TURBO S","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/porsche-911-turbo-s.jpg","category":"Siêu xe"},
  {"id":63,"brand":"Porsche","name":"Porsche 911 GT3 RS","price":22000,"year":2025,"type":"Supercar","km":"Xe mới","engine":"4.0L Boxer 6","fuel":"Xăng","transmission":"PDK 7 cấp","color":"Tùy chọn","badge":"GT3 RS","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/porsche-911-gt3-rs.jpg","category":"Siêu xe"},
  {"id":64,"brand":"Porsche","name":"Porsche Taycan Turbo GT","price":13000,"year":2026,"type":"Sedan","km":"Xe mới","engine":"Hai động cơ điện","fuel":"Điện","transmission":"Một cấp","color":"Tùy chọn","badge":"TURBO GT","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/porsche-taycan-turbo-gt.jpg","category":"Siêu xe"},
  {"id":65,"brand":"Porsche","name":"Porsche 718 Cayman GT4 RS","price":11000,"year":2025,"type":"Supercar","km":"Xe mới","engine":"4.0L Boxer 6","fuel":"Xăng","transmission":"PDK 7 cấp","color":"Tùy chọn","badge":"GT4 RS","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/porsche-718-cayman-gt4-rs.jpg","category":"Siêu xe"},
  {"id":66,"brand":"Aston Martin","name":"Aston Martin Vantage","price":18000,"year":2025,"type":"Supercar","km":"Xe mới","engine":"4.0L V8 Twin-Turbo","fuel":"Xăng","transmission":"Tự động 8 cấp","color":"Tùy chọn","badge":"VANTAGE","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/aston-martin-vantage.jpg","category":"Siêu xe"},
  {"id":67,"brand":"Aston Martin","name":"Aston Martin DB12","price":22000,"year":2025,"type":"Coupe","km":"Xe mới","engine":"4.0L V8 Twin-Turbo","fuel":"Xăng","transmission":"Tự động 8 cấp","color":"Tùy chọn","badge":"SUPER TOURER","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/aston-martin-db12.jpg","category":"Siêu xe"},
  {"id":68,"brand":"Aston Martin","name":"Aston Martin Vanquish","price":32000,"year":2026,"type":"Supercar","km":"Xe mới","engine":"5.2L V12 Twin-Turbo","fuel":"Xăng","transmission":"Tự động 8 cấp","color":"Tùy chọn","badge":"V12 FLAGSHIP","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/aston-martin-vanquish.jpg","category":"Siêu xe"},
  {"id":69,"brand":"Aston Martin","name":"Aston Martin DBS 770 Ultimate","price":30000,"year":2023,"type":"Supercar","km":"Xe sưu tầm","engine":"5.2L V12 Twin-Turbo","fuel":"Xăng","transmission":"Tự động 8 cấp","color":"Tùy chọn","badge":"ULTIMATE","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/aston-martin-dbs-770-ultimate.jpg","category":"Siêu xe"},
  {"id":70,"brand":"Aston Martin","name":"Aston Martin Valour","price":40000,"year":2024,"type":"Supercar","km":"Xe mới","engine":"5.2L V12 Twin-Turbo","fuel":"Xăng","transmission":"Số sàn 6 cấp","color":"Tùy chọn","badge":"LIMITED V12","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/aston-martin-valour.jpg","category":"Siêu xe"},
  {"id":71,"brand":"Rolls-Royce","name":"Rolls-Royce Ghost","price":35000,"year":2026,"type":"Sedan","km":"Xe mới","engine":"6.75L V12 Twin-Turbo","fuel":"Xăng","transmission":"Tự động 8 cấp","color":"Tùy chọn","badge":"BESPOKE","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/rolls-royce-ghost.jpg","category":"Siêu sang"},
  {"id":72,"brand":"Rolls-Royce","name":"Rolls-Royce Phantom","price":55000,"year":2026,"type":"Sedan","km":"Xe mới","engine":"6.75L V12 Twin-Turbo","fuel":"Xăng","transmission":"Tự động 8 cấp","color":"Tùy chọn","badge":"FLAGSHIP","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/rolls-royce-phantom.jpg","category":"Siêu sang"},
  {"id":73,"brand":"Rolls-Royce","name":"Rolls-Royce Cullinan","price":50000,"year":2026,"type":"SUV","km":"Xe mới","engine":"6.75L V12 Twin-Turbo","fuel":"Xăng","transmission":"Tự động 8 cấp","color":"Tùy chọn","badge":"ULTRA LUXURY SUV","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/rolls-royce-cullinan.jpg","category":"Siêu sang"},
  {"id":74,"brand":"Rolls-Royce","name":"Rolls-Royce Spectre","price":40000,"year":2026,"type":"Coupe","km":"Xe mới","engine":"Hai động cơ điện","fuel":"Điện","transmission":"Một cấp","color":"Tùy chọn","badge":"ELECTRIC LUXURY","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/rolls-royce-spectre.jpg","category":"Siêu sang"},
  {"id":75,"brand":"Rolls-Royce","name":"Rolls-Royce Boat Tail","price":650000,"year":2022,"type":"Coachbuilt","km":"Xe sưu tầm","engine":"6.75L V12 Twin-Turbo","fuel":"Xăng","transmission":"Tự động 8 cấp","color":"Tùy chọn","badge":"COACHBUILD","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/boattail.webp","category":"Siêu sang"},
  {"id":76,"brand":"Bentley","name":"Bentley Flying Spur","price":22000,"year":2026,"type":"Sedan","km":"Xe mới","engine":"4.0L V8 Hybrid","fuel":"Plug-in Hybrid","transmission":"Ly hợp kép 8 cấp","color":"Tùy chọn","badge":"LUXURY SEDAN","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/bentley-flying-spur.jpg","category":"Siêu sang"},
  {"id":77,"brand":"Bentley","name":"Bentley Continental GT","price":23000,"year":2026,"type":"Coupe","km":"Xe mới","engine":"4.0L V8 Hybrid","fuel":"Plug-in Hybrid","transmission":"Ly hợp kép 8 cấp","color":"Tùy chọn","badge":"GRAND TOURER","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/bentley-continental-gt.jpg","category":"Siêu sang"},
  {"id":78,"brand":"Bentley","name":"Bentley Continental GTC","price":25000,"year":2026,"type":"Convertible","km":"Xe mới","engine":"4.0L V8 Hybrid","fuel":"Plug-in Hybrid","transmission":"Ly hợp kép 8 cấp","color":"Tùy chọn","badge":"OPEN-TOP GT","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/bentley-continental-gtc.jpg","category":"Siêu sang"},
  {"id":79,"brand":"Bentley","name":"Bentley Bentayga","price":21000,"year":2026,"type":"SUV","km":"Xe mới","engine":"4.0L V8 Twin-Turbo","fuel":"Xăng","transmission":"Tự động 8 cấp","color":"Tùy chọn","badge":"LUXURY SUV","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/bentley-bentayga.jpg","category":"Siêu sang"},
  {"id":80,"brand":"Bentley","name":"Bentley Batur","price":55000,"year":2024,"type":"Coachbuilt","km":"Xe mới","engine":"6.0L W12 Twin-Turbo","fuel":"Xăng","transmission":"Ly hợp kép 8 cấp","color":"Tùy chọn","badge":"MULLINER","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/bentley-batur.jpg","category":"Siêu sang"},
  {"id":81,"brand":"Mercedes-Maybach","name":"Mercedes-Maybach S 450 4MATIC","price":8900,"year":2026,"type":"Sedan","km":"Xe mới","engine":"3.0L Mild Hybrid","fuel":"Xăng","transmission":"Tự động 9 cấp","color":"Tùy chọn","badge":"MAYBACH","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/mercedes-maybach-s-450-4matic.jpg","category":"Siêu sang"},
  {"id":82,"brand":"Mercedes-Maybach","name":"Mercedes-Maybach S 680 4MATIC","price":18000,"year":2026,"type":"Sedan","km":"Xe mới","engine":"6.0L V12 Twin-Turbo","fuel":"Xăng","transmission":"Tự động 9 cấp","color":"Tùy chọn","badge":"V12","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/Maybach-S680v12.webp","category":"Siêu sang"},
  {"id":83,"brand":"Mercedes-Maybach","name":"Mercedes-Maybach GLS 480 4MATIC","price":8800,"year":2026,"type":"SUV","km":"Xe mới","engine":"3.0L Mild Hybrid","fuel":"Xăng","transmission":"Tự động 9 cấp","color":"Tùy chọn","badge":"MAYBACH SUV","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/mercedes-maybach-gls-480-4matic.jpg","category":"Siêu sang"},
  {"id":84,"brand":"Mercedes-Maybach","name":"Mercedes-Maybach GLS 600 4MATIC","price":13500,"year":2026,"type":"SUV","km":"Xe mới","engine":"4.0L V8 Mild Hybrid","fuel":"Xăng","transmission":"Tự động 9 cấp","color":"Tùy chọn","badge":"V8 LUXURY","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/mercedes-maybach-gls-600-4matic.jpg","category":"Siêu sang"},
  {"id":85,"brand":"Mercedes-Maybach","name":"Mercedes-Maybach SL 680 Monogram Series","price":16000,"year":2026,"type":"Convertible","km":"Xe mới","engine":"4.0L V8 Twin-Turbo","fuel":"Xăng","transmission":"Tự động 9 cấp","color":"Tùy chọn","badge":"MONOGRAM","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/mercedes-maybach-sl-680-monogram-series.jpg","category":"Siêu sang"},
  {"id":86,"brand":"Maserati","name":"Maserati Ghibli 334 Ultima","price":8500,"year":2024,"type":"Sedan","km":"Xe mới","engine":"3.8L V8 Twin-Turbo","fuel":"Xăng","transmission":"Tự động 8 cấp","color":"Tùy chọn","badge":"ULTIMA","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/maserati-ghibli-334-ultima.jpg","category":"Siêu sang"},
  {"id":87,"brand":"Maserati","name":"Maserati Quattroporte Trofeo","price":12000,"year":2023,"type":"Sedan","km":"Xe sưu tầm","engine":"3.8L V8 Twin-Turbo","fuel":"Xăng","transmission":"Tự động 8 cấp","color":"Tùy chọn","badge":"TROFEO","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/maserati-quattroporte-trofeo.jpg","category":"Siêu sang"},
  {"id":88,"brand":"Maserati","name":"Maserati Grecale Trofeo","price":7500,"year":2026,"type":"SUV","km":"Xe mới","engine":"3.0L V6 Twin-Turbo","fuel":"Xăng","transmission":"Tự động 8 cấp","color":"Tùy chọn","badge":"TROFEO SUV","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/maserati-grecale-trofeo.jpg","category":"Siêu sang"},
  {"id":89,"brand":"Maserati","name":"Maserati Levante Trofeo","price":11000,"year":2024,"type":"SUV","km":"Xe mới","engine":"3.8L V8 Twin-Turbo","fuel":"Xăng","transmission":"Tự động 8 cấp","color":"Tùy chọn","badge":"V8 SUV","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/maserati-levante-trofeo.jpg","category":"Siêu sang"},
  {"id":90,"brand":"Maserati","name":"Maserati GranTurismo Trofeo","price":10000,"year":2026,"type":"Coupe","km":"Xe mới","engine":"3.0L V6 Twin-Turbo","fuel":"Xăng","transmission":"Tự động 8 cấp","color":"Tùy chọn","badge":"GRAND TOURER","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/maserati-granturismo-trofeo.jpg","category":"Siêu sang"},
  {"id":91,"brand":"Cadillac","name":"Cadillac CT5-V Blackwing","price":7500,"year":2025,"type":"Sedan","km":"Xe mới","engine":"6.2L Supercharged V8","fuel":"Xăng","transmission":"Tự động 10 cấp","color":"Tùy chọn","badge":"BLACKWING","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/cadillac-ct5-v-blackwing.jpg","category":"Siêu sang"},
  {"id":92,"brand":"Cadillac","name":"Cadillac Escalade","price":12000,"year":2026,"type":"SUV","km":"Xe mới","engine":"6.2L V8","fuel":"Xăng","transmission":"Tự động 10 cấp","color":"Tùy chọn","badge":"FULL-SIZE LUXURY","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/cadillac-escalade.jpg","category":"Siêu sang"},
  {"id":93,"brand":"Cadillac","name":"Cadillac Escalade-V","price":17000,"year":2025,"type":"SUV","km":"Xe mới","engine":"6.2L Supercharged V8","fuel":"Xăng","transmission":"Tự động 10 cấp","color":"Tùy chọn","badge":"V-SERIES","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/cadillac-escalade-v.jpg","category":"Siêu sang"},
  {"id":94,"brand":"Cadillac","name":"Cadillac Celestiq","price":25000,"year":2026,"type":"Sedan","km":"Xe mới","engine":"Hai động cơ điện","fuel":"Điện","transmission":"Một cấp","color":"Tùy chọn","badge":"HAND-BUILT EV","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/celestiq.jpg","category":"Siêu sang"},
  {"id":95,"brand":"Cadillac","name":"Cadillac Lyriq-V","price":6500,"year":2026,"type":"SUV","km":"Xe mới","engine":"Hai động cơ điện","fuel":"Điện","transmission":"Một cấp","color":"Tùy chọn","badge":"LUXURY EV","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/cadillac-lyriq-v.jpg","category":"Siêu sang"},
  {"id":96,"brand":"Bugatti","name":"Bugatti Chiron Super Sport","price":120000,"year":2022,"type":"Hypercar","km":"Xe sưu tầm","engine":"8.0L W16 Quad-Turbo","fuel":"Xăng","transmission":"Ly hợp kép 7 cấp","color":"Tùy chọn","badge":"SUPER SPORT","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/bugatti-chiron-super-sport.jpg","category":"Hypercar"},
  {"id":97,"brand":"Bugatti","name":"Bugatti Chiron Pur Sport","price":130000,"year":2022,"type":"Hypercar","km":"Xe sưu tầm","engine":"8.0L W16 Quad-Turbo","fuel":"Xăng","transmission":"Ly hợp kép 7 cấp","color":"Tùy chọn","badge":"PUR SPORT","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/bugatti-chiron-pur-sport.jpg","category":"Hypercar"},
  {"id":98,"brand":"Bugatti","name":"Bugatti Divo","price":180000,"year":2021,"type":"Hypercar","km":"Xe sưu tầm","engine":"8.0L W16 Quad-Turbo","fuel":"Xăng","transmission":"Ly hợp kép 7 cấp","color":"Tùy chọn","badge":"LIMITED 40","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/divo.webp","category":"Hypercar"},
  {"id":99,"brand":"Bugatti","name":"Bugatti Mistral","price":200000,"year":2024,"type":"Hypercar","km":"Xe mới","engine":"8.0L W16 Quad-Turbo","fuel":"Xăng","transmission":"Ly hợp kép 7 cấp","color":"Tùy chọn","badge":"W16 ROADSTER","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/mistral.jpg","category":"Hypercar"},
  {"id":100,"brand":"Bugatti","name":"Bugatti Tourbillon","price":160000,"year":2026,"type":"Hypercar","km":"Xe mới","engine":"8.3L V16 Hybrid","fuel":"Hybrid","transmission":"Ly hợp kép 8 cấp","color":"Tùy chọn","badge":"V16 HYBRID","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/bugatti-tourbillon.jpg","category":"Hypercar"},
  {"id":101,"brand":"Pagani","name":"Pagani Huayra","price":90000,"year":2018,"type":"Hypercar","km":"Xe sưu tầm","engine":"6.0L V12 Twin-Turbo","fuel":"Xăng","transmission":"Tuần tự 7 cấp","color":"Tùy chọn","badge":"HUAYRA","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/pagani-huayra.jpg","category":"Hypercar"},
  {"id":102,"brand":"Pagani","name":"Pagani Huayra Roadster BC","price":140000,"year":2021,"type":"Hypercar","km":"Xe sưu tầm","engine":"6.0L V12 Twin-Turbo","fuel":"Xăng","transmission":"Tuần tự 7 cấp","color":"Tùy chọn","badge":"ROADSTER BC","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/pagani-huayra-roadster-bc.jpg","category":"Hypercar"},
  {"id":103,"brand":"Pagani","name":"Pagani Huayra R","price":120000,"year":2022,"type":"Hypercar","km":"Xe sưu tầm","engine":"6.0L V12","fuel":"Xăng","transmission":"Tuần tự 6 cấp","color":"Tùy chọn","badge":"TRACK ONLY","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/pagani-huayra-r.jpg","category":"Hypercar"},
  {"id":104,"brand":"Pagani","name":"Pagani Utopia","price":100000,"year":2025,"type":"Hypercar","km":"Xe mới","engine":"6.0L V12 Twin-Turbo","fuel":"Xăng","transmission":"Số sàn 7 cấp","color":"Tùy chọn","badge":"UTOPIA","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/pagani-utopia.jpg","category":"Hypercar"},
  {"id":105,"brand":"Pagani","name":"Pagani Zonda Revolución","price":180000,"year":2013,"type":"Hypercar","km":"Xe sưu tầm","engine":"6.0L V12","fuel":"Xăng","transmission":"Tuần tự 6 cấp","color":"Tùy chọn","badge":"ZONDA","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/pagani-zonda-revolucion.jpg","category":"Hypercar"},
  {"id":106,"brand":"Koenigsegg","name":"Koenigsegg Jesko Attack","price":120000,"year":2025,"type":"Hypercar","km":"Xe mới","engine":"5.0L V8 Twin-Turbo","fuel":"Xăng","transmission":"LST 9 cấp","color":"Tùy chọn","badge":"JESKO","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/koenigsegg-jesko-attack.jpg","category":"Hypercar"},
  {"id":107,"brand":"Koenigsegg","name":"Koenigsegg Jesko Absolut","price":130000,"year":2025,"type":"Hypercar","km":"Xe mới","engine":"5.0L V8 Twin-Turbo","fuel":"Xăng","transmission":"LST 9 cấp","color":"Tùy chọn","badge":"ABSOLUT","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/koenigsegg-jesko-absolut.jpg","category":"Hypercar"},
  {"id":108,"brand":"Koenigsegg","name":"Koenigsegg Gemera","price":100000,"year":2026,"type":"Hypercar","km":"Xe mới","engine":"5.0L V8 Hybrid","fuel":"Hybrid","transmission":"LSTT","color":"Tùy chọn","badge":"MEGA-GT","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/koenigsegg-gemera.jpg","category":"Hypercar"},
  {"id":109,"brand":"Koenigsegg","name":"Koenigsegg Regera","price":110000,"year":2021,"type":"Hypercar","km":"Xe sưu tầm","engine":"5.0L V8 Hybrid","fuel":"Hybrid","transmission":"Direct Drive","color":"Tùy chọn","badge":"REGERA","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/koenigsegg-regera.jpg","category":"Hypercar"},
  {"id":110,"brand":"Koenigsegg","name":"Koenigsegg CC850","price":140000,"year":2025,"type":"Hypercar","km":"Xe mới","engine":"5.0L V8 Twin-Turbo","fuel":"Xăng","transmission":"Engage Shift 9 cấp","color":"Tùy chọn","badge":"ANNIVERSARY","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/koenigsegg-cc850.jpg","category":"Hypercar"},
  {"id":111,"brand":"Rimac","name":"Rimac Nevera","price":90000,"year":2025,"type":"Hypercar","km":"Xe mới","engine":"Bốn động cơ điện","fuel":"Điện","transmission":"Một cấp","color":"Tùy chọn","badge":"ELECTRIC HYPERCAR","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/rimac-nevera.jpg","category":"Hypercar"},
  {"id":112,"brand":"Rimac","name":"Rimac Nevera R","price":110000,"year":2026,"type":"Hypercar","km":"Xe mới","engine":"Bốn động cơ điện","fuel":"Điện","transmission":"Một cấp","color":"Tùy chọn","badge":"NEVERA R","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/rimac-nevera-r.jpg","category":"Hypercar"},
  {"id":113,"brand":"Rimac","name":"Rimac C_Two","price":70000,"year":2021,"type":"Hypercar","km":"Xe sưu tầm","engine":"Bốn động cơ điện","fuel":"Điện","transmission":"Một cấp","color":"Tùy chọn","badge":"CONCEPT","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/rimac-c-two.jpg","category":"Hypercar"},
  {"id":114,"brand":"Rimac","name":"Rimac Concept_One","price":45000,"year":2016,"type":"Hypercar","km":"Xe sưu tầm","engine":"Bốn động cơ điện","fuel":"Điện","transmission":"Một cấp","color":"Tùy chọn","badge":"FIRST GENERATION","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/rimac-concept-one.jpg","category":"Hypercar"},
  {"id":115,"brand":"Rimac","name":"Rimac Concept_S","price":55000,"year":2017,"type":"Hypercar","km":"Xe sưu tầm","engine":"Bốn động cơ điện","fuel":"Điện","transmission":"Một cấp","color":"Tùy chọn","badge":"TRACK EV","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/rimac-concept-s.jpg","category":"Hypercar"},
  {"id":116,"brand":"Lotus","name":"Lotus Evija","price":85000,"year":2025,"type":"Hypercar","km":"Xe mới","engine":"Bốn động cơ điện","fuel":"Điện","transmission":"Một cấp","color":"Tùy chọn","badge":"ELECTRIC HYPERCAR","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/lotus-evija.jpg","category":"Hypercar"},
  {"id":117,"brand":"Lotus","name":"Lotus Evija Fittipaldi","price":95000,"year":2023,"type":"Hypercar","km":"Xe sưu tầm","engine":"Bốn động cơ điện","fuel":"Điện","transmission":"Một cấp","color":"Tùy chọn","badge":"LIMITED 8","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/lotus-evija-fittipaldi.jpg","category":"Hypercar"},
  {"id":118,"brand":"Lotus","name":"Lotus Emeya R","price":7000,"year":2026,"type":"Sedan","km":"Xe mới","engine":"Hai động cơ điện","fuel":"Điện","transmission":"Hai cấp","color":"Tùy chọn","badge":"HYPER-GT","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/lotus-emeya-r.jpg","category":"Hypercar"},
  {"id":119,"brand":"Lotus","name":"Lotus Eletre R","price":6500,"year":2026,"type":"SUV","km":"Xe mới","engine":"Hai động cơ điện","fuel":"Điện","transmission":"Hai cấp","color":"Tùy chọn","badge":"HYPER SUV","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/lotus-eletre-r.jpg","category":"Hypercar"},
  {"id":120,"brand":"Lotus","name":"Lotus Emira V6","price":5000,"year":2025,"type":"Supercar","km":"Xe mới","engine":"3.5L Supercharged V6","fuel":"Xăng","transmission":"Số sàn 6 cấp","color":"Tùy chọn","badge":"DRIVER'S CAR","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/lotus-emira-v6.jpg","category":"Hypercar"},
  {"id":121,"brand":"SSC","name":"SSC Tuatara","price":90000,"year":2025,"type":"Megacar","km":"Xe mới","engine":"5.9L V8 Twin-Turbo","fuel":"Xăng","transmission":"Tự động 7 cấp","color":"Tùy chọn","badge":"TUATARA","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/ssc-tuatara.jpg","category":"Megacar"},
  {"id":122,"brand":"SSC","name":"SSC Tuatara Striker","price":100000,"year":2025,"type":"Megacar","km":"Xe mới","engine":"5.9L V8 Twin-Turbo","fuel":"Xăng","transmission":"Tự động 7 cấp","color":"Tùy chọn","badge":"STRIKER","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/ssc-tuatara-striker.jpg","category":"Megacar"},
  {"id":123,"brand":"SSC","name":"SSC Tuatara Aggressor","price":120000,"year":2025,"type":"Megacar","km":"Xe mới","engine":"5.9L V8 Twin-Turbo","fuel":"Xăng","transmission":"Tự động 7 cấp","color":"Tùy chọn","badge":"TRACK ONLY","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/ssc-tuatara-aggressor.jpg","category":"Megacar"},
  {"id":124,"brand":"SSC","name":"SSC Ultimate Aero","price":50000,"year":2013,"type":"Megacar","km":"Xe sưu tầm","engine":"6.3L V8 Twin-Turbo","fuel":"Xăng","transmission":"Số sàn 7 cấp","color":"Tùy chọn","badge":"SPEED RECORD","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/ssc-ultimate-aero.jpg","category":"Megacar"},
  {"id":125,"brand":"SSC","name":"SSC Ultimate Aero XT","price":65000,"year":2013,"type":"Megacar","km":"Xe sưu tầm","engine":"6.9L V8 Twin-Turbo","fuel":"Xăng","transmission":"Số sàn 7 cấp","color":"Tùy chọn","badge":"LIMITED XT","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/ssc-ultimate-aero-xt.jpg","category":"Megacar"},
  {"id":126,"brand":"Hennessey","name":"Hennessey Venom F5","price":110000,"year":2025,"type":"Megacar","km":"Xe mới","engine":"6.6L V8 Twin-Turbo","fuel":"Xăng","transmission":"Bán tự động 7 cấp","color":"Tùy chọn","badge":"F5","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/hennessey-venom-f5.jpg","category":"Megacar"},
  {"id":127,"brand":"Hennessey","name":"Hennessey Venom F5 Roadster","price":140000,"year":2025,"type":"Megacar","km":"Xe mới","engine":"6.6L V8 Twin-Turbo","fuel":"Xăng","transmission":"Bán tự động 7 cấp","color":"Tùy chọn","badge":"ROADSTER","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/hennessey-venom-f5-roadster.jpg","category":"Megacar"},
  {"id":128,"brand":"Hennessey","name":"Hennessey Venom F5 Revolution","price":130000,"year":2025,"type":"Megacar","km":"Xe mới","engine":"6.6L V8 Twin-Turbo","fuel":"Xăng","transmission":"Bán tự động 7 cấp","color":"Tùy chọn","badge":"REVOLUTION","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/hennessey-venom-f5-revolution.jpg","category":"Megacar"},
  {"id":129,"brand":"Hennessey","name":"Hennessey Venom F5-M Roadster","price":150000,"year":2026,"type":"Megacar","km":"Xe mới","engine":"6.6L V8 Twin-Turbo","fuel":"Xăng","transmission":"Số sàn 6 cấp","color":"Tùy chọn","badge":"F5-M","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/hennessey-venom-f5-m-roadster.jpg","category":"Megacar"},
  {"id":130,"brand":"Hennessey","name":"Hennessey Venom GT","price":65000,"year":2016,"type":"Megacar","km":"Xe sưu tầm","engine":"7.0L V8 Twin-Turbo","fuel":"Xăng","transmission":"Số sàn 6 cấp","color":"Tùy chọn","badge":"VENOM GT","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/hennessey-venom-gt.jpg","category":"Megacar"},
  {"id":131,"brand":"Czinger","name":"Czinger 21C","price":80000,"year":2025,"type":"Megacar","km":"Xe mới","engine":"2.9L V8 Hybrid","fuel":"Hybrid","transmission":"Tuần tự 7 cấp","color":"Tùy chọn","badge":"21C","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/czinger-21c.jpg","category":"Megacar"},
  {"id":132,"brand":"Czinger","name":"Czinger 21C V Max","price":90000,"year":2025,"type":"Megacar","km":"Xe mới","engine":"2.9L V8 Hybrid","fuel":"Hybrid","transmission":"Tuần tự 7 cấp","color":"Tùy chọn","badge":"V MAX","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/czinger-21c-v-max.jpg","category":"Megacar"},
  {"id":133,"brand":"Czinger","name":"Czinger 21C Blackbird Edition","price":95000,"year":2026,"type":"Megacar","km":"Xe mới","engine":"2.9L V8 Hybrid","fuel":"Hybrid","transmission":"Tuần tự 7 cấp","color":"Tùy chọn","badge":"BLACKBIRD","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/czinger-21c-blackbird-edition.jpg","category":"Megacar"},
  {"id":134,"brand":"Czinger","name":"Czinger 21C Laguna Seca Edition","price":100000,"year":2026,"type":"Megacar","km":"Xe mới","engine":"2.9L V8 Hybrid","fuel":"Hybrid","transmission":"Tuần tự 7 cấp","color":"Tùy chọn","badge":"TRACK EDITION","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/czinger21clagunaedition.jpg","category":"Megacar"},
  {"id":135,"brand":"Czinger","name":"Czinger Hyper GT","price":85000,"year":2027,"type":"Megacar","km":"Xe mới","engine":"V8 Hybrid","fuel":"Hybrid","transmission":"Tự động","color":"Tùy chọn","badge":"HYPER GT","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/czinger-hyper-gt.jpg","category":"Megacar"},
  {"id":136,"brand":"Devel","name":"Devel Sixteen V8","price":50000,"year":2025,"type":"Megacar","km":"Xe mới","engine":"V8 Twin-Turbo","fuel":"Xăng","transmission":"Tự động","color":"Tùy chọn","badge":"V8","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/devel-sixteen-v8.jpg","category":"Megacar"},
  {"id":137,"brand":"Devel","name":"Devel Sixteen V16","price":90000,"year":2025,"type":"Megacar","km":"Xe mới","engine":"12.3L V16 Quad-Turbo","fuel":"Xăng","transmission":"Tự động","color":"Tùy chọn","badge":"V16","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/devel-sixteen-v16.jpg","category":"Megacar"},
  {"id":138,"brand":"Devel","name":"Devel Sixteen Track Edition","price":110000,"year":2026,"type":"Megacar","km":"Xe mới","engine":"12.3L V16 Quad-Turbo","fuel":"Xăng","transmission":"Tự động","color":"Tùy chọn","badge":"TRACK","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/devel-sixteen_445277.jpg","category":"Megacar"},
  {"id":139,"brand":"Devel","name":"Devel Sixty","price":30000,"year":2025,"type":"SUV","km":"Xe mới","engine":"6.7L V8 Diesel","fuel":"Dầu","transmission":"Tự động","color":"Tùy chọn","badge":"6X6","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/devel-sixty.jpg","category":"Megacar"},
  {"id":140,"brand":"Devel","name":"Devel Sixty V8 Performance","price":40000,"year":2026,"type":"SUV","km":"Xe mới","engine":"V8 Performance","fuel":"Xăng","transmission":"Tự động","color":"Tùy chọn","badge":"PERFORMANCE 6X6","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/devel-sixty-v8-performance.jpg","category":"Megacar"},
  {"id":141,"brand":"Zenvo","name":"Zenvo Aurora Agil","price":110000,"year":2026,"type":"Megacar","km":"Xe mới","engine":"6.6L V12 Hybrid","fuel":"Hybrid","transmission":"Tự động 7 cấp","color":"Tùy chọn","badge":"AGIL","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/zenvo-aurora-agil.jpg","category":"Megacar"},
  {"id":142,"brand":"Zenvo","name":"Zenvo Aurora Tur","price":105000,"year":2026,"type":"Megacar","km":"Xe mới","engine":"6.6L V12 Hybrid","fuel":"Hybrid","transmission":"Tự động 7 cấp","color":"Tùy chọn","badge":"TUR","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/zenvo-aurora-tur.jpg","category":"Megacar"},
  {"id":143,"brand":"Zenvo","name":"Zenvo TSR-S","price":75000,"year":2023,"type":"Megacar","km":"Xe sưu tầm","engine":"5.8L V8 Twin-Supercharged","fuel":"Xăng","transmission":"Tự động 7 cấp","color":"Tùy chọn","badge":"CENTRIPETAL WING","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/zenvo-tsr-s.jpg","category":"Megacar"},
  {"id":144,"brand":"Zenvo","name":"Zenvo TS1 GT","price":65000,"year":2020,"type":"Megacar","km":"Xe sưu tầm","engine":"5.8L V8 Twin-Supercharged","fuel":"Xăng","transmission":"Tự động 7 cấp","color":"Tùy chọn","badge":"GRAND TOURER","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/zenvo-ts1-gt.jpg","category":"Megacar"},
  {"id":145,"brand":"Zenvo","name":"Zenvo ST1","price":50000,"year":2016,"type":"Megacar","km":"Xe sưu tầm","engine":"7.0L V8 Twincharged","fuel":"Xăng","transmission":"Tự động 7 cấp","color":"Tùy chọn","badge":"ST1","source":"Giá tham khảo / nhập khẩu tư nhân","image":"assets/img/zenvo-st1.jpg","category":"Megacar"},
];

cars.push(...additionalCars);

const news = [
  {title:'Kinh nghiệm lựa chọn xe phù hợp nhu cầu',date:'15/06/2026',category:'Kinh nghiệm',image:'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80'},
  {title:'Xu hướng xe hybrid và xe điện tại Việt Nam',date:'10/06/2026',category:'Công nghệ',image:'https://images.unsplash.com/photo-1597404294360-feeeda04612e?auto=format&fit=crop&w=900&q=80'},
  {title:'Các khoản chi phí cần tính khi mua ô tô mới',date:'02/06/2026',category:'Tư vấn',image:'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=80'}
];

let visibleCount = 8;
const $ = id => document.getElementById(id);
const carGrid = $('carGrid');
const brandFilter = $('brandFilter');
const typeFilter = $('typeFilter');
const categoryFilter = $('categoryFilter');
const priceFilter = $('priceFilter');
const searchInput = $('searchInput');
const sortSelect = $('sortSelect');
const resultCount = $('resultCount');
const loadMoreBtn = $('loadMoreBtn');
const brandButtons = $('brandButtons');
const contactCar = $('contactCar');
const modalBody = $('modalBody');
const fallbackImage = 'assets/img/car-placeholder.png';

const money = value => `${new Intl.NumberFormat('vi-VN').format(value * 1000000)} VNĐ`;
const escapeHtml = value => String(value ?? '')
  .replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;')
  .replaceAll('"','&quot;').replaceAll("'",'&#039;');

function fillSelect(select, items, defaultText) {
  if (!select) return;
  select.innerHTML = `<option value="all">${defaultText}</option>` +
    items.map(item => `<option value="${escapeHtml(item)}">${escapeHtml(item)}</option>`).join('');
}

function initializeFilters() {
  const brands = [...new Set(cars.map(c => c.brand))].sort((a,b)=>a.localeCompare(b,'vi'));
  const types = [...new Set(cars.map(c => c.type))].sort((a,b)=>a.localeCompare(b,'vi'));
  const categories = [...new Set(cars.map(c => c.category || inferCategory(c)))].sort((a,b)=>a.localeCompare(b,'vi'));

  fillSelect(brandFilter, brands, 'Tất cả hãng xe');
  fillSelect(typeFilter, types, 'Tất cả kiểu xe');
  fillSelect(categoryFilter, categories, 'Tất cả phân khúc');

  if (contactCar) {
    contactCar.innerHTML = '<option value="">Chọn hãng xe quan tâm</option>' +
      brands.map(b => `<option value="${escapeHtml(b)}">${escapeHtml(b)}</option>`).join('');
  }

  if (brandButtons) {
    brandButtons.innerHTML = ['all', ...brands].map(b =>
      `<button type="button" class="brand-btn ${b==='all'?'active':''}" data-brand="${escapeHtml(b)}">${b==='all'?'Tất cả xe':escapeHtml(b)}</button>`
    ).join('');
  }
}

function inferCategory(car) {
  if (car.category) return car.category;
  if (car.type === 'Megacar') return 'Megacar';
  if (car.type === 'Hypercar') return 'Hypercar';
  if (car.type === 'Supercar') return 'Siêu xe';
  if (['Rolls-Royce','Bentley','Mercedes-Maybach','Maserati','Cadillac'].includes(car.brand)) return 'Siêu sang';
  if (['Toyota','Honda','Hyundai','Kia','Ford'].includes(car.brand)) return 'Phổ thông';
  return 'Xe sang';
}

function filteredCars() {
  const q = (searchInput?.value || '').trim().toLowerCase();
  const brand = brandFilter?.value || 'all';
  const type = typeFilter?.value || 'all';
  const category = categoryFilter?.value || 'all';
  const price = priceFilter?.value || 'all';

  const list = cars.filter(c => {
    const text = `${c.name} ${c.brand} ${c.engine} ${c.fuel} ${c.type}`.toLowerCase();
    const cat = c.category || inferCategory(c);
    const matchPrice = price === 'all' ||
      (price === 'under1' && c.price < 1000) ||
      (price === '1to2' && c.price >= 1000 && c.price < 2000) ||
      (price === 'under2' && c.price < 2000) ||
      (price === '2to5' && c.price >= 2000 && c.price <= 5000) ||
      (price === '5to20' && c.price > 5000 && c.price <= 20000) ||
      (price === 'over5' && c.price > 5000) ||
      (price === 'over20' && c.price > 20000);
    return (!q || text.includes(q)) &&
      (brand === 'all' || c.brand === brand) &&
      (type === 'all' || c.type === type) &&
      (category === 'all' || cat === category) && matchPrice;
  });

  const sort = sortSelect?.value;
  if (sort === 'priceAsc') list.sort((a,b)=>a.price-b.price);
  if (sort === 'priceDesc') list.sort((a,b)=>b.price-a.price);
  if (sort === 'yearDesc') list.sort((a,b)=>b.year-a.year);
  if (sort === 'nameAsc') list.sort((a,b)=>a.name.localeCompare(b.name,'vi'));
  return list;
}

function carCard(c) {
  return `<div class="col-md-6 col-xl-3">
    <article class="car-card h-100">
      <div class="car-img-wrap">
        <img src="${escapeHtml(c.image)}" alt="${escapeHtml(c.name)}" loading="lazy" onerror="this.onerror=null;this.src='${fallbackImage}'">
        <span class="car-badge">${escapeHtml(c.badge)}</span>
        <button type="button" class="favorite-btn" aria-label="Yêu thích"><i class="bi bi-heart"></i></button>
      </div>
      <div class="car-body">
        <div class="car-brand">${escapeHtml(c.brand)}</div>
        <h3 class="car-title">${escapeHtml(c.name)}</h3>
        <div class="car-price">${money(c.price)}</div>
        <div class="installment">Trả trước dự kiến từ ${money(Math.round(c.price*.3))}</div>
        <div class="car-specs">
          <span><i class="bi bi-calendar3"></i>${c.year}</span>
          <span><i class="bi bi-speedometer2"></i>${escapeHtml(c.km)}</span>
          <span><i class="bi bi-car-front"></i>${escapeHtml(c.type)}</span>
          <span><i class="bi bi-fuel-pump"></i>${escapeHtml(c.fuel)}</span>
        </div>
        <button type="button" class="btn btn-dark w-100 detail-btn" data-id="${c.id}">Xem chi tiết <i class="bi bi-arrow-right ms-2"></i></button>
      </div>
    </article>
  </div>`;
}

function renderCars() {
  if (!carGrid) return;
  const list = filteredCars();
  const shown = list.slice(0, visibleCount);
  if (resultCount) resultCount.textContent = `Hiển thị ${shown.length} / ${list.length} xe`;
  if (!list.length) {
    carGrid.innerHTML = `<div class="col-12"><div class="empty-state"><i class="bi bi-search"></i><h3>Không tìm thấy xe phù hợp</h3><p>Hãy thay đổi từ khóa hoặc bộ lọc.</p><button type="button" id="resetFilters" class="btn btn-dark">Xóa bộ lọc</button></div></div>`;
    if (loadMoreBtn) loadMoreBtn.style.display = 'none';
    return;
  }
  carGrid.innerHTML = shown.map(carCard).join('');
  if (loadMoreBtn) loadMoreBtn.style.display = visibleCount < list.length ? 'inline-block' : 'none';
}

function openCar(id) {
  const c = cars.find(x => x.id === id);
  if (!c || !modalBody) return;
  modalBody.innerHTML = `<div class="row g-0">
    <div class="col-lg-7"><img class="modal-car-img" src="${escapeHtml(c.image)}" alt="${escapeHtml(c.name)}" onerror="this.onerror=null;this.src='${fallbackImage}'"></div>
    <div class="col-lg-5"><div class="modal-details">
      <span class="section-kicker">${escapeHtml(c.brand)}</span>
      <h2 class="mt-2">${escapeHtml(c.name)}</h2>
      <div class="modal-price">${money(c.price)}</div>
      <span class="badge rounded-pill text-bg-dark mt-2">${escapeHtml(c.category || inferCategory(c))}</span>
      <p class="text-secondary mt-3">Giá hiển thị mang tính tham khảo và có thể thay đổi theo tình trạng xe, cấu hình, màu sắc, chi phí nhập khẩu và chương trình của đại lý.</p>
      <div class="modal-spec-grid">
        <div><small>Năm sản xuất</small><b>${c.year}</b></div><div><small>Kiểu dáng</small><b>${escapeHtml(c.type)}</b></div>
        <div><small>Tình trạng</small><b>${escapeHtml(c.km)}</b></div><div><small>Động cơ</small><b>${escapeHtml(c.engine)}</b></div>
        <div><small>Nhiên liệu</small><b>${escapeHtml(c.fuel)}</b></div><div><small>Hộp số</small><b>${escapeHtml(c.transmission)}</b></div>
        <div><small>Màu sắc</small><b>${escapeHtml(c.color)}</b></div><div><small>Nguồn giá</small><b>${escapeHtml(c.source)}</b></div>
        <div><small>Trả trước dự kiến</small><b>${money(Math.round(c.price*.3))}</b></div>
      </div>
      <button type="button" class="btn btn-gold btn-lg w-100" id="modalContactBtn">Đăng ký xem xe</button>
    </div></div>
  </div>`;
  bootstrap.Modal.getOrCreateInstance($('carModal')).show();
}

function resetFilters() {
  if (brandFilter) brandFilter.value='all';
  if (typeFilter) typeFilter.value='all';
  if (categoryFilter) categoryFilter.value='all';
  if (priceFilter) priceFilter.value='all';
  if (sortSelect) sortSelect.value='default';
  if (searchInput) searchInput.value='';
  visibleCount=8;
  document.querySelectorAll('.brand-btn').forEach(b=>b.classList.toggle('active',b.dataset.brand==='all'));
  renderCars();
}

function bindEvents() {
  [brandFilter,typeFilter,categoryFilter,priceFilter,sortSelect].filter(Boolean).forEach(el=>el.addEventListener('change',()=>{visibleCount=8;renderCars();}));
  searchInput?.addEventListener('input',()=>{visibleCount=8;renderCars();});
  $('searchBtn')?.addEventListener('click',()=>{visibleCount=8;renderCars();$('cars')?.scrollIntoView({behavior:'smooth'});});
  loadMoreBtn?.addEventListener('click',()=>{visibleCount+=8;renderCars();});

  brandButtons?.addEventListener('click',e=>{
    const btn=e.target.closest('.brand-btn'); if(!btn) return;
    document.querySelectorAll('.brand-btn').forEach(x=>x.classList.remove('active')); btn.classList.add('active');
    if(brandFilter) brandFilter.value=btn.dataset.brand; visibleCount=8; renderCars(); $('cars')?.scrollIntoView({behavior:'smooth'});
  });

  carGrid?.addEventListener('click',e=>{
    const detail=e.target.closest('.detail-btn'); if(detail) openCar(Number(detail.dataset.id));
    const fav=e.target.closest('.favorite-btn'); if(fav){fav.classList.toggle('active');fav.innerHTML=fav.classList.contains('active')?'<i class="bi bi-heart-fill"></i>':'<i class="bi bi-heart"></i>';}
    if(e.target.closest('#resetFilters')) resetFilters();
  });

  modalBody?.addEventListener('click',e=>{if(!e.target.closest('#modalContactBtn')) return; bootstrap.Modal.getInstance($('carModal'))?.hide(); $('contact')?.scrollIntoView({behavior:'smooth'});});

  $('contactForm')?.addEventListener('submit',e=>{e.preventDefault();bootstrap.Toast.getOrCreateInstance($('successToast')).show();e.target.reset();});
  $('backToTop')?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
  window.addEventListener('scroll',()=>{$('backToTop')?.classList.toggle('show',scrollY>500);document.querySelector('.fixed-nav')?.classList.toggle('scrolled',scrollY>50);});
  document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{const nav=$('mainNav');if(nav?.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(nav).hide();}));
}

function renderNews(){const grid=$('newsGrid');if(!grid)return;grid.innerHTML=news.map(n=>`<div class="col-md-6 col-lg-4"><article class="news-card h-100"><img src="${n.image}" alt="${escapeHtml(n.title)}" loading="lazy"><div class="news-card-body"><div class="news-meta mb-2"><span>${escapeHtml(n.category)}</span> · ${n.date}</div><h4>${escapeHtml(n.title)}</h4><a href="#cars">Xem kho xe <i class="bi bi-arrow-right"></i></a></div></article></div>`).join('');}

document.addEventListener('DOMContentLoaded',()=>{initializeFilters();bindEvents();renderCars();renderNews();console.log(`AutoLux loaded: ${cars.length} cars`);});
