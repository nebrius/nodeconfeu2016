'use strict';

const uwp = require('uwp');
const dotstar = require('dotstar');

uwp.projectNamespace('Windows');

function init(stripLength, cb) {
    const spiDeviceSelector = Windows.Devices.Spi.SpiDevice.getDeviceSelector();
    Windows.Devices.Enumeration.DeviceInformation.findAllAsync(spiDeviceSelector, null).then((devices) => {
        const dotStarSettings = new Windows.Devices.Spi.SpiConnectionSettings(0);
        dotStarSettings.clockFrequency = 8000000;
        return Windows.Devices.Spi.SpiDevice.fromIdAsync(devices[0].id, dotStarSettings);
    }).then((spiDevice) => {
        cb(new dotstar.Dotstar({
            write(buffer, cb) {
                try {
                    spiDevice.write(buffer);
                } catch (e) {
                    cb(e);
                    return;
                }
                cb();
            }
        }, {
            length: stripLength
        }));
    });
}

init(8, (strip) => {
    strip.set(0, 255, 0, 0, 0.2);
    strip.set(1, 0, 255, 0, 0.2);
    strip.set(2, 0, 0, 255, 0.2);
    strip.set(3, 255, 255, 0, 0.2);
    strip.set(4, 255, 0, 255, 0.2);
    strip.set(5, 0, 255, 255, 0.2);
    strip.set(6, 255, 255, 255, 0.2);
    strip.set(7, 255, 0, 0, 0.2);
    strip.sync();
});
