const robeBtn = document.getElementById('robe-btn')
const patchesAmount = document.getElementById('patches-amount')

robeBtn.addEventListener('click', () => {
  rollPatches()
  choosePatch()
})

function rollPatches() {
  let a = Math.floor(Math.random() * 4 + 1)
  let b = Math.floor(Math.random() * 4 + 1)
  let c = Math.floor(Math.random() * 4 + 1)
  let d = Math.floor(Math.random() * 4 + 1)
  let result = a + b + c + d
  patchesAmount.innerHTML = `<p>You rolled ${result} extra patches</p>`
}

function choosePatch() {
  let randomPatch = Math.floor(Math.random() * 15 + 1)
  // let randomPatch = Math.floor(Math.random() * 100 + 1)
  console.log('No. rolled = ' + randomPatch)

  let patch = ''
  if (randomPatch === 0) {
    patch = 'This is an error'
    console.log(patch)
  } else if (randomPatch >= 1 && randomPatch <= 8) {
    patch = 'Bag of 100 gp'
    console.log(patch)
  } else if (randomPatch >= 9 && randomPatch <= 15) {
    patch = 'Silver coffer (1 foot long, 6 inches wide and deep) worth 500 gp'
    console.log(patch)
  }
}
