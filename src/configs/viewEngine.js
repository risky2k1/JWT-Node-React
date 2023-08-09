import express from "express";

/**
 * 
 * @param {*} app -express app
 */
const configViewEngine = (app) => {
    app.use(express.static('./src/public')); //Thư mục chứa các assets

    app.set('view engine', 'ejs'); //công nghệ sử dụng để viết html
    app.set('views', './src/views'); //nơi lưu trữ file
}

export default configViewEngine;