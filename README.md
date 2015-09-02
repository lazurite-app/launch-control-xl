# launch-control-xl
![](http://img.shields.io/badge/stability-experimental-orange.svg?style=flat)
![](http://img.shields.io/npm/v/launch-control-xl.svg?style=flat)
![](http://img.shields.io/npm/dm/launch-control-xl.svg?style=flat)
![](http://img.shields.io/npm/l/launch-control-xl.svg?style=flat)

Web MIDI wrapper for [Novation Launch Control XL](http://global.novationmusic.com/launch/launch-control-xl).

## Usage

[![NPM](https://nodei.co/npm/launch-control-xl.png)](https://nodei.co/npm/launch-control-xl/)

Built on top of [generic-midi-controller](https://github.com/lazurite-app/generic-midi-controller), and as such shares a very similar API, with a few small differences:

* A `.reset()` method has been added to trigger a board reset.
* Inputs/outputs are configured for you to match the Launch Control XL's Factory Device Banks:
  * `input.buttons[0-15]`
  * `input.faders[0-7]`
  * `input.knobs[0-23]`
  * `output.buttons[0-15]` for controlling the bottom button LEDs.
  * `output.knobs[0-23]` for controlling the knob LEDs.

You may also pass in a custom `bank` number between 1 and 8 to hook into the
other factory device banks, utilising the full range of available inputs:

``` javascript
const LaunchControlXL = require('launch-control-xl')
const controller = new LaunchControlXL({ bank: 2 })
```

This defaults to Factory Device Bank 1.

See [demo.js](./demo.js) for example usage.

## License

MIT. See [LICENSE.md](http://github.com/lazurite-app/launch-control-xl/blob/master/LICENSE.md) for details.
