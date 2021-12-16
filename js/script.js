const robeBtn = document.getElementById('robe-btn')
const robeUl = document.getElementById('random-robe-output')
const patchesAmount = document.getElementById('patches-amount')
const copyBtn = document.getElementById('copy-list')
const patchEl = document.querySelector('.patch')

// Generate robe button event listener
robeBtn.addEventListener('click', () => {
  copyBtn.classList.remove('hide')
  robeUl.innerHTML = ''
  robeUl.innerHTML = `
          <div class="patch">
            <p>Dagger</p>
          </div>

          <div class="patch">
            <p>Dagger</p>
          </div>

          <div class="patch">
            <p>Bullseye Lantern (Lit and filled)</p>
          </div>
           
          <div class="patch">
            <p>Bullseye Lantern (Lit and filled)</p>
          </div>
           
          <div class="patch">
            <p>Steel Mirror</p>
          </div>
           
          <div class="patch">
            <p>Steel Mirror</p>
          </div>
           
          <div class="patch">
            <p>10-foot pole</p>
          </div>
           
          <div class="patch">
            <p>10-foot pole</p>
          </div>
           
          <div class="patch">
            <p>Sack</p>
          </div>
           
          <div class="patch">
            <p>Sack</p>
          </div>
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

  // For loop to run generatePatches as many times as patchesRolled
  for (let x = 0; x < patchesRolled; x++) {
    generatePatches()
  }
}

// Roll d100 and choose a patch based on result
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
    patch = 'Silver coffer <br> <span class="smallText">(1 foot long, 6 inches wide and deep) worth 500 gp</span>'
    console.log(patch)
  } else if (randomPatch >= 16 && randomPatch <= 22) {
    patch = 'Iron door <br> <span class="smallText">(up to 10 feet wide and 10 feet high, barred on one side of your choice), which you can place in an opening you can reach; it conforms to fit the opening, attaching and hinging itself</span>'
    console.log(patch)
  } else if (randomPatch >= 23 && randomPatch <= 30) {
    patch = `10 gems worth 100 gp each`
    console.log(patch)
  } else if (randomPatch >= 31 && randomPatch <= 44) {
    patch = 'Wooden ladder (24 feet long)'
    console.log(patch)
  } else if (randomPatch >= 45 && randomPatch <= 51) {
    patch = 'A riding horse with saddle bags'
    console.log(patch)
  } else if (randomPatch >= 52 && randomPatch <= 59) {
    patch = 'Pit <br> <span class="smallText">(a cube 10 feet on a side), which you can place on the ground within 10 feet of you</span>'
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
    patch = 'Window <br> <span class="smallText">(2 feet by 4 feet, up to 2 feet deep), which you can place on a vertical surface you can reach</span>'
    console.log(patch)
  } else if (randomPatch >= 97 && randomPatch <= 100) {
    patch = 'Portable ram'
    console.log(patch)
  } else if (randomPatch > 100) {
    patch = 'This is an error. Over 100'
  }

  // Template for patch div
  const div = document.createElement('div')
  const patchHTML = `
          <div class="patch">
            <p>${patch}</p>
            <div class="tooltip">
              <button class="inline-btn re-roll"><i class="fa-lg fas fa-dice"></i></button>
              <span class="tooltiptext">Re-roll patch</span>
            </div>
            <div class="tooltip">
              <button class="inline-btn trash"><i class="fa-lg fas fa-trash-alt"></i></button>
              <span class="tooltiptext">Delete patch</span>
            </div>
          </div>
  `
  div.innerHTML = patchHTML
  robeUl.appendChild(div)
}

// Copy plain text content of robeUl to clipboard
copyBtn.addEventListener('click', () => {
  // Message to confirm copy, change back after an interval
  copyBtn.innerText = 'Copied to clipboard!'
  setTimeout(() => {
    copyBtn.innerHTML = `<i class="fas fa-copy"></i> Copy robe to clipboard`
  }, 1500)

  // Copy list to clipboard
  navigator.clipboard.writeText(robeUl.innerText)

  console.log('Copied to clipboard!')
})
