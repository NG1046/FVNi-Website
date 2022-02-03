const Buffer = require("buffer").Buffer;
const crypto = require("crypto");

function DATOS_encode(plain){
    var datos_1 = Buffer.from(plain, "ascii").toString("base64");
    var datos_2 = Buffer.from(datos_1, "ascii").toString("base64");
    var datos_3 = Buffer.from(datos_2, "ascii").toString("base64");
    var datos_4 = Buffer.from(datos_3, "ascii").toString("hex"); //
    var datos_5 = Buffer.from(datos_4, "hex").toString("binary");
    var datos_6 = Buffer.from(datos_5, "binary").toString("base64");//
    var datos_7 = Buffer.from(datos_6, "ascii").toString("base64");
    var datos_8 = Buffer.from(datos_7, "ascii").toString("base64");
    var datos_9 = Buffer.from(datos_8, "ascii").toString("base64");
    var datos_10 = Buffer.from(datos_9, "ascii").toString("base64");
    return datos_10;
}

function DATOS_decode(datos){
    var datos_1 = Buffer.from(datos, "base64").toString("ascii");
    var datos_2 = Buffer.from(datos_1, "base64").toString("ascii");
    var datos_3 = Buffer.from(datos_2, "base64").toString("ascii");
    var datos_4 = Buffer.from(datos_3, "base64").toString("binary"); //
    var datos_5 = Buffer.from(datos_4, "binary").toString("hex");
    var datos_6 = Buffer.from(datos_5, "hex").toString("ascii"); //
    var datos_7 = Buffer.from(datos_6, "base64").toString("ascii");
    var datos_8 = Buffer.from(datos_7, "base64").toString("ascii");
    var datos_9 = Buffer.from(datos_8, "base64").toString("ascii");
    var datos_10 = Buffer.from(datos_9, "base64").toString("ascii");
    return datos_10;
}




function HASH_hasc(chash_plain){
    var chash_1 = crypto.createHash("sha1").update(chash_plain).digest("hex");
    var chash_2 = crypto.createHash("shake128").update(chash_1).digest("hex");
    var chash_3 = crypto.createHash("md5").update(chash_2).digest("hex");
    var chash_4 = crypto.createHash("sha1").update(chash_3).digest("hex");
    var chash_5 = crypto.createHash("sha256").update(chash_4).digest("hex");
    var chash_6 = crypto.createHash("sha1").update(chash_5).digest("hex");
    var chash_7 = crypto.createHash("sha224").update(chash_6).digest("hex");
    var chash_8 = crypto.createHash("md5").update(chash_7).digest("hex");
    var chash_9 = crypto.createHash("sha1").update(chash_8).digest("hex");
    var chash_10 = crypto.createHash("sha1").update(chash_9).digest("hex");
    var chash_11 = crypto.createHash("sha1").update(chash_10).digest("hex");
    var chash_12 = crypto.createHash("sha1").update(chash_11).digest("hex");
    var chash_13 = crypto.createHash("sha224").update(chash_12).digest("hex");
    var chash_14 = crypto.createHash("sha256").update(chash_13).digest("hex");
    var chash_15 = crypto.createHash("sha1").update(chash_14).digest("hex");
    var chash_16 = crypto.createHash("sha256").update(chash_15).digest("hex");
    var chash_17 = crypto.createHash("blake2s256").update(chash_16).digest("hex");
    var chash_18 = crypto.createHash("sha512").update(chash_17).digest("hex");
    var chash_19 = crypto.createHash("sha1").update(chash_18).digest("hex");
    var chash_20 = crypto.createHash("sha384").update(chash_19).digest("hex");
    var chash_21 = crypto.createHash("md5").update(chash_20).digest("hex");
    var chash_22 = crypto.createHash("sha1").update(chash_21).digest("hex");
    var chash_23 = crypto.createHash("sha384").update(chash_22).digest("hex");
    var chash_24 = crypto.createHash("sha1").update(chash_23).digest("hex");
    var chash_25 = crypto.createHash("md5").update(chash_24).digest("hex");
    var chash_26 = crypto.createHash("sha384").update(chash_25).digest("hex");
    var chash_27 = crypto.createHash("sha384").update(chash_26).digest("hex");
    var chash_28 = crypto.createHash("sha224").update(chash_27).digest("hex");
    var chash_29 = crypto.createHash("sha384").update(chash_28).digest("hex");
    var chash_30 = crypto.createHash("md5").update(chash_29).digest("hex");
    var chash_31 = crypto.createHash("sha224").update(chash_30).digest("hex");
    var chash_32 = crypto.createHash("blake2s256").update(chash_31).digest("hex");
    var chash_33 = crypto.createHash("blake2s256").update(chash_32).digest("hex");
    var chash_34 = crypto.createHash("sha384").update(chash_33).digest("hex");
    var chash_35 = crypto.createHash("sha512").update(chash_34).digest("hex");
    var chash_36 = crypto.createHash("sha1").update(chash_35).digest("hex");
    var chash_37 = crypto.createHash("md5").update(chash_36).digest("hex");
    var chash_38 = crypto.createHash("blake2s256").update(chash_37).digest("hex");
    var chash_39 = crypto.createHash("sha224").update(chash_38).digest("hex");
    var chash_40 = crypto.createHash("sha256").update(chash_39).digest("hex");
    var chash_41 = crypto.createHash("md5").update(chash_40).digest("hex");
    var chash_42 = crypto.createHash("sha384").update(chash_41).digest("hex");
    var chash_43 = crypto.createHash("blake2s256").update(chash_42).digest("hex");
    var chash_44 = crypto.createHash("md5").update(chash_43).digest("hex");
    var chash_45 = crypto.createHash("md5").update(chash_44).digest("hex");
    var chash_46 = crypto.createHash("sha384").update(chash_45).digest("hex");
    var chash_47 = crypto.createHash("sha512").update(chash_46).digest("hex");
    var chash_48 = crypto.createHash("shake128").update(chash_47).digest("hex");
    var chash_49 = crypto.createHash("sha256").update(chash_48).digest("hex");
    var chash_50 = crypto.createHash("sha256").update(chash_49).digest("hex");
    var chash_51 = crypto.createHash("md5").update(chash_50).digest("hex");
    var chash_52 = crypto.createHash("shake128").update(chash_51).digest("hex");
    var chash_53 = crypto.createHash("sha256").update(chash_52).digest("hex");
    var chash_54 = crypto.createHash("md5").update(chash_53).digest("hex");
    var chash_55 = crypto.createHash("md5").update(chash_54).digest("hex");
    var chash_56 = crypto.createHash("blake2s256").update(chash_55).digest("hex");
    var chash_57 = crypto.createHash("blake2s256").update(chash_56).digest("hex");
    var chash_58 = crypto.createHash("sha1").update(chash_57).digest("hex");
    var chash_59 = crypto.createHash("sha224").update(chash_58).digest("hex");
    var chash_60 = crypto.createHash("sha224").update(chash_59).digest("hex");
    var chash_61 = crypto.createHash("sha256").update(chash_60).digest("hex");
    var chash_62 = crypto.createHash("md5").update(chash_61).digest("hex");
    var chash_63 = crypto.createHash("md5").update(chash_62).digest("hex");
    var chash_64 = crypto.createHash("sha224").update(chash_63).digest("hex");
    var chash_65 = crypto.createHash("md5").update(chash_64).digest("hex");
    var chash_66 = crypto.createHash("md5").update(chash_65).digest("hex");
    var chash_67 = crypto.createHash("sha1").update(chash_66).digest("hex");
    var chash_68 = crypto.createHash("sha512").update(chash_67).digest("hex");
    var chash_69 = crypto.createHash("shake128").update(chash_68).digest("hex");
    var chash_70 = crypto.createHash("sha384").update(chash_69).digest("hex");
    var chash_71 = crypto.createHash("sha512").update(chash_70).digest("hex");
    var chash_72 = crypto.createHash("blake2s256").update(chash_71).digest("hex");
    var chash_73 = crypto.createHash("md5").update(chash_72).digest("hex");
    var chash_74 = crypto.createHash("sha512").update(chash_73).digest("hex");
    var chash_75 = crypto.createHash("sha1").update(chash_74).digest("hex");
    var chash_76 = crypto.createHash("md5").update(chash_75).digest("hex");
    var chash_77 = crypto.createHash("blake2s256").update(chash_76).digest("hex");
    var chash_78 = crypto.createHash("md5").update(chash_77).digest("hex");
    var chash_79 = crypto.createHash("sha384").update(chash_78).digest("hex");
    var chash_80 = crypto.createHash("sha1").update(chash_79).digest("hex");
    var chash_81 = crypto.createHash("sha1").update(chash_80).digest("hex");
    var chash_82 = crypto.createHash("sha1").update(chash_81).digest("hex");
    var chash_83 = crypto.createHash("md5").update(chash_82).digest("hex");
    var chash_84 = crypto.createHash("sha512").update(chash_83).digest("hex");
    var chash_85 = crypto.createHash("sha1").update(chash_84).digest("hex");
    var chash_86 = crypto.createHash("sha1").update(chash_85).digest("hex");
    var chash_87 = crypto.createHash("sha224").update(chash_86).digest("hex");
    var chash_88 = crypto.createHash("md5").update(chash_87).digest("hex");
    var chash_89 = crypto.createHash("sha256").update(chash_88).digest("hex");
    var chash_90 = crypto.createHash("md5").update(chash_89).digest("hex");
    var chash_91 = crypto.createHash("sha1").update(chash_90).digest("hex");
    var chash_92 = crypto.createHash("sha1").update(chash_91).digest("hex");
    var chash_93 = crypto.createHash("sha256").update(chash_92).digest("hex");
    var chash_94 = crypto.createHash("md5").update(chash_93).digest("hex");
    var chash_95 = crypto.createHash("md5").update(chash_94).digest("hex");
    var chash_96 = crypto.createHash("sha256").update(chash_95).digest("hex");
    var chash_97 = crypto.createHash("sha1").update(chash_96).digest("hex");
    var chash_98 = crypto.createHash("shake128").update(chash_97).digest("hex");
    var chash_99 = crypto.createHash("sha224").update(chash_98).digest("hex");
    var chash_100 = crypto.createHash("md5").update(chash_99).digest("hex");
    return chash_100;
}
function HASH_hascSalt(chash_plain, saltz){
    if(!saltz) throw Error("Missing Saltz!");
    var chash_1 = crypto.createHash("sha1").update(chash_plain).digest("hex");
    var chash_2 = crypto.createHash("sha384").update(chash_1).digest("hex");
    var chash_3 = crypto.createHash("md5").update(chash_2).digest("hex");
    var chash_4 = crypto.createHash("sha1").update(chash_3).digest("hex");
    var chash_5 = crypto.createHash("sha1").update(chash_4).digest("hex");
    var chash_6 = crypto.createHash("sha1").update(chash_5).digest("hex");
    var chash_7 = crypto.createHash("blake2s256").update(chash_6).digest("hex");
    var chash_8 = crypto.createHash("md5").update(chash_7).digest("hex");
    var chash_9 = crypto.createHash("sha256").update(chash_8).digest("hex");
    var chash_10 = crypto.createHash("shake128").update(chash_9).digest("hex");
    var chash_11 = crypto.createHash("sha256").update(chash_10).digest("hex");
    var chash_12 = crypto.createHash("md5").update(chash_11).digest("hex");
    var chash_13 = crypto.createHash("shake128").update(chash_12+":"+saltz).digest("hex");
    var chash_14 = crypto.createHash("sha512").update(chash_13).digest("hex");
    var chash_15 = crypto.createHash("sha1").update(chash_14).digest("hex");
    var chash_16 = crypto.createHash("sha224").update(chash_15).digest("hex");
    var chash_17 = crypto.createHash("sha1").update(chash_16).digest("hex");
    var chash_18 = crypto.createHash("sha224").update(chash_17).digest("hex");
    var chash_19 = crypto.createHash("blake2s256").update(chash_18).digest("hex");
    var chash_20 = crypto.createHash("sha512").update(chash_19).digest("hex");
    var chash_21 = crypto.createHash("shake128").update(chash_20).digest("hex");
    var chash_22 = crypto.createHash("sha512").update(chash_21).digest("hex");
    var chash_23 = crypto.createHash("md5").update(chash_22).digest("hex");
    var chash_24 = crypto.createHash("sha224").update(chash_23).digest("hex");
    var chash_25 = crypto.createHash("sha1").update(chash_24).digest("hex");
    var chash_26 = crypto.createHash("sha1").update(chash_25).digest("hex");
    var chash_27 = crypto.createHash("blake2s256").update(chash_26).digest("hex");
    var chash_28 = crypto.createHash("sha512").update(chash_27).digest("hex");
    var chash_29 = crypto.createHash("sha224").update(chash_28).digest("hex");
    var chash_30 = crypto.createHash("sha224").update(chash_29).digest("hex");
    var chash_31 = crypto.createHash("sha512").update(chash_30).digest("hex");
    var chash_32 = crypto.createHash("sha512").update(chash_31).digest("hex");
    var chash_33 = crypto.createHash("md5").update(chash_32).digest("hex");
    var chash_34 = crypto.createHash("blake2s256").update(chash_33).digest("hex");
    var chash_35 = crypto.createHash("sha384").update(chash_34).digest("hex");
    var chash_36 = crypto.createHash("sha224").update(chash_35).digest("hex");
    var chash_37 = crypto.createHash("sha1").update(chash_36).digest("hex");
    var chash_38 = crypto.createHash("sha256").update(chash_37).digest("hex");
    var chash_39 = crypto.createHash("sha256").update(chash_38).digest("hex");
    var chash_40 = crypto.createHash("sha512").update(chash_39).digest("hex");
    var chash_41 = crypto.createHash("blake2s256").update(chash_40).digest("hex");
    var chash_42 = crypto.createHash("sha224").update(chash_41).digest("hex");
    var chash_43 = crypto.createHash("sha1").update(chash_42).digest("hex");
    var chash_44 = crypto.createHash("sha512").update(chash_43).digest("hex");
    var chash_45 = crypto.createHash("sha1").update(chash_44).digest("hex");
    var chash_46 = crypto.createHash("shake128").update(chash_45).digest("hex");
    var chash_47 = crypto.createHash("shake128").update(chash_46).digest("hex");
    var chash_48 = crypto.createHash("sha224").update(chash_47).digest("hex");
    var chash_49 = crypto.createHash("sha256").update(chash_48).digest("hex");
    var chash_50 = crypto.createHash("md5").update(chash_49).digest("hex");
    var chash_51 = crypto.createHash("sha256").update(chash_50).digest("hex");
    var chash_52 = crypto.createHash("sha1").update(chash_51).digest("hex");
    var chash_53 = crypto.createHash("sha512").update(chash_52).digest("hex");
    var chash_54 = crypto.createHash("sha384").update(chash_53).digest("hex");
    var chash_55 = crypto.createHash("sha256").update(chash_54).digest("hex");
    var chash_56 = crypto.createHash("sha224").update(chash_55).digest("hex");
    var chash_57 = crypto.createHash("blake2s256").update(chash_56).digest("hex");
    var chash_58 = crypto.createHash("sha1").update(chash_57).digest("hex");
    var chash_59 = crypto.createHash("sha1").update(chash_58).digest("hex");
    var chash_60 = crypto.createHash("sha256").update(chash_59).digest("hex");
    var chash_61 = crypto.createHash("sha1").update(chash_60).digest("hex");
    var chash_62 = crypto.createHash("sha384").update(chash_61).digest("hex");
    var chash_63 = crypto.createHash("sha512").update(chash_62).digest("hex");
    var chash_64 = crypto.createHash("blake2s256").update(chash_63).digest("hex");
    var chash_65 = crypto.createHash("sha224").update(chash_64).digest("hex");
    var chash_66 = crypto.createHash("shake128").update(chash_65).digest("hex");
    var chash_67 = crypto.createHash("sha384").update(chash_66).digest("hex");
    var chash_68 = crypto.createHash("blake2s256").update(chash_67).digest("hex");
    var chash_69 = crypto.createHash("shake128").update(chash_68).digest("hex");
    var chash_70 = crypto.createHash("blake2s256").update(chash_69).digest("hex");
    var chash_71 = crypto.createHash("sha384").update(chash_70).digest("hex");
    var chash_72 = crypto.createHash("sha256").update(chash_71).digest("hex");
    var chash_73 = crypto.createHash("sha1").update(chash_72).digest("hex");
    var chash_74 = crypto.createHash("sha512").update(chash_73).digest("hex");
    var chash_75 = crypto.createHash("shake128").update(chash_74).digest("hex");
    var chash_76 = crypto.createHash("md5").update(chash_75).digest("hex");
    var chash_77 = crypto.createHash("sha384").update(chash_76).digest("hex");
    var chash_78 = crypto.createHash("sha1").update(chash_77).digest("hex");
    var chash_79 = crypto.createHash("sha256").update(chash_78).digest("hex");
    var chash_80 = crypto.createHash("shake128").update(chash_79).digest("hex");
    var chash_81 = crypto.createHash("blake2s256").update(chash_80).digest("hex");
    var chash_82 = crypto.createHash("blake2s256").update(chash_81).digest("hex");
    var chash_83 = crypto.createHash("md5").update(chash_82).digest("hex");
    var chash_84 = crypto.createHash("sha384").update(chash_83).digest("hex");
    var chash_85 = crypto.createHash("shake128").update(chash_84).digest("hex");
    var chash_86 = crypto.createHash("sha384").update(chash_85).digest("hex");
    var chash_87 = crypto.createHash("md5").update(chash_86).digest("hex");
    var chash_88 = crypto.createHash("md5").update(chash_87).digest("hex");
    var chash_89 = crypto.createHash("sha1").update(chash_88).digest("hex");
    var chash_90 = crypto.createHash("md5").update(chash_89).digest("hex");
    var chash_91 = crypto.createHash("blake2s256").update(chash_90).digest("hex");
    var chash_92 = crypto.createHash("sha224").update(chash_91).digest("hex");
    var chash_93 = crypto.createHash("blake2s256").update(chash_92).digest("hex");
    var chash_94 = crypto.createHash("sha1").update(chash_93).digest("hex");
    var chash_95 = crypto.createHash("sha256").update(chash_94).digest("hex");
    var chash_96 = crypto.createHash("blake2s256").update(chash_95).digest("hex");
    var chash_97 = crypto.createHash("blake2s256").update(chash_96).digest("hex");
    var chash_98 = crypto.createHash("sha1").update(chash_97).digest("hex");
    var chash_99 = crypto.createHash("sha256").update(chash_98).digest("hex");
    var chash_100 = crypto.createHash("sha1").update(chash_99).digest("hex");
    return chash_100;
}


module.exports = {
    baseDATOS: {
        encode: DATOS_encode,
        decode: DATOS_decode,
    },
    hasc: {
        default: HASH_hasc,
        salts: HASH_hascSalt
    }
}