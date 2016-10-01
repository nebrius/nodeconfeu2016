# NodeConf EU 2016 IoT Workshop

## Getting Started

**Prerequisites:**

- Install [Node.js](https://nodejs.org/)
- Install [Visual Studio Code](https://code.visualstudio.com/)
- Install the [Windows IoT Core Extension](https://marketplace.visualstudio.com/items?itemName=ms-iot.windowsiot) for Visual Studio Code

**Setting Up the Project:**

Start by cloning the project and installing dependencies

```Bash
git clone https://github.com/nebrius/nodeconfeu2016.git
cd nodeconfeu2016
npm install
```

Then, open the project in Visual Studio Code (File->Open and select the `nodeconfeu2016` folder).

Finally, configure the device settings:

- Hit F1 and enter `iot: Initialize settings.json` (it will auto-complete) and hit `Enter`
- Enter the IP address that was provided with your Raspberry Piand hit `Enter`
- Leave the device name blank and hit `Enter`
- Enter the username `Administrator` and hit `Enter`
- Enter the password `raspberry` and hit `Enter`

**Connecting the Hardware:**

Coming Soon!

**Programming the Raspberry Pi:**

To run your program, hit F1, enter `iot: Run Remote Script`, and hit `Enter` and Visual Studio Code will upload your program to the Raspberry Pi and run it on the device automatically.

To gain insights about your device, point your browser to `http://<IP Address of Raspberry Pi>:8080 for admin`

## Builds

Coming Soon!

## License

Copyright (c) 2016 Bryan Hughes <bryan@nebri.us>

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
