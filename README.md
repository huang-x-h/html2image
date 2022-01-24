# html2image

> Convert html to image(png/jpg) or pdf by puppeteer

## Install

    npm i -g html2image

## Usage

    html2image -a https://www.baidu.com

## Options

- `-a, --address [value]` url address
- `-f, --format [value]` output file format (pdf|png|jpeg|gif)
- `-o, --output [value]` output file path

## Help

    html2image -h

## TODO

If the url address contain **&**, you should use **encodeURIComponent** to encode the url address, then pass to the html2image command
