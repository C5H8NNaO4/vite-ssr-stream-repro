import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./App";
import { Response } from "express";

export function render(url: string, res: Response) {
  let didError = false;
  const stream = ReactDOMServer.renderToPipeableStream(<App url={url} />, {
    bootstrapModules: ["src/main.tsx"],
    onShellReady: () => {
      res.statusCode = didError ? 500 : 200;
      res.setHeader("Content-type", "text/html");
      //   res.write('<html><body><div></div></body></html>');
      //   res.end();
      stream.pipe(res);
      //   res.flush();
    },
    onAllReady() {
      //   res.end(`</div></body></html>`);
    },
    onError: (error) => {
      didError = true;
      console.log(error);
    },
  });
}
