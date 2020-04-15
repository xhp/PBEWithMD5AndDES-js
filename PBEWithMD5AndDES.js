        console.info('pbeWithMD5AndDes',CryptoJS)
        let pwd = '123456'
        let salt = '565131'
        var k = pwd +salt
        for(var i =0;i<100;i++){
            k = CryptoJS.MD5(k);
        }
        k=''+k;
        let key = k.substr(0, 8)
        let iv = k.substr(8)
        console.info('pbeWithMD5AndDes',k,key,iv)
        let encrypt = CryptoJS.DES.encrypt('dfdf',key,{
            key:key,
            iv:iv,
            mode:CryptoJS.mode.CBC,
        })
        console.info('pbeWithMD5AndDes',''+encrypt)
        console.info('pbeWithMD5AndDes',''+CryptoJS.DES.decrypt(''+encrypt,key,{
            key:key,
            iv:iv,
            mode:CryptoJS.mode.CBC,
        }))
