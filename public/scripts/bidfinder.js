;(function () {
  class BidMatcher {
    constructor() {
      this.regexPattern = /[1-9]\d*\s+bids?/g
      this.matches = []
      this.currentMatchIndex = -1
      this.autoScrollInterval = null
      this.collectMatches()
      this.createInfoBox()
      this.scrollToNextMatch()
      document.addEventListener('keydown', this.handleKeyPress.bind(this))
      console.log('bidfinder.js loaded')
    }
    collectMatches() {
      const e = document.querySelectorAll('.s-item__bids.s-item__bidCount, .str-item-card__property-bidCount')
      e.forEach((t) => {
        const r = t.innerText || t.textContent
        if (r.match(this.regexPattern)) this.matches.push(t)
      })
    }
    scrollToNextMatch() {
      if (!this.matches.length) return
      this.currentMatchIndex = (this.currentMatchIndex + 1) % this.matches.length
      this.highlightElement(this.matches[this.currentMatchIndex])
      this.matches[this.currentMatchIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
      this.updateInfoBox()
    }
    scrollToPreviousMatch() {
      if (!this.matches.length) return
      this.currentMatchIndex = (this.currentMatchIndex - 1 + this.matches.length) % this.matches.length
      this.highlightElement(this.matches[this.currentMatchIndex])
      this.matches[this.currentMatchIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
      this.updateInfoBox()
    }
    updateInfoBox() {
      if (this.infoBox) this.currentMatchBox.textContent = `${this.currentMatchIndex + 1}/${this.matches.length}`
    }
    highlightElement(e) {
      const t = document.querySelector('.highlighted')
      t && ((t.style.border = ''), t.classList.remove('highlighted'))
      e.style.border = '2px solid red'
      e.classList.add('highlighted')
    }
    createInfoBox() {
      const e =
        '<div id="infoBox" style="position: fixed; bottom:0.5rem; right:0.5rem; padding:1rem; border-radius:8px; background-color:white; border:1px solid gray;"><span id="currentMatchBox">' +
        (this.currentMatchIndex + 1) +
        '/' +
        this.matches.length +
        '</span> Matches<br><label for="autoScrollToggle">Auto Scroll</label><input type="checkbox" id="autoScrollToggle"><input type="number" id="autoScrollInterval" value="5" placeholder="Interval" style="width:50px;"></div>'
      document.body.insertAdjacentHTML('beforeend', e)
      this.currentMatchBox = document.getElementById('currentMatchBox')
      this.infoBox = document.getElementById('infoBox')
      this.autoScrollToggle = document.getElementById('autoScrollToggle')
      this.autoScrollIntervalInput = document.getElementById('autoScrollInterval')
      this.autoScrollToggle.addEventListener('change', () => {
        this.autoScrollToggle.checked ? this.startAutoScroll() : this.stopAutoScroll()
      })
    }
    startAutoScroll() {
      if (this.autoScrollInterval) return
      const e = 1e3 * parseInt(this.autoScrollIntervalInput.value)
      this.autoScrollInterval = setInterval(() => {
        this.scrollToNextMatch()
      }, e)
    }
    stopAutoScroll() {
      clearInterval(this.autoScrollInterval)
      this.autoScrollInterval = null
    }
    handleKeyPress(e) {
      if (e.key === 'n' && !e.shiftKey) this.scrollToNextMatch()
      else if (e.key === 'N' && e.shiftKey) this.scrollToPreviousMatch()
    }
  }
  new BidMatcher()
})()
