const mongoC = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';
var ketqua = 'thanh';
function findCus() {

    mongoC.connect(url, { useUnifiedTopology: true }, function (err, client) {
        if (err) {
            console.log('khong thanh cong');
        } else {
            console.log('Connection established to', url);
            var db = client.db('appfirst');
            var collection = db.collection('Customer');
            collection.findOne({ lastName: 'thanh1' }, function (err, result) {
                if (err) throw err;
                ketqua = result;
                console.log(ketqua);
            });
            console.log(ketqua);
        }
        client.close();
    });

    return ketqua;
};
module.exports = {
    findCusAll: findCus,
}