import LaunchControlXL from './'

navigator.requestMIDIAccess({
  sysex: true
}).then(midi => {
  const controller = new LaunchControlXL()

  for (var input of midi.inputs.values()) {
    controller.setInput(input)
  }
  for (var output of midi.outputs.values()) {
    controller.setOutput(output)
  }

  controller.reset()
  controller.on('input', function (...data) {
    console.log('input', data)
  })
  controller.on('output', function (...data) {
    console.log('output', data)
  })

  setInterval(function () {
    controller.outputs.buttons[0] = controller.inputs.faders[0]
    controller.outputs.buttons[1] = controller.inputs.faders[1]
  }, 250)
})
