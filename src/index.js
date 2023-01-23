const express = require("express");
const multer = require("multer");
const ffmpeg = require("fluent-ffmpeg");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;

ffmpeg.setFfmpegPath(ffmpegPath);

const PORT = process.env.PORT || 5000;
const app = express();
const storage = multer.diskStorage({
    destination: (req, file, callback)=>{
        callback(null, "./tmp/");
    },
    filename: (req, file, callback)=>{
        callback(null, Date.now() + "-" + file.originalname);
    }
});

app.use(multer({ storage }).single("file"));

app.post("/convert", (req, res)=>{
    console.log(req.file)

    const file = req.file;
    const fileName = "-output.mp3";

    ffmpeg("tmp/" + file.filename)
        .toFormat("mp3")
        .on("end", ()=>{
            return res.download(__dirname + fileName, (error)=>{
                if(error) throw error;

                console.log("Conversão bem sucedida!");
            });
        })
        .on("error", (error)=>{
            console.log("Ocorreu esse erro: ", error);
        })
        .saveToFile(__dirname + fileName);
});

app.listen(PORT);