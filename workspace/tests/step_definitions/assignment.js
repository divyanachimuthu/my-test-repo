var fs = require('fs');

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var xhttp = new XMLHttpRequest();

var url ='https://jsonplaceholder.typicode.com/posts/1';

var url1 =' https://jsonplaceholder.typicode.com/posts';







var assignment = function () {



    this.Given(/^I launch the url (.*)$/, function (brand) {

        var launchingUrl = this.config.serverUrls[brand];

        console.log("launchingUrl========================" + launchingUrl);

        brandLaunching = brand;

        this.client.url(launchingUrl).then(function (text) {

            if (browser.alertText()) {

                browser.alertAccept();

            } else {

                browser.pause(100);

            }

            this.client.windowHandleMaximize();

        });



        return this.client.pause(5000);

    });



    this.Then(/^I validate the page title (.*)$/, function (title) {

        console.log("The page title is expected to be " + title);

        return this.client.pause(1000).getTitle().then(function (actual) {

            if (actual == title) {

                console.log("The page title is " + actual + " as expected");



            }

            else {

                console.log("The page title is " + actual + " not as expected");

            }

        });

    });



    this.Then(/^I click on "([^"]*)"$/, function (dataSelector) {

        // console.log("In Click step    "+dataSelector);

        selector = this.getSelector(dataSelector);

        return this.client

            .pause(3000)

            .click(selector)



    });



    this.Then(/^I validate the error message on "([^"]*)"$/, function (dataselector) {

        selector = this.getSelector(dataselector);

        return this.client

            .waitForElemReady(selector, this.TIMEOUT_CONST)

            .isExisting(selector)

            .getText(selector)

            .then(function (readValue) {

                // var str= readValue.slice(0,readValue.indexOf(" "));

                // console.log(str);

                // if (str == err) {

                console.log("The error message is " + readValue);

            });

        // else {

        //     console.log(str);

        // }

    });



    this.Given(/^I close the browser$/, function () {

        this.client.close();

        console.log("Browser closed")

    });



    this.Given(/^I read and write my XML file (.*)$/, function (name) {

        fs.readFile(name, 'utf8', function (err, data) {

            if (err) {

                console.log(err);

            }

            var final = JSON.stringify(data);

            console.log(final);

            final1 = final.replace('wipro', 'Wipro Ltd');

            console.log(JSON.parse(final1));

            fs.writeFile('newxml.xml', final1, function (err) {

                if (err) {

                    console.log(err);

                }

                console.log("Written file successfully");



            });

        });

    });





    this.Given(/^I read and write my JSON file (.*)$/, function (filename) {

        fs.readFile(filename, 'utf8', function (err, data) {

            if (err) {

                console.log(err);

            }

            // var final = JSON.stringify(data);

            console.log(data);

            var result = data.replace('sds', 'ads');

            fs.writeFile('myNewFile.json', result, function (err) {

                if (err) {

                    console.log(err);

                }

                console.log("Written file successfully");



            });

        });

    });



    this.Given(/^I make a GET request$/, function () {

        xhttp.onreadystatechange = function (res) {

            console.log(res);

            console.log(this.status);

            if (this.readyState == 4 && this.status == 200) {

                console.log(this.responseText);

            }

        };

        xhttp.open("GET", url, true);

        xhttp.send();

        var inp = JSON.parse(xhttp.responseText);

        console.log(inp);

        var val = inp;

        console.log(val.userId);



    });





    this.Given(/^I make a POST request$/, function (callback) {

        var values = 'title=foo&body=bar&userId=1';

        xhttp.open('POST', url1,true);

        xhttp.setRequestHeader('Content-type', 'application/json; charset=UTF-8');

        xhttp.onreadystatechange = function() {

            console.log(this.readyState);

            console.log(this.status);

            if(xhttp.readyState == 4 && xhttp.status == 200) {

                console.log(xhttp.responseText);

            }

        }

        http.send(values);

    });



    this.Given(/^I make a SOAP call$/, function () {

        var soap = function soapCall() {

            xhttp.open('POST', 'https://www.example.org', true);

            var source = "<?xml version=\"1.0\"?>\n" +

                "<soap:Envelope\n" +

                "xmlns:soap=\"https://clicktime.symantec.com/a/1/z01rQVw1k7z6AZ62MUM5bLLY-WV5XKOveu12FXsll20=?d=lLUKmmBmoH0_8EVSC-0X5xjq0u1ZDr5pzcHkOrP7WgXFv-wZIeNqSHBHFLLZP2FbldhFTgLz4gjdXRVqajl-f3ZMDmkGYZaRGjrm4Qjd-TUgQhc2kF5jOARXsxLWKgYMG3OFEqHYnCLh-fgV_H5NvWPAvzesfo_dwy3M1-NPddC9bpVGLEfGOn5AzQnR986WlCWeLBV1W6M_JJ0M7LijO_zKjVsvdKTSvZtPJxUaM2q6veQ0IzSve_QLR_OPOclLZdlMBHv7B6-oA-EyqZeLmKrkIlhIK4obeO7lUBggDLWSHXGt89ClP_Uj0jqbzVShD0NiRHuiQQO9jUunjbHwZHlMY-yuZNJUchHUejEfIchboCSzW-jmxyUOVDfVZiqUpqkt0G0wVqBncgVf2Y3SO1jzMbpC9RzoNcE9wOPvNbLx4EELUi7IIVU%3D&u=http%3A%2F%2Fwww.w3.org%2F2003%2F05%2Fsoap-envelope%2F%2522\n" +

                "soap:encodingStyle=\"https://clicktime.symantec.com/a/1/kEZdM2pwneKhTJrMtcgt_DbtC56XeKo9h4UU6dfolYM=?d=lLUKmmBmoH0_8EVSC-0X5xjq0u1ZDr5pzcHkOrP7WgXFv-wZIeNqSHBHFLLZP2FbldhFTgLz4gjdXRVqajl-f3ZMDmkGYZaRGjrm4Qjd-TUgQhc2kF5jOARXsxLWKgYMG3OFEqHYnCLh-fgV_H5NvWPAvzesfo_dwy3M1-NPddC9bpVGLEfGOn5AzQnR986WlCWeLBV1W6M_JJ0M7LijO_zKjVsvdKTSvZtPJxUaM2q6veQ0IzSve_QLR_OPOclLZdlMBHv7B6-oA-EyqZeLmKrkIlhIK4obeO7lUBggDLWSHXGt89ClP_Uj0jqbzVShD0NiRHuiQQO9jUunjbHwZHlMY-yuZNJUchHUejEfIchboCSzW-jmxyUOVDfVZiqUpqkt0G0wVqBncgVf2Y3SO1jzMbpC9RzoNcE9wOPvNbLx4EELUi7IIVU%3D&u=http%3A%2F%2Fwww.w3.org%2F2003%2F05%2Fsoap-encoding%2522>\n" +

                "\n" +

                "<soap:Body xmlns:m=\"https://clicktime.symantec.com/a/1/XrVPX629IIGVuLL1AxXjHUI1lGng2ldt_acEQtXam4U=?d=lLUKmmBmoH0_8EVSC-0X5xjq0u1ZDr5pzcHkOrP7WgXFv-wZIeNqSHBHFLLZP2FbldhFTgLz4gjdXRVqajl-f3ZMDmkGYZaRGjrm4Qjd-TUgQhc2kF5jOARXsxLWKgYMG3OFEqHYnCLh-fgV_H5NvWPAvzesfo_dwy3M1-NPddC9bpVGLEfGOn5AzQnR986WlCWeLBV1W6M_JJ0M7LijO_zKjVsvdKTSvZtPJxUaM2q6veQ0IzSve_QLR_OPOclLZdlMBHv7B6-oA-EyqZeLmKrkIlhIK4obeO7lUBggDLWSHXGt89ClP_Uj0jqbzVShD0NiRHuiQQO9jUunjbHwZHlMY-yuZNJUchHUejEfIchboCSzW-jmxyUOVDfVZiqUpqkt0G0wVqBncgVf2Y3SO1jzMbpC9RzoNcE9wOPvNbLx4EELUi7IIVU%3D&u=http%3A%2F%2Fwww.example.org%2Fstock%2522>\n" +

                "  <m:GetStockPrice>\n" +

                "    <m:StockName>IBM</m:StockName>\n" +

                "  </m:GetStockPrice>\n" +

                "</soap:Body>\n" +

                "</soap:Envelope>\n"



            xhttp.onreadystatechange = function () {

                console.log(readyState);

                console.log(status);

                if (xhttp.readyState == 4 && xhttp.status == 200) {

                    console.log(xhttp.responseText);

                }

            }

        };

        xhttp.setRequestHeader('Content-Type', 'application/soap+xml; charset=UTF-8');

        xhttp.setRequestHeader('Content-Length', 'nnn');

        xhttp.send(source);



    });

};

module.exports = assignment;



