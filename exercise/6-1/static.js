





        if (pathname.substr(pathname.length - 1) === "/") {
            pathname += "index.html"; //若無帶入檔名預設為index.html
        } else {
            var paths = pathname.split("/").pop();
            if (paths.indexOf(".") === -1) {
                response.writeHead(301, {
                    "Location": pathname + "/" + (url.parse(request.url).search || "")
                });
                response.end();
                return;
            }
        }
        pathname = (process.argv[2] || ".") + pathname; //若有傳入參數則使用參數的路徑
        pathname = decodeURI(pathname);
        try {
            if (fs.statSync(pathname).isFile()) {
                response.writeHead(200, {
                    "Content-Type": mime.lookup(pathname),
                    "Cache-Control": "max-age=600"
                });
                response.write(fs.readFileSync(pathname));
                response.end();
            } else {
                notFound();
            }
        } catch (e) {
            notFound();
        }
        function notFound() {
            response.writeHead(404);
            response.write("404 not found");
            response.end();
        }

