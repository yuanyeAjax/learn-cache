window.onload = function () {
  class ReactDOM {
    static render (ele, container) {
      container.innerHTML = ele
    }
  }
  const render = (ele, container) => {
    container.innerHTML = ele
  }
  const root = document.getElementById('root')
  const music = document.getElementById('music')
  
  // root.onclick = () => music.play()
  music.play()

  const content = `
    <h1>测试页面</h1>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <audio src="brecon_airstrike.mp3" controls></audio>
  `

  // ReactDOM.render(content, root)
}