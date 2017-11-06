import html from 'choo/html'

export function homeView(state, events) {
  return html`
      <div class="ink-sepia banner">
          <div class="title">
            <img class="logo" src="{{pictureBasePath}}style/logo_PeterSharpAll.svg" alt="Peter Sharp's portfolio logo">

          </div>
          <select-box sb-options=",3D,illustration,web-design,animation" name="search" id="">
          </select-box>
      </div>

      <gallery>`
}
