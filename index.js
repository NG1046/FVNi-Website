const sysPath = require("path");
const sysOk = require("fs");
const childproc = require("child_process");
const mimer = require("mime");

const dbconfig = require("./dbconf.json");
const servconf = require("./servconf.json");

const mysql = require("mysql")
const express = require("express");
const multer = require("multer");
const bodyparser = require("body-parser");
const cookieparser = require("cookie-parser");
const viewEngines = require("consolidate");
const app = express();
const cookieProc = require("./lib/cookieCheck.js")

const https = require("https");
const http = require("http");

app.use(cookieparser());
app.set("x-powered-by", false);
app.engine("ejs", viewEngines.ejs);









//Multer Things
const storageForMulter = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads")
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + " - " + file.originalname)
    }
})
var MulterUploads = multer({ storage: storageForMulter })



//app.use(bodyparser.json());



app.use(function (requ, resp, next) {
    resp.setHeader("server", "Apple Pie");
    //resp.setHeader("X-Powered-By", "");

    resp.setHeader("Cache-Control", "max-age=0");
    next();
});
// Likes / (Likes + Dislikes) * 100





//#region router
app.use("/essentials", express.static(sysPath.join(__dirname, "views/essentials/")));

app.get("/", (requ, resp) => {
    resp.send("Hello!");
});



//#region Services
app.get("/services/audio/embed/:ld", (requ, resp) => {
    var reqID = requ.params.ld
    var buffer = require("buffer").Buffer;
    
    var connx = mysql.createConnection({
        host: dbconfig.host,
        user: dbconfig.user,
        password: dbconfig.password,
        database: dbconfig.dbname
    });
    connx.query(`SELECT * FROM \`music\` WHERE \`id\` = "${reqID}"`, async (errx, resul, fiel) => {
        if (errx) { resp.send(errx); throw errx; }
        if (resul.length < 1) {resp.send(`NOT FOUND: ${reqID}`);return;}

        //resp.send(resul);
        var buffering = buffer.from(resul[0].audioBlob)/*.toString("base64")*/;

        
        
        //resp.setHeader("accept-ranges", "bytes");
        resp.setHeader("Content-Type", `${resul[0].audioContentType}`);
        resp.send(buffering);

        if(!requ.cookies["1pX1zRD6jo"]){
            connx.query(`UPDATE \`music\` SET \`viewCount\`="${resul[0]["viewCount"] + 1}" WHERE \`id\` = "${reqID}"`, async (errx, resul, fiel) => {
                if(errx) throw errx;
                console.log(resul);
            });
        }

    });
});
app.get("/services/images/embed/:ld", (requ, resp) => {
    var reqID = requ.params.ld
    if(!reqID){
        resp.status(404);
    }
    var buffer = require("buffer").Buffer;
    
    var connx = mysql.createConnection({
        host: dbconfig.host,
        user: dbconfig.user,
        password: dbconfig.password,
        database: dbconfig.dbname
    });
    connx.query(`SELECT * FROM \`music\` WHERE \`id\` = "${reqID}"`, async (errx, resul, fiel) => {

        if (errx) { resp.send(errx); throw errx; }
        if (resul.length < 1) {resp.send(`NOT FOUND: ${reqID}`);return;}


        //resp.send(resul);
        var buffering = buffer.from(resul[0].imgBlob)/*.toString("base64")*/;

        
        
        //resp.setHeader("accept-ranges", "bytes");
        resp.setHeader("Content-Type", `${resul[0].imgContentType}`);
        resp.send(buffering);

    });
});
app.get("/services/audio/download/:ld", (requ, resp) => {
    var reqID = requ.params.ld
    var buffer = require("buffer").Buffer;
    
    var connx = mysql.createConnection({
        host: dbconfig.host,
        user: dbconfig.user,
        password: dbconfig.password,
        database: dbconfig.dbname
    });
    connx.query(`SELECT * FROM \`music\` WHERE \`id\` = "${reqID}"`, async (errx, resul, fiel) => {
        if (errx) { resp.send(errx); throw errx; }
        if (resul.length < 1) {resp.send(`NOT FOUND: ${reqID}`);return;}

        //resp.send(resul);
        var buffering = buffer.from(resul[0].audioBlob)/*.toString("base64")*/;

        
        
        //resp.setHeader("accept-ranges", "bytes");
        resp.setHeader("Content-Description", "File Transfer");
        resp.setHeader("Content-Type", "application/octet-stream");
        resp.setHeader("Content-Disposition", `attachment; filename="${resul[0].audioName} - ${resul[0].gameName}.${mimer.getExtension(resul[0].audioContentType)}"`);
        resp.setHeader("Expires", "0");
        resp.setHeader("Pragma", "public");
       // resp.setHeader("Content-Length", buffering.byteLength);
        resp.send(buffering);

        
        
        if(!requ.cookies["1pX1zRD6jo"]){
            connx.query(`UPDATE \`music\` SET \`downloadCount\`="${resul[0]["downloadCount"] + 1}" WHERE \`id\` = "${reqID}"`, async (errx, resul, fiel) => {
                if(errx) throw errx;
                console.log(resul);
            });
        }
    });
});



app.post("/services/admin/music/upload", MulterUploads.fields([{name: "audioFile", maxCount: 1}, {name: "imageFile", maxCount: 1}]), async (requ, resp) => {
    if(!requ.cookies["1pX1zRD6jo"]){
        resp.redirect("/admin/usr/login");
        return;
    }
    
    try {
        var errsxor = [];
        if(requ.files["audioFile"].length == 0 || requ.files["audioFile"].length > 1){
            errsxor.push("INVALID AUDIO FILE LENGTH");
        }

        var datos = {
            IMGBolbber: null,
            IMGMime: null,
            AUDIOBlob: null, 
        }
        var connx = mysql.createConnection({
            host: dbconfig.host,
            user: dbconfig.user,
            password: dbconfig.password,
            database: dbconfig.dbname
        });
    
        console.log(requ.body);
        console.log(requ.files["audioFile"]);
        console.log(requ.files["audioFile"][0].path);
        console.log(sysPath.join(__dirname, requ.files["audioFile"][0].path));
    
        
        var buffer = require("buffer").Buffer;
        var audioBuffer = sysOk.readFileSync(sysPath.join(__dirname, requ.files["audioFile"][0].path));
        datos.AUDIOBlob = audioBuffer;
        


        this.ContinueREEE = () => {
            console.log("Call Proccessy");

            var crypto = require("crypto");
            connx.query(`SELECT * FROM \`indexes\` WHERE \`gameName\` = "${requ.body.gameName}"`, async (errx, resul, fiel) => {
                if (errx) { resp.send(errx); throw errx; }
                if(resul.length > 1 || resul.length == 0){
                    errsxor.push("INVALID INDEX");
                }
                console.log("CHECK INDEXES VALIDITY");

                connx.query(`SELECT * FROM \`music\` WHERE \`id\` = "${crypto.createHash("md5").update(requ.body.audioName).digest("hex")}"`, async (errx, resul, fiel) => {
                    if (errx) { resp.send(errx); throw errx; }
                    if(resul.length == 1 || resul.length > 0){
                        errsxor.push("DATA INDEXED BEFORE");
                    }
                    console.log("CHECK INDEXING VALIDITY");

                    console.log(errsxor.join(", ").toString())
                    if(errsxor.length <= 0){
                        connx.query(`INSERT INTO \`music\`(\`id\`, \`audioName\`, \`gameName\`, \`audioBlob\`, \`audioContentType\`, \`imgBlob\`, \`imgContentType\`, \`uploaderId\`, \`description\`) VALUES ("${crypto.createHash("md5").update(requ.body.audioName+" - "+requ.body.gameName).digest("hex")}",${connx.escape(requ.body.audioName)},${connx.escape(requ.body.gameName)},${connx.escape(datos.AUDIOBlob)},"${requ.files["audioFile"][0].mimetype}",${connx.escape(datos.IMGBolbber)},"${datos.IMGMime}","${requ.body.UploaderId}",${connx.escape(requ.body["descripte"])})`, async (errx, resul, fiel) => {
                            if (errx) { resp.send(errx); throw errx; }
                            sysOk.unlinkSync(sysPath.join(__dirname, requ.files["audioFile"][0].path));
                            if(requ.files["imageFile"]){
                                sysOk.unlinkSync(sysPath.join(__dirname, requ.files["imageFile"][0].path));
                            }
                            resp.redirect("/admin/music")
                            console.log(errsxor.join(", "));
                            console.log(resul);
                        });
                    }else{
                        sysOk.unlinkSync(sysPath.join(__dirname, requ.files["audioFile"][0].path));
                        if(requ.files["imageFile"]){
                            sysOk.unlinkSync(sysPath.join(__dirname, requ.files["imageFile"][0].path));
                        }
                        resp.redirect(`/admin/music/upload?err=${JSON.stringify(errsxor)}`);
                        console.log("ERROR!");
                        //resp.send("ERROR!");
                    }
                });
            });
        };



        //if(requ.files["imageFile"].length == 0){
        if(!requ.files["imageFile"]){
            console.log("start SELECT IMGS");
            connx.query(`SELECT * FROM \`indexes\` WHERE \`gameName\` = "${requ.body.gameName}"`, async (errx, resul, fiel) => {
                if (errx) { resp.send(errx); throw errx; }
                console.log(resul);
                if(resul.length > 1 || resul.length == 0){
                    errsxor.push("Index Not Found");
                }else{
                    datos.IMGBolbber = buffer.from(resul[0].defaultImgBlob);
                    datos.IMGMime = resul[0].defaultImgContentType;
                }
                console.log("UPLOAD: PROCCESSED _1 IMG SEL");
                this.ContinueREEE();
            });
    
        }else{
            datos.IMGBolbber = sysOk.readFileSync(sysPath.join(__dirname, requ.files["imageFile"][0].path));
            datos.IMGMime = requ.files["imageFile"][0].mimetype;
            this.ContinueREEE();
        }
    } catch (errosso) {
        console.log(errosso)
        sysOk.unlinkSync(sysPath.join(__dirname, requ.files["audioFile"][0].path));
        if(requ.files["imageFile"].length == 1 || requ.files["imageFile"].length > 0){
            sysOk.unlinkSync(sysPath.join(__dirname, requ.files["imageFile"][0].path));
        }
        resp.send(errosso.toString());
        //throw errosso;
    }


});


app.get("/usr/settings/lrl/:tbl", (rq, rp) => {
    if(Boolean(rq.params.tbl) == false){
        rp.cookie("LRL", "true", {maxAge:(Date.now() + (100 * 365 * 24 * 60 * 60)),});
    }else{
        rp.cookie("LRL", "false", {maxAge:(Date.now() + (100 * 365 * 24 * 60 * 60)),});
    }

    rp.redirect("back");
});
//#endregion Services



app.get("/music", (requ, resp) => {
    if(requ.query.err){

    }

    var connx = mysql.createConnection({
        host: dbconfig.host,
        user: dbconfig.user,
        password: dbconfig.password,
        database: dbconfig.dbname
    });
    connx.query(`SELECT * FROM \`music\` ORDER BY \`uploadedTimestamp\` DESC`, async (errx, resul, fiel) => {

        if (errx) { resp.send(errx); throw errx; }
        console.log(Boolean(requ.cookies["LRL"]))
        resp.render("public/music/index.ejs", {
            lessResourceLoad: Boolean(requ.cookies["LRL"]),
            recordArrays: resul,
        })
    });
});

app.get("/music/:ld", (requ, resp) => {
    var reqID = requ.params.ld
    if(!reqID){
        resp.redirect("/music");
    }

    var connx = mysql.createConnection({
        host: dbconfig.host,
        user: dbconfig.user,
        password: dbconfig.password,
        database: dbconfig.dbname
    });
    connx.query(`SELECT * FROM \`music\` WHERE \`id\` = "${reqID}"`, async (errx, resul, fiel) => {
        if (errx) { resp.send(errx); throw errx; }
        if (resul.length < 1) {
            resp.redirect("/");
        }

        //resp.send(resul);
        console.log(resul);
        
        resp.render("public/music/player.ejs", {
            AudioName: resul[0].audioName, 
            GameName: resul[0].gameName,
            AudioID: reqID,
            descr: require("marked").marked(resul[0]["description"]),
        });
    });
});

//#region Admin Pages
//#region Admin Service Pages
app.post("/services/admin/auth/regis", MulterUploads.none(), async (requ, resp) => {
    if(requ.cookies["1pX1zRD6jo"]){
        resp.redirect("/admin");
        return;
    }
    


    console.log(requ.body);

    if(!requ.body["subMitt"]){
        resp.redirect("/admin/login");
        return;
    }
    var eMail = requ.body["eMail"];
    var userName = requ.body["userName"];
    var passWord = requ.body["passWord"];
    var repassWord = requ.body["repassWord"];
    var dateOfBirth = requ.body["dateOfBirth"];
    var errsx = [];
    if(passWord != repassWord){
        errsx.push("Password Not Match");
    }
    if(eMail.replaceAll(" ", "") == ""){
        errsx.push("Email Is Required");
    }
    if(userName.replaceAll(" ", "") == ""){
        errsx.push("Username Is Required");
    }
    
    
    
    var connx = mysql.createConnection({
        host: dbconfig.host,
        user: dbconfig.user,
        password: dbconfig.password,
        database: dbconfig.dbname
    });

    connx.query(`SELECT * FROM \`users\` WHERE \`Email\` = "${connx.escape(eMail)}"`, async (errx, resul, fiel) => {
        if(resul.length > 0){
            errsx.push("Email Is Used");
        }


        connx.query(`SELECT * FROM \`users\` WHERE \`Username\` = "${connx.escape(userName)}"`, async (errx, resul, fiel) => {
            console.log(resul);
            if(resul.length > 0){
                errsx.push("Username Is Used");if(errsx.length > 0){
                    resp.redirect(`/admin/usr/regis?errs=${encodeURI(JSON.stringify(errsx))}&token=${requ.query["token"]}`);
                    return;
                }
            }
            if(errsx.length > 0){
                resp.redirect(`/admin/usr/regis?errs=${encodeURI(JSON.stringify(errsx))}&token=${requ.query["token"]}`);
                return;
            }


            
            var crytp = require("crypto");
            var passSalt = crytp.randomBytes(200).toString("hex");
            var passwdx = require("./lib/cryptz.js").hasc.salts(passWord, passSalt);
            connx.query(`INSERT INTO \`users\`(\`UserId\`, \`Username\`, \`IsAdmin\`, \`passwd\`, \`salt\`, \`DateOfBirth\`, \`Email\`) VALUES (${connx.escape(crytp.createHash("md5").update(userName).digest("hex"))},${connx.escape(userName)},\"1\","${passwdx}",\"${passSalt}\","${(new Date(dateOfBirth)).toISOString()}",${connx.escape(eMail)})`, async (errx, resul, fiel) => {
                if(errx) throw errx;
                
                console.log(resul);
                console.log("Registered: "+userName);
                resp.redirect("/admin/usr/login");
            });
            
        });
    });
    
});
app.post("/services/admin/auth/login", MulterUploads.none(), async (requ, resp) => {
    if(requ.cookies["1pX1zRD6jo"]){
        resp.redirect("/admin");
        return;
    }
    console.log(requ.body);

    if(!requ.body["subMitt"]){
        resp.redirect("/admin/login");
        return;
    }



    var userName = requ.body["userName"];
    var passWord = requ.body["passWord"];

    var connx = mysql.createConnection({
        host: dbconfig.host,
        user: dbconfig.user,
        password: dbconfig.password,
        database: dbconfig.dbname
    });

    connx.query(`SELECT * FROM \`users\` WHERE \`Username\` = ${connx.escape(userName)}`, async (errx, resul, fiel) => {
        console.log(resul);

        var errsx = [];
        if(resul.length <= 0){
            errsx.push("User Not Found")
            resp.redirect("/admin/usr/login?errs="+JSON.stringify(errsx));
            return;
        }

        var passswordx = require("./lib/cryptz.js").hasc.salts(passWord, resul[0].salt);
        console.log(resul[0].passwd);
        console.log(passswordx);

        connx.query(`SELECT * FROM \`users\` WHERE \`Username\` = ${connx.escape(userName)} AND \`passwd\` = ${connx.escape(passswordx)}`, async (errx, resul, fiel) => {
            if(errx) throw errx;
            console.log(resul);
            if(resul.length != 1) {
                errsx.push("Incorrect Password");
                resp.redirect("/admin/usr/login?errs="+JSON.stringify(errsx));
                return;
            }

            var usrAuthTempData = {
                "Logins": Number(1),
                "2FA": Number(0),
                "usrID": String(resul[0].UserId),
                "IsAdmin": resul[0].IsAdmin,
                "sa": resul[0].IsAdminX,
                "usrName": resul[0].Username,
            }

            if(resul[0]["2faSec"].replaceAll(" ", "") == ""){
                usrAuthTempData["2FA"] = 1;
            }

            resp.cookie("1pX1zRD6jo", require("./lib/cryptz.js").baseDATOS.encode(JSON.stringify(usrAuthTempData)), {
                maxAge: (Date.now() + (100 * 365 * 24 * 60 * 60)),
            });
            if(usrAuthTempData["2FA"] == 0){
                resp.redirect("/admin/usr/totp");
                return;
            }
            resp.redirect("/admin");
        })
    });



});



app.post("/services/admin/music/edit", MulterUploads.single("imageFile"), async (requ, resp) => {

    console.log(requ.body);

    var connx = mysql.createConnection({
        host: dbconfig.host,
        user: dbconfig.user,
        password: dbconfig.password,
        database: dbconfig.dbname
    });
    var querysd = `UPDATE \`music\` SET \`audioName\`=${connx.escape(requ.body["audioName"])},\`gameName\`=${connx.escape(requ.body["gameName"])} WHERE \`uploaderId\` = "${requ.body["UploaderId"]}" AND \`id\` = "${requ.body["AudioId"]}"`;
    if(requ.file){
        querysd = `UPDATE \`music\` SET \`audioName\`=${connx.escape(requ.body["audioName"])},\`gameName\`=${connx.escape(requ.body["gameName"])},\`imgBlob\`=${connx.escape(sysOk.readFileSync(sysPath.join(__dirname, requ.file.path)))},\`imgContentType\`="${requ.file.mimetype}",\`description\`=${connx.escape(requ.body["descripte"])} WHERE \`uploaderId\` = "${requ.body["UploaderId"]}" AND \`id\` = "${requ.body["AudioId"]}"`
    }
    connx.query(querysd, async (errx, resul, fiel) => {
        if(errx) throw errx;
        console.log(resul);
        resp.redirect("/admin/music");
        if(requ.file){
            sysOk.unlinkSync(sysPath.join(__dirname, requ.file.path));
        }
    })
});


//#endregion Admin Service Pages
app.get("/admin/usr/regis", (requ, resp) => {
    console.log(requ.cookies);
    if(!requ.query["token"]){
        resp.redirect("/")
    }
    if(requ.cookies["1pX1zRD6jo"]){
        resp.redirect("/admin");
        return;
    }



    var connx = mysql.createConnection({
        host: dbconfig.host,
        user: dbconfig.user,
        password: dbconfig.password,
        database: dbconfig.dbname
    });
    var querysd = ``;
    


    resp.render("admin/user/register.ejs", {
       errs: requ.query["errs"]
    });
});
app.get("/admin/usr/login", (requ, resp) => {
    if(requ.cookies["1pX1zRD6jo"]){
        resp.redirect("/admin");
        return;
    }

    resp.render("admin/user/auth/login.ejs", {
       errs: requ.query["errs"]
    });
});
app.get("/admin/usr/logout", (requ, resp) => {
    resp.cookie("1pX1zRD6jo", "null", {
        maxAge: (Date.now() / (101 * 365 * 24 * 60 * 60)),
    });
    resp.redirect("/admin/usr/login");
});
app.get("/admin/usr/totp", (requ, resp) => {
    if(!requ.cookies["1pX1zRD6jo"]){
        resp.redirect("/admin/usr/login");
        return;
    }
    if(cookieProc.decJson(requ.cookies["1pX1zRD6jo"])["IsAdmin"] != 1){
        resp.redirect("/admin/usr/logout");
        return;
    }

    resp.render("admin/user/auth/totp.ejs", {
       errs: requ.query["errs"]
    });
});





app.get("/admin", (requ, resp) => {
    if(!requ.cookies["1pX1zRD6jo"]){
        resp.redirect("/admin/usr/login");
        return;
    }
    if(cookieProc.decJson(requ.cookies["1pX1zRD6jo"])["IsAdmin"] != 1){
        resp.redirect("/admin/usr/logout");
        return;
    }

    var saNaver = ""
    if(cookieProc.decJson(requ.cookies["1pX1zRD6jo"])["sa"] == 1){
        saNaver = sysOk.readFileSync(sysPath.join(__dirname, "views/admin/navtemp/saNavTmp.html"));
    }
    resp.render("admin/index.ejs", {
        "Naver": (sysOk.readFileSync(sysPath.join(__dirname, "views/admin/navtemp/NavTemp.html")) + saNaver),
    })
});

app.get("/admin/music", (requ, resp) => {
    if(!requ.cookies["1pX1zRD6jo"]){
        resp.redirect("/admin/usr/login");
        return;
    }
    if(cookieProc.decJson(requ.cookies["1pX1zRD6jo"])["IsAdmin"] != 1){
        resp.redirect("/admin/usr/logout");
        return;
    }
    var connx = mysql.createConnection({
        host: dbconfig.host,
        user: dbconfig.user,
        password: dbconfig.password,
        database: dbconfig.dbname
    });
    console.log(cookieProc.decJson(requ.cookies["1pX1zRD6jo"])["usrID"]);


    connx.query(`SELECT * FROM \`music\` WHERE \`uploaderId\` = \"${cookieProc.decJson(requ.cookies["1pX1zRD6jo"])["usrID"]}\" ORDER BY \`uploadedTimestamp\` DESC`, async (errx, resul, fiel) => {
        console.log(resul); 
        var saNaver = ""
        if(cookieProc.decJson(requ.cookies["1pX1zRD6jo"])["sa"] == 1){
            saNaver = sysOk.readFileSync(sysPath.join(__dirname, "views/admin/navtemp/saNavTmp.html"));
        }
        resp.render("admin/music/index.ejs", {
            "Naver": (sysOk.readFileSync(sysPath.join(__dirname, "views/admin/navtemp/NavTemp.html")) + saNaver),
            audioData: resul,
            errs: requ.query.err
        });
    });
});

app.get("/admin/music/upload", (requ, resp) => {
    if(!requ.cookies["1pX1zRD6jo"]){
        resp.redirect("/admin");
        return;
    }if(cookieProc.decJson(requ.cookies["1pX1zRD6jo"])["IsAdmin"] != 1){
        resp.redirect("/admin/usr/logout");
        return;
    }
    var connx = mysql.createConnection({
        host: dbconfig.host,
        user: dbconfig.user,
        password: dbconfig.password,
        database: dbconfig.dbname
    });

    connx.query(`SELECT * FROM \`indexes\` WHERE \`IndexingId\` = "${cookieProc.decJson(requ.cookies["1pX1zRD6jo"])["usrID"]}" ORDER BY \`IndexingDate\` ASC`, async (errx, resul, fiel) => {
        if(errx) throw errx;
        console.log(resul[0]["gameName"]);

        var saNaver = ""
        if(cookieProc.decJson(requ.cookies["1pX1zRD6jo"])["sa"] == 1){
            saNaver = sysOk.readFileSync(sysPath.join(__dirname, "views/admin/navtemp/saNavTmp.html"));
        }
        resp.render("admin/music/upload.ejs", {
            "Naver": (sysOk.readFileSync(sysPath.join(__dirname, "views/admin/navtemp/NavTemp.html")) + saNaver),
            usrID: cookieProc.decJson(requ.cookies["1pX1zRD6jo"])["usrID"],
            indexesData: resul,
            errs: requ.query["err"]
        });
    })
});
app.get("/admin/music/edit/:ld", (requ, resp) => {
    if(!requ.cookies["1pX1zRD6jo"]){
        resp.redirect("/admin");
        return;
    }if(cookieProc.decJson(requ.cookies["1pX1zRD6jo"])["IsAdmin"] != 1){
        resp.redirect("/admin/usr/logout");
        return;
    }
    if(!requ.params.ld){
        resp.redirect("/admin/music");
    }
    var connx = mysql.createConnection({
        host: dbconfig.host,
        user: dbconfig.user,
        password: dbconfig.password,
        database: dbconfig.dbname
    });

    connx.query(`SELECT * FROM \`music\` WHERE \`id\` = "${requ.params.ld}"`, async (errx, resuleste, fiel) => {
        var dataos = resuleste;
        if(errx) throw errx;
        if(dataos.length == 0) resp.redirect("/admin/music?err=Music Uploader ID Not Match!")
        console.log(dataos[0]["gameName"]);

        
        connx.query(`SELECT * FROM \`indexes\` WHERE \`IndexingId\` = "${cookieProc.decJson(requ.cookies["1pX1zRD6jo"])["usrID"]}" ORDER BY \`IndexingDate\` ASC`, async (errx, resul, fiel) => {
            if(errx) throw errx;
            console.log(resul[0]["gameName"]);
    
            var saNaver = ""
            if(cookieProc.decJson(requ.cookies["1pX1zRD6jo"])["sa"] == 1){
                saNaver = sysOk.readFileSync(sysPath.join(__dirname, "views/admin/navtemp/saNavTmp.html"));
            }
            resp.render("admin/music/edit.ejs", {
                "Naver": sysOk.readFileSync(sysPath.join(__dirname, "views/admin/navtemp/NavTemp.html")) + saNaver,
                usrID: cookieProc.decJson(requ.cookies["1pX1zRD6jo"])["usrID"],
                musicInfoh: dataos,
                indexesData: resul,
                errs: requ.query["err"]
            });
        });
    });
});
app.get("/services/admin/music/del/:ld", (requ, resp) => {
    if(!requ.cookies["1pX1zRD6jo"]){
        resp.redirect("/admin");
        return;
    }if(cookieProc.decJson(requ.cookies["1pX1zRD6jo"])["IsAdmin"] != 1){
        resp.redirect("/admin/usr/logout");
        return;
    }
    if(!requ.params.ld){
        resp.redirect("/admin/music");
    }
    var connx = mysql.createConnection({
        host: dbconfig.host,
        user: dbconfig.user,
        password: dbconfig.password,
        database: dbconfig.dbname
    });
    connx.query(`DELETE FROM \`music\` WHERE \`id\` = "${requ.params.ld}" AND \`uploaderId\` = "${cookieProc.decJson(requ.cookies["1pX1zRD6jo"])["usrID"]}"`, async (errx, resuleste, fiel) => {
        if(errx) throw errx;
        resp.redirect("/admin/music")
    });
});
app.get("/admin/music/del/:ld", (requ, resp) => {
    if(!requ.cookies["1pX1zRD6jo"]){
        resp.redirect("/admin");
        return;
    }if(cookieProc.decJson(requ.cookies["1pX1zRD6jo"])["IsAdmin"] != 1){
        resp.redirect("/admin/usr/logout");
        return;
    }
    if(!requ.params.ld){
        resp.redirect("/admin/music");
    }
    var connx = mysql.createConnection({
        host: dbconfig.host,
        user: dbconfig.user,
        password: dbconfig.password,
        database: dbconfig.dbname
    });
    connx.query(`SELECT * FROM \`music\` WHERE \`id\` = "${requ.params.ld}"`, async (errx, resuleste, fiel) => {
        if(errx) throw errx;
        if(resuleste.length == 0) {resp.redirect("/admin/music"); return;}

        var saNaver = ""
        if(cookieProc.decJson(requ.cookies["1pX1zRD6jo"])["sa"] == 1){
            saNaver = sysOk.readFileSync(sysPath.join(__dirname, "views/admin/navtemp/saNavTmp.html"));
        }
        resp.render("admin/music/del.ejs", {
            "Naver": sysOk.readFileSync(sysPath.join(__dirname, "views/admin/navtemp/NavTemp.html")),
            usrID: cookieProc.decJson(requ.cookies["1pX1zRD6jo"])["usrID"],
            musicIdeh: requ.params.ld,
            indexesData: resuleste,
        });
    });
});
//#endregion Admin Pages

//#region SuperAdmin Pages
//#region SuperAdmin Service
const ws = require("ws");
const pty = require("node-pty");
const os = require("os");
var patfomShell = os.platform() === "win32" ? "powershell.exe" : "bash";
var rootPath = os.platform() === "win32" ? "C:/" : "/";

var terminal_wsserver = new ws.Server({
    path: "/services/admin/sa/ws/terminal", 
    port: servconf.wsPortTerminal,
    host: servconf.servURL,
});
terminal_wsserver.addListener("connection", (cl, re) => {
    var bc = (d) => {terminal_wsserver.clients.forEach(e => e.send(d))}
    cl.send("Connected! Connecting To Terminal Process...");
    var termProc = pty.spawn(patfomShell, [], {
        name: 'xterm-color',
        env: process.env,
        cwd: rootPath,
    });
    

    cl.addEventListener("message", (ev) => {
        termProc.write(JSON.parse(ev.data)["messagesData"]+"\n\r");
        bc(JSON.parse(ev.data)["messagesData"]);
    });
    termProc.on("data", (d) => {
        bc(d);
    });
});



var admin_gChat = new ws.Server({
    path: "/services/admin/ws/gChat",
    port: servconf.wsPortGChat,
    host: servconf.servURL,
});
admin_gChat.addListener("connection", (cl, re) => {
    
    cl.send("Connected, Restoring Messaging Session...\n\r");
    var json2r = JSON.parse(sysOk.readFileSync(sysPath.join(__dirname, "Messaging Logs", "admin_gchats.json")));
    var pms = []
    for (let x = 0; x < json2r.length; x++) {
        var sx = `${json2r[x].usrName}> ${json2r[x].messagesData}`
        pms.push(sx);
    }

    cl.send("???TERM Write "+pms.join("\n\r")+"\n\r");
    this.boardCast_aGchat = (data) => {
        admin_gChat.clients.forEach(cl => cl.send(data));
    }
    cl.addEventListener("message", (ev) => {
        var parseros = JSON.parse(ev.data);
        var dataos = {
            userid: parseros.usrId,
            usrName: parseros.usrName,
            messagesData: parseros.messagesData,
        }
        var json2push = JSON.parse(sysOk.readFileSync(sysPath.join(__dirname, "Messaging Logs", "admin_gchats.json")));
        json2push.push(dataos);
        var data2jsn = JSON.stringify(json2push);
        sysOk.writeFileSync(sysPath.join(__dirname, "Messaging Logs", "admin_gchats.json"), data2jsn);
        var data2send = `${parseros.usrName}> ${parseros.messagesData}\n\r`;
        console.log(data2send);
        this.boardCast_aGchat(data2send);
    });
});



//#endregion SuperAdmin Service
app.get("/admin/sa/terminal", (requ, resp) => {

    var saNaver = ""
    if(cookieProc.decJson(requ.cookies["1pX1zRD6jo"])["sa"] == 1){
        saNaver = sysOk.readFileSync(sysPath.join(__dirname, "views/admin/navtemp/saNavTmp.html"));
    }
    resp.render("admin/sa/terminal.ejs", {
        "Naver": (sysOk.readFileSync(sysPath.join(__dirname, "views/admin/navtemp/NavTemp.html")) + saNaver),
        servurl: servconf.servURL,
        wsport: servconf.wsPortTerminal,
        uname: cookieProc.decJson(requ.cookies["1pX1zRD6jo"])["usrName"],
        uid: cookieProc.decJson(requ.cookies["1pX1zRD6jo"])["usrID"],
    });
});

app.get("/admin/gchat", (requ, resp) => {

    var saNaver = ""
    if(cookieProc.decJson(requ.cookies["1pX1zRD6jo"])["sa"] == 1){
        saNaver = sysOk.readFileSync(sysPath.join(__dirname, "views/admin/navtemp/saNavTmp.html"));
    }
    resp.render("admin/gChat.ejs", {
        "Naver": (sysOk.readFileSync(sysPath.join(__dirname, "views/admin/navtemp/NavTemp.html")) + saNaver),
        servurl: servconf.servURL,
        wsport: servconf.wsPortGChat,
        uname: cookieProc.decJson(requ.cookies["1pX1zRD6jo"])["usrName"],
        uid: cookieProc.decJson(requ.cookies["1pX1zRD6jo"])["usrID"],
    });
});

//#endregion SuperAdmin Pages



//#endregion router


 









app.use((requ, resp, next) => {
    resp.status(404);

    /*if (requ.accepts("json")) {
      resp.json({ error: "Not found" });
      return;
    }*/
    resp.sendFile(sysPath.join(__dirname, "views/errors/404.html"));
});/*
app.use((requ, resp, next) => {
    resp.status(500);

    if (requ.accepts("json")) {
      resp.json({ error: "Not found" });
      return;
    }
    resp.sendFile(sysPath.join(__dirname, "views/errors/500.html"));
});*/

var HTTPSopt = {
    cert: sysOk.readFileSync(sysPath.join(__dirname, "Cert/cert.crt")),
    key: sysOk.readFileSync(sysPath.join(__dirname, "Cert/key.pem")),

}
console.clear();
http.createServer(app).listen(3864, () => {console.log("Listening on: "+3864);});
//https.createServer(HTTPSopt, app).listen(3864, () => {console.log("Listening on: "+3864);});
