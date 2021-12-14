const robeBtn = document.getElementById('robe-btn')
const patchesAmount = document.getElementById('patches-amount')
const robeUl = document.getElementById('random-robe-output')

robeBtn.addEventListener('click', () => {
  robeUl.innerHTML = ''
  robeUl.innerHTML = `
          <li>Dagger</li>
          <li>Dagger</li>
          <li>Bullseye Lantern (Lit and filled)</li>
          <li>Bullseye Lantern (Lit and filled)</li>
          <li>Steel Mirror</li>
          <li>Steel Mirror</li>
          <li>10-foot pole</li>
          <li>10-foot pole</li>
          <li>Sack</li>
          <li>Sack</li>
  `
  rollPatches()
})

function rollPatches() {
  // Roll 4d4
  let a = Math.floor(Math.random() * 4 + 1)
  let b = Math.floor(Math.random() * 4 + 1)
  let c = Math.floor(Math.random() * 4 + 1)
  let d = Math.floor(Math.random() * 4 + 1)

  // Number of patches rolled in this variable. Used later to produce patches
  let patchesRolled = a + b + c + d

  // Output 4d4 result to HTML
  patchesAmount.innerHTML = `<p>You rolled ${patchesRolled} extra patches</p>`

  for (let x = 0; x < patchesRolled; x++) {
    generatePatches()
  }
}

function generatePatches() {
  // Roll d100 to determine patch contents
  let randomPatch = Math.floor(Math.random() * 100 + 1)
  console.log('No. rolled = ' + randomPatch)

  // Determine contents based on value of randomPatch
  let patch = ''

  if (randomPatch === 0) {
    patch = 'This is an error. Equals 0'
    console.log(patch)
  } else if (randomPatch >= 1 && randomPatch <= 8) {
    patch = 'Bag of 100 gp'
    console.log(patch)
  } else if (randomPatch >= 9 && randomPatch <= 15) {
    patch = 'Silver coffer (1 foot long, 6 inches wide and deep) worth 500 gp'
    console.log(patch)
  } else if (randomPatch >= 16 && randomPatch <= 22) {
    patch = 'Iron door (up to 10 feet wide and 10 feet high, barred on one side of your choice), which you can place in an opening you can reach; it conforms to fit the opening, attaching and hinging itself'
    console.log(patch)
  } else if (randomPatch >= 23 && randomPatch <= 30) {
    patch = '10 gems worth 100 gp each'
    console.log(patch)
  } else if (randomPatch >= 31 && randomPatch <= 44) {
    patch = 'Wooden ladder (24 feet long)'
    console.log(patch)
  } else if (randomPatch >= 45 && randomPatch <= 51) {
    patch = 'A riding horse with saddle bags'
    console.log(patch)
  } else if (randomPatch >= 52 && randomPatch <= 59) {
    patch = 'Pit (a cube 10 feet on a side), which you can place on the ground within 10 feet of you'
    console.log(patch)
  } else if (randomPatch >= 60 && randomPatch <= 68) {
    patch = 'Potion of healing (4)'
    console.log(patch)
  } else if (randomPatch >= 69 && randomPatch <= 75) {
    patch = 'Rowboat (12 feet long)'
    console.log(patch)
  } else if (randomPatch >= 76 && randomPatch <= 83) {
    let r = Math.floor(Math.random() * spells.length)
    let spell = spells[r]
    patch = `Scroll of ${spell}`
    console.log(patch)
  } else if (randomPatch >= 84 && randomPatch <= 90) {
    patch = 'Mastiff (2)'
    console.log(patch)
  } else if (randomPatch >= 91 && randomPatch <= 96) {
    patch = 'Window (2 feet by 4 feet, up to 2 feet deep), which you can place on a vertical surface you can reach'
    console.log(patch)
  } else if (randomPatch >= 97 && randomPatch <= 100) {
    patch = 'Portable ram'
    console.log(patch)
  } else if (randomPatch > 100) {
    patch = 'This is an error. Over 100'
  }

  const li = document.createElement('li')

  li.appendChild(document.createTextNode(patch))
  robeUl.appendChild(li)
}

function generateScroll() {}
