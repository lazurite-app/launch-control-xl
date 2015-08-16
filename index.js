import GenericMIDIController from 'generic-midi-controller'

export default function LaunchControlXL () {
  const controller = GenericMIDIController(inputs(), outputs())

  controller.reset = reset

  return controller

  function reset () {
    controller.send([176, 0, 0])
  }

  function inputs () {
    var buttons = []
    var faders = []
    var knobs = []

    for (var j = 0; j < 4; j++) {
      for (var i = 41; i <= 44; i++) {
        buttons.push(map(i + j * 16))
      }
    }

    for (var i = 77; i <= 84; i++) {
      faders.push(smooth(i))
    }

    for (var i = 13; i <= 20; i++) {
      knobs.push(smooth(i))
    }
    for (var i = 29; i <= 36; i++) {
      knobs.push(smooth(i))
    }
    for (var i = 49; i <= 56; i++) {
      knobs.push(smooth(i))
    }

    return {
      buttons,
      faders,
      knobs
    }

    function map (id) {
      return msg => {
        if (msg[1] !== id) return
        if (msg[0] !== 152 && msg[0] !== 136) return
        return msg[2]
      }
    }

    function smooth (id) {
      return msg => {
        if (msg[1] !== id) return
        if (msg[0] !== 184) return
        return msg[2]
      }
    }
  }

  function outputs () {
    var buttons = []
    var knobs = []

    for (var i = 41; i <= 92; i++) {
      buttons.push(btn(i))
    }

    for (var i = 0; i <= 23; i++) {
      knobs.push(knob(i))
    }

    return {
      buttons,
      knobs
    }

    function btn (id) {
      return (value, send) => send([152, id, value])
    }

    function knob (id) {
      return (value, send) => send([
        240, 0, 32, 41, 2, 17, 120, 8, id, value, 247
      ])
    }
  }
}
